import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.title, .navButton' //':not([title]).navButton' //'.navButton' //'p' //'[textContent]'
})
export class SelectorDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
      console.log(this.el);
  }
}
