var firebaseConfig = {
    apiKey: "AIzaSyBjK-z6AFmhprM91Akqkg_xGM-IJcLd0kQ",
    authDomain: "contact-form-c8fb3.firebaseapp.com",
    databaseURL: "https://contact-form-c8fb3.firebaseio.com",
    projectId: "contact-form-c8fb3",
    storageBucket: "contact-form-c8fb3.appspot.com",
    messagingSenderId: "1009071333197",
    appId: "1:1009071333197:web:d968ad55ceb9e33d5d6104",
    measurementId: "G-F8Q0JEN9RQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  


//Refernce message collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submit

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }

function getInputVal(id){
    return document.getElementById(id).value;
}


function saveMessage(name, company, email, phone, message){
   var newMessageRef = messagesRef.push();
   newMessageRef.set({
       name: name,
       company: company,
       email: email,
       phone:phone,
       message:message
   })
}