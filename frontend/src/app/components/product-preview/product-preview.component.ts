import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { IngredientPreviewComponent } from '../ingredient-preview/ingredient-preview.component';

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
}
