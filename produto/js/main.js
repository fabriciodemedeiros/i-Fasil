document.addEventListener("DOMContentLoaded", async () => {
    const tabela = document.querySelector("#tabela-produtos tbody");
    if (tabela) {
      const produtos = await fetchProdutos();
      produtos.forEach((p) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${p.nome}</td>
          <td>${p.descricao || "-"}</td>
          <td>${p.quantidade}</td>
          <td>
            <a href="edit?id=${p.id}" class="btn btn-sm btn-warning">Editar</a>
            <button class="btn btn-sm btn-danger" onclick="handleDelete(${p.id})">Excluir</button>
          </td>
        `;
        tabela.appendChild(tr);
      });
  
      // Inicializa DataTables após renderizar os dados
      $("#tabela-produtos").DataTable({
        language: {
    url: "//cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json"
  },
  pageLength: 10,
  lengthMenu: [10, 25, 50, 100],
  dom: 'Bfrtip',
  buttons: [
    {
      extend: 'copy',
      text: 'Copiar',
      title: "Tabela de Produtos do Almoxarifado", // Evita que o <title> da página seja incluído
      exportOptions: {
        columns: [0, 1, 2] // índices das colunas que devem ser exportadas
      }
    },
    {
      extend: 'excel',
      text: 'Excel',
      exportOptions: {
        columns: [0, 1, 2] // índices das colunas que devem ser exportadas
      }
    },
    {
      extend: 'pdf',
      text: 'PDF',
      exportOptions: {
        columns: [0, 1, 2] // índices das colunas que devem ser exportadas
      }
    },
    {
      extend: 'print',
      text: 'Imprimir',
      exportOptions: {
        columns: ':not(.no-export)',
        columns: [0, 1, 2] // índices das colunas que devem ser exportadas
      }
    }
  ]
      });
    }
  });
  async function handleDelete(id) {
    if (!confirm("Tem certeza que deseja excluir este produto?")) return;
  
    try {
      const response = await fetch(`${API_URL}/delete.php`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        alert(`Erro: ${data.error || "Erro ao excluir."}`);
        return;
      }
  
      alert("Produto excluído com sucesso!");
  
      // Remover a linha da tabela dinamicamente
      const btn = document.querySelector(`button[onclick="handleDelete(${id})"]`);
      if (btn) {
        const row = btn.closest('tr');
        if (row) row.remove();
      }
  
    } catch (err) {
      console.error("Erro ao excluir:", err);
      alert("Erro ao conectar com o servidor.");
    }
  }
  
  