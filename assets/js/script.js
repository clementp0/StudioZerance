// SWIPERJS Config & Script
var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },
});

// Contact FORM & GENDERIZE.IO

function displayContact_overlay(){
const contact_overlay= document.getElementsByClassName("contact_overlay")[0];
contact_overlay.style.display = "block";
window.onclick = function(event) {
  if (event.target == contact_overlay) {
    contact_overlay.style.display = "none";
  }
}
}

function closeContact(){
const contact_popup = document.getElementsByClassName("contact_popup")[0];
const contact_overlay = document.getElementsByClassName("contact_overlay")[0];
contact_popup.style.display = "none";
contact_overlay.style.display = "none";
}

function getGender() {
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;
const url = `https://api.genderize.io?name=${name}`;
if (name === "" || email === "" || message === "") {
      alert("Merci de remplir tout les champs.");
      return;
    }
else{
fetch(url)
  .then(response => response.json())
  .then(data => {
    const gender = data.gender;
    if (gender === "male"){
      document.getElementById("contact_popup_gender").textContent = "Rosebud";
    }
    else if(gender === "female"){
      document.getElementById("contact_popup_gender").textContent = "We rob banks";
    }
    else {
      document.getElementById("contact_popup_gender").textContent = "It’s a trap !";
    }
    displayContact_popup();
  })
  .catch(error => console.error(error));
}
}

function displayContact_popup() {
const contact_popup = document.getElementsByClassName("contact_popup")[0];
const contact_overlay = document.getElementsByClassName("contact_overlay")[0];
const contact_popup_closeBtn = document.getElementsByClassName("contact_popup_close")[0];
contact_popup.style.display = "block";
contact_popup_closeBtn.onclick = function() {
  contact_popup.style.display = "none";
  contact_overlay.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == contact_popup) {
    contact_popup.style.display = "none";
    contact_overlay.style.display = "none";
  }
}
}