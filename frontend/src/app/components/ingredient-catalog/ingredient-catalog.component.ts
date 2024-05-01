import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiTabsModule } from '@taiga-ui/kit';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';
import { IngredientsService } from '../../services/ingredients.service';
import {
    CdkDrag,
    CdkDragPlaceholder,
    CdkDropList,
} from '@angular/cdk/drag-drop';
import { IngredientTileComponent } from '../ingredient-tile/ingredient-tile.component';
import { BehaviorSubject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { SearchBarComponent } from '../search-bar/search-bar.component';

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
        CdkDragPlaceholder,
        SearchBarComponent
    ],
    templateUrl: './ingredient-catalog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientCatalogComponent {

    private readonly ingredientsService = inject(IngredientsService);
    search$ = new BehaviorSubject<string>('');
    categories$ = this.ingredientsService.categories();

    searchResults$ = this.search$.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((search) => {
            return this.ingredientsService.search(search);
        })
    );

    index = 0;

}
