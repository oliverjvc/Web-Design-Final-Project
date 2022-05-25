
function myFunction() {
  let text = "Value OK";
  if (document.getElementById("id1").validity.rangeOverflow) {
    text = "Value too large";
  } else if(document.getElementById("id1").validity.rangeUnderflow){
      text = "Value too small";
    } else if(document.getElementById("id1").validity.valueMissing){
      text = "You didn't entered a number rating"
    }
  document.getElementById("demo").innerHTML = text;
}


function initialize() {
  var nameInput = document.getElementById("id2");
  nameInput.oninvalid = invalidName;
  nameInput.oninput = invalidName; 

  var preporuka = document.getElementById("id3");
  preporuka.oninvalid = LosaPreporuka;
  preporuka.oninput = LosaPreporuka;  

  var pol = document.getElementById("id4");
  pol.oninvalid = nemaPol;
  pol.oninput = nemaPol;  

  var rodjendan = document.getElementById("id5");
  rodjendan.oninvalid = rodjendanFali;
  rodjendan.oninput = rodjendanFali;   
}

function LosaPreporuka() {
  this.setCustomValidity("");
  if (this.validity.valueMissing) {
    this.setCustomValidity("Text is missing");
  }
}

function invalidName() {
  this.setCustomValidity("");
  if (this.validity.valueMissing) {
    this.setCustomValidity("Enter your opinion");
  }
}

function nemaPol() {
  this.setCustomValidity("");
  if (this.validity.valueMissing) {
    this.setCustomValidity("You didnt entered your gender");
  }
}


/*dugme Open*/
function otvori() {
    const el = document.getElementById("form");
    el.style.display = 'block'
}

/* Provera broja telefona */
function brojTelefona(broj){
  if(broj.value.length==10){
      alert("Phone number is valid")  
  }
  else{
     alert("Phone number is not valid, need to have 10 digits")  
  }
  }


/*Provera email-a*/
  function validacijaEmail(unetEmail) {
    
    
    // provera da li ima @
    var naZnaku = unetEmail.indexOf("@");
    if(naZnaku < 1){
      return false;
    }

    //proverava da li se tacka nalazi pre @
    var tacka = unetEmail.indexOf(".");
    if(tacka <= naZnaku + 2){ 
      return false;
    }

    // proverava da li je tacka na kraju
    if (tacka == unetEmail.length - 1){
     return false;
    }
    
    return true;
  }

function proveriEmail(unetEmail){
   var rezultat= validacijaEmail(unetEmail);
  
   if(rezultat){
       alert("Valid Email");
   }
   else{
      alert("Invalid Email");
   }
}

/* Provera sifre*/
function validacijaSifre() {
  let text1 = "";
  let text2 = "";
  let text3 = "";
  let text4 = "";
  let text5 = "";
  var p = document.getElementById('sifra').value
  var errors = []

  if (p.length < 8) {
   text1 = "Your password must be at least 8 characters";
  }
  if (p.search(/[a-z]/) < 0) {
    text2 = "Your password must contain at least one lowercase letter";
  }
  if (p.search(/[A-Z]/) < 0) {
    text3 = "Your password must contain at least one uppercase letter";
  }
  if (p.search(/[0-9]/) < 0) {
    text4 = "Your password must contain at least one digit";
  }
  if(p.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0) {
    text5 = "Your password must contain at least one special character";
  }
  
  document.getElementById("greska1").innerHTML = text1;
  document.getElementById("greska2").innerHTML = text2;
  document.getElementById("greska3").innerHTML = text3;
  document.getElementById("greska4").innerHTML = text4;
  document.getElementById("greska5").innerHTML = text5;
  
}