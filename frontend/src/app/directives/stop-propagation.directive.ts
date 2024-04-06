import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[stopPropagation]',
    standalone: true,
})
export class StopPropagationDirective {

    @HostListener('click', ['$event'])
    public onClick(event: Event): void {
        event.stopPropagation();
        event.preventDefault();
    }

    @HostListener('mousedown', ['$event'])
    public onMousedown(event: Event): void {
        event.stopPropagation();
        event.preventDefault();
    }

}
