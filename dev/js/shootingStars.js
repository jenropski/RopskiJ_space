import { gsap } from "gsap";

export let shootingStarsTL = gsap.timeline();

shootingStarsTL.from("#shootingstar1",{duration: 2, y:"-500", x:"1000", scale: 3, ease: "expo.out"})
        .from("#shootingstar2",{duration: 2, y:"500", x:"1000", scale: .5, ease: "expo.out"})
        .from("#shootingstar3",{duration: 2, y:"-500", x:"1000", scale: .5, ease: "expo.out"})
