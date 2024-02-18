import { Directive, Input, OnChanges, SimpleChanges, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appSetTopOffset]'
})
export class SetTopOffsetDirective implements OnChanges {

    @Input() appSetTopOffset!: string;

    constructor(private el: ElementRef) { }

    ngOnChanges(changes: SimpleChanges): void {
        this.position = 'relative';
        this.top = this.appSetTopOffset + 'px';
        this.attributeValue = 'Attribute Value';
        this.DOMValue = 'DOM Value';
    }

    @HostBinding('style.top') top!: string;
    @HostBinding('style.position') position!: string;
    @HostBinding('attr.value') attributeValue!: string;
    @HostBinding('value') DOMValue!:string;
}
