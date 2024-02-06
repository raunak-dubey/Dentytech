let cursor = document.querySelector("#cursor");

window.addEventListener("mousemove", details => {
    gsap.to(cursor, {
        x: (details.x),
        y: (details.y),
        duration: .25,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)"
    })
});

let tl = gsap.timeline();

tl.from("header #menu, header #logo, header #button", {
    y: -100,
    duration: 1,
    delay: 0.3,
    stagger: 0.2,
    opacity: 0
})
tl.from("#heroContent img, #heroContent h1", {
    scale: .8,
    duration: .6,
    stagger: 0.1,
    opacity: 0
})
tl.from("#heroContent #btm-center", {
    opacity: 0,
    scale: 0,
})
tl.to("#heroContent #btm-center",{
    yoyo: true,
    duration: 1,
    repeat: -1,
    y: -20
})