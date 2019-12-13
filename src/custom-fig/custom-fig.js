// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class CustomFig extends LitElement {

    constructor() {
        super();
        this.path = '';
        this.figcaption = '';
      }


    static get properties() {
      return { path: String };
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
        <figure>
            <img src="${this.path}">
            <figcaption>View of LearnDuel gameplay.</figcaption>
        </figure>
    `;
    }
}
// Register the new element with the browser.
customElements.define('custom-fig', CustomFig);