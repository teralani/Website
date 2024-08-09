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
    rootMargin: "-30% 0% 0% 0%",
    threshold: 0.25,
}

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            console.log('controls seen');
            entry.target.querySelectorAll('.controls-container').forEach((el) => el.classList.remove('closed'));
            entry.target.querySelectorAll('.outer').forEach((el) => el.classList.remove('invisible'));
            

            entry.target.querySelectorAll('.controls-container').forEach((el) => el.classList.add('controls-container-seen'));
            entry.target.querySelectorAll('.dot').forEach((el) => el.classList.add('dot-seen'));
            entry.target.querySelectorAll('.blue-thing').forEach((el) => el.classList.add('blue-thing-seen'));
        } else {
            console.log('controls seen');
            entry.target.querySelectorAll('.outer').forEach((el) => el.classList.add('invisible'));

            entry.target.querySelectorAll('.controls-container').forEach((el) => el.classList.remove('controls-container-seen'));
            entry.target.querySelectorAll('.controls-container').forEach((el) => el.classList.add('closed'));
            
            entry.target.querySelectorAll('.dot').forEach((el) => el.classList.remove('dot-seen'));
            
            entry.target.querySelectorAll('.blue-thing').forEach((el) => el.classList.remove('blue-thing-seen'));
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
            entry.target.querySelectorAll('.outer').forEach((el) => el.style.position = "relative");
        } else {
            entry.target.querySelectorAll('.outer').forEach((el) => el.style.position = "fixed");
        }
        });
}, options4);

let options5 = {
    root: null,
    rootMargin: "0% 0% 0% 0%",
    threshold: 0.60,
}

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            document.getElementById('sticky-navbar').classList.remove('seen');
        } else {
            document.getElementById('sticky-navbar').classList.add('seen');
        }
        });
}, options5);

const header1s = document.querySelectorAll('.hidden1');
const header2s = document.querySelectorAll('.hidden2');
const slider = document.querySelectorAll('.slider');
header1s.forEach((el) => observer1.observe(el));
header2s.forEach((el) => observer2.observe(el));
slider.forEach((el) => observer3.observe(el));

const controls_placeholder = document.querySelectorAll('.outer-controls-placeholder');
controls_placeholder.forEach((el) => observer4.observe(el));

const navbar = document.querySelectorAll('#section1');
navbar.forEach((el) => observer5.observe(el));

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
    // if(button.value == "slide1") {s.style.left = '23vw'}
    // if(button.value  == "slide2") {s.style.left = '-26vw'}
    // if(button.value  == "slide3") {s.style.left = '-75vw'}
    // if(button.value  == "slide4") {s.style.left = '-124vw'}
    // if(button.value  == "slide5") {s.style.left = '-173vw'}
    // if(button.value  == "slide6") {s.style.left = '-222vw'}

    if(button.value == "slide1") {s.style.left = '0'}
    if(button.value  == "slide2") {s.style.left = '-55%'}
    if(button.value  == "slide3") {s.style.left = '-107%'}
    if(button.value  == "slide4") {s.style.left = '-160%'}
    if(button.value  == "slide5") {s.style.left = '-215%'}
    if(button.value  == "slide6") {s.style.left = '-265%'}
    }
}

let slider1_buttons = document.querySelector(".slider").querySelectorAll('input[name="selector"]');
slider1_buttons.forEach(rb=>rb.addEventListener("change", e => {
    control1(rb)
}));
let nav = document.getElementById("navbar");
nav.addEventListener("mouseenter", e=> {
    document.getElementById("blurred").style.display = "block";
});
nav.addEventListener("mouseleave", e=> {
    document.getElementById("blurred").style.display = "none";
});

function control2(button) {
    console.log("selected: " + button.value);
    var one = document.querySelectorAll('.slider')[1].querySelectorAll(".slider__card")[0];
    var one1 = document.querySelectorAll(".grey")[0];
    var two = document.querySelectorAll('.slider')[1].querySelectorAll(".slider__card")[1];
    var two1 = document.querySelectorAll(".grey")[1];

    if(button.checked == true) {
        if(button.value == "slide1") {
            one1.style.display = "block";
            two1.style.display = "block";

            two.style.color = "grey";
            document.querySelectorAll('.slider')[1].querySelectorAll('.dot-two-button-highlight')[0].classList.add('selected');
            document.querySelectorAll('.slider')[1].querySelectorAll('.dot-two-button-highlight')[1].classList.remove('selected')
        }
        if(button.value == "slide2") {
            one1.style.display = "none";
            two1.style.display = "none";

            one.style.color = "white";
             two.style.color = "white";
            document.querySelectorAll('.slider')[1].querySelectorAll('.dot-two-button-highlight')[1].classList.add('selected');
            document.querySelectorAll('.slider')[1].querySelectorAll('.dot-two-button-highlight')[0].classList.remove('selected')
            }
    }
};
let slider2_buttons = document.querySelectorAll('input[name="selector2"]');
console.log(slider2_buttons);
slider2_buttons.forEach(rb=>rb.addEventListener("change", e => {
    control2(rb)
}));
