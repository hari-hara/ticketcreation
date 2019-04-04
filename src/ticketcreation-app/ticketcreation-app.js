import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import { sharedStyles } from './shared-styles.js';
/**
 * @customElement
 * @polymer
 */
class TicketcreationApp extends PolymerElement {
  static get template() {
    return html`
    ${sharedStyles}
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <app-location route="{{route}}"></app-location>
      <app-route
          route="{{route}}"
          pattern="/:page"
          data="{{routeData}}"
          tail="{{subroute}}">
      </app-route>
      <app-route
          route="{{subroute}}"
          pattern="/:id"
          data="{{subrouteData}}">
      </app-route>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><a  class="nav-link"href="/create-ticket">Create Ticket</a></li>
            <li class="nav-item"><a class="nav-link" href="/view-ticket">View Ticket</a></li>
            <li class="nav-item"><a class="nav-link" href="/search-ticket">Search Ticket</a></li>
          </ul>
          </div>
          </nav> 
          <div class="d-flex justify-content-center">
            <paper-spinner active={{isActive}}></paper-spinner>
          </div> 
        <iron-pages selected=[[page]] attr-for-selected="name" selected-attribute="visible" fallback-selection="404">
          <create-ticket name="create-ticket"></create-ticket>
          <view-ticket name="view-ticket"></view-ticket>
          <search-ticket name="search-ticket"></search-ticket>
        </iron-pages>
      </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'ticketcreation-app'
      },
      page:{
        type: String,
        observer: '_pageChanged'
      }
    };
  }
  static get observers(){
    
    return ['_routeChanged(routeData.page)'];
    
  }
  _routeChanged(page){
    this.page = (page || ('create-ticket'))
  }
  _pageChanged(newPage, oldPage){
    this.isActive = true;
    switch(newPage){
      case 'create-ticket':
        import('./create-ticket.js');
        this.isActive = false;
        break;
      case 'view-ticket':
        import('./view-ticket.js');
        this.isActive = false;
        break;
      case 'search-ticket':
        import('./search-ticket.js');
        this.isActive = false;
        break;
      default:
        this.page =  'create-ticket';   
    }
  }
}

window.customElements.define('ticketcreation-app', TicketcreationApp);
