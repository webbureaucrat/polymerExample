// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class BrowserTable extends LitElement {

    constructor() {
        super();
        this.message = 'Show Sources';
      }


    static get properties() {
      return { message: String };
    }

    clickHandler(event) {
      var win = window.open('https://github.com/webbureaucrat/learn-duel-webApp', '_blank');
      win.focus();
    }
          
    /**
     * Implement `render` to define a template for your element.
     *
     * You must provide an implementation of `render` for any element
     * that uses LitElement as a base class.
     */
    render(){
        /**
         * `render` must return a lit-html `TemplateResult`.
         *
         * To create a `TemplateResult`, tag a JavaScript template literal
         * with the `html` helper function:
         */
        return html`
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <table class="w3-table-all w3-striped">
            <thead>
            <tr class="w3-green">
                <th>Edge</th>
                <th>Chrome</th>
                <th>Safari</th>
                <th>Opera</th>
                <th>Firefox</th>
            </tr>
            </thead>
            <tr>
            <td>&#10004;</td>
            <td>&#10004;</td>
            <td>&#10004;</td>
            <td>&#10004;</td>
            <td>&#10004;</td>
            </tr>
        </table>
        
    `;
    }
}
// Register the new element with the browser.
customElements.define('browser-table', BrowserTable);
