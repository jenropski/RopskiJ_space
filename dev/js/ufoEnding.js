import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);


export let ufoEndingTL = gsap.timeline();
gsap.set("#ufo",{transformOrigin:"center"});

ufoEndingTL.from("#ufo", {
    duration: 8,
    motionPath: {
        path: "#ufoPath",
        align:"#ufoPath",
        alignOrigin: [1.9, 4.5],
        autoRotate: 90
    },
    ease: "none",
    scale:1.5
});

