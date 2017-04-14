function mostrarSoccer(){
  document.getElementById("canchaSoccer").style.display = "block";
}

function mostrarBasquet(){
  document.getElementById("canchaBasquet").style.display = "block";
}

function mostrarTenis(){
  document.getElementById("canchaTenis").style.display = "block";
}

soccer.addEventListener("click", mostrarSoccer);
basquet.addEventListener("click", mostrarBasquet);
tenis.addEventListener("click", mostrarTenis);
