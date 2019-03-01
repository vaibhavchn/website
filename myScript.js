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