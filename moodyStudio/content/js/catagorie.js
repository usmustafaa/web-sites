let badroom = document.getElementById('badroom')
let livingRoom = document.getElementById('livingRoom')
let childRoom = document.getElementById('childRoom')
let bathroom = document.getElementById('bathroom')
let outdoor = document.getElementById('outdoor')


function openBadroom(){
  if(badroom.classList.contains('hidden')){
    badroom.classList.remove('hidden')
    badroom.classList.add('flex')
  }else{
    badroom.classList.remove('flex')
    badroom.classList.add('hidden')
  }
}
function openLivingRoom(){
  if(livingRoom.classList.contains('hidden')){
    livingRoom.classList.remove('hidden')
    livingRoom.classList.add('flex')
  }else{
    livingRoom.classList.remove('flex')
    livingRoom.classList.add('hidden')
  }
}
function openChildRoom(){
  if(childRoom.classList.contains('hidden')){
    childRoom.classList.remove('hidden')
    childRoom.classList.add('flex')
  }else{
    childRoom.classList.remove('flex')
    childRoom.classList.add('hidden')
  }
}
function openBathroom(){
  if(bathroom.classList.contains('hidden')){
    bathroom.classList.remove('hidden')
    bathroom.classList.add('flex')
  }else{
    bathroom.classList.remove('flex')
    bathroom.classList.add('hidden')
  }
}
function openOutdoor(){
  if(outdoor.classList.contains('hidden')){
    outdoor.classList.remove('hidden')
    outdoor.classList.add('flex')
  }else{
    outdoor.classList.remove('flex')
    outdoor.classList.add('hidden')
  }
}