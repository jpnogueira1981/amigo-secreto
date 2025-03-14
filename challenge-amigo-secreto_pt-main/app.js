const strings = [];

function adicionarAmigo() {
    const novaString = document.getElementById("novaString").value;
    strings.push(novaString);
    document.getElementById("novaString").value = ""; // Limpa o campo de entrada
    atualizarListaStrings();
}

    /*if (novaString) {
      strings.push(novaString);
      document.getElementById("novaString").value = ""; // Limpa o campo de entrada
      atualizarListaStrings();
        }
    }*/
    
  

 function atualizarListaStrings() {
    document.getElementById("listaStrings").textContent = "Strings: " + strings.join(", ");
  }

  function sortearAmigo() {
    if (strings.length > 0) {
      const indiceAleatorio = Math.floor(Math.random() * strings.length);
      const stringSorteada = strings[indiceAleatorio];
      document.getElementById("resultado").textContent = "String sorteada: " + stringSorteada;
    } else {
      document.getElementById("resultado").textContent = "Nenhuma amigo disponível para sortear.";
    }
  }