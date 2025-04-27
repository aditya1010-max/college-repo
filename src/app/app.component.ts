import { Component } from '@angular/core';

@Component({
  selector: 'app-root',          // The component's HTML tag
  templateUrl: './app.component.html',  // Link to the HTML template
  styleUrls: ['./app.component.css']    // Link to the CSS styles
})
export class AppComponent {
  title = 'My Simple Angular App';
  message = 'Hello, Welcome to Angular!';  // Initial greeting message

  // Function to change the message when the button is clicked
  changeMessage() {
    this.message = 'You clicked the button! 🎉';
  }
}
