interface IAnimal {
    nome:string,
    idade: number,
}

interface IGato extends IAnimal{
    cor: string,

}
/////////////
const gatinho: IGato = {
    nome: "Frajola",
    idade: 1,
    cor: "laranja",
}


class Cachorro implements IAnimal{
    constructor(
        public nome:string,
        public idade: number,
        public raca: string,
    ){}
    

    latir():void{
        console.log(`O cachorro ${this.nome} está Latindo!`);
    }
}

///////////////////////////////

