import { LitElement, customElement, html, property, css } from "lit-element";

@customElement('multi-column-list-element')
export class SimpleLitElement extends LitElement {

     [x:string]:any;

    // define properties, these will be used by Angular app to pass data as Propewrty Binding
    @property({type:String}) inputMessage;
    @property({type:Array}) list;


    static get styles(){
        return css `
        div {
                background-color: 'red';
                color:'yellow';
            }`;
    }


    constructor(){
        super();
        this.inputMessage  ='';
        this.list = new Array<any>();
        this.fname = '';
        this.lname = '';
    }

    clickMe():void {
       // define a custom event using which the LitElemtn will pass data to parent component
       const litEvent = new CustomEvent('lit-click',{
           detail:{
               data: this.inputMessage.toUpperCase()
           },
           bubbles:true // keep bubbling upword to the DOM Tree till parent does not subscribe to it
       });
       this.dispatchEvent(litEvent);
    }


    render(){
        return html `<div> 
               <span> ${this.inputMessage} </span> 
               <hr/>
               <ul>
                 ${this.list.map((d)=>
                    html `<li>${d}</li>`)}
               </ul>  
               <hr/>
                <strong> First Name ${this.fname} && Last Name ${this.lname}   </strong> 
               <hr/>
               <input type="button" value="Click Me" @click=${this.clickMe}/>
            </div>
        `;
    }
}