document.addEventListener("DOMContentLoaded", function() {
    let stars = document.createElement("div");
    stars.classList.add("stars");
    document.body.appendChild(stars);
    
    for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 3 + 2 + "s";
        stars.appendChild(star);
    }
});
