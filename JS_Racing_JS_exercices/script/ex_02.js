document.addEventListener("DOMContentLoaded", function() {
    (function() {
        var messageBox = document.getElementsByTagName("div")[2];
        messageBox.addEventListener("click", handleClick)
    })();
    var i = 0;
    function handleClick() {
        i++;
        document.getElementsByTagName("div")[2].innerHTML = "YOU CLICKED ME! "+ i + " Time";
      }
});
