class detailCard extends  HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }


set data(data){
    this._data = data
    this.render()
}


render(){
    const {date, category, reference, notes} = this._data.detail
    const style = document.createElement('style')
    style.textContent = `

    .detail {
        border: 2px solid #0077cc;
        border-radius: 10px;
        padding: 20px;
        max-width: 400px;
        font-family: sans-serif;
        background: #f9f9f9;
    }
    h4 {
        margin-top: 0;
        color: #0077cc;
    }
    p {
        margin: 5px 0;
    }
    ul {
        padding-left: 20px;
        margin-top: 5px;
    }
    `
        const container = document.createElement('div');
        container.classList.add('detail');
        const title = document.createElement('h4');
        title.textContent = 'Detalle';
        const dateP = document.createElement('p');
        dateP.innerHTML = `<strong>Fecha:</strong> ${date}`;
        const catP = document.createElement('p');
        catP.innerHTML = `<strong>Categoría:</strong> ${category}`;
        const refP = document.createElement('p');
        refP.innerHTML = `<strong>Referencia:</strong> ${reference}`;
        const notesLabel = document.createElement('p');
        notesLabel.innerHTML = `<strong>Notas:</strong>`;
        const notesList = document.createElement('ul');
        notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
        });
        const backBtn = document.createElement('button');
        backBtn.textContent = 'Volver';
        container.appendChild(title);
        container.appendChild(dateP);
        container.appendChild(catP);
        container.appendChild(refP);
        container.appendChild(notesLabel);
        container.appendChild(notesList);
        container.appendChild(backBtn);

        this.shadowRoot.append(style, container)
}}

customElements.define('detail-card', detailCard)