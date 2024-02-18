import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTempRef]'
})
export class TempRefDirective {

  constructor(public template: TemplateRef<any>) { }

}
