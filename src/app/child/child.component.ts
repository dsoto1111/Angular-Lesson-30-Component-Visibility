import { AfterViewInit, Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { TempRefDirective } from '../temp-ref.directive';
import { PaneDirective } from '../pane.directive';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterViewInit {
    showIt: boolean = false;
    selectedPane!: PaneDirective | undefined;

    @ContentChild(TempRefDirective) content!: TempRefDirective;

    @ContentChildren(PaneDirective) panes!: QueryList<PaneDirective>;

    ngAfterViewInit(): void {
        let joinedString: string;
        joinedString = this.panes.map((p) => { return ( p.id + ' joined string' ) }).join(', ');
        console.log(joinedString);

        this.panes.forEach((p) => {
            console.log(p.id);
            p.emitter.subscribe((p) => {
                console.log(p);
            })
        });

        this.selectedPane = this.panes.find((p) => { return (p.id === 'ContentChildren pane 2') });
        console.log('This pane was selected using the find method: ' + this.selectedPane?.id);
    }
}
