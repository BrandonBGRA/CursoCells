const contenedor = document.getElementById("output");

window.addEventListener("mousemove", (e) => {
    let posicionX = e.clientX;
    let  posicionY = e.clientY;
    console.log(posicionX, posicionY);

    contenedor.innerHTML = `
        <h1>Raton</h1>
        <p>Pagina [${posicionX}, ${posicionY}]</p>
    `;
});

window.addEventListener("keypress", (e) => {
    console.log(e.key);

    contenedor.innerHTML = `
        <h1>Teclado</h1>
        <p>Caracter[ ${e.key} ]</p>
    `;
});
