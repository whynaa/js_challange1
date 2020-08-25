import Lingkaran from "./lingkaran.js";

export default class Tabung extends Lingkaran {
    constructor(r, t){
        super(r);
        this.t = t;
    }
    volume = () => {
        return (22/7) * this.r * this.r * this.t;
    }
    selimut = () => {
        return (22/7) * 2 * this.r * this.t;
    }
    permukaan = () => {
        const luasSelimut = this.selimut();
        return (2 * (22/7) * this.r * this.r) + luasSelimut;
    }
};