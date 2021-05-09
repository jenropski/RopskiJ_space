import { gsap } from "gsap";

export let asteroidFlyTL = gsap.timeline();
gsap.set("#asteroid",{transformOrigin:"left"});
gsap.set("#asteroid2",{transformOrigin:"left"});

asteroidFlyTL.from("#asteroid",{duration: 3, y:"-500", x:"1000", scale: 3, ease: "expo.out"},"upAndAway")
        .from("#asteroid2",{duration: 3, y:"-500", x:"1000", scale: .5, ease: "expo.out"},"upAndAway")
