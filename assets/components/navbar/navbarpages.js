// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement('div');
    div.innerHTML = `
    <header>
        <nav class="navbar navbar-expand-lg" style="background-color: #0d141c;" data-bs-theme="dark">
          <div class="container d-flex justify-content-between align-items-center">
            <a class="navbar-brand d-flex align-items-center" href="#">
              <i class="bi bi-snow2 me-2" style="font-size: 2.5em;"></i>
              <span style="font-size: 1.2em;">Multiar</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./products.html">Produtos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./services.html">Serviços</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./about.html">Sobre Nós</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./contact.html">Contato</a>
                </li>
              </ul>
              <div class="d-flex align-items-center">
                <a href="#" class="btn btn-light me-2 d-flex align-items-center">
                  <i class="bi bi-cart-fill me-1"></i> Carrinho
                </a>
                <a href="tel:+5513997764129" class="btn btn-light d-flex align-items-center">
                  <i class="bi bi-telephone-fill me-2"></i>
                  (13) 997764129
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
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