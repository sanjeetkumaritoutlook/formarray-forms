import { Directive ,ElementRef,OnChanges,  HostListener} from '@angular/core';

@Directive({
  selector: '[appPasswordlengthdetector]'
})
export class PasswordlengthdetectorDirective implements OnChanges{

  constructor(private el: ElementRef) { 
    console.log(el.nativeElement.value);
  }

  //HostListener, a decorator in Angular which is used to listen for the event attached to the host element. It will be destroyed once the directive is unmounted.
  //https://www.pluralsight.com/guides/generating-a-custom-directive-with-the-cli
// Listen for keyup event and change background color
@HostListener("window:keyup") ngOnChanges(event) {

  let count = this.el.nativeElement.value.length
  console.log(this.el.nativeElement.value.length);
  if(count < 5) {
      this.el.nativeElement.style.backgroundColor = 'red'
  } else if(count >= 5 && count <= 10) {
      this.el.nativeElement.style.backgroundColor = 'green'
  } else if(count > 10) {
      this.el.nativeElement.style.backgroundColor = 'purple'
  }

}


}
