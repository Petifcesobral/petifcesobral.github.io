document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggle-material');
  const materialSection = document.getElementById('material-expanded');
  
  if (toggleBtn && materialSection) {
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (materialSection.style.display === 'none' || !materialSection.style.display) {
        materialSection.style.display = 'block';
        toggleBtn.innerHTML = '<i class="fas fa-times"></i> Fechar Material';
      } else {
        materialSection.style.display = 'none';
        toggleBtn.innerHTML = '<i class="fas fa-book-open"></i> Ver Material';
      }
    });
  }
});