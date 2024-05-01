import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiFilterModule } from '@taiga-ui/kit';
import { FiltersService } from '../../services/filters.service';
import { of } from 'rxjs';

@Component({
    selector: 'app-ingredient-filters',
    standalone: true,
    imports: [
        CommonModule,
        TuiFilterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './ingredient-filters.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientFiltersComponent {

    readonly formControl = inject(FiltersService).formControl;

    readonly ingredients$ = of([]);

}
