import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { TuiIslandModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';
import { MoneyComponent } from '../money/money.component';
import { ProductPreviewComponent } from '../product-preview/product-preview.component';
import { RatingComponent } from '../rating/rating.component';
import { TuiButtonModule, TuiHintModule } from '@taiga-ui/core';
import { ProductAuthorComponent } from '../product-author/product-author.component';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [
        CommonModule,
        TuiIslandModule,
        MoneyComponent,
        RouterModule,
        ProductPreviewComponent,
        RatingComponent,
        TuiButtonModule,
        TuiHintModule,
        ProductAuthorComponent
    ],
    templateUrl: './product-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

    @Input()
    product!: Product;

}
