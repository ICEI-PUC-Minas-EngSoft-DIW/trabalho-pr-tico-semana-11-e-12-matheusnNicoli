// ----------------------
// DADOS EM FORMATO JSON
// ----------------------
const dados = [
  {
    id: 1,
    titulo: "Exposição de Arte Moderna",
    descricao: "Conheça artistas que revolucionaram o século XX.",
    imagem: "https://picsum.photos/id/1025/800/400",
    categoria: "Arte",
    data: "2025-03-12",
    autor: "Curadoria do Museu Horizonte",
    conteudo: "A exposição de arte moderna apresenta obras icônicas que marcaram o início do século XX, explorando movimentos como o expressionismo e o cubismo. O visitante poderá conhecer pinturas, esculturas e instalações que redefiniram o conceito de arte na modernidade."
  },
  {
    id: 2,
    titulo: "Visita Guiada com Curadores",
    descricao: "Descubra segredos e bastidores das exposições.",
    imagem: "https://picsum.photos/id/1035/800/400",
    categoria: "Experiência",
    data: "2025-04-05",
    autor: "Equipe de Curadores",
    conteudo: "Durante a visita guiada, os curadores do museu compartilham histórias fascinantes e curiosidades sobre as obras em exibição. É uma oportunidade única de compreender a visão por trás das coleções e o processo de montagem das exposições."
  },
  {
    id: 3,
    titulo: "Oficina Infantil de Criatividade",
    descricao: "Atividades educativas e divertidas para crianças.",
    imagem: "https://picsum.photos/id/1043/800/400",
    categoria: "Educação",
    data: "2025-05-20",
    autor: "Departamento Educativo",
    conteudo: "Uma oficina lúdica que estimula a imaginação e a expressão artística das crianças, com materiais recicláveis e muita diversão. Ideal para famílias e escolas que buscam atividades culturais e criativas."
  }
];

// ----------------------
// FUNÇÃO PARA MONTAR A HOME
// ----------------------
function montarHome() {
  const container = document.getElementById('cards-container');
  if (!container) return; // evita erro se não estiver na home

  container.innerHTML = ''; // limpa o conteúdo

  dados.forEach(item => {
    const col = document.createElement('div');
    col.classList.add('col-md-4');

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
        <div class="card-body text-center">
          <h3 class="h5">${item.titulo}</h3>
          <p>${item.descricao}</p>
          <a href="detalhes.html?id=${item.id}" class="btn btn-outline-primary">Saiba mais</a>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

// ----------------------
// FUNÇÃO PARA MONTAR DETALHES
// ----------------------
function montarDetalhes() {
  const container = document.getElementById('detalhes-container');
  if (!container) return; // evita erro se não estiver na página de detalhes

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));

  const item = dados.find(d => d.id === id);

  if (!item) {
    container.innerHTML = `
      <div class="alert alert-warning text-center" role="alert">
        Item não encontrado. <a href="index.html" class="alert-link">Voltar à Home</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <article class="card shadow-sm p-4">
      <img src="${item.imagem}" class="img-fluid rounded mb-3" alt="${item.titulo}">
      <h2 class="h4 mb-2">${item.titulo}</h2>
      <p class="text-muted mb-2"><strong>Categoria:</strong> ${item.categoria}</p>
      <p class="text-muted"><strong>Data:</strong> ${item.data}</p>
      <hr>
      <p>${item.conteudo}</p>
      <p class="mt-3"><em>Autor:</em> ${item.autor}</p>
      <a href="index.html" class="btn btn-outline-primary mt-3">← Voltar para a Home</a>
    </article>
  `;
}

// ----------------------
// EXECUÇÃO AUTOMÁTICA
// ----------------------
document.addEventListener('DOMContentLoaded', () => {
  // detecta pelo DOM (seguro e confiável)
  if (document.getElementById('cards-container')) {
    montarHome();
  }

  if (document.getElementById('detalhes-container')) {
    montarDetalhes();
  }
});
