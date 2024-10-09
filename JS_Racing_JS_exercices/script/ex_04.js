document.addEventListener("keypress", function(event) {
    var character = document.getElementsByTagName("div")[2];
    character.innerText += event.key;
    character.innerText = character.innerText.substr(-42);
});

