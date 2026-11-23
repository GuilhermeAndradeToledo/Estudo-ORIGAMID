/* //! O que é o DOM?
? DOM (Document object model) é a representação do Documento HTML/XmL através de objetos, com o DOM é possivel manipular a estrutura HTML/CSS e conteúdo destes documentos
*Como se estrutura o DOM? já que o DOM é a representação do Documento HTML no formato de objeto, A estrutura familiar do DOM é a seguinte:
!window ----> Outros objetos e Métodos 
! >objeto location    >objeto document     >objeto navigator (navegadores, google chrome e tals)

*/

const animais = document.getElementById('animais')
//console.log(animais);

console.dir(document)
console.dir(window)
console.dir(location)
//location.reload() // dá um refresh na página