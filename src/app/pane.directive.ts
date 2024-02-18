import { Directive, Input, EventEmitter } from '@angular/core';

@Directive({
    selector: 'pane'
})
export class PaneDirective {

    @Input() get id(): string {
        return this._id;
    } set id(value: string) {
        this._id = value;
        this.emitter.emit(this._id);
    }

    private _id!: string;

    emitter = new EventEmitter<string>();

    constructor() { }

}
