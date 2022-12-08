let div = document.getElementById('div')
let div2 = document.getElementById('div2')

// --- 1 ---

function varParams (...params) {
    div.innerHTML = "Bonjour, "
    for (let txt of params) {
        div.innerHTML += txt // plus beau sans virgules, sinon + ', '
    }
}
varParams('tous ', 'le ', 'monde !')

// --- 2 ---

function varParams2 (...params) {
    for (let i of params)
        if (!isNaN(i)){
            let newDiv = document.createElement('div')
            newDiv.innerHTML = i
            document.body.appendChild(newDiv)
        }
}

varParams2('string', 'string', '3', '21')

