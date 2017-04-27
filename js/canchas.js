function mostrarSoccer() {
    document.getElementById("canchaSoccer").style.display = "block";
    soccer.removeEventListener("click", mostrarSoccer);
    soccer.addEventListener("click", ocultarSoccer);

}

function mostrarBasquet() {
    document.getElementById("canchaBasquet").style.display = "block";
    basquet.removeEventListener("click", mostrarBasquet);
    basquet.addEventListener("click", ocultarBasquet);
}

function mostrarTenis() {
    document.getElementById("canchaTenis").style.display = "block";
    tenis.removeEventListener("click", mostrarTenis);
    tenis.addEventListener("click", ocultarTenis);
}



function ocultarSoccer() {
    document.getElementById("canchaSoccer").style.display = "none";
    soccer.removeEventListener("click", ocultarSoccer);
    soccer.addEventListener("click", mostrarSoccer);
}

function ocultarBasquet() {
    document.getElementById("canchaBasquet").style.display = "none";
    basquet.removeEventListener("click", ocultarBasquet);
    basquet.addEventListener("click", mostrarBasquet);
}

function ocultarTenis() {
    document.getElementById("canchaTenis").style.display = "none";
    tenis.removeEventListener("click", ocultarTenis);
    tenis.addEventListener("click", mostrarTenis);
}


soccer.addEventListener("click", mostrarSoccer);
basquet.addEventListener("click", mostrarBasquet);
tenis.addEventListener("click", mostrarTenis);
