var state =[]
var confirmed =[]
var recovered =[]
var deaths =[]
var active =[]
$(document).ready(function(){
    var url = "https://data.covid19india.org/state_district_wise.json"
    $.getJSON(url,function(data){
        // console.table(data['Andhra Pradesh'].districtData)    
        $.each(data['Andhra Pradesh'].districtData,function(id,obj){
            if (id != 'Other State'){
                
                state.push(id)
                confirmed.push(obj.confirmed)
                recovered.push(obj.recovered)
                deaths.push(obj.deceased)
                active.push(obj.active)
            }
           
           
        })
       
        state.shift();
        confirmed.shift();
        recovered.shift();
        deaths.shift();
        active.shift();
    
    })
    
})

// var settings = {
//     'cache': false,
//     'dataType': "jsonp",
//     "async": true,
//     "crossDomain": true,
//     "url": "http://data.covid19india.org/state_district_wise.json",
//     "method": "GET",
//     "headers": {
//         "accept": "application/json",
//         "Access-Control-Allow-Origin":"*"
//     }
// }

// $.ajax(settings).done(function (response) {
//     console.log(response);

// });

var dashboardChart = document.getElementById('dashboard-chart').getContext('2d')

var dashboard = new Chart(dashboardChart, {
    type: 'line',
    data: {
        labels: state,
        datasets: [{
                data: confirmed,
                label: "Confirmed",
                borderColor: "#2d7630",
                minBarLength: 100
  }, {
    data: recovered,
    label: "Recovered",
    borderColor: "#4A89DC",
    minBarLength: 100


}, {
    data: deaths,
    label: "Deaths",
    borderColor: "#D8334A",
    // minBarLength: 100


}
] 
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    beginAtZero: true,
                    ticks: {
                        autoSkip: false
                    }
                }
            ],
            // yAxes: { 
            //     max: 1000
            // }
        },
        // animations: {
        //     tension: {
        //       duration: 1000,
        //       easing: 'linear',
        //       from: 1,
        //       to: 0,
        //       loop: true
        //     }
        //   },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontSize: 13,
                padding: 15,
                boxWidth: 12
            },
        },
        title: {
            display: false
        }
    }
});





// var dashboardChart = document.getElementById('dashboard-chart')

// var dashboardChart = new Chart(dashboardChart, {
//     type: 'line',
//     data: {
//       labels: ["2010", "2015", "2020",],
//       datasets: [
//         {
//           label: "iOS",
//           backgroundColor: "#A0D468",
//           data: [900,1000,1150]
//         }, {
//           label: "Android",
//           backgroundColor: "#4A89DC",
//           data: [890,950,1100]
//         }
//       ]
//     },
//     options: {
//         responsive: true, maintainAspectRatio:false,
//         legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
//         title: {display: false}
//     }
// });	
    

