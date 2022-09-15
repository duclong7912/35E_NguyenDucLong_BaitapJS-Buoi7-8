function toggle() {
    var toggles = document.querySelectorAll(".toggle");
    for(var i = 0; i < toggles.length; i++) {
        toggles[i].addEventListener("click", function() {
            this.classList.toggle("background");
            this.classList.toggle("rotate");
        })
    }
};
toggle();