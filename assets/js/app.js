
const input = document.querySelector('input')
const btn = document.querySelector('button')
let total = document.getElementById('total')
const realizadas = document.getElementById('realizadas')
const body = document.querySelector('tbody')

let tareas = [
    {id: 1, descripcion: 'Hacer mercado', checked: false},
    {id: 2, descripcion: 'Estudiar para la prueba', checked: false},
    {id: 3, descripcion: 'Sacar a pasear a Tobby', checked: false}
]
let id = 3

btn.addEventListener('click', () => {
    let nuevaTarea = input.value.trim()
    if (nuevaTarea != '') {
        id++
        let tarea = {
            id: id,
            descripcion: nuevaTarea,
            checked: false
        }
        tareas.push(tarea)
        listaDeTareas()
        input.value = ''
    } else {
        alert('No puedes enviar tareas vacías')
    }
})

let listaDeTareas = () => {
    total.innerHTML = tareas.length
    let contador = 0
    let html = ''

    for (let tarea of tareas) {
        html += `
        <tr>
            <td>
            ${tarea.id}
            </td>

            <td>
            ${tarea.descripcion}
            </td>

            <td>
                <input type="checkbox" onclick='actualizarTarea(${tarea.id})' ${tarea.checked ? 'checked' : ''}>
            </td>

            <td>
                <button id='eliminar' type='button' onclick="borrar(${tarea.id})"><i class="fa-solid fa-xmark"></i></button>
            </td>
        </tr>
        `
        if (tarea.checked) {
            contador++
        }
    }

    realizadas.innerHTML = contador
    body.innerHTML = html
}

const borrar = (id) => {
    let index = tareas.findIndex((ele) => ele.id === id)
    tareas.splice(index, 1)
    listaDeTareas()
    contar()
}

const actualizarTarea = (id) => {
    let tarea = tareas.find((tarea) => tarea.id === id)
    if (tarea.checked === false) {
        tarea.checked = true

    } else {
        tarea.checked = false
    }
    contar()
}

const contar = () => {
    let hechas = tareas.filter((tarea) => tarea.checked === true)
    total.innerHTML = tareas.length
    realizadas.innerHTML = hechas.length
}

listaDeTareas()



