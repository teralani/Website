let options1 = {
    root: null,
    rootMargin: "0% 0% -20% 0%",
    threshold: 0.10,
}

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view1');
        } else {
            entry.target.classList.remove('in-view1');
        }
        });
}, options1);

let options2 = {
    root: null,
    rootMargin: "0% 0% -30% 0%",
    threshold: 0.10,
}

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view2');
        } else {
            entry.target.classList.remove('in-view2');
        }
        });
}, options2);

let options3 = {
    root: null,
    rootMargin: "0% 0% 0% 0%",
    threshold: 0.25,
}

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            console.log('controls seen');
            document.querySelectorAll('.controls-container').forEach((el) => el.classList.remove('closed'));
            document.querySelectorAll('.outer').forEach((el) => el.classList.remove('invisible'));
            

            document.querySelectorAll('.controls-container').forEach((el) => el.classList.add('controls-container-seen'));
            document.querySelectorAll('.dot').forEach((el) => el.classList.add('dot-seen'));
            document.querySelectorAll('.blue-thing').forEach((el) => el.classList.add('blue-thing-seen'));
        } else {
            console.log('controls seen');
            document.querySelectorAll('.outer').forEach((el) => el.classList.add('invisible'));

            document.querySelectorAll('.controls-container').forEach((el) => el.classList.remove('controls-container-seen'));
            document.querySelectorAll('.controls-container').forEach((el) => el.classList.add('closed'));
            
            document.querySelectorAll('.dot').forEach((el) => el.classList.remove('dot-seen'));
            
            document.querySelectorAll('.blue-thing').forEach((el) => el.classList.remove('blue-thing-seen'));
        }
        });
}, options3);

let options4 = {
    root: null,
    rootMargin: "0% 0% 0% 0%",
    threshold: 0.99,
}

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            document.querySelectorAll('.outer').forEach((el) => el.style.position = "relative");
        } else {
            document.querySelectorAll('.outer').forEach((el) => el.style.position = "fixed");
        }
        });
}, options4);

const header1s = document.querySelectorAll('.hidden1');
const header2s = document.querySelectorAll('.hidden2');
const controls = document.querySelectorAll('.slider');
header1s.forEach((el) => observer1.observe(el));
header2s.forEach((el) => observer2.observe(el));
controls.forEach((el) => observer3.observe(el));

const controls_placeholder = document.querySelectorAll('.outer-controls-placeholder');
controls_placeholder.forEach((el) => observer4.observe(el));

function setUpVideo() {
    var video = document.getElementById('video')
    console.log('played');
    video.addEventListener('ended', function() {
        video.style.visibility = "hidden";
    })
}

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