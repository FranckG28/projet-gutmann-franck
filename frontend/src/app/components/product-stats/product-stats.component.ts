import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { TuiSvgModule } from '@taiga-ui/core';
import { Product } from '../../models/product';
import { StatComponent } from '../stat/stat.component';
import { StopPropagationDirective } from '../../directives/stop-propagation.directive';
import { Store } from '@ngxs/store';
import { AddLike, LikesState, RemoveLike } from '../../store/like.state';
import { Observable, combineLatest, first } from 'rxjs';
import { UserState } from '../../store/user.state';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-stats',
    standalone: true,
    imports: [
        CommonModule,
        TuiSvgModule,
        StatComponent,
        StopPropagationDirective
    ],
    templateUrl: './product-stats.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductStatsComponent implements OnChanges {

    @Input() product!: Product;

    private readonly store = inject(Store);
    private readonly router = inject(Router);

    isLiked$: Observable<boolean> = new Observable<boolean>();
    isAuthenticated$ = this.store.select(UserState.isAuthenticated);

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['product']) {
            this.isLiked$ = this.store.select(LikesState.isLiked(this.product.id));
        }
    }

    @Output() reviewClick = new EventEmitter<void>();
    @Output() remixClick = new EventEmitter<void>();
    @Output() orderClick = new EventEmitter<void>();

    like(): void {

        combineLatest([this.isAuthenticated$, this.isLiked$]).pipe(first()).subscribe(([isAuthenticated, isLiked]) => {
            if (!isAuthenticated) {
                this.router.navigate(['/login']);
            } else if (isLiked) {
                this.store.dispatch(new RemoveLike(this.product.id));
            } else {
                this.store.dispatch(new AddLike(this.product.id));
            }
        });

    }

}
