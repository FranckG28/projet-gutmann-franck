import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { MoneyComponent } from '../money/money.component';

@Component({
    selector: 'app-ingredient-tile',
    standalone: true,
    imports: [
        CommonModule,
        MoneyComponent,
        TuiButtonModule,
        TuiSvgModule
    ],
    templateUrl: './ingredient-tile.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientTileComponent {

    @Input() ingredient!: Ingredient;

    @Output() delete = new EventEmitter<Ingredient>();

}
