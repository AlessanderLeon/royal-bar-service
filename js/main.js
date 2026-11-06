// ========== 1. MENÚ HAMBURGUESA ==========
const botonMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav");

function cerrarMenu() {
  menu.classList.remove("abierto");
  botonMenu.setAttribute("aria-expanded", "false");
  botonMenu.textContent = "☰";
}

botonMenu.addEventListener("click", () => {
  const abierto = menu.classList.toggle("abierto");
  botonMenu.setAttribute("aria-expanded", abierto);
  botonMenu.textContent = abierto ? "✕" : "☰";
});

menu.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", cerrarMenu);
});

// ========== 2. WHATSAPP CON MENSAJE PRELLENADO ==========
const NUMERO_WHATSAPP = "58414XXXXXXX";
const MENSAJE = "Hola Royal Bar Service, me gustaría cotizar una barra móvil para mi evento.";

document.querySelectorAll('a[href^="https://wa.me/"]').forEach((enlace) => {
  enlace.href = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(MENSAJE)}`;
});

// ========== 3. APARICIÓN AL HACER SCROLL ==========
const elementos = document.querySelectorAll("article, #galeria img, #cocteles li");

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.15 }
);

elementos.forEach((elemento) => {
  elemento.classList.add("oculto");
  observador.observe(elemento);
});