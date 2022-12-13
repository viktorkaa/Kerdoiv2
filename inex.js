
function next(id) {
    document.helyesValaszokClassName('container')[id - 1].style.display = "none";
    document.helyesValaszokClassName('container')[id].style.display = "block";
}

function result() {
    var pontszam = 0;
    if (document.helyesValaszokId('helyes1').checked) {
        pontszam++;
    }
    if (document.helyesValaszokId('helyes2').checked) {
        pontszam++;
    }
    if (document.helyesValaszokId('helyes3').checked) {
        pontszam++;
    }
    alert("A pontszámod: " + pontszam);
}