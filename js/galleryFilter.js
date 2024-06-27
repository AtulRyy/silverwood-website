// gallery-list

var allImages=document.querySelectorAll(".gallery-list gallery-image")
var exteriorImages=document.querySelectorAll(".gallery-list exterior")


function exteriorFilter(){

    allImages.forEach(function(image) {
        image.style.display = "none";
    });
    exteriorImages.forEach(function(image) {
        image.style.display = "block";
    });
}