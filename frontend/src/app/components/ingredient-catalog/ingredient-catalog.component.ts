import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IngredientsCategory } from '../../models/ingredients-category';
import { Ingredient } from '../../models/ingredient';
import { TuiTabsModule } from '@taiga-ui/kit';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';
import { IngredientPreviewComponent } from '../ingredient-preview/ingredient-preview.component';

@Component({
    selector: 'app-ingredient-catalog',
    standalone: true,
    imports: [
        CommonModule,
        TuiTabsModule,
        TuiScrollbarModule,
        TuiLetModule,
        IngredientPreviewComponent
    ],
    templateUrl: './ingredient-catalog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientCatalogComponent {

    @Input() items: IngredientsCategory[] | null = null;

    @Output() add = new EventEmitter<Ingredient>();

    index = 0;

}
