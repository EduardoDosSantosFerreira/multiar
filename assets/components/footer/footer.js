// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement('div');
    div.innerHTML = `
    <footer class="bg-dark text-white py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>Multiar</h5>
            <p>Sua melhor opção em climatização</p>
          </div>
          <div class="col-md-4">
            <h5>Contato</h5>
            <p>
              <i class="bi bi-telephone me-2"></i>(13) 997764129
              <br>
              <i class="bi bi-envelope me-2"></i> contato@multiar.com.br
            </p>
          </div>
          <div class="col-md-4">
            <h5>Redes Sociais</h5>
            <div class="d-flex gap-3">
              <a href="#" class="text-white"><i class="bi bi-facebook fs-4"></i></a>
              <a href="#" class="text-white"><i class="bi bi-instagram fs-4"></i></a>
              <a href="https://wa.me/5513997764129" class="text-white whatsapp-icon"><i class="bi bi-whatsapp fs-4"></i></a>
              <a href="./pages/login.html" class="text-white"><i class="bi bi-person fs-4"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    `;
    
    document.body.appendChild(div);
  }
  
  // Função para redirecionar ao clicar em Search
  function redirecionar() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var element = document.getElementById(input);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Adicionar a navbar ao DOM
  adicionarLoginAoDOM();
  
  // Navbar Hide
  let lastScrollTop = 0;
  
  window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scroll para baixo
        document.getElementById("navbar").style.top = "-75px"; // Esconde a navbar
    } else {
        // Scroll para cima
        document.getElementById("navbar").style.top = "0"; // Mostra a navbar
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para tratar o caso de scroll no topo
  }, false);