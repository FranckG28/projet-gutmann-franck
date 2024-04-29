import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { TuiInputModule } from "@taiga-ui/kit";
import { TuiTextfieldControllerModule } from "@taiga-ui/core";

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [
        CommonModule,
        TitleComponent,
        TuiInputModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {



}
