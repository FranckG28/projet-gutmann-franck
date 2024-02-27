import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiTabsModule } from '@taiga-ui/kit';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';
import { IngredientsService } from '../../services/ingredients.service';
import {
    CdkDrag,
    CdkDropList,
} from '@angular/cdk/drag-drop';
import { IngredientTileComponent } from '../ingredient-tile/ingredient-tile.component';

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
        CdkDropList
    ],
    templateUrl: './ingredient-catalog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientCatalogComponent {

    items$ = inject(IngredientsService).getIngredientCategories();

    index = 0;

}
