var button = document.getElementById("loginButtonPopupJS");
var popupElement = document.getElementById("loginPopup");
var BCDarcer = document.getElementById("loginPopupRel");
var closingButton = document.getElementById("submitUserButton");

button.addEventListener('click', function(){
    BCDarcer.style.cssText = "display: block; animation: .3s forwards BCDarcer;";
    popupElement.style.cssText = "animation: .3s forwards loginPopup;";
});

BCDarcer.addEventListener("click", function(){
    BCDarcer.style.cssText = "display: none;";
});

popupElement.addEventListener("click", function(event) {
    event.stopPropagation();
});
