document.addEventListener("DOMContentLoaded", function() {
    (function() {
        var messageBox = document.getElementsByTagName("div")[2];
        messageBox.addEventListener("click", handleClick)
    })();
    var i = 0;
    function handleClick() {
        let name;
        while(!name){
            name = window.prompt("What is Your Name ?");
            if (name == null) {
                break;
            }
        }
                    if(name != null || name != null) {
                if (window.confirm("Are you sure "+ name + " is your name ?")) {
                   alert("Hello " + name + " !");
                  }
                  else {
                    name = null;
                  }
            }
             name ?  document.getElementsByTagName("div")[2].innerHTML = "Hello " + name + " !" :  null
      }
});
