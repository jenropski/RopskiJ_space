import { gsap } from "gsap";

export let shootingStarsTL = gsap.timeline();

shootingStarsTL.from("#shootingstar1",{duration: 3, y:"-500", x:"1000", scale: 3, ease: "expo.out"},"upAndAway")
        .from("#shootingstar2",{duration: 3, y:"-500", x:"1000", scale: .5, ease: "expo.out"},"upAndAway")
        .from("#shootingstar3",{duration: 3, y:"-500", x:"1000", scale: .5, ease: "expo.out"},"upAndAway")
