let view = document.getElementById('view')
let viewButton = document.getElementById('viewButton')
let buttomContent = document.getElementById('buttomContent')

function openContent(){
    view.classList.add('block')
    view.classList.remove('hidden')
    viewButton.classList.add('hidden')
    buttomContent.classList.add('mt-140')
    buttomContent.classList.add('lg:mt-80')
    buttomContent.classList.remove('mt-7')

}