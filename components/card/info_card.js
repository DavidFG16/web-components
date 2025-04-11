class infoCard extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    set data(data){
        this._data = data
        this.render()
    }

    render(){
        const {url, title} = this._data
        const style = document.createElement('style')
        style.textContent = `
        
        .card {
            border: 1px solid #ccc;
            border-radius: 10px;
            width: 300px;
            overflow: hidden;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
            cursor: pointer;
            font-family: sans-serif;
        }

        img {
            width: 100%;
            height: 300px;
            object-fit:cover;
            object-position: 0 -20px;
        }

        h3 {
            margin: 0 0 10px;
            font-size: 18px;
        }
        `

        let card =  document.createElement('div')
        card.classList.add('card')
        let img = document.createElement('img')
        img.src = url
        img.alt = title
        let h3 = document.createElement('h3')
        h3.textContent = title

        card.append(img, h3)
        //NUEVO
        card.addEventListener('click', ()=>{
            const detail = document.createElement('detail-card')
            detail.data = this._data

            this.replaceWith(detail)
        })

        this.shadowRoot.append(style, card)
    }
}

customElements.define('info-card', infoCard)