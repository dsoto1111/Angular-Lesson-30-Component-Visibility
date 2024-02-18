import { Component, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter, HostListener, ViewChildren, QueryList } from '@angular/core';
import { PaneDirective } from '../pane.directive';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
    mouseOverIt: boolean = false;
    clickDropDownButton: boolean = false;
    height: string = '0';

    @Output() navHeight = new EventEmitter<string>();

    @ViewChild('nav') nav!: ElementRef;
    @ViewChildren(PaneDirective) panes!: QueryList<PaneDirective>;

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.navHeight.emit(this.nav.nativeElement.offsetHeight);
            this.height = this.nav.nativeElement.offsetHeight.toString();
        }, 0);
    }

    @HostListener('window:resize') resize() {
        setTimeout(() => {
            this.navHeight.emit(this.nav.nativeElement.offsetHeight);
            this.height = this.nav.nativeElement.offsetHeight.toString();            
        }, 0);
    }

    @HostListener('window:keydown.enter', ['$event']) enterKey(event: KeyboardEvent) {
        console.log('The Enter Key has been pressed');
    }
}
