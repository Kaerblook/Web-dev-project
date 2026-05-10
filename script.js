const menu = document.querySelector('#menu');
const nav = document.querySelector(".links");
const cursor = document.querySelector(".cursor");
var timeout;

document.body.style.cursor = "none";

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 2000);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

document.addEventListener("click", () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
});
menu.onclick = () => {
    // menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
}, {})

const projectElements = document.querySelectorAll(".anim")
projectElements.forEach(el => observer.observe(el))

function goToYtVideo() {
    document.location.href = "https://www.youtube.com/watch?v=9xhuynk-6f4"
}

function goToFigma() {
    document.location.href = "https://www.figma.com/proto/P0f9D1xzI7GCZzIZpZSTI0/PlayPort?node-id=19-11&starting-point-node-id=19%3A11&t=K6nAzT4TXaZwuXRt-1"
}

function goToData() {
    document.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
