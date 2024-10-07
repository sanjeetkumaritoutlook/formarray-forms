import { Component, forwardRef } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  standalone: true,
  imports: [
    forwardRef(() => ListComponent)
    //  // 👇 not using `forwardRef` throws a reference error
//Rather than directly importing the parent component (ListComponent) from the child component, the child component uses forwardRef to import the parent component.
  ],
})
export class ListItemComponent {
  
}
