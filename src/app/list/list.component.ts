import { Component, Input  } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { NgIf } from '@angular/common';

//circualr dependency- standalone component
//https://timdeschryver.dev/blog/fixing-angular-standalone-components-that-have-a-circular-dependency
//forwardref
@Component({
  selector: 'app-list',
  
  template: `
    <p>list works!</p>
    <app-list-item *ngIf="!fromListItem"></app-list-item>
  `,
  standalone: true,
  imports: [
    NgIf,
    ListItemComponent,
],
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() fromListItem: boolean = false;

}
