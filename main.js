let button = document.querySelector('p-button')


let data = {
    url: 'https://placehold.co/400.png?text=Hello+World&font=roboto',
    title: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada sed nulla vel tempus. ',
    detail: {
        date: '10-10-2022',
        category: 'Mice',
        reference: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        notes: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ]
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    const card = document.querySelector('info-card')
    card.data = data
})