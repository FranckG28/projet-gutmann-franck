import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';

@Component({
    selector: 'app-search-bar',
    standalone: true,
    imports: [
        CommonModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './search-bar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {

    @Input() search = '';

    @Input() placeholder = 'Rechercher...';

    @Output() searchChange = new EventEmitter<string>();

    emit(value: Event) {
        this.searchChange.emit(value as unknown as string);
    }

}
