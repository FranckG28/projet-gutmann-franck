import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { TuiLetModule } from '@taiga-ui/cdk';
import { ProductService } from '../../services/product.service';
import { combineLatest, map } from 'rxjs';
import { TuiButtonModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { MoneyComponent } from '../../components/money/money.component';
import { FiltersService } from '../../services/filters.service';
import { catalogOptionsProvider } from '../../providers/catalog-options.provider';

@Component({
    selector: 'app-catalog',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent,
        ProductCardComponent,
        TuiLetModule,
        RouterModule,
        MoneyComponent,
        TuiButtonModule
    ],
    templateUrl: './catalog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
        :host {
            display: block;
            width: 100%;
            max-width: 100%
        }
        `,
    ]
})
export class CatalogComponent {

    options = inject(catalogOptionsProvider);

    products$ = combineLatest([
        inject(ProductService).getProducts(),
        inject(FiltersService).filters$
    ]).pipe(
        map(([products, filters]) => {
            return products.filter((product) => {

                if (products && (filters ?? []).length > 0) {
                    return (filters ?? []).every((filter) => product.recipe.includes(filter.id));
                }

                return products;
            });
        }),
        map((products) => this.options.sorter ? products.sort(this.options.sorter) : products)
    );

}
