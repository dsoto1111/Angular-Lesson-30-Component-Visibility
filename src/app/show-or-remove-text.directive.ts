import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appShowOrRemoveText]'
})
export class ShowOrRemoveTextDirective {

    @Input() set appShowOrRemoveText(toggle: boolean) {
        if (!toggle) {
            this.vcr.createEmbeddedView(this.template);
        } else {
            this.vcr.clear();
        }
    }

    constructor(private template: TemplateRef<any>, private vcr: ViewContainerRef) { }

}
