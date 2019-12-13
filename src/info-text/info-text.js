// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';


// Extend the LitElement base class
class InfoText extends LitElement {

    constructor() {
        super();
        //this.message = 'Show Sources';
      }


      static get properties() {
        return { message: String };
      }

    render(){
        return html`
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <div class="w3-container w3-center">
            <div class="w3-display-topmiddle w3-hide-small" style="padding-top: 80px;">
                <h1 class="w3-text-teal">Learn Duel</h1>
                <p class="lead">The game Learn Duel is based on QuizDuel and works in a similar fashion, but with a new twist:
                      <br />
                      You play with questions based on your school or study assignments.
                      <br>
                </p>

                <custom-fig path="src/images/game.PNG"></custom-fig>
                
                <br>

                <h3 class="w3-text-teal">How to play:</h1>
                <p>
                    First you have to type in your player name(s).
                    <br />
                    If you are playing alone, the answers can be selected with the mouse or the keys 1-4.
                    <br />In multiplayer mode player 1 can specify his answer with the keys 1-4 and\nplayer 2 with the keys 6-9.
                    <br /><br />
                    By clicking "Play Learn Duel", you enter the game mode.
                    <br />
                    You will have 60 seconds to answer each question.
                </p>

                <br>
                
                <h4 class="w3-text-teal">Possible features in future:</h4>

                <ul class="list-unstyled">
                    <li>defining own questions</li>
                    <li>increase max player count</li>
                </ul>

                <br>

                <h4 class="w3-text-teal">Supported Browsers:</h4>
                <browser-table></browser-table>
                
                <br>
                  <h5 class="w3-text-teal">License:</h5>
                  <p><small>This work is licensed under the terms of the MIT license. For a copy, see <a href="https://opensource.org/licenses/MIT">https://opensource.org/licenses/MIT</a> .
                      <br /><br />
                      If you would like to contribute, you can access our sources under following GitHub repository.
                  </small></p>

                <custom-btn message="Show Sources"></custom-btn>
            </div>  
        </div>

    `;
    }
}
// Register the new element with the browser.
customElements.define('info-text', InfoText);