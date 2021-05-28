gsap.registerPlugin(ScrollTrigger);
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
let timeline1 = new TimelineMax();

gsap.to(".durianImage", {
    scrollTrigger:{
        trigger:".showcase",
        start: "top",
        end: "bottom",
        scrub:true
    },
    y: 225,
    duration: 1,
    opacity:0,
});

timeline
.fromTo(".nutrition-facts", { opacity:0 }, { opacity:1, duration: 3 })
.fromTo(".h-benefits", { x:600 }, { x:0,duration: 3})
.fromTo(".nutrition-facts", { x:-500}, { x:0,duration: 3 }, "-=3")
.fromTo(".parts", { y:-500, opacity:0, scaleX:0,scaleY:0 }, { y:0, opacity:1, scale:0.8, duration: 3 });

timeline1
.fromTo(".durian-image1", {opacity:0}, {opacity:1, duration:4});

let scene = new ScrollMagic.Scene({
    triggerElement: "anatomy",
    duration: "100%",
    triggerHook: 0,
})
.setTween(timeline);

let scene1 = new ScrollMagic.Scene({
    triggerElement: ".anatomy",
    duration: "100%",
    triggerHook: 1,
})
.setTween(timeline1);

controller.addScene([
    scene,
    scene1
]);