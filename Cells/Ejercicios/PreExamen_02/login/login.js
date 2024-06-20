export default class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .contenedor-principal{
                    align-items:center;
                    display:flex;
                    justify-content:center;
                    min-height: 100vh;
                    width:100%;
                    background: url('./img/fondo.jpg')no-repeat;
                    background-position: center;
                    background-size: cover;
                }

                .credentials{
                    display:flex;
                    align-items: center
                }
                
                .credentials p img {
                    width: 20px;
                    height:20px;
                }

                .contenedor-login{
                    position: relative;
                    width: 400px;
                    height: 450px;
                    background: rgba(255, 255, 255, 0.1);
                    border: 2px solid rgba(255, 255, 255, 0.5);
                    border-radius: 20px;
                    backdrop-filter: blur(15px);
                    display:flex;
                    justify-content: center;
                    align-items: center;
                }
                h2 {
                    font-size: 2rem;
                    margin: 0;
                    color: white;
                    text-align: center;
                }
                .credentials p{
                    margin: 0;
                    width: 20px;
                    height:20px;
                }
                .credentials{
                    position: relative;
                    margin: 30px 0;
                    width: 310px;
                    border-bottom: 2px solid #fff;
                }
                .credentials label{
                    position: absolute;
                    top: 50%;
                    left: 5px;
                    transform: translateY(-50%);
                    color:white;
                    font-size: 0.8rem;
                    pointer-events: none;
                    transition: .5s;
                }
                input:focus ~ label,
                input:valid ~ label{
                    top: -5px;
                }
                .credentials input {
                    width:100%;
                    height: 50px;
                    background: transparent;
                    border:none;
                    outline: none;
                    font-size: 0.8rem;
                    padding: 0 35px 0 5px;
                    color:white;
                }
                .credentials p{
                    position: absolute;
                    right: 8px;
                    color: white;
                    top: 20px;
                }
                button{
                    width:100%;
                    height: 40px;
                    border-radius: 40px;
                    background: white;
                    border: none;
                    outline:none;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                }
                button:hover{
                    background-color: rgba(255, 255, 255, 0.5);
                    color: white;
                }


            </style>
            <div class="contenedor-principal">
                <div class="contenedor-login">
                    <div class="contenedor-form">

                            <h2>Login</h2>
                            <div class="credentials">
                                <p><img src="./img/account.svg"></p>
                                <input type="text" id="usuario" required>
                                <label>Usuario</label>
                            </div>
                            <div class="credentials">
                                <p><img src="./img/lock.svg"></p>
                                <input type="password" id="password" required>
                                <label>Contraseña</label>
                            </div>
                            <button class="login">Iniciar Sesion</button>
                    </div>
                </div>
            </div>
        `;
    }

} 