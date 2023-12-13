const rooms = document.querySelectorAll('split')
rooms.forEach((room) => {
    room.addEventListener('mouseover', () =>{
        removeActiveClasses()
        room.classList.add('active')
    })
})
function removeActiveClasses() {
    rooms.forEach((room) => {
        room.classList.remove('active')
    })
}