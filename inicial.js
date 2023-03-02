const cartas = document.getElementById('cartas');
const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
  const cartaSelecionada = cartas.value;

  if (cartaSelecionada = "carta1") {
    window.location.href = `index.html?carta=${'carta1'}`;
  } else if (cartaSelecionada = "carta2") {
  window.location.href = `www.google.com?carta=${'carta2'}`;
}

});
