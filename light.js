var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("lightTheme");

    if(document.body.classList.contains("lightTheme")){
        icon.src = "theme/moon.png";
    }
    else{
        icon.src = "theme/sun.png";
    }
    }
