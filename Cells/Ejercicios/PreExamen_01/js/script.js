const productos = {
    tipo: {
        "A": 270,
        "B": 340,
        "C": 390
    }
};

const miSelect = document.getElementById('miSelect');
const montoIngresado = document.getElementById('monedas');
const boton = document.getElementById("ingresar");
const botonSalir = document.getElementById("salir");
const datos = document.querySelector(".datos");
const nombre = document.getElementById("nombre");
const contenedor = document.querySelector(".contenedor");

let transacciones = 0;
let numeroOperaciones = 0;
let total = 0;
let valorProducto = 0;

miSelect.addEventListener('change', function() {
    valorProducto = productos.tipo[miSelect.value];
});

boton.addEventListener('click', function() {
    if(miSelect.value === "" || montoIngresado.value === ""){
       datos.innerHTML = `<p>Favor de llenar todos los campos</p>`;
        return;
    }
    const numeroInt = Number(montoIngresado.value);

    total += numeroInt;
    datos.innerHTML = `<p>Tu Saldo Actual es ${total}</p>`;

    if (total >= valorProducto) {
        let cambio = total - valorProducto;
        datos.innerHTML = `<p>Tu Cambio es ${cambio}</p>`;
        console.log(`Cambio a entregar: ${cambio}`);

        // Calcular y entregar el cambio
        while (cambio >= 100) {
            datos.innerHTML += `<p>100</p>`;
            cambio -= 100;
            numeroOperaciones += 1;
        }
        while (cambio >= 50) {
            datos.innerHTML += `<p>50</p>`;
            cambio -= 50;
            numeroOperaciones += 1;
        }
        while (cambio >= 10) {
            datos.innerHTML += `<p>10</p>`;
            cambio -= 10;
            numeroOperaciones += 1;
        }

        // Reiniciar total y actualizar interfaz
        total = 0;
        transacciones += 1;
        montoIngresado.value = "";
    }

    botonSalir.addEventListener("click", () => {
        contenedor.innerHTML = `
            <section class="contenido"> 
            <p class="font-w">${nombre.value}</p>
            <p>Realizaste <span class="font-w">${transacciones}</span> transacciones de compra</p>
            <p>El numero de transacciones de cambio fue de: <span class="font-w">${numeroOperaciones}</span></p>
            </section>
            `;
    });
});




