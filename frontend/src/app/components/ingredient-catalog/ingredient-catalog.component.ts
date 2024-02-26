import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IngredientsCategory } from '../../models/ingredients-category';
import { Ingredient } from '../../models/ingredient';

@Component({
    selector: 'app-ingredient-catalog',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './ingredient-catalog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientCatalogComponent {

    @Input() items!: IngredientsCategory[];

    @Output() add = new EventEmitter<Ingredient>();

}
