const API_URL = "https://www.fasil.criarsite.online/api";

async function fetchCargos() {
	const res = await fetch(`${API_URL}/cargos/read.php`);
	return res.json();
}

async function fetchCargoById(id) {
	const response = await fetch(`${API_URL}/cargos/read_one.php?id=${id}`);
	const data = await response.json();
	if (!response.ok) {
		console.error("Erro ao buscar Cargo:", data.message || "Erro desconhecido");
		return null;
	}
	return data;
}

async function novoCargo(data) {
	await fetch(`${API_URL}/cargos/create.php`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
}

async function atualizarCargo(data) {
	const response = await fetch(`${API_URL}/cargos/update.php`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	return response.ok;
}
