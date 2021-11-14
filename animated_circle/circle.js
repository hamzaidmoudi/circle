const container = document.getElementById("container");
let circle = document.getElementById("circle");
document.body.addEventListener("mousemove", (e) => {
    circle.style.left = window.innerWidth - e.clientX + 'px';
    circle.style.top = window.innerHeight - e.clientY + 'px';
})
