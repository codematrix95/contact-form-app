import { eventListeners } from "./modules/input/eventListeners.js";
import { blur } from "./modules/input/events/blur.js";
import { click } from "./modules/input/events/click.js";
import { keydown } from "./modules/input/events/keydown.js";

eventListeners(blur, click, keydown);
