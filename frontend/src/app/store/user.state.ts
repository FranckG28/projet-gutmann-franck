import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";

export type UserStateModel = {
    user: {
        id: string;
        email: string;
    }
    token: string;
}

const userInitialState: UserStateModel = {
    user: {
        id: '',
        email: '',
    },
    token: '',
}

export class SetUser {
    static readonly type = '[User] Set User';
    constructor(public payload: UserStateModel) { }
}

export class SetToken {
    static readonly type = '[User] Set Token';
    constructor(public payload: string) { }
}

@State<UserStateModel>({
    name: 'user',
    defaults: userInitialState
})
@Injectable()
export class UserState {
    constructor() { }

    @Action(SetUser)
    setUser({ setState }: StateContext<UserStateModel>, { payload }: SetUser) {
        setState(payload);
    }

    @Action(SetToken)
    setToken({ patchState }: StateContext<UserStateModel>, { payload }: SetToken) {
        patchState({ token: payload });
    }

    @Selector()
    static user(state: UserStateModel) {
        return state.user;
    }

    @Selector()
    static token(state: UserStateModel) {
        return state.token;
    }

}