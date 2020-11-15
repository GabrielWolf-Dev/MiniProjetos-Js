
function addCamisa() {

    const camisa_masculinaTxt = document.getElementById('camisa_masculina');
    const camisa_masculina = Number(camisa_masculinaTxt.value);
    const camisaCarrinho = document.getElementById('camisaM_carrinho');

    if (camisa_masculina === '' || camisa_masculina == 0) {
        
        alert("Você não adicionou nenhum produto no carrinho");
        
    }else if(isNaN(camisa_masculina)){

            /*
            Como o "camisa_masculina" é somente Number, se haver uma String, o Js vai entender que é NaN(Not a Number),
            então para verificar quando inserir um NaN no input, é utilizado a função Nativa isNaN(variável) que 
            verifica se a variável é NaN.
            DETALHE que essa função não funciona com Operadores ("==" ou "==="). 
            */

        alert("Por favor, não insira caracteres, somente a quantidade em números");

    }else {

        if(camisa_masculina > 10) {
            camisaCarrinho.innerHTML = `Acabou o estoque... O máximo é 10`;
        } else if (camisa_masculina == 10) {
            camisaCarrinho.innerHTML = `Você adicionou ${camisa_masculina} camisas no carrinho, acabou com o nosso estoque!!!!`;
        }else {
            camisaCarrinho.innerHTML = `Você adicionou ${camisa_masculina} camisas no carrinho.`;
        }

    }

}

function addCalca() {

    const calca_masculinaTxt = document.getElementById('calça_masculina');
    const calca_masculina = Number(calca_masculinaTxt.value);
    const calcaCarrinho = document.getElementById('calcaM_carrinho');

    if (calca_masculina == '' || calca_masculina == 0) {

        alert("Você não adicionou nenhum produto no carrinho");
        
    }else if(isNaN(calca_masculina)) {

        alert("Por favor, não insira caracteres, somente a quantidade em números");
        
    }else {

        if(calca_masculina > 10) {
            calcaCarrinho.innerHTML = `Acabou o estoque... O máximo é 10`;
        } else if (calca_masculina == 10) {
            calcaCarrinho.innerHTML = `Você adicionou ${calca_masculina} calças no carrinho, acabou com o nosso estoque!!!!`;
        }else {
            calcaCarrinho.innerHTML = `Você adicionou ${calca_masculina} calças no carrinho.`;
        }

    }

}

function addSapato() {

    const sapato_masculinaTxt = document.getElementById('sapato_masculina');
    const sapato_masculina = Number(sapato_masculinaTxt.value);
    const sapatoCarrinho = document.getElementById('sapatoM_carrinho');

    if (sapato_masculina == '' || sapato_masculina == 0) {

        alert("Você não adicionou nenhum produto no carrinho");

    }else if(isNaN(sapato_masculina)){

        alert("Por favor, não insira caracteres, somente a quantidade em números");

    }else{

        if(sapato_masculina > 10) {
            sapatoCarrinho.innerHTML = `Acabou o estoque... O máximo é 10`;
        } else if (sapato_masculina == 10) {
            sapatoCarrinho.innerHTML = `Você adicionou ${sapato_masculina} sapatos no carrinho, acabou com o nosso estoque!!!!`;
        }else {
            sapatoCarrinho.innerHTML = `Você adicionou ${sapato_masculina} sapatos no carrinho.`;
        }

    }

}