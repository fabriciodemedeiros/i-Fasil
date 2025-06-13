function loadPartial(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => document.getElementById(id).innerHTML = html);
}

loadPartial('header', '../partials/header.html');
loadPartial('sidebar', '../partials/sidebar.html');
loadPartial('footer', '../partials/footer.html');

const sistemas = [
  { nome: "i-Escola", desc: "Gestão escolar integrada", url: "api/i-escola" },
  { nome: "i-Prefeitura", desc: "Módulo de serviços municipais", url: "api/i-prefeitura" },
  { nome: "i-Professor", desc: "Perfil e ações dos professores", url: "api/i-professor" },
  { nome: "i-Simulados", desc: "Gestão de provas e simulados", url: "api/i-simulados" },
  { nome: "i-Saúde", desc: "Gestão de prontuários e atendimentos", url: "api/i-saude" }
];

const cardsContainer = document.getElementById('system-cards');
sistemas.forEach(sys => {
  const card = document.createElement('div');
  card.className = 'col';
  card.innerHTML = `
    <div class="card shadow-sm h-100">
      <div class="card-body">
        <h5 class="card-title">${sys.nome}</h5>
        <p class="card-text">${sys.desc}</p>
        <a href="${sys.url}" class="btn btn-outline-primary">Acessar API</a>
      </div>
    </div>
  `;
  cardsContainer.appendChild(card);
});
