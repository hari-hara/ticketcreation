import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';


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
            <iron-form id="transactionFilters" class="col-md-4 offset-md-4 border border-secondary pt-3 pb-3">
                <form>
                    <paper-dropdown-menu label="Select Category" name="selectCategory">
                        <paper-listbox slot="dropdown-content" on-change="checkCategoryType" selected="{{selectedCategory}}" attr-for-selected="name" selected-attribute="visible">
                            <paper-item name="high">High</paper-item>
                            <paper-item name="medium">Medium</paper-item>
                            <paper-item name="low">Low</paper-item>
                        </paper-listbox>
                    </paper-dropdown-menu>
                    
                    <paper-button label="Submit" required raised on-click="getTransactions">Submit</paper-input>
                </form>
            </iron-form>
            <iron-ajax
                id="ajax"
                handle-as="json"
                on-response="handleResponse"
                debounce-duration="300">
            </iron-ajax>
            
            <table class="table mt-5">
                <thead>
                    <tr>
                        <th>Franchise Name ID</th>
                        <th>Business Area</th>
                        <th>Breach Category</th>
                    </tr>
                </thead>
                    <iron-scroll-threshold id="ironScrollTheshold" on-lower-threshold="_loadMoreData">
                        <tbody id="scrollable-element" style="overflow: auto;height: 200px;">
                        <template scroll-target="scrollable-element" is="dom-repeat" items=[[filteredResults]]>
                                <template is="dom-repeat" items=[[item.details]]  as="historyResults">
                                    <tr>
                                        <td scope="row">{{item.franchiseName}}</td>
                                        <td>{{historyResults.businessArea}}</td>
                                        <td>{{historyResults.breachCategory}}</td>
                                        <td><paper-button raised on-click="enrollCourse">Update</paper-button></td>
                                        <td>{{historyResults.description}}</td>
                                    </tr>
                                </template>
                        </template>
                        </tbody>
                    <iron-scroll-threshold>
            </table><br/>
            <div class="row">
                <div class="float-left">
                    <paper-button raised disabled="[[isPrevDisabled]]" on-click="_getAllResults">Previous</paper-button>
                    <paper-button raised disabled="[[isNextDisabled]]" on-click="_getAllResults">Next</paper-button>
                </div>
                <div class="float-left">
                
                </div>
            </div>

        `
    }

}
customElements.define("view-ticket", ViewTicket);