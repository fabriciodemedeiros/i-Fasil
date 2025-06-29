async function carregarAlunos() {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "index.html";
    return;
  }

  const resposta = await fetch("https://fasil.criarsite.online/api/alunos/", {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    }
  });

  const dados = await resposta.json();
  console.log(dados);

  if (resposta.ok) {
    const lista = document.getElementById("listaAlunos");
    dados.alunos.forEach(aluno => {

      const li = document.createElement("li");
      li.innerHTML = `<strong>Usuário</strong>: ${aluno.id_user} - ${aluno.user}`;
      lista.appendChild(li);
    });
  } else {
    document.getElementById("mensagem").textContent = dados.error || "Erro ao carregar alunos.";
    if (resposta.status === 401) window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

carregarAlunos();
