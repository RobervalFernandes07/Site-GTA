/* 
Objetivo 1 - quando o usuário clicar no botão de seleçao de plataformas deve abrir uma caixa com os botões de seleção de plataformas 

         Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cime dele

         Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado

         Passo 3 - pegar o clique do usuario no JS 

         Passo 4 - quando o usuario clicar , adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça

Objetivo 2 - caso a lista de botões de plataformas ja esteja aparecendo e o usuário clicar em cima do botão , o conteúdo deve ser escondido
        
         Passo 1 - verificar se o botão ja esta aberto , se sim , devemos remover a classe ativo pra que ele esconda o conteúdo novamente.

*/

//Objetivo 1 - quando o usuário clicar no botão de seleçao de plataformas deve abrir uma caixa com os botões de seleção de plataformas 

// Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cime dele

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataformas .plataformas");

botao.addEventListener("click", () => {
    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

    if(botaoEstaAberto){
        elementoPlataformas.classList.remove("ativo");
    } else {
        elementoPlataformas.classList.add("ativo");
    }
});



