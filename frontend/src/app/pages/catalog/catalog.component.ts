import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { TuiLetModule } from '@taiga-ui/cdk';
import { ProductService } from '../../services/product.service';
import { BehaviorSubject, combineLatest, debounceTime, map, startWith } from 'rxjs';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiFilterModule } from '@taiga-ui/kit';
import { IngredientsService } from '../../services/ingredients.service';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { Ingredient } from '../../models/ingredient';

@Component({
    selector: 'app-catalog',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent,
        ProductCardComponent,
        TuiLetModule,
        SearchBarComponent,
        TuiFilterModule,
        FormsModule,
        ReactiveFormsModule,
        TuiScrollbarModule
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

    search$ = new BehaviorSubject<string>('');

    ingredients$ = inject(IngredientsService).getAllIngredients().pipe(
        map((ingredients) => Object.values(ingredients))
    );

    filters = new FormControl<Ingredient[]>([]);

    products$ = combineLatest([
        inject(ProductService).getProducts(),
        this.search$.pipe(
            debounceTime(300),
        ),
        this.filters.valueChanges.pipe(
            debounceTime(300),
            startWith([])
        )
    ]).pipe(
        map(([products, search, filters]) => {
            return products.filter((product) => {

                const searchMatch = product.name.toLowerCase().includes(search?.toLowerCase() ?? '');

                if (searchMatch && (filters ?? []).length > 0) {
                    return (filters ?? []).every((filter) => product.recipe.includes(filter.id));
                }

                return searchMatch;
            });
        })
    );

}
