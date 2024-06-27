//INVITES
var inviteVid=document.querySelector(".invite-video");
var inviteFrame=document.querySelector(".invite-video iframe")
var inviteClose=document.querySelector(".invite-close-button")
function playInviteVideo(){
    inviteVid.style.display = "flex";
    inviteFrame.src="https://www.youtube.com/embed/kpWhAcJ4a3Q?si=xMnds3QlWY0QVfpo";
   
    
}

inviteClose.addEventListener("click", function() {
    inviteVid.style.display = "none";
    inviteFrame.src = "";
});

inviteVid.addEventListener("click", function() {
    inviteVid.style.display = "none";
    inviteFrame.src = "";
});


//ABOUT
var aboutVid=document.querySelector(".about-video");
var aboutFrame=document.querySelector(".about-video iframe")
var aboutClose=document.querySelector(".about-close-button")
function playAboutVideo(){
    aboutVid.style.display = "flex";
    aboutFrame.src="https://www.youtube.com/embed/vcw_BoLrRrY?si=mCs660fUmuviYSIF";
   
    
}

aboutClose.addEventListener("click", function() {
    aboutVid.style.display = "none";
    aboutFrame.src = "";
});
aboutVid.addEventListener("click", function() {
    aboutVid.style.display = "none";
    aboutFrame.src = "";
});


