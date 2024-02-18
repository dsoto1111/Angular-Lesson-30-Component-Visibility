import { Directive, HostListener, Input } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Directive({
    selector: '[appClick]'
})
export class ClickDirective {

    @Input() child!: ChildComponent;

    constructor() { }

    @HostListener('click') click() {
        this.child.showIt = !this.child.showIt;
    }

}
