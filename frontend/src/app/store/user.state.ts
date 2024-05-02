import { Injectable, inject } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { ClearLikes, FetchLikes } from "./like.state";

export type UserStateModel = {
    user?: User;
    token?: string;
}

const userInitialState: UserStateModel = {
    user: undefined,
    token: undefined
}

export class SetUser {
    static readonly type = '[User] Set User';
    constructor(public payload: User) { }
}

export class SetToken {
    static readonly type = '[User] Set Token';
    constructor(public payload: string) { }
}

export class Logout {
    static readonly type = '[User] Logout';
}

@State<UserStateModel>({
    name: 'user',
    defaults: userInitialState
})
@Injectable()
export class UserState {

    private readonly router = inject(Router);
    private readonly store = inject(Store);

    constructor() { }

    @Action(SetUser)
    setUser({ patchState }: StateContext<UserStateModel>, { payload }: SetUser) {
        patchState({ user: payload });
        this.store.dispatch(new FetchLikes());
    }

    @Action(SetToken)
    setToken({ patchState }: StateContext<UserStateModel>, { payload }: SetToken) {
        patchState({ token: payload });
    }

    @Action(Logout)
    logout({ setState }: StateContext<UserStateModel>) {
        this.router.navigate(['/']);
        setState(userInitialState);
        this.store.dispatch(new ClearLikes());
    }

    @Selector()
    static user(state: UserStateModel) {
        return state.user;
    }

    @Selector()
    static token(state: UserStateModel) {
        return state.token;
    }

    @Selector()
    static isAuthenticated(state: UserStateModel) {
        return !!state.token && !!state.user;
    }

}