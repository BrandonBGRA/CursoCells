export default class Contenido extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.datos = []; 
    }

    connectedCallback(){
        this.ObtenerDatos(); 
    }

    render(){
        const tabla = this.datos.map(localidad => {
            return `
                <tr>
                    <td>${localidad.stations[0].name}</td>
                    <td>${localidad.stations[0].name}</td>
                    <td>${localidad._id}</td>
                </tr>
            `;
        }).join(''); 

     
        this.shadowRoot.innerHTML = `
            <style>
            :host{
                display:none;
            }
            .contenedor-datos{
                flex-direction: column;
                display: flex;
                align-items: center;
            }

            table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
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
            button {
                margin-right: 10px;
                padding: 8px 16px;
                background-color: #4CAF50;
                color: white;
                border: none;
                cursor: pointer;
                border-radius: 5px;
                margin: 10px 0;
            }
            button:hover {
                background-color: #45a049;
            }
            input {
                border radius: 5px;
                padding: 5px 10px;
            }
            </style>

            <div class="contenedor-datos">
                <div>
                    <span>Filter</span>
                    <input type="text">
                    <button id="buscar">Buscar</button>
                    <button id="limpiar">Limpiar</button>
                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Amount</th>
                    </tr>
                    ${tabla}
                </table>
            </div>
        `;


        const botonBuscar = this.shadowRoot.getElementById('buscar');
        botonBuscar.addEventListener('click', () => {
            const event = new CustomEvent('buscar-click', { bubbles: true, composed: true });
            this.dispatchEvent(event);
        });

        const botonLimpiar = this.shadowRoot.getElementById('limpiar');
        botonLimpiar.addEventListener('click', () => {
            const event = new CustomEvent('limpiar-click', { bubbles: true, composed: true });
            this.dispatchEvent(event);
});

    }

    ObtenerDatos() {
        const url = "https://api.datos.gob.mx/v1/calidadAire";
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                this.datos = resultado.results; 
                this.render(); 
                this.enviarDatos();
            })
            .catch(error => {
                console.error('Ocurrió un error al obtener los datos:', error);
            });
    }

    enviarDatos() {
        
        const event = new CustomEvent('datos-actualizados', {
            bubbles: true,
            composed: true,
            detail: { datos: this.datos } 
        });
        this.dispatchEvent(event);
    }
}
