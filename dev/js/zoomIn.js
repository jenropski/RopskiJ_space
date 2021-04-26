import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#background",{transformOrigin:"center"});


zoomTL.from("#ufo",{duration:3, scale:10,ease: "power4.out",y:"+=1500"},"zoom")
            .from("#background",{duration:5.75, scale:10,ease: "power4.out",y:"+=800"},"zoom")
            .from("#cactus1",{duration:5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#cactus2",{duration:5, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#cactus3",{duration:4.75, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#mountains",{duration:4.75, scale:10,ease: "power4.out",y:"+=420"},"zoom")
            .from("#spaceship",{duration:4.75, scale:10,ease: "power4.out",y:"+=420"},"zoom")