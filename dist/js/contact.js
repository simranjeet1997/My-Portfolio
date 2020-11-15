var firebaseConfig = {
    apiKey: "xxxxxx",
    authDomain: "xxxxxx",
    databaseURL: "xxxxxx",
    projectId: "xxxxxx",
    storageBucket: "xxxxxx",
    messagingSenderId: "xxxxxx",
    appId: "xxxxxx",
    measurementId: "xxxxxx"
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