import { gsap } from "gsap";

export let landingTL = gsap.timeline();
        landingTL.to("#spaceship",{duration:1.5, x:"-=100", y:"-=200", scale: 0.1, rotation:"-=15"} )