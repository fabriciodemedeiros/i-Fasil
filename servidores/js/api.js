const API_URL = "https://www.fasil.criarsite.online/api";

async function fetchServidores() {
	const res = await fetch(`${API_URL}/servidores/read.php`);
	return res.json();
}

async function fetchServidorById(id) {
	const response = await fetch(`${API_URL}/servidores/read_one.php?id=${id}`);
	const data = await response.json();
	if (!response.ok) {
		console.error("Erro ao buscar Servidor:", data.message || "Erro desconhecido");
		return null;
	}
	return data;
}

async function novoServidor(data) {
	await fetch(`${API_URL}/servidores/create.php`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
}

async function atualizarServidor(data) {
	const response = await fetch(`${API_URL}/servidores/update.php`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	return response.ok;
}
