const filterButton = document.getElementById('filterButton')
const filterArea = document.getElementById('filterArea')
filterButton.addEventListener('click', filterAreaOpen)


function filterAreaOpen(){
    filterArea.classList.add('left-0')
    filterArea.classList.remove('left-200-')
}
function closeFilter(){
    filterArea.classList.remove('left-0')
    filterArea.classList.add('left-200-')
}