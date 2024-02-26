import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { CURRENCY } from '../../config/environment';

@Component({
    selector: 'app-ingredient-preview',
    standalone: true,
    imports: [
        CommonModule,
        TuiMoneyModule
    ],
    templateUrl: './ingredient-preview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientPreviewComponent {

    @Input() ingredient!: Ingredient;

    currency = CURRENCY;

}
