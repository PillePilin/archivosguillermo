window.addEventListener("load", function () {
  const bios = document.getElementById("biosIntro");
  const contenido = document.getElementById("contenido");

  setTimeout(() => {
    bios.style.display = "none";
    contenido.style.display = "block";
  }, 3000); // Duración de la intro BIOS
});

function playClick() {
  const sound = document.getElementById("clickSound");
  sound.play();
}