import Lingkaran from "./lingkaran.js";

export default class Kerucut extends Lingkaran {
    constructor(r, t){
        super(r);
        this.t = t;
    }
    //garis pelukis (menggunakan rumus pitagoras)
    s = () => {
        return Math.sqrt((this.r * this.r)+(this.t * this.t));
    }
    volume = () => {
        return (1/3) * (22/7) * this.r * this.r * this.t;
    }
    selimut = () => {
        const s = this.s();
        return (22/7) * this.r * s;
    }
    permukaan = () => {
        const luasSelimut = this.selimut();
        return ((22/7) * this.r * this.r) + luasSelimut;
    }
};