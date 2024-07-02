const menu = document.getElementById('menu')
const opcMenu = document.getElementById('opc-menu')
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')



function openMenu(){
   opcMenu.classList.remove('hidden')
   menu.classList.add('right-0')
   menu.classList.remove('-right-100')
   document.getElementById('menu-btn').onclick = closeMenu;
   line1.classList.add('line1Transform')
   line2.classList.add('line2Transform')
   line3.classList.add('line3Transform')

}
function closeMenu(){
    opcMenu.classList.add('hidden')
    menu.classList.remove('right-0')
    menu.classList.add('-right-100')
    document.getElementById('menu-btn').onclick = openMenu;
    line1.classList.remove('line1Transform')
    line2.classList.remove('line2Transform')
    line3.classList.remove('line3Transform')
}