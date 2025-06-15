const API_URL = "https://www.fasil.criarsite.online/api";

async function fetchDepartamentos() {
	const res = await fetch(`${API_URL}/departamentos/read.php`);
	return res.json();
}

async function fetchDepartamentoById(id) {
	const response = await fetch(`${API_URL}/departamentos/read_one.php?id=${id}`);
	const data = await response.json();
	if (!response.ok) {
		console.error("Erro ao buscar secretaria:", data.message || "Erro desconhecido");
		return null;
	}
	return data;
}

async function criarDepartamento(data) {
	await fetch(`${API_URL}/departamentos/create.php`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
}

async function atualizarDepartamento(data) {
	const response = await fetch(`${API_URL}/departamentos/update.php`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	return response.ok;
}
