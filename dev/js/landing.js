import { gsap } from "gsap";

export let landingTL = gsap.timeline();

landingTL.to("#aestroid1",{duration:1, y:"-7", rotation: -1, repeat: 2, ease: "power4.in"})