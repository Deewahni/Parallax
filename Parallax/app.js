gsap.registerPlugin(ScrollTrigger);
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
let timeline1 = new TimelineMax();
let timeline2 = new TimelineMax();
let timeline3 = new TimelineMax();
let timeline4 = new TimelineMax();
let timeline5 = new TimelineMax();


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
.fromTo(".nutrition-facts", { opacity:0 }, { opacity:1, duration: 1})
.fromTo(".h-benefits", { x:600 }, { x:0,duration: 1})
.fromTo(".nutrition-facts", { x:-500}, { x:0,duration: 1 })
.fromTo(".parts", { y:-500, opacity:0, scaleX:0,scaleY:0 }, { y:0, opacity:1, scale:0.8, duration: 1 });

timeline1
.fromTo("#durian-image1", {opacity:0,scaleX:0, scaleY:0}, {opacity:1,scale:1, duration:5})
.fromTo("#desc1", {opacity:0,scaleX:0, scaleY:0}, {opacity:1,scale:1, duration:5}, "-=5");

timeline2
.fromTo("#durian-image2", {opacity:0,scaleX:0, scaleY:0}, {opacity:1,scale:1, duration:5})
.fromTo("#desc2", {opacity:0,scaleX:0, scaleY:0}, {opacity:1,scale:1, duration:5}, "-=5");

timeline3
.fromTo("#durian-image3", {opacity:0,scaleX:0, scaleY:0}, {opacity:1,scale:1, duration:5})
.fromTo("#desc3", {opacity:0,scaleX:0, scaleY:0}, {opacity:1,scale:1, duration:5}, "-=5");

timeline4
.fromTo("#durian-image4", {opacity:0,scaleX:0, scaleY:0}, {opacity:1,scale:1, duration:5})
.fromTo("#desc4", {opacity:0,scaleX:0, scaleY:0}, {opacity:1,scale:1, duration:5}, "-=5");

timeline5
.fromTo("#durian-image5", {opacity:0,scaleX:0, scaleY:0}, {opacity:1,scale:1, duration:5})
.fromTo("#desc5", {opacity:0,scaleX:0, scaleY:0}, {opacity:1,scale:1, duration:5}, "-=5");

let scene = new ScrollMagic.Scene({
    triggerElement: "anatomy",
    duration: "100%",
    triggerHook: 1,
})
.setTween(timeline);

let scene1 = new ScrollMagic.Scene({
    triggerElement: "#sort1",
    duration: "100%",
    triggerHook: 1,
})
.setTween(timeline1);

let scene2 = new ScrollMagic.Scene({
    triggerElement: "#sort2",
    duration: "100%",
    triggerHook: 1,
})
.setTween(timeline2);

let scene3 = new ScrollMagic.Scene({
    triggerElement: "#sort3",
    duration: "100%",
    triggerHook: 1,
})
.setTween(timeline3);

let scene4 = new ScrollMagic.Scene({
    triggerElement: "#sort4",
    duration: "100%",
    triggerHook: 1,
})
.setTween(timeline4);

let scene5 = new ScrollMagic.Scene({
    triggerElement: "#sort5",
    duration: "100%",
    triggerHook: 1,
})
.setTween(timeline5);

controller.addScene([
    scene,
    scene1,
    scene2,
    scene3,
    scene4,
    scene5
]);