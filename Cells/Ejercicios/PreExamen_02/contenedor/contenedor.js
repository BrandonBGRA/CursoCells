import Login from "../login/login.js";
import Contenido from "../contenidoApi/contenido.js";
import Modal from "../modal/modal.js";

customElements.define('login-container', Login);
customElements.define('contenido-container', Contenido);
customElements.define('modal-container', Modal);

export default class Contenedor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.datos = []; 
        this.datosAcceso = {
            "usuario": "Brandon",
            "contraseña": "BGRA"
        };
        this.modalVisible = false; 
        this.modal = null; 
        this.contenido = null; 
    }

    connectedCallback() {
        this.render();
        this.iniciarSesion();
        this.registrarEventosContenido();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <login-container></login-container>
            <contenido-container></contenido-container>
            <modal-container></modal-container>
        `;
        this.modal = this.shadowRoot.querySelector("modal-container");
        this.contenido = this.shadowRoot.querySelector("contenido-container");
    }

    iniciarSesion() {
        const loginC = this.shadowRoot.querySelector("login-container");
        const login = loginC.shadowRoot.querySelector(".login");
        const usuario = loginC.shadowRoot.getElementById("usuario");
        const password = loginC.shadowRoot.getElementById("password");

        login.addEventListener("click", () => {
            if (usuario.value === this.datosAcceso.usuario && password.value === this.datosAcceso.contraseña) {
                loginC.style.display = "none";
                this.contenido.style.display = "block";
            } else {
                alert("Usuario Incorrecto favor de validar");
            }
        });
    }

    registrarEventosContenido() {
        this.contenido.addEventListener('limpiar-click', () => {
            const datosInput = this.contenido.shadowRoot.querySelector("input");
            datosInput.value = "";
        });

        this.contenido.addEventListener('datos-actualizados', (event) => {
            this.datos = event.detail.datos;

            this.contenido.addEventListener('buscar-click', () => {
                const datosInput = this.contenido.shadowRoot.querySelector("input");
                const filtro = datosInput.value.trim().toLowerCase();

                const datosFiltrados = this.datos.filter(localidad => {
                    return localidad.stations[0].name.toLowerCase().includes(filtro) 
                });

                this.mostrarModal(datosFiltrados);
            });
        });
    }

    mostrarModal(datosFiltrados) {
        const informacionModal = this.modal.shadowRoot.querySelector('#modal-contenedor');
        const TextModal = this.modal.shadowRoot.querySelector(".text-content");

        if (!this.modalVisible) {
            this.modalVisible = true;
            informacionModal.classList.add('visibility');
            TextModal.innerHTML = ''; // Limpiar contenido previo

            const tabla = datosFiltrados.map(localidad => {
                return `
                    <tr>
                        <td>${localidad.stations[0].name}</td>
                        <td>${localidad.stations[0].id}</td>
                        <td>${localidad.stations[0].indexes[0].scale}</td>
                        <td>${localidad.stations[0].indexes[0].value}</td>
                        <td>${localidad.stations[0].indexes[0].calculationTime}</td>
                        <td>${localidad.stations[0].measurements[0] ? localidad.stations[0].measurements[0].value : ''}</td>
                        <td>${localidad.stations[0].measurements[0] ? localidad.stations[0].measurements[0].unit : ''}</td>
                        <td>${localidad.stations[0].measurements[0] ? localidad.stations[0].measurements[0].pollutant : ''}</td>

                    </tr>
                `;
            }).join('');

            const tablaHTML = `
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 10px;
                    }
                    th, td {
                        padding: 10px;
                        text-align: left;
                        border-bottom: 1px solid #ddd;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                    tr:hover {
                        background-color: #f5f5f5;
                    }
                </style>
                <table>
                    <thead>
                        <tr>
                            <th colspan="2">Localidad</th>
                            <th colspan="3">Índice</th>
                            <th colspan="3">Mediciones</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Escala</th>
                            <th>Valor</th>
                            <th>Fecha</th>
                            <th>Valor</th>
                            <th>Unidad</th>
                            <th>Contaminante</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tabla}
                    </tbody>
                </table>
            `;

            TextModal.innerHTML = tablaHTML;

            const modalContainer = this.shadowRoot.querySelector('modal-container');
            const close = modalContainer.shadowRoot.querySelector('#close');
            close.addEventListener('click', () => {
                this.modalVisible = false;
                informacionModal.classList.remove('visibility');
            });
        }
    }
}
