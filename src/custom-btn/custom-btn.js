// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class CustomBtn extends LitElement {

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
        <style>
            .button {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            }
        </style>

        <button class="button" @click=${this.clickHandler}>${this.message}</button>
    `;
    }
}
// Register the new element with the browser.
customElements.define('custom-btn', CustomBtn);
