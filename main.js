let button = document.querySelector('p-button')

button.addEventListener('c-click', (data) =>{
    button.setAttribute('label', 'Made with love')
})


let data= {
    url: 'https://i.pinimg.com/236x/da/28/45/da284514ce9062e40b9e22a31254760b.jpg',
    title:'Goku le Gana'
}

document.addEventListener('DOMContentLoaded', ()=>{
    const card = document.querySelector('info-card')
    card.data = data
})

