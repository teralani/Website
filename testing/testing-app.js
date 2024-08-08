function control1(button) {
    if(button.checked == true) {
    // var checked = document.querySelector(".slider").querySelector('input[name="selector"]:checked').value;
    var s = document.querySelector('.slider__inner');
    alert(button.value);
    if(button == "slide1") {s.style.left = '10px'}
    if(button == "slide2") {s.style.left = '20px'}
    if(button == "slide3") {s.style.left = '30px'}
    if(button == "slide4") {s.style.left = '40px'}
    if(button == "slide5") {s.style.left = '50px'}
    if(button == "slide6") {s.style.left = '60px'}
    }
}

let slider1_buttons = document.querySelector(".slider").querySelectorAll('input[name=selector]');
slider1_buttons.forEach(rb=>rb.addEventListener("change", control1(rb)));