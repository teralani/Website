function control1(button) {
    console.log(button.value);
    if(button.checked == true) {
    // var checked = document.querySelector(".slider").querySelector('input[name="selector"]:checked').value;
    var s = document.getElementsByClassName('slider__inner')[0];
    console.log("selected: " + button.value);
    if(button.value == "slide1") {s.style.left = '7vw'}
    if(button.value  == "slide2") {s.style.left = '-76vw'}
    if(button.value  == "slide3") {s.style.left = '-158.5vw'}
    if(button.value  == "slide4") {s.style.left = '-241vw'}
    if(button.value  == "slide5") {s.style.left = '-324vw'}
    if(button.value  == "slide6") {s.style.left = '-406.5vw'}
    }
}

let slider1_buttons = document.querySelector(".slider").querySelectorAll('input[name="selector"]');
slider1_buttons.forEach(rb=>rb.addEventListener("change", e => {
    control1(rb)
}));