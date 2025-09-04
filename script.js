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
    contador--; 
    if (contador < 1) contador = 1; 
  }
});

btnLimpar.addEventListener("click", () => {
  lista.innerHTML = "";
  contador = 1;
});






const items = document.querySelectorAll('.faq-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    
    const isActive = item.classList.contains('active');

    
    items.forEach(i => i.classList.remove('active'));

    
    if (!isActive) {
      item.classList.add('active');
    }
  });
});
