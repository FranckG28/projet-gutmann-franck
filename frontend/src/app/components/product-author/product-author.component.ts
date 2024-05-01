import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
    selector: 'app-product-author',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './product-author.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAuthorComponent {

    @Input() user: User | undefined;

}
