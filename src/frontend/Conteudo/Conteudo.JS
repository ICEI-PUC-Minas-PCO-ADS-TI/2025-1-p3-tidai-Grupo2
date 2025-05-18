('*')
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contentForm');
  const grid = document.getElementById('cardsGrid');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const title = form.contentTitle.value.trim();
    const desc  = form.contentDesc.value.trim();
    if (!title) return;

    // cria fragmento para melhor performance :contentReference[oaicite:3]{index=3}
    const fragment = document.createDocumentFragment();

    // card container
    const card = document.createElement('div');
    card.className = 'card';

    // título
    const h3 = document.createElement('h3');
    h3.textContent = title;

    // descrição
    const p = document.createElement('p');
    p.textContent = desc;

    // montar card
    card.appendChild(h3);
    card.appendChild(p);
    fragment.appendChild(card);

    // inserir na grid :contentReference[oaicite:4]{index=4}
    grid.appendChild(fragment);

    // limpar form
    form.reset();
  });
});
