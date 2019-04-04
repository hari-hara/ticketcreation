import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class SearchTicket extends PolymerElement{
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
                value: "This is Search Ticket page"
            }
        }
    }
    static get template(){
        return html `
            <h2>[[pageTitle]]</h2>
        `
    }

}
customElements.define("search-ticket", SearchTicket);