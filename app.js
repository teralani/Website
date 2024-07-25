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
    threshold: 0.6,
}

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            console.log('controls seen');
            document.querySelectorAll('.outer').forEach((el) => el.classList.remove('invisible'));

            document.querySelectorAll('.controls-container').forEach((el) => el.classList.add('controls-container-seen'));
            document.querySelectorAll('.dot').forEach((el) => el.classList.add('dot-seen'));
            document.querySelectorAll('.blue-thing').forEach((el) => el.classList.add('blue-thing-seen'));
        } else {
            console.log('controls seen');
            document.querySelectorAll('.outer').forEach((el) => el.classList.add('invisible'));

            document.querySelectorAll('.controls-container').forEach((el) => el.classList.remove('controls-container-seen'));
            document.querySelectorAll('.dot').forEach((el) => el.classList.remove('dot-seen'));
            document.querySelectorAll('.blue-thing').forEach((el) => el.classList.remove('blue-thing-seen'));
        }
        });
}, options3);

let options4 = {
    root: null,
    rootMargin: "0% 0% -8% 0%",
    threshold: 1.00,
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
const controls = document.querySelectorAll('.gallery');
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