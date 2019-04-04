import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class ViewTicket extends PolymerElement{
    constructor(){
        super();
    }
    ready(){
        
        super.ready();

    }
    static get properties(){
        return {
            pageTitle:{
                type: String,
                value: "This is View Ticket page"
            }
        }
    }
    static get template(){
        return html `
            <h2>[[pageTitle]]</h2>
        `
    }

}
customElements.define("view-ticket", ViewTicket);