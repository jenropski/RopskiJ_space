import { gsap } from "gsap";

gsap.set("#planet",{transformOrigin:"center"});


export let planetZoomTL = gsap.timeline();

planetZoomTL.fromTo("#planet",{alpha:0, scale:0.1},{alpha:2, duration:4, scale:1.5, y:"+=60", x:"+=0",ease:"none"})
.fromTo("#ufo",{alpha:0, scale:0.1},{alpha:2, duration:3, scale:1, y:"+=100", x:"+=0",ease:"none"})
