import { gsap } from "gsap";

export let asteroidFlyTL = gsap.timeline();
gsap.set("#asteroid",{transformOrigin:"right"});
gsap.set("#asteroid2",{transformOrigin:"right"});

asteroidFlyTL.fromTo("#asteroid",{duration: 3, y:"-500", x:"1000", scale: 3, ease: "expo.out"})
        .fromTo("#asteroid2",{duration: 3, y:"-500", x:"1000", scale: .5, ease: "expo.out"})
