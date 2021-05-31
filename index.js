// 'use strict';
require('dotenv').config()
require("./src/db/conn");
// require('newrelic');
const serverless = require('serverless-http');
const usersData = require("./src/models/usersData");
// require("./mail");
const { range } = require("balanced-match");
const { google } = require("googleapis");
const { ensureAuth, ensureGuest } = require('./middleware/auth');
var xls = require('excel');
var nodemailer = require('nodemailer');
const path = require("path");
const express = require("express");
const passport = require('passport');
const cookieSession = require('cookie-session')
require('./passport-setup');
const moment = require('moment');
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 3000
const siteTitle ="Need AP"
const axios = require('axios');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
var dist={}
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
let currentDate =date + "-" + month + "-" + year
let siteDate =year + "-" + month + "-" + date
let timeMeridian = date_ob.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
let formatedDate = date + "/" + month + "/" + year + "  " +timeMeridian
console.log(formatedDate);
var relative= moment().startOf().fromNow();  
var unixTimeStamp = + new Date()





function dynamicsort(property,order) {
    var sort_order = 1;
    if(order === "desc"){
        sort_order = -1;
    }
    return function (a, b){
        if(a[property] < b[property]){
                return -1 * sort_order;
        }else if(a[property] > b[property]){
                return 1 * sort_order;
        }else{
                return 0 * sort_order;
        }
    }
}



const staticPath = path.join(__dirname, "./public");
const templatePath = path.join(__dirname, "./templates/views");
app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'hbs');
app.set("views", templatePath);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cookieSession({
    name: 'NeedAP-session',
    keys: ['key1', 'key2'],
    maxAge: 168 * 60 * 60 * 1000
  }))
app.use(passport.initialize());
app.use(passport.session());
app.get('/failed', (req, res) => res.send('You Failed to log in!'))
app.get("/", ensureGuest, (req, res) =>{
    res.render("index",{
        siteName: siteTitle
    });
})
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
async(req, res) =>{
const mail = req.user.emails[0].value;
const userdata = await usersData.findOne({email:mail});
if(userdata != null && userdata.email == mail){
    res.redirect('/home');            
}
else{
    try{    
        const userAdd = new usersData({
            clientId:  req.user.id,
            fullName: req.user.displayName,
            email: req.user.emails[0].value,
            img: req.user.photos[0].value
        })
        const userAdded = await userAdd.save();
        res.redirect('/home');
        var mailOptions = {
            name: 'Need AP',
            from: 'NeedAP <need.andhrapradesh@gmail.com>',
            replyTo: 'No Reply <no-reply@needap.in>',
            to: req.user.emails[0].value,
            subject: `Hey ${req.user.displayName} thank you for registering on Need AP.🎉`,
            html: htmlemail 
           
         
         };
         var sendmail = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            auth: {
              user: 'need.andhrapradesh@gmail.com',
              pass: 'Needap@6100'
            }
          });
         sendmail.sendMail(mailOptions, function(error, info){
               if (error) {
                 console.log(error);
               } else {
                 console.log('Email sent: ' + info.response);
               }
         });
}catch(error){
    res.redirect("/");
    console.log(error);
 }
} 
});

axios.get('https://api.covid19india.org/state_district_wise.json')
  .then(function (response) {
    const ap = response.data["Andhra Pradesh"].districtData;
    casesFunc(ap)
    let totalConfirmed=0, totalRecovered=0, totalDeaths=0, totalActive=0;
    for (const property in ap) {
        if(property !== 'Foreign Evacuees' && property !== 'Other State'){
            totalConfirmed+=ap[property].confirmed;
            totalRecovered+=ap[property].recovered;
            totalDeaths+=ap[property].deceased;
            totalActive+=ap[property].active;
        }
    }
    app.get('/home', ensureAuth, (req, res) =>{
        res.render("home",{
            siteName: siteTitle,
            name:req.user.displayName,
            img:req.user.photos[0].value,
            email:req.user.emails[0].value,
            siteDate: siteDate,
            confirm: totalConfirmed.toLocaleString(),
            recovered: totalRecovered.toLocaleString(),
            active: totalActive.toLocaleString(),
            deaths: totalDeaths.toLocaleString(),
            AnantapurConfirmedCases: dist['Anantapur'].confirmed.toLocaleString(),
            AnantapurRecoveredCases: dist['Anantapur'].recovered.toLocaleString(),
            AnantapurDeceasedCases: dist['Anantapur'].deceased.toLocaleString(),
            AnantapurActiveCases: dist['Anantapur'].active.toLocaleString(),
            AnantapurTitle1: "Anantapur",
            AnantapurTitle2: "anantapur",
            ChittoorConfirmedCases: dist['Chittoor'].confirmed.toLocaleString(),
            ChittoorRecoveredCases: dist['Chittoor'].recovered.toLocaleString(),
            ChittoorDeceasedCases: dist['Chittoor'].deceased.toLocaleString(),
            ChittoorActiveCases: dist['Chittoor'].active.toLocaleString(),
            ChittoorTitle1: "Chittoor",
            ChittoorTitle2: "chittoor",
            EastGodavariConfirmedCases: dist['East Godavari'].confirmed.toLocaleString(),
            EastGodavariRecoveredCases: dist['East Godavari'].recovered.toLocaleString(),
            EastGodavariDeceasedCases: dist['East Godavari'].deceased.toLocaleString(),
            EastGodavariActiveCases: dist['East Godavari'].active.toLocaleString(),
            EastGodavariTitle1: "East Godavari",
            EastGodavariTitle2: "east godavari",
            GunturConfirmedCases: dist['Guntur'].confirmed.toLocaleString(),
            GunturRecoveredCases: dist['Guntur'].recovered.toLocaleString(),
            GunturDeceasedCases: dist['Guntur'].deceased.toLocaleString(),
            GunturActiveCases: dist['Guntur'].active.toLocaleString(),
            GunturTitle1: "Guntur",
            GunturTitle2: "guntur",
            KrishnaConfirmedCases: dist['Krishna'].confirmed.toLocaleString(),
            KrishnaRecoveredCases: dist['Krishna'].recovered.toLocaleString(),
            KrishnaDeceasedCases: dist['Krishna'].deceased.toLocaleString(),
            KrishnaActiveCases: dist['Krishna'].active.toLocaleString(),
            KrishnaTitle1: "Krishna",
            KrishnaTitle2: "krishna",
            KurnoolConfirmedCases: dist['Kurnool'].confirmed.toLocaleString(),
            KurnoolRecoveredCases: dist['Kurnool'].recovered.toLocaleString(),
            KurnoolDeceasedCases: dist['Kurnool'].deceased.toLocaleString(),
            KurnoolActiveCases: dist['Kurnool'].active.toLocaleString(),
            KurnoolTitle1: "Kurnool",
            KurnoolTitle2: "kurnool",
            PrakasamConfirmedCases: dist['Prakasam'].confirmed.toLocaleString(),
            PrakasamRecoveredCases: dist['Prakasam'].recovered.toLocaleString(),
            PrakasamDeceasedCases: dist['Prakasam'].deceased.toLocaleString(),
            PrakasamActiveCases: dist['Prakasam'].active.toLocaleString(),
            PrakasamTitle1: "Prakasam",
            PrakasamTitle2: "prakasam",
            NelloreConfirmedCases: dist['S.P.S. Nellore'].confirmed.toLocaleString(),
            NelloreRecoveredCases: dist['S.P.S. Nellore'].recovered.toLocaleString(),
            NelloreDeceasedCases: dist['S.P.S. Nellore'].deceased.toLocaleString(),
            NelloreActiveCases: dist['S.P.S. Nellore'].active.toLocaleString(),
            NelloreTitle1: "Nellore",
            NelloreTitle2: "nellore",
            SrikakulamConfirmedCases: dist['Srikakulam'].confirmed.toLocaleString(),
            SrikakulamRecoveredCases: dist['Srikakulam'].recovered.toLocaleString(),
            SrikakulamDeceasedCases: dist['Srikakulam'].deceased.toLocaleString(),
            SrikakulamActiveCases: dist['Srikakulam'].active.toLocaleString(),
            SrikakulamTitle1: "Srikakulam",
            SrikakulamTitle2: "srikakulam",
            VisakhapatnamConfirmedCases: dist['Visakhapatnam'].confirmed.toLocaleString(),
            VisakhapatnamRecoveredCases: dist['Visakhapatnam'].recovered.toLocaleString(),
            VisakhapatnamDeceasedCases: dist['Visakhapatnam'].deceased.toLocaleString(),
            VisakhapatnamActiveCases: dist['Visakhapatnam'].active.toLocaleString(),
            VisakhapatnamTitle1: "Visakhapatnam",
            VisakhapatnamTitle2: "visakhapatnam",
            VizianagaramConfirmedCases: dist['Vizianagaram'].confirmed.toLocaleString(),
            VizianagaramRecoveredCases: dist['Vizianagaram'].recovered.toLocaleString(),
            VizianagaramDeceasedCases: dist['Vizianagaram'].deceased.toLocaleString(),
            VizianagaramActiveCases: dist['Vizianagaram'].active.toLocaleString(),
            VizianagaramTitle1: "Vizianagaram",
            VizianagaramTitle2: "vizianagaram",
            WestGodavariConfirmedCases: dist['West Godavari'].confirmed.toLocaleString(),
            WestGodavariRecoveredCases: dist['West Godavari'].recovered.toLocaleString(),
            WestGodavariDeceasedCases: dist['West Godavari'].deceased.toLocaleString(),
            WestGodavariActiveCases: dist['West Godavari'].active.toLocaleString(),
            WestGodavariTitle1: "West Godavari",
            WestGodavariTitle2: "west godavari",
            KadapaConfirmedCases: dist['Y.S.R. Kadapa'].confirmed.toLocaleString(),
            KadapaRecoveredCases: dist['Y.S.R. Kadapa'].recovered.toLocaleString(),
            KadapaDeceasedCases: dist['Y.S.R. Kadapa'].deceased.toLocaleString(),
            KadapaActiveCases: dist['Y.S.R. Kadapa'].active.toLocaleString(),
            KadapaTitle1: "Kadapa",
            KadapaTitle2: "kadapa"
         })
    })   
  })
  .catch(function (error) {
    console.log(error);
  })


// console.log(dist)








  axios.get('https://covidaps.com/data/covidaps.com/bed_data.json')
  .then(function (response) {
    // console.log(response)
    separateBeds(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
 
    app.get("/beds", ensureAuth, (req, res) =>{
        res.render("beds",{
            siteDate: siteDate,
            siteName: siteTitle,
            AnantapurBedsData: districtBedsData.Anantapur,
            ChittoorBedsData: districtBedsData.Chittoor,
            EastgodavariBedsData: districtBedsData['East godavari'],
            GunturBedsData: districtBedsData.Guntur,
            KrishnaBedsData: districtBedsData.Krishna,
            KurnoolBedsData: districtBedsData.Kurnool,
            PrakasamBedsData: districtBedsData.Prakasam,
            NelloreBedsData: districtBedsData['Spsr nellore'],
            SrikakulamBedsData: districtBedsData.Srikakulam,
            VisakhapatanamBedsData: districtBedsData.Visakhapatanam,
            VizianagaramBedsData: districtBedsData.Vizianagaram,
            WestgodavariBedsData: districtBedsData['West godavari'],
            KadapaBedsData: districtBedsData['Y.s.r.'],
        });
    })
    app.get("/anantapurbeds", ensureAuth, (req, res) =>{
        res.render("district/anantapurbeds",{
            siteDate: siteDate,
            siteName: siteTitle,
            AnantapurBedsData: districtBedsData.Anantapur,
        });
    })
    app.get("/chittoorbeds", ensureAuth, (req, res) =>{
        res.render("district/chittoorbeds",{
            siteDate: siteDate,
            siteName: siteTitle,
            ChittoorBedsData: districtBedsData.Chittoor,
        });
    })
    app.get("/eastgodavaribeds", ensureAuth, (req, res) =>{
        res.render("district/eastgodavaribeds",{
            siteDate: siteDate,
            siteName: siteTitle,
            EastgodavariBedsData: districtBedsData['East godavari'],
        });
    })
    app.get("/gunturbeds", ensureAuth, (req, res) =>{
        res.render("district/gunturbeds",{
            siteDate: siteDate,
            siteName: siteTitle,
            GunturBedsData: districtBedsData.Guntur,
        });
    })
    app.get("/krishnabeds", ensureAuth, (req, res) =>{
        res.render("district/krishnabeds",{
            siteDate: siteDate,
            siteName: siteTitle,
            KrishnaBedsData: districtBedsData.Krishna,
        });
    })
    app.get("/kurnoolbeds", ensureAuth, (req, res) =>{
        res.render("district/kurnoolbeds",{
            siteName: siteTitle,
            KurnoolBedsData: districtBedsData.Kurnool,
        });
    })
    app.get("/prakasambeds", ensureAuth, (req, res) =>{
        res.render("district/prakasambeds",{
            siteName: siteTitle,
            PrakasamBedsData: districtBedsData.Prakasam,
        });
    })
    app.get("/nellorebeds", ensureAuth, (req, res) =>{
        res.render("district/nellorebeds",{
            siteName: siteTitle,
            NelloreBedsData: districtBedsData['Spsr nellore'],
        });
    })
    app.get("/srikakulambeds", ensureAuth, (req, res) =>{
        res.render("district/srikakulambeds",{
            siteName: siteTitle,
            SrikakulamBedsData: districtBedsData.Srikakulam,
        });
    })
    app.get("/vizagbeds", ensureAuth, (req, res) =>{
        res.render("district/vizagbeds",{
            siteName: siteTitle,
            VisakhapatanamBedsData: districtBedsData.Visakhapatanam,
        });
    }) 
    app.get("/vizianagarambeds", ensureAuth, (req, res) =>{
        res.render("district/vizianagarambeds",{
            siteDate: siteDate,
            siteName: siteTitle,
            VizianagaramBedsData: districtBedsData.Vizianagaram,
        });
    })
    app.get("/westgodavaribeds", ensureAuth, (req, res) =>{
        res.render("district/westgodavaribeds",{
            siteDate: siteDate,
            siteName: siteTitle,
            WestgodavariBedsData: districtBedsData['West godavari'],
        });
    })
    app.get("/kadapabeds", ensureAuth, (req, res) =>{
        res.render("district/kadapabeds",{
            siteDate: siteDate,
            siteName: siteTitle,
            KadapaBedsData: districtBedsData['Y.s.r.'],
        });
    })
    app.get("/graphs", ensureAuth, (req, res) =>{
        res.render("graphs",{
            siteDate: siteDate,
            siteName: siteTitle,
        });
    })
var districtBedsData ={}
function separateBeds(data){
    districtNames=['Anantapur','Chittoor','East godavari', 'Guntur', 'Krishna','Kurnool', 'Prakasam', 'Spsr nellore', 'Srikakulam','Visakhapatanam','Vizianagaram','West godavari', 'Y.s.r.']
    for (const dist of districtNames){
        // console.log(dist)
       var temp=[]
       for (const host of data){
        //    console.log(host);
           if (host.district==dist){
            temp.push(host)
           }
       }
       districtBedsData[dist]=temp
    }
    //    console.log(districtBedsData.Chittoor);
}


// https://covidtelangana.com/data/covidtelangana.com/plasma_data.json
axios.get('https://covidaps.com/data/covidaps.com/plasma_data.json')
.then(function (response) {
    plasma(response.data)
//   console.log(response.data[1].name)
//   separateBeds(response.data)
})
.catch(function (error) {
  console.log(error);
})

var plasmaData;
function plasma(data){
    
    // console.log(data);
    i=0;
    for(const plasma of data){
      var serverTime = plasma.last_updated_on;
      var status = plasma.status;
      if(status == 'not_available'){
          status = "Not Available"
      }
      else{
          status = "Available"
      }
    data[i].status = status;
   
     var changedLocalTime= moment(serverTime).startOf().fromNow();
     if(changedLocalTime == "51 years ago"){
         changedLocalTime = "Unknown"
     }
     data[i].last_updated_on=changedLocalTime;
     i++;
    // console.log(changedLocalTime)

    }
    plasmaData=data.sort(dynamicsort("status","asc"))
    // console.log(plasmaData);
}


axios.get('https://covidresourcesapi.ak3002.repl.co/')
.then(function (response) {
//   console.log(response.data)
    const twt=  Object.keys(response.data)
    const pt=[]
    for (const i of twt){
    pt.push(response.data[i]);
    pt.reverse()
    // console.log(pt)
    }
    tweet(pt)
    // console.log(pt.resourceInfo);

})
.catch(function (error) {
  console.log(error);
})
var tweetData;
function tweet(pt){
  tweetData = pt;
}
// console.log(tweetData)

// var tweetData=[];
// function tweet(pt){
//   for(const tt of pt)
//   {   if (tt.includes("reverified")){
//     for( var i = 0; i < tt.length; i++){ 
//         tt.splice(i, 1); 
    
//     }
//     //   console.log(tt)

//     //   const searchName = tt.slice(tt.search('name') +6,tt.search("phone"))
//     //   console.log(searchName)
//   }
// }
// }



//   else if(tt.includes("phone")){
//     const searchName = tt.slice(tt.search('name') +6,tt.search("number:"))
//     console.log(searchName)

//   }
//   else if(tt.includes("phone")){
//     const searchName = tt.slice(tt.search('name') +6,tt.search("ph:"))
//     console.log(searchName)

//   }
//   else if(tt.includes("phone")){
//     const searchName = tt.slice(tt.search('name') +6,tt.search("ph :"))
//     console.log(searchName)

//   }
//   else{
//     const searchName = tt.slice(tt.search('name') +6,tt.search("contact"))
//     console.log(searchName)

//   }
//   }
// }


// axios.get('https://covidresourcesapi.ak3002.repl.co/')
// .then(function (response) {
// //   console.log(response.data)
//     const twt=  Object.keys(response.data)
//     const pt=[]
//     for (const i of twt){
//   pt.push(response.data[i].resourceInfo);
//     }
//     tweet(pt)

// })
// .catch(function (error) {
//   console.log(error);
// })

// var tweetData=[];
// function tweet(pt){
//   for(const tt of pt)
//   {   if (tt.includes("phone")){
//       const searchName = tt.slice(tt.search('name') +6,tt.search("phone"))
//       console.log(searchName)
//   }
//   else if(tt.includes("phone")){
//     const searchName = tt.slice(tt.search('name') +6,tt.search("number:"))
//     console.log(searchName)

//   }
//   else if(tt.includes("phone")){
//     const searchName = tt.slice(tt.search('name') +6,tt.search("ph:"))
//     console.log(searchName)

//   }
//   else if(tt.includes("phone")){
//     const searchName = tt.slice(tt.search('name') +6,tt.search("ph :"))
//     console.log(searchName)

//   }
//   else{
//     const searchName = tt.slice(tt.search('name') +6,tt.search("contact"))
//     console.log(searchName)

//   }
//   }
// }


















  app.get("/plasma", ensureAuth, (req, res) =>{
      res.render("plasma",{
          siteDate: siteDate,
          siteName: siteTitle,
          PlasmaData: plasmaData
          // AnantapurBedsData: districtBedsData['Spsr nellore'],
          
      });
  })


  axios.get('https://needap-emergencycontacts.herokuapp.com/api/contacts')
  .then(function (response) {
      emergencyContacts(response.data.data)
   
  })
  .catch(function (error) {
    console.log(error);
  })
var Contacts;
function emergencyContacts(data){
    i=0;
    for(const emergencyContacts of data){
        data[i];
        i++;
    }
    Contacts = data;
    // console.log(Contacts)

}
app.get("/contacts", ensureAuth, (req, res) =>{
    res.render("emergencycontacts",{
        siteDate: siteDate,
        siteName: siteTitle,
        Contacts: Contacts
        
    });
})
app.get("/donate", ensureAuth, (req, res) =>{
    res.render("donate",{
        siteDate: siteDate,
        siteName: siteTitle 
    
    });
})

app.get("/donateblood", ensureAuth, (req, res) =>{
    res.render("donateblood",{
            siteDate: siteDate,
        siteName: siteTitle,
        name:req.user.displayName,
        pic:req.user.photos[0].value,
        email:req.user.emails[0].value
       
    });
})
app.get("/donateplasma", ensureAuth, (req, res) =>{
    res.render("donateplasma",{
            siteDate: siteDate,
        siteName: siteTitle,
        name:req.user.displayName,
        pic:req.user.photos[0].value,
        email:req.user.emails[0].value
       
    });
})
app.get("/requestedlist", ensureAuth, (req, res) =>{
    res.render("requestedlist",{
            siteDate: siteDate,
        siteName: siteTitle,
        name:req.user.displayName,
        pic:req.user.photos[0].value,
        email:req.user.emails[0].value
       
    });
})


app.get("/report-info", ensureAuth, (req, res) =>{
    res.render("report-info",{
        siteDate: siteDate,
        siteName: siteTitle,
    });
})
app.get("/remove-info", ensureAuth, (req, res) =>{
    res.render("remove-info",{
        siteDate: siteDate,
        siteName: siteTitle,
    });
})

function casesFunc(ap){    
    l=['Anantapur','Chittoor','East Godavari', 'Guntur', 'Krishna','Kurnool', 'Prakasam', 'S.P.S. Nellore', 'Srikakulam','Visakhapatnam','Vizianagaram','West Godavari', 'Y.S.R. Kadapa']
    for (const i in l){
    //  dist[l[i]]=response.data["Andhra Pradesh"].districtData[l[i]];
     dist[l[i]]=ap[l[i]];
    }
}


app.get("/search", ensureAuth, (req, res) =>{
    res.render("search",{
            siteDate: siteDate,
        siteName: siteTitle,
        AnantapurConfirmedCases: dist['Anantapur'].confirmed.toLocaleString(),
        AnantapurRecoveredCases: dist['Anantapur'].recovered.toLocaleString(),
        AnantapurDeceasedCases: dist['Anantapur'].deceased.toLocaleString(),
        AnantapurActiveCases: dist['Anantapur'].active.toLocaleString(),
        AnantapurTitle1: "Anantapur",
        AnantapurTitle2: "anantapur",
        ChittoorConfirmedCases: dist['Chittoor'].confirmed.toLocaleString(),
        ChittoorRecoveredCases: dist['Chittoor'].recovered.toLocaleString(),
        ChittoorDeceasedCases: dist['Chittoor'].deceased.toLocaleString(),
        ChittoorActiveCases: dist['Chittoor'].active.toLocaleString(),
        ChittoorTitle1: "Chittoor",
        ChittoorTitle2: "chittoor",
        EastGodavariConfirmedCases: dist['East Godavari'].confirmed.toLocaleString(),
        EastGodavariRecoveredCases: dist['East Godavari'].recovered.toLocaleString(),
        EastGodavariDeceasedCases: dist['East Godavari'].deceased.toLocaleString(),
        EastGodavariActiveCases: dist['East Godavari'].active.toLocaleString(),
        EastGodavariTitle1: "East Godavari",
        EastGodavariTitle2: "east godavari",
        GunturConfirmedCases: dist['Guntur'].confirmed.toLocaleString(),
        GunturRecoveredCases: dist['Guntur'].recovered.toLocaleString(),
        GunturDeceasedCases: dist['Guntur'].deceased.toLocaleString(),
        GunturActiveCases: dist['Guntur'].active.toLocaleString(),
        GunturTitle1: "Guntur",
        GunturTitle2: "guntur",
        KrishnaConfirmedCases: dist['Krishna'].confirmed.toLocaleString(),
        KrishnaRecoveredCases: dist['Krishna'].recovered.toLocaleString(),
        KrishnaDeceasedCases: dist['Krishna'].deceased.toLocaleString(),
        KrishnaActiveCases: dist['Krishna'].active.toLocaleString(),
        KrishnaTitle1: "Krishna",
        KrishnaTitle2: "krishna",
        KurnoolConfirmedCases: dist['Kurnool'].confirmed.toLocaleString(),
        KurnoolRecoveredCases: dist['Kurnool'].recovered.toLocaleString(),
        KurnoolDeceasedCases: dist['Kurnool'].deceased.toLocaleString(),
        KurnoolActiveCases: dist['Kurnool'].active.toLocaleString(),
        KurnoolTitle1: "Kurnool",
        KurnoolTitle2: "kurnool",
        PrakasamConfirmedCases: dist['Prakasam'].confirmed.toLocaleString(),
        PrakasamRecoveredCases: dist['Prakasam'].recovered.toLocaleString(),
        PrakasamDeceasedCases: dist['Prakasam'].deceased.toLocaleString(),
        PrakasamActiveCases: dist['Prakasam'].active.toLocaleString(),
        PrakasamTitle1: "Prakasam",
        PrakasamTitle2: "prakasam",
        NelloreConfirmedCases: dist['S.P.S. Nellore'].confirmed.toLocaleString(),
        NelloreRecoveredCases: dist['S.P.S. Nellore'].recovered.toLocaleString(),
        NelloreDeceasedCases: dist['S.P.S. Nellore'].deceased.toLocaleString(),
        NelloreActiveCases: dist['S.P.S. Nellore'].active.toLocaleString(),
        NelloreTitle1: "Nellore",
        NelloreTitle2: "nellore",
        SrikakulamConfirmedCases: dist['Srikakulam'].confirmed.toLocaleString(),
        SrikakulamRecoveredCases: dist['Srikakulam'].recovered.toLocaleString(),
        SrikakulamDeceasedCases: dist['Srikakulam'].deceased.toLocaleString(),
        SrikakulamActiveCases: dist['Srikakulam'].active.toLocaleString(),
        SrikakulamTitle1: "Srikakulam",
        SrikakulamTitle2: "srikakulam",
        VisakhapatnamConfirmedCases: dist['Visakhapatnam'].confirmed.toLocaleString(),
        VisakhapatnamRecoveredCases: dist['Visakhapatnam'].recovered.toLocaleString(),
        VisakhapatnamDeceasedCases: dist['Visakhapatnam'].deceased.toLocaleString(),
        VisakhapatnamActiveCases: dist['Visakhapatnam'].active.toLocaleString(),
        VisakhapatnamTitle1: "Visakhapatnam",
        VisakhapatnamTitle2: "visakhapatnam",
        VizianagaramConfirmedCases: dist['Vizianagaram'].confirmed.toLocaleString(),
        VizianagaramRecoveredCases: dist['Vizianagaram'].recovered.toLocaleString(),
        VizianagaramDeceasedCases: dist['Vizianagaram'].deceased.toLocaleString(),
        VizianagaramActiveCases: dist['Vizianagaram'].active.toLocaleString(),
        VizianagaramTitle1: "Vizianagaram",
        VizianagaramTitle2: "vizianagaram",
        WestGodavariConfirmedCases: dist['West Godavari'].confirmed.toLocaleString(),
        WestGodavariRecoveredCases: dist['West Godavari'].recovered.toLocaleString(),
        WestGodavariDeceasedCases: dist['West Godavari'].deceased.toLocaleString(),
        WestGodavariActiveCases: dist['West Godavari'].active.toLocaleString(),
        WestGodavariTitle1: "West Godavari",
        WestGodavariTitle2: "west godavari",
        KadapaConfirmedCases: dist['Y.S.R. Kadapa'].confirmed.toLocaleString(),
        KadapaRecoveredCases: dist['Y.S.R. Kadapa'].recovered.toLocaleString(),
        KadapaDeceasedCases: dist['Y.S.R. Kadapa'].deceased.toLocaleString(),
        KadapaActiveCases: dist['Y.S.R. Kadapa'].active.toLocaleString(),
        KadapaTitle1: "Kadapa",
        KadapaTitle2: "kadapa"
    });
})


app.get('/about', ensureAuth, (req, res) =>{
    res.render("about",{
            siteDate: siteDate,
        siteName: siteTitle,
        name:req.user.displayName,
        img:req.user.photos[0].value,
        email:req.user.emails[0].value
    })
})
app.get('/terms-and-conditions', (req, res) =>{
    res.render("terms",{
            siteDate: siteDate,
        siteName: siteTitle,
        
    })
})
app.get('/menu-qr', (req, res) =>{
    res.render("menu-qr",{
        siteDate: siteDate,
        siteName: siteTitle,
        
    })
})
// app.get('/feed', (req, res) =>{
//     res.render("feed",{
//         siteDate: siteDate,
//         siteName: siteTitle,
        
//     })
// })


app.get("/developer", ensureAuth,(req, res) =>{
    res.render("developer",{
        img:req.user.photos[0].value,
            siteDate: siteDate,
        siteName: siteTitle,

    });
})

app.get("/donorslist", ensureAuth,(req, res) =>{
    res.render("donorslist",{
        img:req.user.photos[0].value,
            siteDate: siteDate,
        siteName: siteTitle,

    });
})
app.get("/request", ensureAuth,(req, res) =>{
    res.render("request",{
        img:req.user.photos[0].value,
            siteDate: siteDate,
        siteName: siteTitle,
        email:req.user.emails[0].value,
        date: currentDate


    });
})


app.get("/menu-main", ensureAuth, (req, res) =>{
    res.render("menu-main",{
            siteDate: siteDate,
        siteName: siteTitle,
        name:req.user.displayName,
        pic:req.user.photos[0].value,
        email:req.user.emails[0].value
    });
})
app.get("/menu-share", ensureAuth, (req, res) =>{
    res.render("menu-share",{
            siteDate: siteDate,
        siteName: siteTitle,
        name:req.user.displayName,
        pic:req.user.photos[0].value,
        email:req.user.emails[0].value
    });
})
app.get("/menu-feedback", ensureAuth, (req, res) =>{
    res.render("menu-feedback",{
            siteDate: siteDate,
        siteName: siteTitle,
        name:req.user.displayName,
        pic:req.user.photos[0].value,
        email:req.user.emails[0].value
    });
})
app.get("/menu-footer", ensureAuth, (req, res) =>{
    res.render("menu-footer",{
            siteDate: siteDate,
        siteName: siteTitle,
        name:req.user.displayName,
        pic:req.user.photos[0].value,
        email:req.user.emails[0].value
    });
})
app.get("/chat", ensureAuth, (req, res) =>{
    res.render("chat",{
        siteName: siteTitle,
        name:req.user.displayName,
        pic:req.user.photos[0].value,
        email:req.user.emails[0].value
    });
})
app.get("/twitter-data", ensureAuth, (req, res) =>{
    res.render("twitter-data",{
        siteName: siteTitle,
        name:req.user.displayName,
        pic:req.user.photos[0].value,
        email:req.user.emails[0].value,
        siteDate: siteDate,
        tweetData: tweetData

    });
})
app.get("/article-1", ensureAuth, (req, res) =>{
    res.render("articles/article-1",{
        siteName: siteTitle,
        name:req.user.displayName,
        pic:req.user.photos[0].value,
        email:req.user.emails[0].value
    });
})
app.get("/article-2", ensureAuth, (req, res) =>{
    res.render("articles/article-2",{
        siteName: siteTitle,
        name:req.user.displayName,
        pic:req.user.photos[0].value,
        email:req.user.emails[0].value
    });
})
app.get("/article-3", ensureAuth, (req, res) =>{
    res.render("articles/article-3",{
        siteName: siteTitle,
        name:req.user.displayName,
        pic:req.user.photos[0].value,
        email:req.user.emails[0].value
    });
})
app.get("/article-4", ensureAuth, (req, res) =>{
    res.render("articles/article-4",{
        siteName: siteTitle,
        name:req.user.displayName,
        pic:req.user.photos[0].value,
        email:req.user.emails[0].value
    });
})
app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})
app.get("/test", ensureAuth,(req, res) =>{
    res.render("test",{
        siteName: siteTitle,
        json: {
            items: "bobby",
            items1: "bob",
            items2: "Bo",
        }

    });
})
app.get("/vaccine", ensureAuth,(req, res) =>{
    res.render("vaccine",{
        siteName: siteTitle,

    });
})

// app.get("/features/*", isLoggedIn, (req, res) =>{
//     res.render("404",{
//         siteName: siteTitle
//     });
// })
// app.get("/about/*", isLoggedIn, (req, res) =>{
//     res.render("404",{
//         siteName: siteTitle
//     });
// })
// app.get("*", ensureAuth, (req, res) =>{
//     res.redirect('/');
// })
// Sample Consoles Data
// console.log(__dirname)
// console.log(path.join(__dirname, "../public"))


// Get Request 
// app.get("/", (req,res) => {
//     res.send("Hello World");
// })

// app.get("/about", (req,res) => {
//     res.send("Hello World");
// })
// app.get("/contact", (req,res) => {
//     res.send("Hello World");
// })

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})





// firebase config

var serviceAccount = require("./test-bobby-needap.json");
const { hour } = require('javascript-time-ago/gradation');
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://test-bobby-needap-default-rtdb.firebaseio.com/"
});
// admin.firestore().settings({ignoreUndefinedProperties:true});

var fireBaseData=[];

async function getFirestore(){
    fireBaseData=[];
    const firestore_con  = await admin.firestore();

const documentReferences =  await firestore_con.collection('blooddonordata').listDocuments()
const documentIds = documentReferences.map(it => it.id)
i=0;
for (const i of documentIds){
    const writeResult = firestore_con.collection('blooddonordata').doc(i).get().then(doc => {
    if (!doc.exists) { console.log('No such document!'); }
    else {
        // console.log(doc.data());
        fireBaseData.push(doc.data())
    // console.log(fireBaseData)

        // return doc.data();
    }
    // console.log(fireBaseData)

})

    .catch(err => {
         console.log('Error getting document', err);
        });
  
    }

}
// sendData=fireBaseData.sort(dynamicsort("name","asc"))
    
app.get('/blooddonorslist',ensureAuth, async (request,response) =>{
    var db_result = await getFirestore();
    // console.log(fireBaseData)
    function timedOut(){
        const sortByDate = fireBaseData => {
            const sorter = (a, b) => {
               return new Date(b.sortedDate).getTime() - new Date(a.sortedDate).getTime();
            }
            fireBaseData.sort(sorter);
         };
         sortByDate(fireBaseData);
    response.render('blooddonorslist',{
        db_result: fireBaseData,
            siteDate: siteDate,
            siteName: siteTitle
    });
}
setTimeout(timedOut, 1000);

    });


    var plasmaDonorsData=[];

    async function getPlasmaDonorsData(){
        plasmaDonorsData=[];
        const firestore_con  = await admin.firestore();
    
    const documentReferences =  await firestore_con.collection('plasmadonordata').listDocuments()
    const documentIds = documentReferences.map(it => it.id)
    i=0;
    for (const i of documentIds){
        const writeResult = firestore_con.collection('plasmadonordata').doc(i).get().then(doc => {
        if (!doc.exists) { console.log('No such document!'); }
        else {
            // console.log(doc.data());
            plasmaDonorsData.push(doc.data())
    
        }
    
    })
    
        .catch(err => {
             console.log('Error getting document', err);
            });
      
        }
    
    }   

app.get('/plasmadonorslist',ensureAuth, async (request,response) =>{
    var db_result = await getPlasmaDonorsData();
    // console.log(fireBaseData)
    function timedOut(){
        const sortByDate = plasmaDonorsData => {
            const sorter = (a, b) => {
               return new Date(b.sortedDate).getTime() - new Date(a.sortedDate).getTime();
            }
            plasmaDonorsData.sort(sorter);
         };
         sortByDate(plasmaDonorsData);
    response.render('plasmadonorslist',{
        plasmaDonorsData: plasmaDonorsData,
            siteDate: siteDate,
            siteName: siteTitle
    });
}
setTimeout(timedOut, 1000);

    });






    var requestData=[];

    async function getRequestsData(){
        requestData=[];
        const firestore_con  = await admin.firestore();
    
    const documentReferences =  await firestore_con.collection('requestdata').listDocuments()
    const documentIds = documentReferences.map(it => it.id)
    i=0;
    for (const i of documentIds){
        const writeResult = firestore_con.collection('requestdata').doc(i).get().then(doc => {
        if (!doc.exists) { console.log('No such document!'); }
        else {
            // console.log(doc.data());
            requestData.push(doc.data())
    
        }
    
    })
    
        .catch(err => {
             console.log('Error getting document', err);
            });
      
        }
    
    }   

app.get('/requestslist',ensureAuth, async (request,response) =>{
    var db_result = await getRequestsData();
    // console.log(fireBaseData)
    function timedOut(){
        const sortByDate = requestData => {
            const sorter = (a, b) => {
               return new Date(b.sortedDate).getTime() - new Date(a.sortedDate).getTime();
            }
            requestData.sort(sorter);
         };
         sortByDate(requestData);
    response.render('requestslist',{
        requestData: requestData,
            siteDate: siteDate,
            siteName: siteTitle
    });
}
setTimeout(timedOut, 1000);

    });






    app.get("/new", ensureAuth, async (req, res) => {
      
        const auth = new google.auth.GoogleAuth({
          keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets",
        });
      
        // Create client instance for auth
        const client = await auth.getClient();
      
        // Instance of Google Sheets API
        const googleSheets = google.sheets({ version: "v4", auth: client });
      
        const spreadsheetId = "1SXBaISO7rlmxBkEhS7Gz98BtCQSJLs9JyV3RKDE4KEc";
      
        // Get metadata about spreadsheet
        const metaData = await googleSheets.spreadsheets.get({
          auth,
          spreadsheetId,
        });
        // res.send(metaData.data);
      
        // Read rows from spreadsheet
        const getRows = await googleSheets.spreadsheets.values.get({
          auth,
          spreadsheetId,
          // range: "Sheet1!A:A",
          range: "Sheet For Users!A:F",
        });
      
       let specRows = getRows.data.values;
       specRows.splice(0,7);
       let newSep = []
        for (const d of specRows){
          if(d[2] == 'Andhra Pradesh'){
            t={
              "name":d[0],
              "phno":d[1].slice(0,10),
              "state":d[2],
              "district":d[3],
              "status":d[4],
              "lastUpdated":d[5],
            }
            newSep.push(t);
          }
      
        
        }
      //  console.log(newSep);
    //   for(const b of newSep){
    //     console.log(b.name);
    //   }
        res.render('new',{
            oxygensList:newSep, 
        });
      
      });
      

















    // var oxygenChatData=[];

    // async function getOxygenChatData(){
    //     oxygenChatData=[];
    //     const firestore_con  = await admin.firestore();
    
    // const documentReferences =  await firestore_con.collection('oxygenchat').listDocuments()
    // const documentIds = documentReferences.map(it => it.id)
    // // console.log(documentIds)
    // i=0;
    // for (const i of documentIds){
    //     const writeResult = firestore_con.collection('oxygenchat').doc(i).get().then(doc => {
    //     if (!doc.exists) { console.log('No such document!'); }
    //     else {
    //         // console.log(doc.data());
    //         oxygenChatData.push(doc.data())
    
    //     }
    
    // })
    
    //     .catch(err => {
    //          console.log('Error getting document', err);
    //         });
      
    //     }
    
    // }   


    // OxygenChat get method

// app.get('/oxygen-chat',ensureAuth, async (request,response) =>{
//     var db_result = await getOxygenChatData();
//     function timedOut(){
//         oxygenChatData.sort(function(a,b){
//           return new Date(b.Date) - new Date(a.Date);
//         });
//           for(const i of oxygenChatData){
//               i.Date =  i.Date.slice(0,i.Date.search("GMT"))
//               if(request.user.emails[0].value == i.Email){
//                   i.same=true
//               }
//               else{
//                   i.same=false
//               }
//           }

//     response.render('oxygen-chat',{
       
//         oxygenChatData: oxygenChatData,
//             siteDate: siteDate,
//             siteName: siteTitle,
//             email:request.user.emails[0].value
//     });
// }
// setTimeout(timedOut, 1000);

//     });




var newsData=[];

async function getNewsData(){
    newsData=[];
    const firestore_con  = await admin.firestore();

const documentReferences =  await firestore_con.collection('newsdata').listDocuments()
const documentIds = documentReferences.map(it => it.id)
i=0;
for (const i of documentIds){
    const writeResult = firestore_con.collection('newsdata').doc(i).get().then(doc => {
    if (!doc.exists) { console.log('No such document!'); }
    else {
        // console.log(doc.data());
        newsData.push(doc.data())

    }

})

    .catch(err => {
         console.log('Error getting document', err);
        });
  
    }

}   

app.get('/feed',ensureAuth, async (request,response) =>{
var db_result = await getNewsData();
// console.log(fireBaseData)
function timedOut(){
    const sortByDate = newsData => {
        const sorter = (a, b) => {
           return new Date(b.Date).getTime() - new Date(a.Date).getTime();
        }
        newsData.sort(sorter);
     };
     sortByDate(newsData);
response.render('feed',{
    newsData: newsData,
        siteDate: siteDate,
        siteName: siteTitle
});
}
setTimeout(timedOut, 1000);

});







exports.app = functions.https.onRequest(app);
     

// form data
async function insertBloodData(request){
const writeResult = await admin.firestore().collection('blooddonordata').add({
    name: request.body.donorname,
    email: request.body.donoremail,
    phone: request.body.donorphone,
    age: request.body.donorage,
    gender: request.body.donorgender,
    covidstatus: request.body.covidstatus,
    bloodgroup: request.body.donorbloodgroup,
    district: request.body.donordistrict,
    state: request.body.donorstate,
    address: request.body.donoraddress,
    unixTimeStamp: + new Date(),
    sortedDate: moment().format('lll'),

})
.then(function() {console.log("Document successfully written!");})
.catch(function(error) {console.error("Error writing document: ", error);});
}

async function insertPlasmaData(request){
    const writeResult = await admin.firestore().collection('plasmadonordata').add({
        name: request.body.donorname,
        email: request.body.donoremail,
        phone: request.body.donorphone,
        age: request.body.donorage,
        gender: request.body.donorgender,
        covidstatus: request.body.covidstatus,
        // positivedate: request.body.positivedate,
        donordiseases: request.body.donordiseases,
        alcoholstatus: request.body.alcoholstatus,
        vaccinestatus: request.body.vaccinestatus,
        bloodgroup: request.body.donorbloodgroup,
        district: request.body.donordistrict,
        state: request.body.donorstate,
        address: request.body.donoraddress,
        unixTimeStamp: + new Date(),
        sortedDate: moment().format('lll'),
    })
    .then(function() {console.log("Document successfully written!");})
    .catch(function(error) {console.error("Error writing document: ", error);});
    }
    

    async function insertRequestsData(request){
        const writeResult = await admin.firestore().collection('requestdata').add({
            patientname: request.body.patientname,
            attendantname: request.body.attendantname,
            attendantemail: request.body.attendantemail,
            attendantphone: request.body.attendantphone,
            patientage: request.body.patientage,
            patientgender: request.body.patientgender,
            doctorapproval: request.body.doctorapproval,
            lookingfor: request.body.lookingfor,
            patientbloodgroup: request.body.patientbloodgroup,
            hospitalname: request.body.hospitalname,
            patientdistrict: request.body.patientdistrict,
            patientstate: request.body.patientstate,
            patientaddress: request.body.patientaddress,
            posteddate: currentDate,
            unixTimeStamp: + new Date(),
            sortedDate: moment().format('lll'),
        })
        .then(function() {console.log("Document successfully written!");})
        .catch(function(error) {console.error("Error writing document: ", error);});
        }
        

        async function insertFeedbackData(request){
            const writeResult = await admin.firestore().collection('feedbackdata').add({
                Name: request.body.feedbackname,
                Phone: request.body.feedbacknumber,
                Email: request.body.feedbackemail,
                Rating: request.body.feedbackrating,
                Feedback: request.body.feedback,
                unixTimeStamp: + new Date(),
                sortedDate: moment().format('lll'), 
            })
            .then(function() {console.log("Document successfully written!");})
            .catch(function(error) {console.error("Error writing document: ", error);});
            }


            async function insertOxygenChatData(request){
                const writeResult = await admin.firestore().collection('oxygenchat').add({
                    Message: request.body.message,
                    Email: request.body.email,
                    Date: new Date().toString(),
                    unixTimeStamp: unixTimeStamp
                    
                })
                .then(function() {console.log("Document successfully written!");})
                .catch(function(error) {console.error("Error writing document: ", error);});
                }
                
            

                async function insertNewsData(request){
                    const writeResult = await admin.firestore().collection('newsdata').add({
                        Title: request.body.newstitle,
                        Content: request.body.newscontent,
                        unixTimeStamp: + new Date(),
                        Date: moment().format('lll'),
                        type: request.body.newstype


                        
                    })
                    .then(function() {console.log("Document successfully written!");})
                    .catch(function(error) {console.error("Error writing document: ", error);});
                    }


                    
                async function insertRemoveData(request){
                    const writeResult = await admin.firestore().collection('removedata').add({
                        Name: request.body.removename,
                        Category: request.body.category,
                        Phone: request.body.removephone,
                        Email: request.body.removeemail,
                        Reason: request.body.reasoneremove,
                        unixTimeStamp: + new Date(),
                        Date: moment().format('lll'),


                        
                    })
                    .then(function() {console.log("Document successfully written!");})
                    .catch(function(error) {console.error("Error writing document: ", error);});
                    }

// app.post('/insert_data',async (request,response) =>{
//     var insert = await insertBloodData(request);
//     response.sendStatus(200);
//     });
app.get('/success' , ensureAuth, (req,res)=>{
    res.render("success",{
            siteDate: siteDate,
            siteName: siteTitle
    });
})

app.post('/donateblood',async (request,response) =>{
    var insert = await insertBloodData(request);
    response.redirect("/success")
    // response.send('<i class="fas fa-tint" style="color: crimson"></i> Your data has been recorded, thanks for donating your blood..! ');
    });
    
    app.post('/donateplasma',async (request,response) =>{
        var insert = await insertPlasmaData(request);
        response.redirect("/success")

        // response.send('<i class="fas fa-tint" style="color: crimson"></i> Your data has been recorded, thanks for donating your Plasma..! ');
        });

        app.post('/request',async (request,response) =>{
            var insert = await insertRequestsData(request);
            response.redirect("/success")
    
            // response.send('<i class="fas fa-tint" style="color: crimson"></i> Your data has been recorded, thanks for donating your Plasma..! ');
            });

            app.post('/feedback',async (request,response) =>{
                var insert = await insertFeedbackData(request);
                response.redirect("/success")
        
                // response.send('<i class="fas fa-tint" style="color: crimson"></i> Your data has been recorded, thanks for donating your Plasma..! ');
                });

                app.post('/oxygen-chat',async (request,response) =>{
                    var insert = await insertOxygenChatData(request);
                    response.redirect("/oxygen-chat")
            
                    // response.send('<i class="fas fa-tint" style="color: crimson"></i> Your data has been recorded, thanks for donating your Plasma..! ');
                    });
                    app.post('/fire',async (request,response) =>{
                        var insert = await insertNewsData(request);
                        response.redirect("/success")
                
                        // response.send('<i class="fas fa-tint" style="color: crimson"></i> Your data has been recorded, thanks for donating your Plasma..! ');
                        });
                        app.post('/remove-info',async (request,response) =>{
                            var insert = await insertRemoveData(request);
                            response.redirect("/success")
                    
                            // response.send('<i class="fas fa-tint" style="color: crimson"></i> Your data has been recorded, thanks for donating your Plasma..! ');
                            });

app.get('/fire', (req,res)=>{
    res.render('fire')
})











                  
//     firestore_con.listCollections()
//     .then(snapshot=>{
//      snapshot.forEach(snaps=>{
//          // console.log(snaps["_queryOptions"].collectionId);  
//      })
//  })
//  .catch(error=>console.log(error));




















var htmlemail =   `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "https://www.w3.org/TR/html4/strict.dtd">
<html lang="en">

<head>
	<meta http-equiv=Content-Type content="text/html; charset=UTF-8">
	<title>Need AP</title>
	<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap" rel="stylesheet">
	<style type="text/css" nonce="Iz4tWTWCC9Y6aifObDnU9g">
		body,td,div,p,a,input {font-family: arial, sans-serif;}
	</style>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<style type="text/css" nonce="Iz4tWTWCC9Y6aifObDnU9g">
		body, td {font-size:13px} a:link, a:active {color:#1155CC; text-decoration:none} a:hover {text-decoration:underline; cursor: pointer} a:visited{color:##6611CC} img{border:0px} pre { white-space: pre; white-space: -moz-pre-wrap; white-space: -o-pre-wrap; white-space: pre-wrap; word-wrap: break-word; max-width: 800px; overflow: auto;} .logo { left: -7px; position: relative; }
	</style>

	<body>
		<div class="bodycontainer">
			<table width=100% cellpadding=0 cellspacing=0 border=0>
				
									<tr>
										<td colspan=2>
											<table width=100% cellpadding=12 cellspacing=0 border=0>
												<tr>
													<td>
														<div style="overflow: hidden;"><font size=-1><u></u>
<div style="background-color:#f1f5f8;margin:0;padding:0;font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px">
<table cellpadding="0" cellspacing="0" style="background-color:#e4ebf1;min-width:413px;min-width:320px" width="100%">
<tr>
<td valign="top" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px">
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td bgcolor="#005CE4" height="150" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px"></td>
</tr>
</table>
</td>
<td width="600" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px">
<table align="center" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;margin:0 auto" width="600">
<tr>
<td align="center" bgcolor="#005CE4" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:20px 15px 24px">
<a href="#" style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;text-decoration:none" target="_blank">
<img alt="NeedAP Logo" src="https://res.cloudinary.com/need-ap/image/upload/v1622039990/Group_2_vcssis.png" width="130" height="40">
</a>
</td>
</tr>
<tr>
<td bgcolor="#0071ba" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;border-radius:0 0 10px 10px">
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td bgcolor="#ffffff" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;border-radius:6px">
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding-left:15px;padding-right:15px;padding-top:25px;padding:36px 40px 18px">
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td align="center" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:0 0 8px;font:500 24px/22px Arial,Helvetica,sans-serif,Fira;color:#0e2f5a">
Welcome to Need AP <img alt="Need AP" src="https://res.cloudinary.com/need-ap/image/upload/v1622051631/unnamed_3_iujnw9.png" style="width:20px;font:14px Arial,Helvetica,sans-serif;vertical-align:top" width="20">
</td>
</tr>
<tr>
<td align="center" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:0 0 14px;font:600 14px/18px Arial,Helvetica,sans-serif,Fira;color:#0066b8;border-bottom:1px solid #c7cfd9"></td>

</tr>
</table>
</td>
</tr>
<td bgcolor="#f1f5f8" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding-left:30px;padding-right:30px;padding:23px 20px;border-radius:10px">
<table cellpadding="0" cellspacing="0" width="100%">
<tbody><tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px">
<table cellpadding="0" cellspacing="0">
<tbody><tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;font:18px/20px Arial,Helvetica,sans-serif,Fira;color:#0e2f5a">
<table cellpadding="5" cellspacing="2" width="100%">
<tbody><tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px">

</td>
<td style="font-family: 'Ubuntu', sans-serif;color:#111111;font-size:14px;line-height:18px;text-align: center;">
<strong><q><b>A single pint can save three lives, a single gesture can create a million smiles</b></q></strong>
</td>
</tr>

</tbody></table>
</td>
</tr>
</tbody></table>
</td>
</tr>
<tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;font:14px/20px Arial,Helvetica,sans-serif,Fira;color:#0e2f5a"></td>
</tr>
</tbody></table>
</td>
<tr>
<td align="center" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding-left:0;padding-right:0;padding:20px 40px 0px;font:500 18px/24px Arial,Helvetica,sans-serif,Fira">
<img alt="Welcome to Need AP" src="https://res.cloudinary.com/need-ap/image/upload/v1622020658/52176-covid_yicjsu.gif" width="400">
<br>
<br>
 Hi ,
<br>
<br>
Hope everyone doing well ! <br>A drop of blood can save a life! Don’t waste it and donate blood. There is a hope of life to someone in your blood donation.
<br>
<span style="font-size: 15px; font-weight: 600;">Just click the button below to donate or check the beds and <br> plasma availibility at certain hospitals.</span>
<table align="center" cellpadding="0" cellspacing="0" style="margin:0 auto;padding:20px">
<tr>
<td align="center" bgcolor="#005CE4" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;font:500 32px/18px Arial,Helvetica,sans-serif,Fira;letter-spacing:.4px;border-radius:2px">
<a href="https://www.needap.in" style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;padding:20px;color:#fff;text-decoration:none;display:block" target="_blank">Check availibility
</a>
</td>
</tr>
</table>
<br>
<div style="font-size:14px;font-weight:normal">
Please give an feedback to this website we can improve as per your response.
<br>
<br>
If you find your personal number being shared without your consent on this app immediately report it. <a href="mailto:need.andhrapradesh@gmail.com" style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;font-size:14px;font-weight:normal" target="_blank">need.andhrapradesh@gmail.com</a>.
</div>
</td>
</tr>
<tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;">

<table cellpadding="15" cellspacing="0" width="100%">
<tr>
<td bgcolor="#fff" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;border-radius:10px">
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px">
<table cellpadding="0" cellspacing="0">
<tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;font:18px/20px Arial,Helvetica,sans-serif,Fira;color:#0e2f5a">
<table cellpadding="5" cellspacing="2" width="100%">
<tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px">

</td>
<!-- <td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:12.5px;line-height:18px;text-align: center;">
<strong><q><b><i>Embrace Excite Endeavour. Gearing up for the big game PROJECTO</i></b></q></strong>
</td> -->
</tr>

</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;font:14px/20px Arial,Helvetica,sans-serif,Fira;color:#0e2f5a"></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:20px 40px 0">
<h3 style="font:18px/20px Arial,Helvetica,sans-serif,Fira;color:#0e2f5a">
Features of Need AP:
<ul>

<li style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:10px 0"> You can check the availibility of hospital beds and plasma in Andhra Pradesh</li>
<li style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:10px 0">And you can also register as a Blood or Plasma Donor.</li>
<li style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:10px 0">You can check the donors list.</li>
<li style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:10px 0">You can also give <a href="https://needap.in" style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4" target="_blank">feedback</a> to this website.</li>

</ul>
</h3>
</td>
</tr>
<tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:20px 40px 40px;border-bottom:1px solid #e8ebed;border-top:1px solid #e8ebed">
</td>
</tr>
<tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px">
<table cellpadding="0" cellspacing="0" width="100%" style="border-spacing:0;border-collapse:collapse;padding:0;margin:0">
<tr>
<td align="center" bgcolor="#0E2F5A" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:1px;display:block;width:100%;padding:0;background-size:cover;background-image:url(https://res.cloudinary.com/prasadbobby6100/image/upload/v1589356751/footer2_dj2lvk.png); background-position: center;" valign="middle" width="20%">
<table cellpadding="15" cellspacing="2" width="100%">
<tr>
<td align="center" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;font:24px/20px Arial,Helvetica,sans-serif,Fira;color:#000;padding-top:25px;">
#Stay Home
</td>
</tr>
<tr>
<td align="center" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:12px;line-height:18px;color:#000;font-weight: 600;">
	Life doesn’t get easier or more forgiving, we get stronger and more resilient.
<table align="center" cellpadding="0" cellspacing="0" style="padding:20px">
<tr>
<td align="center" bgcolor="#005CE4" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;font:500 16px/18px Arial,Helvetica,sans-serif,Fira;letter-spacing:.4px;border-radius:2px">
<a href="https://www.cowin.gov.in/" style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;padding:12px;color:#fff;text-decoration:none;display:block" target="_blank">
Register for Vaccine
</a>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
<td align="center" bgcolor="#0E2F5A" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;display:block;width:100%;padding:0;background-size:cover;background-image:url(https://res.cloudinary.com/prasadbobby6100/image/upload/v1589353052/footer_erp72a.png)" valign="middle" width="50%">
<table cellpadding="15" cellspacing="2">
<tr>
<td align="center" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;font:24px/20px Arial,Helvetica,sans-serif,Fira;color:#000;padding-top:22px">
#Stay Safe
</td>
</tr>
<tr>
<td align="center" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:12px;line-height:18px;color:#000;font-weight: 600;">
You are not Stuck at Home. You are #Safe at Home.
<table align="center" cellpadding="0" cellspacing="0" style="margin:0 auto;padding:20px">
<tr>
<td align="center" bgcolor="#005CE4" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;font:500 16px/18px Arial,Helvetica,sans-serif,Fira;letter-spacing:.4px;border-radius:2px">
<a href="https://needap.in" style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;padding:12px;color:#fff;text-decoration:none;display:block" target="_blank">
Need AP
</a>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding-left:10px;padding-right:10px;padding:20px 40px 20px">
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<th align="left" style="font-weight:normal;text-align:left;display:block;width:100%;box-sizing:border-box;vertical-align:top" width="140">
<table cellpadding="0" cellspacing="0" style="float:none;margin:0 auto">
<tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px">
<a href="#" style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;text-decoration:none" target="_blank">
<img alt="Facebook" src="https://cloudinary-res.cloudinary.com/image/upload/w_33,dpr_2.0/v1513241200/mail/ico-facebook.png" style="width:33px;vertical-align:top" width="33">
</a>
</td>
<!-- <td width="14" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px"></td>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px">
<a href="#" style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;text-decoration:none" target="_blank">
<img alt="Linkedin" src="https://cloudinary-res.cloudinary.com/image/upload/w_33,dpr_2.0/v1513241200/mail/ico-linkedin.png" style="width:33px;vertical-align:top" width="33">
</a>
</td> -->
<td width="14" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px"></td>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px">
<a href="https://twitter.com/need_ap" style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;text-decoration:none" target="_blank">
<img alt="Twitter" src="https://cloudinary-res.cloudinary.com/image/upload/w_33,dpr_2.0/v1513241200/mail/ico-twitter.png" style="width:33px;vertical-align:top" width="33">
</a>
</td>
</tr>
</table>
</th>
<!-- <th height="30" width="34" style="font-weight:normal;text-align:left;display:block;width:100%;box-sizing:border-box"></th>
<th align="left" style="font-weight:normal;text-align:left;display:block;width:100%;box-sizing:border-box">
<table align="right" cellpadding="0" cellspacing="0" style="float:none;margin:0 auto">
<tr>
<td width="152" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:280px;line-height:18px;width:44px">
<a href="#" style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:280px;line-height:18px;font-weight:bold;color:#005ce4" target="_blank">
<img alt="Ico-community" src="https://res.cloudinary.com/need-ap/image/upload/v1622020663/39778-covid-19_tsym5r.gif" style="width:150px;height:150px;vertical-align:top" width="88">
</a>
</td>



</tr>
</table>
</th> -->
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:32px 40px">
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td align="center" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:0 0 22px">
<a href="#" style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;text-decoration:none" target="_blank">
<img alt="Need AP" src="https://res.cloudinary.com/need-ap/image/upload/v1622033883/full-logo_vqqbrv.png" style="width:20px;font:14px Arial,Helvetica,sans-serif;vertical-align:top" width="20">
</a>
</td>
</tr>
<tr>
<td align="center" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:0 0 10px;font:500 12px/17px Arial,Helvetica,sans-serif,Fira;color:#a7afb3">
© Need AP. 2021<br>
You are receiving this email because you just registered in this website.
<br>Designed and Developed by<br><b><a href="https://www.instagram.com/___mr_introvert____/" target="_blank" rel="noopener noreferrer" style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:12px;line-height:12px;color:#005ce4;color:#0078ff;">Prasad Bobby</a> </b>

</td>
</tr>
<tr>
<td align="center" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;font:500 12px/17px Arial,Helvetica,sans-serif,Fira;color:#0078ff; font-weight: bold;">Contact :
<a href="mailto:need.andhrapradesh@gmail.com" style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;color:#0078ff;" target="_blank">need.andhrapradesh@gmail.com</a>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
<td valign="top" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px">
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td bgcolor="#005CE4" height="150" style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px"></td>
</tr>
</table>

</td>
</tr>
</table></div>
</font>
														</div>
											</table>

				</table>
			</div>
		</div>
		
	</body>
	</html>`


    module.exports = app;
module.exports.handler = serverless(app);