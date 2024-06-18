import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardModule } from "../../modules/card/card.module";
import { TitleComponent } from "../../components/title/title.component";
import { RouterModule } from "@angular/router";
import { TuiButtonModule } from "@taiga-ui/core";

@Component({
    selector: 'app-pay',
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        TitleComponent,
        RouterModule,
        TuiButtonModule
    ],
    templateUrl: './pay.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PayComponent {

    pay(): void {
        window.open("https://youtu.be/MddBsVbih1o?si=vGUPmBsi3Rzdcmaz", "_blank")
    }

}
