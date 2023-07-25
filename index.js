let home=document.getElementById("home-score")
let guest=document.getElementById("guest-score")



function addHome(num) {
    home.textContent = Number(home.textContent) + num;
}

function addGuest(num) {
    guest.textContent = Number(guest.textContent) + num;
}