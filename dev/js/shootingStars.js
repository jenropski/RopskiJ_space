import { gsap } from "gsap";

export let shootingStarsTL = gsap.timeline();

shootingStarsTL.fromTo("#shootingstar1",{y:"-200",x:"1000"},{duration: 4, y:"400", x:"-1200", scale: 3, ease: "expo.out"})
        .fromTo("#shootingstar2",{y:"700",x:"-1000"}, {duration: 4, y:"100", x:"900", scale: 4, ease: "expo.out"})
        .fromTo("#shootingstar3",{y:"600",x:"1000"}, {duration: 4, y:"-100", x:"-1550", scale: 7, ease: "expo.out"})
