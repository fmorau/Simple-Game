import {Vector} from './mathematics.js';

export default class Entity {
		constructor() {
			this.position = new Vector(0,0);
			this.velocity = new Vector(0,0);
		}
	}