const personaArreglo = [
    {
        "personId": 123,
        "name": "Jhon",
        "city": "Melbourne",
        "phoneNo": "1234567890"
    },
    {
        "personId": 124,
        "name": "Amelia",
        "city": "Sydney",
        "phoneNo": "1234567890"
    },
    {
        "personId": 125,
        "name": "Emily",
        "city": "Perth",
        "phoneNo": "1234567890"
    },
    {
        "personId": 126,
        "name": "Abraham",
        "city": "Perth",
        "phoneNo": "1234567890"
    }
];

// Mapping personaArreglo to generate table rows
const tabla = personaArreglo.map(persona => {
    return `
        <tr>
            <td>${persona.personId}</td>
            <td>${persona.name}</td>
            <td>${persona.city}</td>
            <td>${persona.phoneNo}</td>
        </tr>
    `;
}).join(''); 

const html = document.createElement('div');
html.innerHTML = `
    <style>
        table{
            border: 1px solid #03bb75;
            margin: 0 auto;
            text-align: center;
            padding: 5px;
        }
        ul{
            border: 1px solid #03bb75;
            text-align: center;
            list-style: none;
            padding: 0;
        }
        li{
            border: 1px solid white;
        }
        li:hover{
            cursor: pointer;
            border: 1px solid;
        }
        }

    </style>
        <table>
            <tr>
                <th>PersonId</th>
                <th>Name</th>
                <th>City</th>
                <th>PhoneNo</th>
            </tr>
            ${tabla}
        </table>
`;
document.body.appendChild(html);

// Ejercicio 2

const liAll = document.querySelectorAll('li');
        liAll.forEach((li) => {
            li.addEventListener('click', (event) => {
                window.alert(`
                Elemento Seleccionado:
                ID elemento: ${li.id}
                ISO ID: ${li.dataset.id}
                Dial Code: ${li.dataset.dialCode}
                `
                );
            });
        });

      
