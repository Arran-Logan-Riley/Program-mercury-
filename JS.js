function findTopic() {
    var userinput = document.getElementById("search");
    //figure out how to put it to uppercase
    if(userinput == "Freedom 7"){
        window.location.pathname = "http://127.0.0.1:5500/Topic%201.html"
    }else if(userinput == "Liberty Bell 7"){
        window.location.pathname = "http://127.0.0.1:5500/Topic%202.html"
    }else if(userinput == "Friendship 7"){
        window.location.pathname = "http://127.0.0.1:5500/Topic%203.html"
    }else if(userinput == "Aurora 7"){
        window.location.pathname = "http://127.0.0.1:5500/Topic%204.html"
    }else if(userinput == "Sigma 7"){
        window.location.pathname = "http://127.0.0.1:5500/Topic%205.html"
    } else if(userinput == "Faith 7"){
        window.location.pathname = "http://127.0.0.1:5500/Topic%206.html"
    }
}

function toggleDarkLight() { //https://codepen.io/HarlemSquirrel/pen/NdMebZ dark mode toggler 
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }