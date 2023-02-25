import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
<<<<<<< Updated upstream
      color: darkred;
=======
      color: red;
>>>>>>> Stashed changes
    }
  `]
})
export class AppComponent {
}
