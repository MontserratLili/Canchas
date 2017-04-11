function mostrarSoccer(){
document.getElementById("canchaSoccer").style.display = "none";
}

function mostrarBasquet(){
document.getElementById("canchaBasquet").style.display = "none";
}

function mostrarTenis(){
document.getElementById("canchaTenis").style.display = "none";
}

soccer.addEventListener("click", mostrarSoccer);
basquet.addEventListener("click", mostrarBasquet);
tenis.addEventListener("click", mostrarTenis);
