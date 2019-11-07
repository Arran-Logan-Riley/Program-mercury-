function findTopic() {
    var userinput = document.getElementById("search").value; //gets the user input and sets it to userinput 
    //figure out how to put it to uppercase
    if(userinput == "Freedom 7"){
        window.location.pathname = "Topic 1.html" //sends the user to "topic 1" if they type in the correct input 
    }else if(userinput == "Liberty Bell 7"){
        window.location.pathname = "Topic 2.html"
    }else if(userinput == "Friendship 7"){
        window.location.pathname = "Topic 3.html"
    }else if(userinput == "Aurora 7"){
        window.location.pathname = "Topic 4.html"
    }else if(userinput == "Sigma 7"){
        window.location.pathname = "Topic 5.html"
    } else if(userinput == "Faith 7"){
        window.location.pathname = "Topic 6.html"
    }
}

function toggleDarkLight() { //https://codepen.io/HarlemSquirrel/pen/NdMebZ dark mode toggler 
    var body = document.getElementById("body"); //gets the body color
    var currentClass = body.className; //sets current class to the body 
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode"; 
  }