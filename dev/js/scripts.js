import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import {numberThing} from "./demo-this"

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { liftOffTL } from "./liftOff"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)

        .add(zoomTL)

        .add(liftOffTL);


// console.log(numberThing);

GSDevTools.create();