export default class Lingkaran {
    constructor(r){
        this.r = r;
    }
    luas = () => {
        return (22/7) * r * r;
    }
    keliling = () => {
        return (22/7) * 2 * r;
    }
};