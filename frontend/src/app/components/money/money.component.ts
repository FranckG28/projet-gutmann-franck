import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CURRENCY } from '../../config/environment';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';

@Component({
    selector: 'app-money',
    standalone: true,
    imports: [
        CommonModule,
        TuiMoneyModule
    ],
    templateUrl: './money.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoneyComponent {

    @Input() value!: number;

    currency = CURRENCY;
}
