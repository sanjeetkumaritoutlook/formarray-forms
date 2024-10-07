import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{
  userName: any; 
  formdata : any;
  ngOnInit() { 
     this.formdata = new FormGroup({ 
        userName: new FormControl("Tutorialspoint")
     }); 
  } 
  onClickSubmit(data:any) {this.userName = data.userName;}
}
