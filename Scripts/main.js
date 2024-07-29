function criptografar(data) {
    return data;
}

function descriptografar(data) {
    return data;
}


/*
transformFunction: criptografar() ou descriptografar()
*/
function transformarTexto(transformFunction) {
    
    var input = document.querySelector(".input__area__text").value;
    var output_area = document.querySelector(".output__area");
    
    var output = transformFunction(input);
    
    
    output_area.style.alignItems = "start";
    output_area.style.justifyContent = "flex-start";

    output_area.innerHTML = `   <div class="output__area__text">
                                    <p class="output__area__text__result">${output}</p> 
                                </div>`;

}

function limpaOutput() {
   
    var textoPadrao = ` <img src="Assets/High quality products 1 1.png" alt="Logo de um garoto com uma lupa desvendando o texto" class="output__area__image">
                        <div class="output__area__text">
                            <h2>Nenhuma mensagem encontrada</h2>
                            <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
                        </div>`;

    var output_area = document.querySelector(".output__area");
    output_area.innerHTML = textoPadrao;
}

