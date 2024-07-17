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

const header1s = document.querySelectorAll('.hidden1');
const header2s = document.querySelectorAll('.hidden2');
header1s.forEach((el) => observer1.observe(el));
header2s.forEach((el) => observer2.observe(el));