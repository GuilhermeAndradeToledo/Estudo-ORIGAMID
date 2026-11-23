/*
!Tudo é um objeto:
!Por que tudo é um objeto?
!Funções tem métodos por padrão do javascript como por exemplos:

function Usuario(nome){
this.nome = nome;
};
Const novoUsuario = new Usuario("Myrella");

*.name: Usuario.name -> 'Usuario'

?.constructor: Quando usado na constante novoUsuario irá aparecer qual a função pai dele, saida->[Function: Usuario]
serve para fazer checagens paraq fins como
console.log(meuRobo.constructor === CriadorDeRobo); // Saída: true (Sim, foi ela)
console.log("Um texto".constructor === String);    // Saída: true (Sim, é um texto)
console.log([1, 2, 3].constructor === Array);      // Saída: true (Sim, é uma lista)

?.length: Serve para contar quantos parametro há em uma função, exemplo Usuario.length -> 1

?.toString: Ele literalmente cospe o código inteiro da função como se fosse um texto, exemplo
Usuario.toString -> "function Usuario(nome){this.nome = nome;}"
muito util para achar function de maneira rapida para debugg sem que tenha que procurar entre milhares de linhas de codigo

! //////////////////////////////////////////////////////////////////////////////////////////////////

!váriaveis tem muitos métodos por padrão do javascript como por exemplos:

*at(index): procura qual o caracterer de acordo com o index começando em 0 e o -1 prega o ultimo caracterer

?startsWith/.endsWith('string'): verifica se a variavel começa ou termina com a string dentro do metodo retornando false ou true 

?.includes('String'): verifica se a variavel tem a parte que esta na string dentro do metodo retornando true ou false

*.isWellFormed(string): Faz uma checagem de segurança no texto para saber se ele não possui nenhum caractere corrompido ou emoji cortado pela metade na memória. Retorna TRUE se o texto estiver seguro para ser transmitido na internet e FALSE se estiver inválido.

?.length: Confere quantos caracteres tem na string

*.link(link): adiciona um link no Texto html

*.normalize(): normaliza NFC

?.repeat(quantidade): repete a string quantas vezes for definido em quantidade

*.padEnd(max,stringparapreencher): repete a string no final ate alcançar a quantidade de caracteres desejados pelo max
*.padStart(max,stringparapreencher): repete a string no inicio ate alcançar a quantidade de caracteres desejados pelo max

?.slice(começo, fim): Corta um pedaço do texto

?.split(separador): corta uma String de acordo com o separador escolhido separando tudo em um array
let frase = 'Guilherme é muito lindo'
let listaDePalavras = frase.split(' ')
console.log(listaDePalavras); -> Saída: ['Guilherme', 'é', 'muito', 'lindo']

*.reverse(): Inverte a ordem dos itens de uma lista (Array) mudando a lista original. 

?.join(conector): Pega uma lista (Array) e junta todos os seus itens para virar um texto só (String), colando os itens com o conector que você escolher.
Exemplo: ['A', 'B'].join('-') -> 'A-B'
let fraseDeVolta = listaDePalavras.join(" ");
console.log(fraseDeVolta) -> 'Guilherme é muito lindo


let nome = "Guilherme";
let nomeInvertido = nome.split('').reverse().join('');
console.log(nomeInvertido); // Saída: "emrehliuG"

!Métodos de Limpeza de Texto (Strings)
?.trim(): Apaga espaços inuteis que o usuario digita nas pontas de um formulario; tem .trimEnd() e trimStart
let email = ' guilherme@gmail.com   ';
let emailCorrigido = email.trim();
console.log(emailCorrigido) -> 'guilherme@gmail.com'

?.toUpperCase()/.toLowerCase(): Deixa tudo de uma String em maiusculo ou minusculo

*.replace('PalavraParaTroca','PalavraQueVaiEntrar'): Procura a primeira palavra compativel no texto e troca por outra

?.replaceAll('PalavraParaTroca','PalavraQueVaiEntrar'): Procura TODAS as palavras compativeis no texto e troca pela outra ótimo para slug de palavras

*Concatenação (Juntar Textos): Existem 3 formas de juntar textos:
!1. O método .concat(): nome.concat(' ', sobrenome) -> "Lucas Silva" (Mais lento).
!2. O operador +: nome + ' ' + sobrenome -> "Lucas Silva" (Mais rápido).
?3. Template String (Recomendado): `${nome} ${sobrenome}` -> "Guilherme Morais" (Mais limpo e moderno).

! //////////////////////////////////////////////////////////////////////////////////////////////////////////

!Objetos tem métodos por padrão do javascript além dos próprios criados como por exemplos:
*.constructor: já explicado
*.hasOwnProperty("Atributo"): serve para verificar se tem o atributo escrito dentro da função no objeto exemplo
Guilherme.hasOwnProperty("Nome") ->True (tem no objeto)
Guilherme.hasOwnProperty("Feio") ->false (nao tem no objeto)

!OBJETOS TAMBÉM TÊM MÉTODOS ESTÁTICOS POR PADRÃO DO JAVASCRIPT:

*Object.assign(NomeObjeto,atributo: ''): (2/10) Esse método é como um caminhão de mudança, o primeiro parametro é o destino e o outro parametro é a mudança, não pode levar uma mudança para um terreno sem nada, logo não pode ser usado em uma variável vazia, tem que ser necessariamente um objeto, porém acabou caindo em desuso por conta do método com spread, mas é bom deixar anotado por conta de códigos legados de empresas

*Object.create(objetoPai): (3/10) Cria um objeto novo definindo manualmente qual objeto existente será o protótipo (pai) dele na linha de herança. O novo objeto consegue acessar todas as propriedades e funções do pai pelo fio invisível do protótipo. 
*Passar Object.create(null) cria um objeto 100% limpo que não herda nenhum método nativo do JavaScript.

?Object.defineProperties(objeto, { chaves... }):(6/10) Define ou modifica vários atributos de um objeto de uma vez só, permitindo configurar travas de segurança (descritores) para cada uma.
!Configurações importantes:
?- writable: false (torna o valor apenas leitura).
?- enumerable: false (esconde a chave de loops e listagens como Object.keys).
?- configurable: false (proíbe deletar a propriedade).
!Por padrão, tudo o que não for definido vira false.
*EXEMPLO:

*const testeTrava = {};

*Object.defineProperties(testeTrava, {
*  segredo: {
*    value: "Senha123",    // ! Define o valor de segredo!
*    writable: false,      // ! Travado! Não deixa alterar o valor
*    enumerable: false,    // ! Invisível! Some do Object.keys() e do for...in
*    configurable: false   // ! Blindado! Não deixa deletar a chave
*  }
*});
!Teste 1: Tentar mudar o valor
*testeTrava.segredo = "Mudei"; 
*console.log(testeTrava.segredo);  -> //? Saída: "Senha123" (Ignorou a mudança!)

! Teste 2: Tentar ver as chaves do objeto
*console.log(Object.keys(testeTrava)); ->//? Saída: [] (Array vazio, a chave ficou invisível!)

! Teste 3: Tentar deletar a chave
*delete testeTrava.segredo;
*console.log(testeTrava.segredo); ->//? Saída: "Senha123" (Continua lá, proibiu o delete!)


?Object.entries(objeto): (10/10)Transforma um objeto em um Array de Arrays, onde cada sub-array contém o par [chave, valor]. O tamanho do array final cresce de acordo com a quantidade de propriedades que o objeto possui. Muito útil para conseguir usar métodos de array (como .forEach ou .map) dentro de dados de objetos comuns. //!!!! MUITO UTIL PARA USAR METODOS DE ARRAYS EM OBJETOS!!!!
!Exemplo:
*Object.entries(Usuario).forEach(([chave,valor]) => {
*  console.log(`O campo ${chave} tem o conteudo: ${valor}`);  
*  }) ->Saida do log (O campo nome tem o conteúdo: Guilherme
*                     O campo idade tem o conteúdo: 17
*                     O campo admin tem o conteúdo: true)
 
!EXEMPLO 2:
* const casadinho = Object.entries(Guilherme).find(function eleCasadinho(item){
*   const chavinha = item[0];
*   const atributo = item[1];
*  if(chavinha === 'Casado' && atributo===true){
*    console.log('ele é casadinho fofinho')
* return true
* } else {
* console.log('ele é tristinho')
* return false
* }}) -> saida (
* 2x ele é tristinho
* ele é casadinho fofinho) pois no objeto Guilherme mostra que ele é casado no terceiro subarray apenas
* 
* comentario sobre o codigo: const casadinho = Object.entries(Guilherme).find(function eleCasadinho(item)
* quando se coloca o nome 'item' dentro da função automaticamente o js irá chamar todos os subarrays criados pelo Object.Entries de item

?Object.fromEntries(ArrayDePares): (8/10) é o caminho inverso e o par perfeito do Object.entries(). Ele pega um array de sub-arrays ou até um map() e reconstrói em um objeto novo. É muito importante por quê muitas vezes precisa usar métodos de array em um objeto e depois transformar o resultado em um objeto comum
!EXEMPLO
*const guilhermeEntries = Object.entries(Guilherme);
*const apenasBooleanos = guilhermeEntries.filter(([chave, valor]) => typeof valor === "boolean");
*const objetoFiltrado = Object.fromEntries(apenasBooleanos);
*console.log(objetoFiltrado); -> //? Saída: { Casado: true, Lindo: true }


?.freeze(objeto):(10/10) É o bloqueio absoluto do objeto, não é possivel editar, adicionar ou excluir nada do objeto, mesmo que digite alterações, apenas vai passar reto sem alterar as propriedades e os valores
!obs: não há um unfreeze, logo um objeto congelado não pode descongelar e o JS é imutável nesse ponto, logo, caso precise mudar algo que está congelado terá que criar um objeto novo copiando o antigo, usando o método de Spread 
*Exemplo .Freeze:
*const configuracoes = {
*  tema: "dark",
*  portaDoServidor: 8080
*};
*Object.freeze(configuracoes);
*configuracoes.tema = "light";
*configuracoes.bancoDeDados = "MySQL";
*delete configuracoes.portaDoServidor;
*console.log(configuracoes);  -> Saída: { tema: 'dark', portaDoServidor: 8080 } nenhuma alteração foi feita

!Exemplo da mudança
*Object.freeze(Guilherme);
*const guilhermeCopia = { ...Guilherme };

*guilhermeCopia.Nome = "Guilherme Morais (Editado)";
*guilhermeCopia.NovoAtributo = "Desenvolvedor JS";

*console.log(Object.isFrozen(Guilherme));     // -> Saída: true (O original continua no gelo!)
*console.log(Object.isFrozen(guilhermeCopia)); // -> Saída: false (A cópia tá soltinha!)
*console.log(guilhermeCopia.NovoAtributo); // -> Saída: "Desenvolvedor JS"

?.isFrozen(objeto):(6/10) confere se um objeto está congelado e retorna true ou false
*const configuracao = { tema: "dark" };
*console.log(Object.isFrozen(configuracao)); // -> Saída: false
*Object.freeze(configuracao);
*console.log(Object.isFrozen(configuracao)); // -> Saída: true

?Object.keys(objeto): (7/10) Mostra os atributos de um objeto sem mostrar o enumerable: false
*Object.keys(Guilherme); -> saida (6) ['Nome', 'Esposa', 'Casado', 'DatadeNascimento', 'Idade', 'Lindo']

?Object.values() (10/10):Retorna um array contendo só os valores do objeto. É o irmão gêmeo do Object.keys()
*const usuario = { nome: "Guilherme", cargo: "Dev" };
*console.log(Object.values(usuario)); //? -> ['Guilherme', 'Dev']

?Object.getOwnPropertyNames(objeto): (6/10) mostra os atributos de um objeto sem o filtro do enumerable de ocultar um atributo
?Object.getOwnPropertyNames(Guilherme)->(7) ['Nome', 'Esposa', 'Casado', 'DatadeNascimento', 'Idade', 'Lindo', 'Senha']

?Object.getOwnPropertyDescriptors(objeto): (7/10) Devolve um objeto contendo o raio-X completo de todas as propriedades e descritores do objeto consultado. É a única ferramenta nativa do JS capaz de fornecer os dados necessários para clonar um objeto sem perder suas configurações de segurança.
*const guilhermeClone = {};
*const raioX = Object.getOwnPropertyDescriptors(Guilherme);
*Object.defineProperties(guilhermeClone, raioX);
*console.log(Object.getOwnPropertyDescriptor(guilhermeClone, "Senha").enumerable); -> Saída: false (Manteve a trava de segurança!)
*console.log(Object.keys(guilhermeClone)); -> Saída: ['Nome', 'Esposa', 'Casado', 'DatadeNascimento', 'Idade', 'Lindo'] ignorou a senha

?Object.groupBy(array,FunçãoCallback): (10/10) pega uma Array, passa item por item numa função e separa tudo dentro de um objeto novinho organizando os itens em chaves baseadas no que a sua função retornar.// !MUITO IMPORTANTE PARA CATEGORIAS
!EXEMPLO
*const grupos = Object.groupBy(usuarios, (u) => {
*  return u.admin ? "administradores" : "usuariosComuns";
*});
*console.log(grupos);
?saida
?{
?  administradores: [
?    { id: 2, nome: 'Myrella', admin: true },
?    { id: 3, nome: 'Guilherme', admin: true }
?  ],
?  usuariosComuns: [
?    { id: 1, nome: 'Lucas', admin: false }
?  ]
?  }
!EXEMPLO 2:
*const mercadoPorTamanho = Object.groupBy(listaMercado, (item) => {
*  return item.length > 5 ? "nomesGrandes" : "nomesCurtos";
*});
*console.log(mercadoPorTamanho); //? -> Saída: { nomesCurtos: ['Arroz', 'coca'], nomesGrandes: ['alpino'] }

?Object.hasOwn(objeto, "propriedade"): (9/10) checa se uma propriedade pertence diretamente ao objeto
*console.log(Object.hasOwn(Guilherme, "Nome"));  -> Saída: true (O campo Nome tá direto no objeto)
*console.log(Object.hasOwn(Guilherme, "toString"));  -> Saída: false (toString existe, mas veio por herança do Object.prototype!)

*.is(valor1,valor2): mesma função do ===

*Object.isExtensible(objeto): (2/10) Retorna true ou false para indicar se é possível adicionar novas propriedades àquele objeto. Por padrão, qualquer objeto no JavaScript nasce expansível (true). Ele só retorna false se o objeto foi travado por Object.preventExtensions(), Object.seal() ou Object.freeze().

*Object.preventExtensions() (2/10): Apenas bloqueia a criação de novas chaves.

*Object.seal() (2/10): Trava a adição e remoção de propriedades, mas ainda deixa editar os valores existentes

*Object.isSealed(objeto): (2/10) Retorna true se o objeto estiver selado — ou seja, se for impossível adicionar novas chaves ou deletar as já existentes. A pegadinha é que um objeto selado ainda permite editar os valores que já estão lá dentro.

?Object.keys(objeto).length: (10/10) É o padrão absoluto do mercado para saber o "tamanho" de um objeto. Como o objeto não guarda essa contagem sozinho, o truque é transformar as chaves dele em um Array usando Object.keys() e puxar o .length desse array resultante.
!Exemplo
*const usuario = {
*  nome: "Guilherme",
*  esposa: "Myrella",
*  idade: 17
*};
!console.log(usuario.length); // -> undefined (errado)
?const quantidadeDeCampos = Object.keys(usuario).length;
?console.log(quantidadeDeCampos); // -> 3 (certo)

?call(Objeto, parametrosNormais...): (7/10)Executa na hora (passando os argumentos soltos)
?Ele chama a função imediatamente, trocando o this pelo objeto que você passou no primeiro parâmetro. Os outros parâmetros são os argumentos normais da função.
!EXEMPLO:
*function apresentar(profissao, cidade) {
*  console.log(`Meu nome é ${this.nome}, sou ${profissao} e moro em ${cidade}.`);
*}
*const usuario = { nome: "Guilherme" };
*apresentar.call(usuario, "Dev", "São Paulo"); //? -> Saída: "Meu nome é Guilherme, sou Dev e moro em São Paulo."

?apply(Objeto,[parametros]):(7/10) Executa na hora (passando os argumentos em Array)
?Faz exatamente a mesma coisa que o call(), só que os argumentos da função precisam vir juntos dentro de um único Array []
!EXEMPLO
*apresentar.apply(usuario, ["Dev", "São Paulo"]); //?-> Saída: "Meu nome é Guilherme, sou Dev e moro em São Paulo."

?bind(Objeto, parametrosPadrao...): (8/10) Não executa a função na hora. Ele cria e retorna uma FUNÇÃO NOVA com o 'this' travado no objeto que você escolheu.
!Diferente do .call() e .apply(), ele serve para guardar a função amarrada numa variável e disparar só quando você quiser (muito usado em eventos ou setTimeout).
!EXEMPLO:
*const usuario = {
*  nome: "Guilherme",
*  saudar() {
*    console.log(`Fala, eu sou o ${this.nome}`);
*  }
*};
! Se chamar direto por uma variável, o JS perde o 'this' (vira undefined)
! O .bind() resolve amarrando o dono original:
* 
*const saudarGuilherme = usuario.saudar.bind(usuario);
*saudarGuilherme(); //? -> Saída: "Fala, eu sou o Guilherme"

! /////////////////////////////////////////////////////////////////////////////////////////////

!Array tem métodos por padrão do javascript como por exemplos:

*const listaMercado = ['Arroz', 'coca', 'alpino'];

?.toSpliced(onde_começa, quantos_deleta, novos_itens...): Ele serve para remover, substituir ou adicionar itens em qualquer posição de uma lista. .splice() (que estragava a lista original), o .toSpliced() deixa a lista original intacta e te devolve uma cópia novinha com as alterações feitas.

!Para excluir um item com .toSpliced:
*const semCoca = listaMercado.toSpliced(1,1);
*console.log(semCoca)-> saida ['Arroz', 'alpino']

!Para trocar um item com o .toSpliced:
*const PepsiMelhorQueCoca = listaMercado.toSpliced(1,1,"pepsi");
*console.log(PepsiMelhorQueCoca) ->saida ['Arroz', 'pepsi', 'alpino']

!Para adicionar itens com o .toSpliced:
*const adicionado = listaMercado.toSpliced(0, 0,'cereal','chocolate');
*console.log(adicionado) -> saida ['cereal','chocolate','Arroz', 'coca', 'alpino']

!MUITO UTIL PELA MULTI FUNÇÃO

?.length: listaMercado.length-> saida (3)  conta quantos itens tem no array 

*.push(): Adiciona o que for escrito no final do array e retorna o tamanho do array, por exemplo:
listaMercado.push("toddy")/listaMercado.concat("toddy") -> saida(4)
listaMercado ->['Arroz', 'coca', 'alpino', 'toddy']

*.concat(): faz a mesma coisa do .push() mas cria uma lista nova sem alterar a original

!.forEach(Objeto => functionParaExecutar()): Passa de item em item do array executando a ação que você escreveu dentro dele. Ele não altera o array original e não gera uma lista nova (retorna sempre undefined). Muito útil quando você quer apenas "cuspir" dados na tela ou enviar informações para um banco de dados item por item.
*const usuarios = [
*  { id: 1, nome: "Lucas", admin: false },
*  { id: 2, nome: "Myrella", admin: true },
*  { id: 3, nome: "Guilherme", admin: true }
*];

*usuario.forEach(usuario => {
*console.log(`Buscando no banco o ID: ${usuario.id}`);
*}) -> Saída no log:
*Buscando no banco o ID: 1
*Buscando no banco o ID: 2
*Buscando no banco o ID: 3
!podendo ser a sintaxe NomeArray.forEach(function(ParametroNomeDoElemento,IndexDoElemento,ArrayInteira){
! Código
!});
?OBS: o Index do Elemento é totalmente opcional e a ArrayInteira tambem, sempre vai imprimir a array toda como parametro


*.reverse(): inverte os valores dentro de um array mudando o array original, exemplo
listaMercado.reverse()-> saida(3) ['alpino', 'coca', 'Arroz']


?toReversed(): inverte os valores dentro de um array SEM MUDAR o array original, exemplo
const listaReversa = listaMercado.reverse();
console.log(listaReversa)-> saida(3) ['alpino', 'coca', 'Arroz']
console.log(listaMercado)-> saida(3)['arroz','coca','alpino']

*.concat():concatena dois arrays

*.pop(): exclui o ultimo item do array e mostra no log qual item que foi
listaMercado.pop() -> saida("alpino")
listaMercado->listaMercado = ['Arroz', 'coca']

?.slice(start,end): corta uma parte do array de acordo com o parametro dado
listaMercado.slice(0,2) -> saida (2) ['Arroz', 'coca'] o 0 é o ponto de partida e o 2 o final, entao que se ser >=0 e <2
sendo criterioso com o >= e o <

?.at(index): mostra qual o item com o index o atributo passado como id ou numero na lista (começando em 0)
listaMercado.at(1)-> saida 'coca' pois é o item com o index 1 (0=arroz, 1=coca, 2=alpino e ...)

*.fill(valor,start,end): troca as informações pelo valor de acordo com o start e o end seguindo a logica do .slice
listaMercado.fill('comprado',1,2)-> saida(3)['arroz','comprado','comprado']

?.filter(functionParaFiltro): Filtra os dados de um array de acordo com o filtro,
O filter passa por cada número da lista (que chamamos de 'n')
const numeros =[10,15,8,3,16];
const maioresQueDez = numeros.filter(function(n) {
return n > 10; 
}); -> saida [15,16]

?.find(fuctionParaFiltro): traz apenas o primeiro item que ele encontrar e para de procurar na hora seguindo a mesma lógica do filter, exemplo
const usuarios = [
  { id: 1, nome: "Lucas", admin: false },
  { id: 2, nome: "Myrella", admin: true },
  { id: 3, nome: "Guilherme", admin: true }
];

const primeiroAdmin = usuarios.find(u => u.admin === true);
const todosOsAdmins = usuarios.filter(u => u.admin === true);

console.log(primeiroAdmin); 
 Saída: { id: 2, nome: "Myrella", admin: true } -> Parou na Myrella e trouxe só ela

console.log(todosOsAdmins); 
 Saída: [ 0: { id: 2, nome: "Myrella", admin: true }
          1: { id: 3, nome: "Guilherme", admin: true }] -> Trouxe a Myrella E o Guilherme dentro de uma lista

*findLast(fuctionParaFiltro): Mesma coisa do find mas ao inves do primeiro item pega o ultimo

*findIndex(fuctionParaFiltro): Mesma coisa do find mas pega apenas a posição no array
*findIndexLast(fuctionParaFiltro): Mesma coisa do findLast mas pega apenas a posição no array


?.map(modificacao): Ele serve para transformar uma array inteiro em um array novinho com as modificações descritas sem modificar o array original
?Pode se pensar no .map como uma fabrica que quando entrega uma lista de coisas, passa item por item dentro de uma esteira fazendo as modificações em cada um deles
?te entregando uma lista nova sem estragar a base, exemplo
const numeros = [1,2,3,4];
const dobro = numeros.map(n => n * 2);
console.log(dobro); -> Saída: [2, 4, 6, 8] -> Lista nova modificada
console.log(numeros); -> Saída: [1, 2, 3, 4] -> A lista original continua intacta
sendo muito util para extrair ou modificar dados que vêm do banco de dados. Por exemplo, pegar uma lista de produtos e aplicar um desconto neles

const produtos = [
  { nome: "Camiseta", preco: 100 },
  { nome: "Calça", preco: 200 }
];

const precosComDesconto = produtos.map(p => {
  return {
    nome: p.nome,
    preco: p.preco * 0.9 // Dá 10% de desconto
  };
});
console.log(precosComDesconto); -> Saída: [ { nome: 'Camiseta', preco: 90 }, { nome: 'Calça', preco: 180 } ]

!Dentro do .map(), sempre precisa usar a palavra return. O que você colocar depois do return será o novo valor daquela posição na lista. Se você esquecer do return, a sua nova lista vai ficar cheia de undefined.


?.flat: serve para achatar um array, caso tenha um array dentro de outro array, ele vai se desfazer e virar elementos separados dentro do array pai, e pega so uma camada
const listaComSubListas = [1, 2, [3, 4], [5, [6, 7]]];
const listaAchatada = listaComSubListas.flat(); -> [1,2,3,4,5,[6,7]]  o 6 e o 7 continuaram juntos pois eles estavam dentro do array que ja estava dentro do outro
precisaria de um flat(infinity)

?.flatMap(): junta as duas ultimas coisas em uma só. Por exemplo: 
const frases = ["Olá mundo", "JS é legal"];

const comFlatMap = frases.flatMap(f => f.split(" ")); //split foi explicado na parte dos metodos de variaveis

console.log(comFlatMap); -> saida ["Olá", "mundo", "JS", "é", "legal"]
!caso seja usado apenas o .map ficaria: saida do console -> [ ["Olá", "mundo"], ["JS", "é", "legal"] ]

?.includes(item): apenas confere se tem ou não o item no array
listaMercado.includes('Arroz')-> saida true
listaMercado.includes('açai')-> saida false

?.every: faz uma checagem lógica como o .includes porém em TODO MUNDO da lista. Ele só retorna TRUE se absolutamente TODOS os itens passarem no teste. Se apenas um falhar, ele retorna FALSE.
const idades =[19,20,18,80,70,40];
const todosMaiores = idades.every(idade => idade >= 18);
console.log(todosMaiores); -> Saída true (pois todos têm 18 ou mais)

const misturado =[19,18,20,50,15];
const todosMaioresMistura = misturado.every(idade => idade >= 18);
console.log(todosMaioresMistura); // -> Saída false (pois o 15 estragou a checagem)

*.indexOf(item): procura o item e retorna o index
listaMercado.indexOf('Arroz') -> saida 0
listaMercado.indexOf('macarrao') -> saida -1 (padrão quando não se encontra o item)

?.join(separador): concatena tudo na lista em uma string, separador padrão é a ,
listaMercado.join() -> saida 'Arroz,coca,alpino'
listaMercado.join(' ') -> saida 'Arroz coca alpino'
listaMercado.join(';') -> saida 'Arroz;coca;alpino'


*.reduce(funcaoAcumuladora, valorInicial): Ele serve para pegar uma lista inteira de valores e acumular/reduzir tudo a um único resultado final (que pode ser um número somado, um texto gigante ou até um objeto novo). 
*Pode-se pensar nele como uma esteira de repetição que carrega uma sacola de carona (o acumulador). A sua única obrigação é dar um return dizendo qual é o novo valor dessa sacola para a próxima volta.
const carrinho = [
  { produto: "Camiseta", preco: 50 },
  { produto: "Calça", preco: 150 },
  { produto: "Tênis", preco: 300 }
];
const totalAPagar = carrinho.reduce((sacola, item) => { return sacola + item.preco; }, 0); // O '0' é onde a sacola começa (Valor Inicial)
console.log(totalAPagar); // -> Saída 500 (Soma de 0 + 50 + 150 + 300)

*.reduceRight(): Funciona igual o .reduce só que faz da direita para a esquerda

?.toSorted(): Serve para ordenar o array em ordem alfabética ou em ordem numerica
const listaEmOrdemAlfabetica = listaMercado.toSorted()
console.log(listaEmOrdemAlfabetica) = saida (3) ['Arroz', 'alpino', 'coca']

const numeros = [10,2,80,5]
 Do menor para o maior:
const numerosCrescente = numeros.toSorted((a, b) => a - b);
console.log(numerosCrescente); -> Saída: [2, 5, 10, 80]

 Do maior para o menor (inverso):
const numerosDecrescente = numeros.toSorted((a, b) => b - a);
console.log(numerosDecrescente); -> Saída: [80, 10, 5, 2]

*.shift(): Exclui o primeiro item do array, faz todos os outros itens andarem uma posição para a frente e mostra no log qual foi o item removido. Modifica o array original diretamente.

*.unshift(itens...): Faz o oposto do .shift(), adicionando os itens descritos no começo do array e empurrando o resto para trás.


?.some(funcaoParaTeste): Faz uma checagem lógica na lista. Ele te devolve TRUE se pelo menos UM item passar no seu teste. Se ele rodar o array inteiro e ninguém passar, ele te devolve FALSE. Muito útil para descobrir se existe alguma exceção ou se um item específico está dentro de uma lista de objetos.
const usuarios = [
  { id: 1, nome: "Lucas", admin: false },
  { id: 2, nome: "Myrella", admin: true },
  { id: 3, nome: "Guilherme", admin: false }
];
const temAdmin = usuarios.some(u => u.admin === true);
console.log(temAdmin); -> Saída: true (Sim! Porque a Myrella é admin. Ele achou ela e já parou de procurar)

?.with(index, novoValor): Serve para alterar o item de uma posição específica do array. Ele deixa a lista original intacta e te devolve uma cópia novinha com a alteração feita. É a versão moderna, segura e imutável de fazer "lista[index] = novoValor".
const listaMercado = ["Arroz", "Coca", "Alpino"];
const listaNova = listaMercado.with(1, "Pepsi");
console.log(listaNova); -> Saída: ["Arroz", "Pepsi", "Alpino"] 


*.valueOf(): Retorna o valor primitivo bruto de um objeto. É o método que o JavaScript roda por baixo dos panos para conseguir somar ou comparar objetos matematicamente usando operadores como + ou >. Por Exemplo datas e etc...

!MÉTODOS ESTATICOS PARA ARRAYS

*Array.isArray(variavel) (10/10): A única forma real de testar se uma variável é uma lista.

*Array.from(objetoModificavel, callbackMap): (8/10) Método estático que transforma objetos "Array-like" (que parecem listas, como NodeLists do HTML ou Strings) em um Array legítimo com acesso a todos os métodos nativos (.map, .filter, etc). Aceita uma função opcional no segundo parâmetro que funciona como um .map() embutido para transformar os dados logo na criação da lista.

!MATH (MÉTODOS ESTÁTICOS PARA NÚMEROS)

?Math.random(): Gera um número quebrado aleatório entre 0 e 1.

?Math.round(n): Arredonda o número para o inteiro mais próximo.
*Math.floor(n): Corta os centavos e força o arredondamento para BAIXO.
*Math.ceil(n): Força o arredondamento para CIMA (teto).

*Math.max(valores...): Retorna o maior número da sequência enviada.
*Math.min(valores...): Retorna o menor número da sequência enviada.

*/