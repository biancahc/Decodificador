function codificaTexto() {
  let textoCodificado = '';
  let textoCodificar = document.getElementById('texto-codificar').value;

  if (/[A-Z\u00C0-\u00FF]/.test(textoCodificar)) {
    alert('Apenas letras minúsculas e sem acento!');
    return;
  }

  for (let i = 0; i < textoCodificar.length; i++) {
    let letraAtual = textoCodificar[i];
    if (letraAtual == 'e') {
      textoCodificado += 'enter';
    }
    else if (letraAtual == 'i') {
      textoCodificado += 'imes';
    }
    else if (letraAtual == 'a') {
      textoCodificado += 'ai';
    }
    else if (letraAtual == 'o') {
      textoCodificado += 'ober';
    }
    else if (letraAtual == 'u') {
      textoCodificado += 'ufat';
    } else {
      textoCodificado += letraAtual;
    }
  }
  document.getElementById('texto-codificado').value = textoCodificado;

  if (textoCodificado.length > 0) {
    document.getElementById('texto-preenchido').style.display = 'flex';
    document.getElementById('texto-vazio').style.display = 'none';
  } else {
    document.getElementById('texto-preenchido').style.display = 'none';
    document.getElementById('texto-vazio').style.display = 'flex';
  }
}

function decodificaTexto() {
  let textoDecodificado = document.getElementById('texto-codificar').value;
  textoDecodificado = textoDecodificado.replace(/enter/g, 'e');
  textoDecodificado = textoDecodificado.replace(/imes/g, 'i');
  textoDecodificado = textoDecodificado.replace(/ai/g, 'a');
  textoDecodificado = textoDecodificado.replace(/ober/g, 'o');
  textoDecodificado = textoDecodificado.replace(/ufat/g, 'u');

  document.getElementById('texto-codificado').value = textoDecodificado;

  if (textoDecodificado.length > 0) {
    document.getElementById('texto-preenchido').style.display = 'flex';
    document.getElementById('texto-vazio').style.display = 'none';
  } else {
    document.getElementById('texto-preenchido').style.display = 'none';
    document.getElementById('texto-vazio').style.display = 'flex';
  }
}

function copiarTexto() {
  let textoCopiado = document.getElementById('texto-codificado').value;
  navigator.clipboard.writeText(textoCopiado);
}

