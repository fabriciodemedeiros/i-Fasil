document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const resposta = await fetch("https://fasil.criarsite.online/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha })
  });

  const dados = await resposta.json();

  if (resposta.ok) {
    localStorage.setItem("token", dados.token);
    window.location.href = "alunos.html";
  } else {
    document.getElementById("mensagem").textContent = dados.error || "Erro no login.";
  }
});
