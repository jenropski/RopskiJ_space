import { gsap } from "gsap";

gsap.set("#planet",{transformOrigin:"center"})
gsap.set("#ufo",{transformOrigin:"center"})
;


export let planetZoomTL = gsap.timeline();

planetZoomTL.fromTo("#planet",{alpha:0, scale:0.1},{alpha:2, duration:7, scale:1.5, y:"+=60", x:"+=0",ease:"power4.in"})
// .fromTo("#ufo",{alpha:0, scale:0.1},{alpha:2, duration:1, scale:1, y:"+=100", x:"+=0",ease:"power4.in"})
