let input = gets();

let qtdEntradas = parseInt(input);
let nivelEnergia;

for(let i = 0; i < qtdEntradas; i++){
    input = gets();
    nivelEnergia = parseInt(input);
    
    if(nivelEnergia <= 8000){
        print("Inseto!")
    }else{
        print("Mais de 8000!")
    }
}