
function backButton(){
    var backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click", topFunc);
    window.onscroll = function() {scroll()};
}

function scroll() {
    var height=document.body.offsetHeight;
    if (document.body.scrollTop >= 0.25*height || document.documentElement.scrollTop >= 0.25*height) {
        backBtn.style.display = "block";
    } else {
        backBtn.style.display = "none";
    }
}
function topFunc(event) {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

function init(){
    topFunc();
    scroll();
    backButton();
    //emailFunc();
    //emailButton();
}

// function emailButton(){
//     var emailBtn = document.getElementById("submit");
//     emailBtn.addEventListener("click",emailFunc);
// }
function emailFunc(event){
    var e = document.getElementById("email").value ;
    //console.log(e);
    e.trim();
    if (e.search('@')===-1 || (e.endsWith('.com') === false && e.endsWith('.edu') === false)){
        document.querySelector("#meg").textContent = "Invalid email address." ;
    }else{
        document.querySelector("#meg").textContent = "Email successfully recorded." ;
    }

}