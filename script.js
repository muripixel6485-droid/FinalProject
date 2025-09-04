 const lista = document.getElementById("minhaLista");
    const btnAdd = document.getElementById("Add");
    const btnRemove = document.getElementById("remove");
    const btnLimpar = document.getElementById("Limpar");

    let contador = 1;

btnAdd.addEventListener("click", () => {
  const novoItem = document.createElement("li");
  novoItem.textContent = "Novo item " + contador++;
  lista.appendChild(novoItem);
});

btnRemove.addEventListener("click", () => {
  if (lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild);
    contador--; // Decrementa o contador também
    if (contador < 1) contador = 1; // Garante que o contador não vá abaixo de 1
  }
});

btnLimpar.addEventListener("click", () => {
  lista.innerHTML = "";
  contador = 1;
});






const items = document.querySelectorAll('.faq-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    // Verifica se o item já está ativo
    const isActive = item.classList.contains('active');

    // Remove a classe 'active' de todos os itens
    items.forEach(i => i.classList.remove('active'));

    // Se o item não estava ativo antes, ativa ele agora
    if (!isActive) {
      item.classList.add('active');
    }
  });
});
