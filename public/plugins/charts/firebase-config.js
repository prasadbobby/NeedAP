const firebaseConfig = {
    apiKey: "AIzaSyAOGeYvesOJ4hChuWX0eS7YHUk83QnAx9M",
    authDomain: "test-bobby-needap.firebaseapp.com",
    databaseURL: "https://test-bobby-needap-default-rtdb.firebaseio.com",
    projectId: "test-bobby-needap",
    storageBucket: "test-bobby-needap.appspot.com",
    messagingSenderId: "631230685784",
    appId: "1:631230685784:web:e7ab78327f633d0c7fa02d",
    measurementId: "G-W1KD22ZQLS"
  };
  
  
  
    firebase.initializeApp(firebaseConfig);
   
    window.onload=function () {
        render();
      };
      function render() {
          window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
          recaptchaVerifier.render();
      }
        function phoneAuth() {
          //get the number
          var countryCode = document.getElementById('verifyphone').value.replace (/^/,'+91');
          var number=countryCode;
          console.log(number)
          //phone number authentication function of firebase
          //it takes two parameter first one is number,,,second one is recaptcha
          firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
              //s is in lowercase
              window.confirmationResult=confirmationResult;
              coderesult=confirmationResult;
              console.log(coderesult);
              alert("OTP sent successfully");
          }).catch(function (error) {
              if(error.message == 'reCAPTCHA client element has been removed: 0'){
                  error.message= "Please Enter Captcha"
              }
              alert(error.message);
              console.log(error)
          });
      }
      function codeverify() {
          var code=document.getElementById('verifyotp').value;
          coderesult.confirm(code).then(function (result) {
              alert("OTP has been verified");
              document.getElementById('formid').submit();
              var user=result.user;
              console.log(user);
          }).catch(function (error) {
              alert(error.message);
          });
      }
    
  