document.addEventListener("DOMContentLoaded", function() {
    (function() {
        var selects = document.getElementsByTagName('select');

        for (var i = 0; i < selects.length; i++) {
            selects[i].addEventListener("change", handleChange);
         ;  
         var plus = document.getElementsByTagName('button')[0];
        plus.addEventListener("click", handleClickPlus);

        var minus = document.getElementsByTagName('button')[1];
        minus.addEventListener("click", handleClickMinus);
        }
    })();  

    function handleChange(event) {
        var getDiv = document.getElementsByTagName('div')[2].style.backgroundColor = event.target.value
    }

    let fontSize = window.getComputedStyle(document.body).fontSize; 
    let initsize = parseInt(fontSize.split('').filter(char => !isNaN(char) && char !== ' ').join(''));

    function handleClickPlus(event) {
         const size  = initsize += 5;
        document.body.style.fontSize = size + "px"; 
    }
    function handleClickMinus(event) {
        const size  = initsize -= 5;
       document.body.style.fontSize = size + "px"; 
   }
});
