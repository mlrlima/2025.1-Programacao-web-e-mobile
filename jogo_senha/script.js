const qualPagina=document.location.pathname.split("/").pop(); //ver qual pagina chamou o js

if(qualPagina==="index.html"){
    document.getElementById("jogar_botao").addEventListener("click", function(){ //abrir a pg do jogo
        window.location.href="jogo.html";
    });
}else{
    function gerarSenha(){
        let digitos=new Set();
        while(digitos.size<5){ //gerar 5 numeros aleatorios
            digitos.add(Math.floor(Math.random()*10));
        }
        return Array.from(digitos);
    }

    function addHistorico(){
        let historyDiv=document.getElementById("historico");
        historyDiv.innerHTML = historico.map(entry => `
            <p>${entry.tentativa} - 
                ${'🐄'.repeat(entry.regular)} 
                ${'🍄'.repeat(entry.mushroom)}
            </p>
        `).join('');
    }

    const senha=gerarSenha();
    let tentativas=0;
    const maxTentativas=15;
    const historico=[];

    function verificarInput(){
        tentativas++;
        const input=document.getElementById("userInput").value;
        if(!/^[0-9]{5}$/.test(input)){
            alert("Digite apenas 5 dígitos diferentes de 0 a 9.");
            return;
        }
        
        let tentativa=input.split('').map(Number);
        let qtdMushroom=0, qtdRegular=0;
        
        tentativa.forEach((num, i)=>{ //comparando com a senha gerada
            if(num===senha[i]) qtdMushroom++; //num certo pos certa
            else if (senha.includes(num)) qtdRegular++; //num certo pos errada
        });
        
        historico.unshift({tentativa:input, mushroom: qtdMushroom, regular: qtdRegular });
        addHistorico();
        
        if(qtdMushroom===5){ //acertou td
            document.getElementById("resultado").innerHTML="🎉 Parabéns! Você acertou a senha!";
            document.getElementById("submitBtn").disabled=true; //desabilitar botao de input
            return;
        }else if(tentativas>=maxTentativas){
            document.getElementById("resultado").innerHTML= `😢 Você perdeu! A senha era: ${senha.join('')}`;
            document.getElementById("submitBtn").disabled=true; //desabilitar botao de input
            return;
        }
    }

    document.getElementById("submitBtn").addEventListener("click", verificarInput);
}