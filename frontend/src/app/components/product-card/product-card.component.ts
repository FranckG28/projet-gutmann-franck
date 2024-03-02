import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductPreviewComponent } from '../product-preview/product-preview.component';
import { ProductInfoComponent } from '../product-info/product-info.component';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [
        CommonModule,
        ProductPreviewComponent,
        ProductInfoComponent
    ],
    templateUrl: './product-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

    @Input()
    product!: Product;

}
