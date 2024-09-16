// Quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão "Material do Evento"
    const btnMaterial = document.querySelector('.btn-success');
    // Seleciona o card de conteúdo que está oculto inicialmente
    const materialCard = document.querySelector('#material-card');
  
    // Adiciona o evento de clique ao botão
    btnMaterial.addEventListener('click', function() {
      // Alterna a visibilidade do card
      if (materialCard.style.display === 'none' || materialCard.style.display === '') {
        materialCard.style.display = 'block';
      } else {
        materialCard.style.display = 'none';
      }
    });
  });
  