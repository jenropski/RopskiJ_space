import { gsap } from "gsap";

gsap.set("#space-ship",{transformOrigin:"center"});

export let liftOffTL = gsap.timeline();

liftOffTL.to("#spaceship",{duration:1, y:"-7", rotation: -1, repeat: 2, ease: "power4.in"},"upAndAway")
        .to("#spaceship",{duration:1, y:"5", rotation: 1, ease: "power4.in"},"upAndAway")
        .to("#spaceship",{duration:7, y:"-1000", ease: "power4.in"},"upAndAway")
        .to("#cactus1",{duration:5, y:"1000", ease: "power4.in"},"upAndAway")

