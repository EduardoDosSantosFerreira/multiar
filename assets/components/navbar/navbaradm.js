// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement('div');
    div.innerHTML = `
    <header>
    <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <i class="bi bi-snow2 me-2" style="font-size: 3em;"></i>

          <a class="navbar-brand" href="#">Multiar ADM</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
                <i class="bi bi-snow2 me-2" style="font-size: 3em;"></i>

              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Multiar ADM</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../pages/products.html">Produtos</a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
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