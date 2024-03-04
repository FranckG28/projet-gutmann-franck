import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchProductsComponent } from '../search-products/search-products.component';
import { TuiTooltipModule } from '@taiga-ui/core';
import { IngredientFiltersComponent } from '../ingredient-filters/ingredient-filters.component';

@Component({
    selector: 'app-aside',
    standalone: true,
    imports: [
        CommonModule,
        SearchProductsComponent,
        TuiTooltipModule,
        IngredientFiltersComponent
    ],
    templateUrl: './aside.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent { }
