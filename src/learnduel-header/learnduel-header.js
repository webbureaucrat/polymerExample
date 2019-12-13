// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class LearnDuelHeader extends LitElement {

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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
            .topnav {
              background-color: #333;
              overflow: hidden;
            }
            
            /* Style the links inside the navigation bar */
            .topnav a {
              float: left;
              display: block;
              color: #f2f2f2;
              text-align: center;
              padding: 14px 16px;
              text-decoration: none;
              font-size: 17px;
            }
            
            /* Change the color of links on hover */
            .topnav a:hover {
              background-color: #ddd;
              color: black;
            }
            
            /* Add an active class to highlight the current page */
            .topnav a.active {
              background-color: #4CAF50;
              color: white;
            }
            
            /* Hide the link that should open and close the topnav on small screens */
            .topnav .icon {
              display: none;
            }
        </style>

        <div class="topnav" id="myTopnav">
          <a href="#play">Play</a>
          <a href="#about" class="active">About</a>
          <a href="#contact">Login</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
        </div>
    `;
    }
}
// Register the new element with the browser.
customElements.define('learnduel-header', LearnDuelHeader);
