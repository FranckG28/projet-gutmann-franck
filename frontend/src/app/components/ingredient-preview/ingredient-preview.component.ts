import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { TuiHintModule } from '@taiga-ui/core';

@Component({
    selector: 'app-ingredient-preview',
    standalone: true,
    imports: [
        CommonModule,
        TuiHintModule,
    ],
    templateUrl: './ingredient-preview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientPreviewComponent {

    @Input() ingredient!: Ingredient;

}
