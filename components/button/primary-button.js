class PrimaryButton extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({mode: 'open'})
        this.button = document.createElement('button')
        this.button.textContent = this.getAttribute('label') || 'valor por defecto'
        const style = document.createElement('style')
        style.textContent = `
        button {
            padding: 10px 20px;
            color: white;
            background-color:black;
            border:none;
            border-radius:12px;
            cursor:pointer;
            transition:ease-out 0.4s;

        }

        button:hover{
            background-color: gold;
            color:black;
            transition: ease .4s;
            border-radius:80px;
            transform:scale(1.1);
        }

        `


        shadow.append(style, this.button)
    }

   connectedCallback(){
    console.log('Mi componente fue agregado al DOM');
    this.button.addEventListener('click', ()=>{
        let event =  new CustomEvent('c-click', {
            detail: {message: 'click desde los web component'} 
        })
        this.dispatchEvent(event)
    })
   }
   
   disconnectedCallback(){
    console.log('Ahora nos veremos en otro momento :(((');
   }

   static get observedAttributes(){
        return ['label']
   }

   attributeChangedCallback(name, oldValue, newValue){
     if(name == 'label'){
        this.button.textContent = newValue
     }else if(name == newValue ){
        this.button.textContent = oldValue
     }
   }
}

customElements.define('p-button', PrimaryButton)