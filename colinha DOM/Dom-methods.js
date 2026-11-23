 /* //! Methods DOM 
 
 ?Procurar Classes

 !document.querySelector('classe'): Pega o primeiro elemento com o nome da classe dentro dos parentêses
 !document.querySelectorALL('classe'): retorna todas os elementos com o nome da classe dentro dos parentêses
 
 ?document.getElementById('idAnimais'): Seleciona e retorna o elemento pelo id e retorna null caso não exista
 *Const contatoSection = document.getElementById('contato');
 *Const animaisSection = document.getElementById('Animais');
 !Const animaisSection = document.getElementById('animalescos');
 ?document.getElementByClassName('grid-section'): Seleciona e retorna uma HTMLCollection (Parece um array)
 *Const animaisSection = document.getElementByClassName('grid-section'); // retorna todas as classes tem tem 'grid-section'
 *Const animaisSection = document.getElementByClassName('grid-section contato'); // retorna todas as classes tem tem 'grid-section' E 'contato'
?document.getElementsByTagName('footer'): Seleciona e retorna uma HTMLCollection (Parece um array)
* const ul = document.getElementsByTagName('ul'); //retorna todas as ul's

?document.QuerySelector(''): retorna o primeiro elemento que combina com o seu seletor CSS
* const animais = document.QuerySelector('.animais');
* const contato = document.QuerySelector('#contato');
* const ultimoItem = document.QuerySelector('.animais-lista li:last-child');
* const linkCSS = document.QuerySelector('[href^="https://"]');
* const primeiroUL = document.QuerySelector('ul');

?document.QuerySelector(''): retorna todos os elementos que combinam com o seu seletor CSS retornando uma nodeList
*/

document.getElementByClassName('grid-section');
console.log(gridSection[0]); //! retorna o primeiro elemento

const primeiroUL = document.QuerySelector('ul');
const navItem = primeiroUL.QuerySelector('li'); //! busca dentro do UL apenas

const animaisFotos = document.querySelectorAll('.animais img');
console.log(animaisFotos[2]); //retorna o terceiro indicio de '.grid-section'