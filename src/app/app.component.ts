import { Component,HostBinding  } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'formarray-forms';
  btnClicked($event) {
    console.log($event)
    alert('button clicked')
  }

  onOpen($event) {
    console.log($event)
    alert('button open')
  }

  onClose($event) {
    console.log($event)
    alert('button close')
  }

}

