const API_URL = "https://www.fasil.criarsite.online/api"; // Troque pelo seu endpoint

async function fetchDepartamentos() {
  const res = await fetch(`${API_URL}/secretarias/read.php`);
  return res.json();
}

// ✅ Buscar secretaria por ID
async function fetchSecretariaById(id) {
  const response = await fetch(`${API_URL}/secretarias/read_one.php?id=${id}`);
  const data = await response.json();
  if (!response.ok) {
    console.error("Erro ao buscar secretaria:", data.message || "Erro desconhecido");
    return null;
  }
  return data;
}

async function criarSecretaria(data) {
  await fetch(`${API_URL}/secretarias/create.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

async function atualizarSecretaria(data) {
  const response = await fetch(`${API_URL}/secretarias/update.php`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.ok; // retorna true se status HTTP for 2xx
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
