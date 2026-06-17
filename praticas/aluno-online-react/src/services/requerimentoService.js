const API_URL = 'http://localhost:3000/requerimentos';

async function listarRequerimentos() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Nao foi possivel carregar os requerimentos.');
  }

  return response.json();
}

async function cadastrarRequerimento(requerimento) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...requerimento,
      situacao: 'Em analise',
    }),
  });

  if (!response.ok) {
    throw new Error('Nao foi possivel cadastrar o requerimento.');
  }

  return response.json();
}

export { listarRequerimentos, cadastrarRequerimento };
