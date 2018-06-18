//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function(){

    function Start() {
        console.log(`Game Started Now...`);
    }

    window.addEventListener("load", Start);

})();