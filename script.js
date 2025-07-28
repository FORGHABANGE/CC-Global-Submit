//about.js
  const toggleBtn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu-options');

  toggleBtn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
</script>
