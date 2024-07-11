let openMenuIcon = document.getElementById('open')
let closeMenuIcon = document.getElementById('close')
let opc = document.getElementById('opc')
let respMenu = document.getElementById('respMenu')

function openResp(){
    opc.classList.add('block')
    respMenu.classList.add('block')
    opc.classList.remove('hidden')
    respMenu.classList.remove('hidden')
}

function closeResp(){
    opc.classList.add('hidden')
    respMenu.classList.add('hidden')
    opc.classList.remove('block')
    respMenu.classList.remove('block')
}