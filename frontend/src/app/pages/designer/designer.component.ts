import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { DesignerService } from './designer.service';
import { TuiIslandModule, TuiTilesModule } from '@taiga-ui/kit';
import { IngredientTileComponent } from '../../components/ingredient-tile/ingredient-tile.component';

@Component({
    selector: 'app-designer',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent,
        TuiButtonModule,
        TuiTilesModule,
        IngredientTileComponent,
    ],
    providers: [
        DesignerService,
    ],
    templateUrl: './designer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignerComponent {

    readonly designerService = inject(DesignerService);

    order = new Map();

    exit() {

    }

    save() {

    }

    validate() {

    }

}
