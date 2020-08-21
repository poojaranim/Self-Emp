<html>
<head>
    <title>Phone Number Authentication with Firebase Web</title>
</head>
<body>
<h1>Enter number to get code</h1>
<form>
    <input type="text" id="number" placeholder="+91**********">
    <div id="recaptcha-container"></div>

    <button type="button" onclick="phoneAuth();"> SendCode</button>
</form><br>
<h1>Enter Verification code</h1>
<form>
    <input type="text" id="verificationCode" placeholder="Enter verification code">
    <button type="button" onclick="codeverify();">Verify code</button>
</form>

<script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js"></script>

 
<script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-auth.js"></script>

<script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-database.js"></script>



<script>
    // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyD2CvCGoOmBTW9BLwPJ5BuT_mK_kXSaXzQ",
    authDomain: "auth-a3b01.firebaseapp.com",
    databaseURL: "https://auth-a3b01.firebaseio.com",
    projectId: "auth-a3b01",
    storageBucket: "auth-a3b01.appspot.com",
    messagingSenderId: "533258215841",
    appId: "1:533258215841:web:337f9ba47797795b6e6be0",
    measurementId: "G-TNS9HM07YT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
<script>
    window.onload=function() {
    render();
    };

    function render(){
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        recaptchaVerifier.render();
    }

    function phoneAuth(){

        var number = document.getElementById('number').value;
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      coderesult=confirmationResult;
      console.log(coderesult);
      alert("Message sent");
    }).catch(function (error)
    {
        alert(error.message);
    });
}
    function codeverify(){
        var code=document.getElementById('verificationCode').value;
        coderesult.confirm(code).then(function (result) {
            alert("Successfully register");
            window.location = "home.php"

        }).catch(function (error) {
            alert(error.message);
        });
    }

    
</script>
</body>
</html>
