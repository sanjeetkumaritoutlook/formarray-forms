import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{
  ngOnInit() {
  }
  //ng serve --port 4401
  //https://www.tutorialspoint.com/angular8/angular8_forms.htm
  //stringify- convert json to String
  onClickSubmit(result:any) {
    console.log("full data of form : " + JSON.stringify(result)); 
    console.log("You have entered : " + result.username); 
 }
}
