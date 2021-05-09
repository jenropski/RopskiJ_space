import { gsap } from "gsap";

export let asteroidFlyTL = gsap.timeline();

asteroidFlyTL.from("#asteroid",{duration: 3, y:"-500", x:"1000" , yoyo:true, scale: 3, ease: "power4.in"},"upAndAway")
        .from("#asteroid2",{duration: 3, y:"-500", x:"1000", yoyo:true, scale: 3, ease: "power4.in"},"upAndAway")
