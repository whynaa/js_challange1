import Lingkaran from "./lingkaran.js";

export default class Bola extends Lingkaran {
    constructor(r){
        super(r);
    }
    volume = () => {
        return (4/3) * (22/7) * this.r * this.r;
    }
    permukaan = () => {
        return 4 * (22/7) * this.r * this.r;
    }
};