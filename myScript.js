function changeCode(click_id){

    if (click_id === "1"){
        document.getElementById("code__event__ul__li__1").style.display = "inline";
        document.getElementById("code__event__ul__li__2").style.display = "none";
        document.getElementById("code__event__ul__li__3").style.display = "none";
        document.getElementById("code__event__ul__li__4").style.display = "none";
        document.getElementById("code__event__ul__li__5").style.display = "none";

    }
    else if (click_id === "2"){
        document.getElementById("code__event__ul__li__1").style.display = "none";
        document.getElementById("code__event__ul__li__2").style.display = "inline";
        document.getElementById("code__event__ul__li__3").style.display = "none";
        document.getElementById("code__event__ul__li__4").style.display = "none";
        document.getElementById("code__event__ul__li__5").style.display = "none";
    }
    else if (click_id === "3"){
        document.getElementById("code__event__ul__li__1").style.display = "none";
        document.getElementById("code__event__ul__li__2").style.display = "none";
        document.getElementById("code__event__ul__li__3").style.display = "inline";
        document.getElementById("code__event__ul__li__4").style.display = "none";
        document.getElementById("code__event__ul__li__5").style.display = "none";
    }
    else if (click_id === "4"){
        document.getElementById("code__event__ul__li__1").style.display = "none";
        document.getElementById("code__event__ul__li__2").style.display = "none";
        document.getElementById("code__event__ul__li__3").style.display = "none";
        document.getElementById("code__event__ul__li__4").style.display = "inline";
        document.getElementById("code__event__ul__li__5").style.display = "none";
    }
    else{
        document.getElementById("code__event__ul__li__1").style.display = "none";
        document.getElementById("code__event__ul__li__2").style.display = "none";
        document.getElementById("code__event__ul__li__3").style.display = "none";
        document.getElementById("code__event__ul__li__4").style.display = "none";
        document.getElementById("code__event__ul__li__5").style.display = "inline";
    }

}


function sampleFunction() {
 document.getElementById("code__event__ul__li__1").style.display = "inline";
}
window.onload=sampleFunction;



/*
let header = document.getElementsByClassName("ol__btn");
let header1 = document.getElementsByClassName("ol__li");
let btns = header1.getElementsByClassName("y");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}*/
