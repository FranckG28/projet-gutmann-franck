import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Select, Store } from "@ngxs/store";
import { TuiButtonModule, TuiDataListModule, TuiDropdownModule, TuiHostedDropdownModule } from "@taiga-ui/core";
import { Logout, UserState } from "../../store/user.state";
import { Observable } from "rxjs";
import { User } from "../../models/user";
import { TuiLetModule } from "@taiga-ui/cdk";
import { TuiAvatarModule } from "@taiga-ui/kit";

@Component({
    selector: 'app-account-card',
    standalone: true,
    imports: [
        CommonModule,
        TuiDropdownModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiDataListModule,
        RouterModule,
        TuiLetModule,
        TuiAvatarModule
    ],
    templateUrl: './account-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCardComponent {

    open = false;
    @Select(UserState.user) user$!: Observable<User>;

    private readonly store = inject(Store);

    logout(): void {
        this.store.dispatch(new Logout());
    }

}
