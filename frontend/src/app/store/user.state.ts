import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { User } from "../models/user";

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
    constructor() { }

    @Action(SetUser)
    setUser({ patchState }: StateContext<UserStateModel>, { payload }: SetUser) {
        patchState({ user: payload });
    }

    @Action(SetToken)
    setToken({ patchState }: StateContext<UserStateModel>, { payload }: SetToken) {
        patchState({ token: payload });
    }

    @Action(Logout)
    logout({ setState }: StateContext<UserStateModel>) {
        setState(userInitialState);
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