import { gsap } from "gsap";

export let fadeInTL = gsap.timeline();
fadeInTL.from("#background",{alpha:0, duration:3, scale:20})
        .from("#background",{alpha:0, stagger:0.25, duration:0.5},"-=2");