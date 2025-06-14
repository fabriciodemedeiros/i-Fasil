const API_URL = "https://www.fasil.criarsite.online/api"; // Troque pelo seu endpoint

async function fetchProdutos() {
  const res = await fetch(`${API_URL}/read.php`);
  return res.json();
}

async function criarProduto(data) {
  await fetch(`${API_URL}/create.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

async function atualizarProduto(data) {
  await fetch(`${API_URL}/update.php`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

async function excluirProduto(id) {
  try {
    const response = await fetch(`${API_URL}/delete.php`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro:", data.error || "Erro desconhecido");
      alert(`Erro ao excluir: ${data.error || "Erro desconhecido"}`);
      return;
    }

    alert("Produto excluído com sucesso!");
    // Aqui você pode remover o item da tabela ou recarregar a lista
  } catch (err) {
    console.error("Falha na requisição:", err);
    alert("Erro de conexão com o servidor.");
  }
}
