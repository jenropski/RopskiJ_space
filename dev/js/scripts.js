import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import {numberThing} from "./demo-this"

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { liftOffTL } from "./liftOff"
import { planetZoomTL } from "./planetZoom"
import { landingTL } from "./landing"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)

        .add(zoomTL)

        .add(liftOffTL)
        
        .add(planetZoomTL)

        .add(landingTL);


// console.log(numberThing);

GSDevTools.create();
