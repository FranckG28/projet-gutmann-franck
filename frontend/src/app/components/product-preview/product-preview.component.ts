import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Product } from '../../models/product';
import { IngredientPreviewComponent } from '../ingredient-preview/ingredient-preview.component';
import { IngredientsService } from '../../services/ingredients.service';
import { Observable, map } from 'rxjs';
import { Ingredient } from '../../models/ingredient';

@Component({
    selector: 'app-product-preview',
    standalone: true,
    imports: [
        CommonModule,
        IngredientPreviewComponent,
    ],
    templateUrl: './product-preview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPreviewComponent {

    @Input() product!: Product;

    ingredients$: Observable<{ [id: string]: Ingredient }> = inject(IngredientsService).all().pipe(
        map((ingredients) => {
            return ingredients.reduce((acc, ingredient) => {
                acc[ingredient.id] = ingredient;
                return acc;
            }, {} as { [id: string]: Ingredient });
        })
    );
}
