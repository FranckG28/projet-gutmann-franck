import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { TuiLetModule } from '@taiga-ui/cdk';
import { ProductService } from '../../services/product.service';
import { combineLatest, debounceTime, map, startWith } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiFilterModule } from '@taiga-ui/kit';
import { IngredientsService } from '../../services/ingredients.service';
import { TuiButtonModule, TuiScrollbarModule } from '@taiga-ui/core';
import { Ingredient } from '../../models/ingredient';
import { RouterModule } from '@angular/router';
import { MoneyComponent } from '../../components/money/money.component';

@Component({
    selector: 'app-catalog',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent,
        ProductCardComponent,
        TuiLetModule,
        TuiFilterModule,
        FormsModule,
        ReactiveFormsModule,
        TuiScrollbarModule,
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


    ingredients$ = inject(IngredientsService).getAllIngredients().pipe(
        map((ingredients) => Object.values(ingredients))
    );

    filters = new FormControl<Ingredient[]>([]);

    products$ = combineLatest([
        inject(ProductService).getProducts(),
        this.filters.valueChanges.pipe(
            debounceTime(300),
            startWith([])
        )
    ]).pipe(
        map(([products, filters]) => {
            return products.filter((product) => {

                if (products && (filters ?? []).length > 0) {
                    return (filters ?? []).every((filter) => product.recipe.includes(filter.id));
                }

                return products;
            });
        })
    );

}
