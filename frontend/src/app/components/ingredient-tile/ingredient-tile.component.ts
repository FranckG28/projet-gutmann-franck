import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';
import { CURRENCY } from '../../config/environment';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';

@Component({
    selector: 'app-ingredient-tile',
    standalone: true,
    imports: [
        CommonModule,
        TuiMoneyModule,
        TuiButtonModule,
        TuiSvgModule,
    ],
    templateUrl: './ingredient-tile.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientTileComponent {

    @Input() ingredient!: Ingredient;

    @Output() delete = new EventEmitter<Ingredient>();

    currency = CURRENCY;
}
