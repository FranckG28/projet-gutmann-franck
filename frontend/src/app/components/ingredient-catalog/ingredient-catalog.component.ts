import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiInputModule, TuiTabsModule } from '@taiga-ui/kit';
import { TuiScrollbarModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';
import { IngredientsService } from '../../services/ingredients.service';
import {
    CdkDrag,
    CdkDropList,
} from '@angular/cdk/drag-drop';
import { IngredientTileComponent } from '../ingredient-tile/ingredient-tile.component';
import { debounceTime, distinctUntilChanged, map, of, switchMap } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ingredient } from '../../models/ingredient';

@Component({
    selector: 'app-ingredient-catalog',
    standalone: true,
    imports: [
        CommonModule,
        TuiTabsModule,
        TuiScrollbarModule,
        TuiLetModule,
        IngredientTileComponent,
        CdkDrag,
        CdkDropList,
        TuiInputModule,
        FormsModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule
    ],
    templateUrl: './ingredient-catalog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientCatalogComponent {

    search = new FormControl<string>('');

    categories$ = inject(IngredientsService).getIngredientCategories();

    items$ = this.categories$.pipe(
        map((categories) => {
            return categories.reduce((acc, category) => {
                return acc.concat(category.ingredients);
            }, [] as Ingredient[]);
        })
    );

    searchResults$ = this.search.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((search) => {
            return this.items$.pipe(
                map((items) => {
                    return items.filter((item) => {
                        return item.name.toLowerCase().includes(search?.toLowerCase() ?? '');
                    });
                })
            );
        })
    );

    index = 0;

}
