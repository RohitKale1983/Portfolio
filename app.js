window.addEventListener("scroll", function () {
    const nav = document.querySelector(".header");
    if (window.scrollY > 0) {
        nav.classList.add("shadow");
    } else {
        nav.classList.remove("shadow");
    }
});

// Smooth scrolling to section on link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1); // Remove the #
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        // Calculate the offset to scroll to the target
        const offset = targetSection.getBoundingClientRect().top;
  
        window.scrollBy({
          top: offset,
          left: 0,
          behavior: 'smooth' // Smooth scrolling behavior
        });
      }
    });
  });
  document.getElementById('menu-toggle').addEventListener('click', function () {
    const sider = document.getElementById('sider');
    sider.style.display = (sider.style.display === 'none') ? 'block' : 'none';
  });
  