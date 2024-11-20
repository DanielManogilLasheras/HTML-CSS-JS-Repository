class card{
    value;
    image;
    constructor(representation){
        this.image=`${representation}.png`;
        this.value=representation.substring(0,representation.length-1);
        switch(this.value){
            case "J":
                this.value=11;
                break;
            case "Q":
                this.value=11;
                break;
            case "K":
                this.value=11;
                break;
                default:
                    this.value=parseInt(this.value);
                    break;
        }
    }
}