import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiSvgModule, TuiTooltipModule } from '@taiga-ui/core';
import { IngredientFiltersComponent } from '../ingredient-filters/ingredient-filters.component';
import { CartPreviewComponent } from '../cart-preview/cart-preview.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-aside',
    standalone: true,
    imports: [
        CommonModule,
        SearchBarComponent,
        RouterModule,
        TuiTooltipModule,
        IngredientFiltersComponent,
        CartPreviewComponent,
        TuiSvgModule
    ],
    templateUrl: './aside.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent { }
