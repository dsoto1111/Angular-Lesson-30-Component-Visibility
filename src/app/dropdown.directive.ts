import { Directive, Input, HostBinding, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit {

    fromButton: boolean = false;
    dropped: boolean = false;

    @Input() set appDropdown(value: boolean) {
        this.fromButton = true;
    }

    constructor(private el: ElementRef) { }

    ngAfterViewInit(): void {
        this.fromButton = false;
    }

    @HostBinding('class.drop') drop: boolean = false;

    @HostListener('document:click', ['$event']) click(event: Event) {
        if (this.fromButton) {
            this.dropped = !this.dropped;
            this.drop = this.dropped
        } else {
            if (!this.el.nativeElement.contains(event.target)) {
                this.dropped = false;
                this.drop = this.dropped;
            }
        }
        this.fromButton = false;
    }
}
