//1 - crie uma função que exiba uma mensagem no console
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function mostrarNome(nome){
    console.log(`Meu nome é ${nome}`)
    
}
mostrarNome(`Lopes`)


//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function dadosPessoais() {
    var nome = 'Lopes';
    var idade = 20;
    var estiloMusical = 'Rap';
    return `${nome}, ${idade}, ${estiloMusical}`;
    return(dadosPessoais);
}

console.log(dadosPessoais());

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function outrosDado() {
    var filmePreferido = 'Hobbit uma Jornada Inesperada'
    var musica = 'Favela Vive 5'
    return `${filmePreferido}, ${musica}`
    return(outrosDado)
}
console.log(outrosDado())

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function equilatero(lado){
return lado * 3;
}
console.log(equilatero(6))

//6 - crie uma função que  verifique se uma  variável é true ou false
function adulto(idade){
    if (idade >=18) {
        return true;
    } else{
        return false;
    }
}
console.log(adulto(18))