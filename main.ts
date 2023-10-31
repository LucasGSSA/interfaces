interface IAnimal {
    nome:string,
    idade: number,
}

interface IGato extends IAnimal{
    cor: string,
    miar(miado:string):void
}

interface ICaninos extends IAnimal{
    raca: string,
    

}



class Cachorro implements ICaninos{
    constructor(
        public nome:string,
        public idade: number,
        public raca: string,
        
    ){}
    

    latir():void{
        console.log(`O cachorro ${this.nome} está Latindo!`);
    }
}



class Lobo implements ICaninos{
    constructor(
        public nome: string,
        public idade: number,
        public raca:string = "lobo",
    ){}

    uivar(){
        console.log(`O lobo ${this.nome} está uivando!`);
        
    }
}


const gatinho: IGato = {
    nome: "Frajola",
    idade: 1,
    cor: "laranja",
    miar(miado:string){
        console.log(`O gado miou: "${miado}"`);
    }
};

const lobinho: Lobo = {
    nome: "lobinho",
    idade: 1,
    raca: "lobo",
    uivar(){
        console.log(`O lobo ${lobinho.nome} está uivando`);
    }
}

lobinho.uivar();
