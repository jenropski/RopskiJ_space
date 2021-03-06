import { gsap } from "gsap";

gsap.set("#space-ship",{transformOrigin:"center"});

export let liftOffTL = gsap.timeline();

liftOffTL.to("#spaceship",{duration:1, y:"-7", rotation: -1, repeat: 2, ease: "power4.in"},"upAndAway")
        .to("#spaceship",{duration:1, y:"5", rotation: 1, ease: "power4.in"},"upAndAway")
        .to("#spaceship",{duration:10, y:"-10", ease: "power4.in"},"upAndAway")
        .to("#stars",{duration:15, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#cactus1",{duration:10, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#cactus2",{duration:10, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#cactus3",{duration:10, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#mountains",{duration:10, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#background",{duration:10, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#moon",{duration:15, y:"1000", ease: "power4.in"},"upAndAway")
        .to("#sun",{duration:15, y:"1000", ease: "power4.in"},"upAndAway")

        


