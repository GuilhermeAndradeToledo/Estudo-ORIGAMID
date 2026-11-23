//! variaveis e constante
var variaveltotal = "";
let variavelEscopo = 0;
const Variavelconstante = true;

//! Sintaxe da Function e ifelse
function NomeDaFuncao(parametro) {
  if (parametro === true) {
    // SE parametro for true irá fazer essas linhas se código
    let resposta = "parametro é verdadeiro";
    return resposta;
  } else {
    //SENÃO for true, irá fazer essas
    let resposta = "parametro é falso";
    return resposta;
  }
}
//! if abreviado (só pode 1 linha de codigo)

let possuiFaculdade = true;

if(possuiFaculdade)
  console.log('possui facul')
else
  console.log('nao possui facul')

// console.log(NomeDaFuncao(1)) irá aparecer 'parametro é verdadeiro'

/*//? True e False

//? Quando é True? 

string com caracteres dentro, tipo: 
var verdadeiro = " " 
mesmo parecendo nao ter nada dentro, espaço é um caracterer

Numeros diferentes de 0, QUALQUER NUMERO DIFERENTE DE 0, dentro e fora dos reais, positivo e negativo, só nao pode ser 0

Quando for setado bolean true, tipo:

let myrellaLindona = true;

Ou return de funções e teste de falsy e truth

//! Quando é false?

String vazia, exemplo:     
let falso = "";

Número 0, exemplo:
let falso = 0;

Quando a variável é null
let informacao = null;
ou
let informação;

Quando é um NaN (not a number)

Ou quando é undefined

ou quando há um bolean false definido ou uma função que retorna false

*/
// !Objetos, atributos/propriedades

let Guilherme = {
  Nome: "Guilherme", // ? Atributo/propriedade
  Esposa: "Myrella Andrade",
  Casado: true,
  DatadeNascimento: "10/02/2009",
  Idade() {
    let AnoDeNasc = this.DatadeNascimento.slice(6, 10); // ! this. pega o DatadeNascimento do objeto, sem o this. pegagaria algo fora do escopo do objeto
    let AnoAtual = new Date().getFullYear();
    let idade = AnoAtual - AnoDeNasc;
    return idade;
  }, //Metodo
  Lindo: true,
}; //objeto
Object.defineProperty(Guilherme, "Senha", {
  //Define um novo atributo no objeto guilherme
  value: "G101025M", //passa valor
  writable: false, // Não deixa editar!
  enumerable: false, // Esconde do Object.keys()!
  configurable: false, // Não deixa deletar!
});

/*
!Dot Notation Get 
?Acesso a propriedades de um objeto apartir de um . 
por exemplo

const MulherMaisLindaDoMundo = Guilherme.Esposa;

caso eu coloque um console.log(MulherMaisLindaDoMundo); irá aparece a propriedade Esposa do objeto Guilherme 
"Myrella Andrade"

?e isso tambem funciona para chamar métodos dentro do objeto Guilherme

*podendo ser muito util para parte de animações e css
*/

const MulherMaisLindaDoMundo = Guilherme.Esposa;
//console.log(MulherMaisLindaDoMundo)
//^-- Myrella Andrade vai aparecer no console do navegador

//! Arrays
const listaMercado = ["Arroz", "coca", "alpino"];
const usuarios = [
  { id: 1, nome: "Lucas", admin: false },
  { id: 2, nome: "Myrella", admin: true },
  { id: 3, nome: "Guilherme", admin: true },
];

//! FOR LOOP e While Loop
for (
  let i = 0;
  i < 10;
  i++ //basicamente: (for=para) i é igual a 0, enquanto i for menor que 10 irã executar o codigo, mas a cada execução irá incrementar i em 1 repetindo 9 vezes; //! para sempre que i que é 0 for menor que 10 incremente 1 em i e execute o codigo
) {
  console.log(i);
}

let i = 0;
while (i < 10) {
  // basicamente, (while=enquanto) //! enquanto i for menor que 10, repita o codigo abaixo
  console.log(i);
  i++;
}

//Arrays e loops

//const VideoGames = ['XBOX','ps4','Switch','3ds','gameboy']

//for(let itens=0;itens < VideoGames.length; itens++){
// console.log(VideoGames[itens]);}
/* -> saida (
  XBOX
  ps4
  Switch
  3ds
  gameboy)*/

//! BREAK
//O Loop irá parar caso encontro e palavra break
//const VideoGames = ["XBOX", "ps4", "Switch", "3ds", "gameboy"];

//for (let itens = 0; itens < VideoGames.length; itens++) {
//  console.log(VideoGames[itens]);
//  if (VideoGames[i] === "Switch") {
//    break;
//  }
//} 
/* saida do console ->
(XBOX
ps4
Switch)
*/

//Muito mais fácil o metodo forEach

/* //! ATRIBUIÇÃO
!  var x = 20;
!  var y = 10;
!  
!   x += y // x = x+y
!   x -= y // x = x-y
!   x *= y // x = x*y
!   x /= y // x = x/y
!   x %= y // x = x % y  (módulo/ resto da divisao)
!   x **= y // x= x **y  (Potência)

?TERNARIOS Abreviação de condicionais if e else
? 
? let idade=19;
? let podeBeber (idade >= 18) ? 'pode beber' : 'não pode beber';
? console.log(podeBeber) //pode beber

! SINTAXE: !!!!!!!!!!!
! condição ?true :false
! CASO VERDADEIRO VAI RETORNAR O QUE VAI VIR DEPOIS DO ? 
! CASO FALSO VAI RETORNAR O QUE VAI VIR DEPOIS DO :
! PODE SER QUALQUER TIPO DE DADOS OU FUNÇÃO/ARRAY/OBJETO/MÉTODO
*/
