import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fancybtn',
  // templateUrl: './fancybtn.component.html',
  template: `
  <button>
    <ng-content></ng-content>
  </button> `,
  styleUrls: ['./fancybtn.component.scss']
})
export class FancybtnComponent {

}
