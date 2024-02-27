import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { TuiButtonModule, tuiButtonOptionsProvider } from '@taiga-ui/core';
import { IngredientTileComponent } from '../../components/ingredient-tile/ingredient-tile.component';
import { MoneyComponent } from '../../components/money/money.component';
import { DesignerDroplistComponent } from '../../components/designer-droplist/designer-droplist.component';
import { DesignerService } from './designer.service';

@Component({
    selector: 'app-designer',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent,
        TuiButtonModule,
        IngredientTileComponent,
        MoneyComponent,
        DesignerDroplistComponent
    ],
    providers: [
        DesignerService,
        tuiButtonOptionsProvider({
            size: 'm'
        })
    ],
    templateUrl: './designer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignerComponent {

    readonly designerService = inject(DesignerService);

    exit() {

    }

    save() {

    }

    validate() {

    }

}
