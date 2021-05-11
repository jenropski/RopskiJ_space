import { gsap } from "gsap";

export let asteroidFlyTL = gsap.timeline();
gsap.set("#asteroid",{transformOrigin:"right"});
gsap.set("#asteroid2",{transformOrigin:"right"});

asteroidFlyTL.fromTo("#asteroid",{y:"300",x:"500"},{duration: 3, y:"500", x:"-1200", scale: 1, ease: "expo.out"})
        .fromTo("#asteroid2",{y:"400",x:"1000"}, {duration: 3, y:"200", x:"-800", scale: 1, ease: "expo.out"})
