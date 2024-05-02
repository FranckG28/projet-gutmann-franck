import { Action, State, StateContext, createSelector } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { LikesService } from "../services/likes.service";
import { catchError } from "rxjs";

export type LikesStateModel = { [key: number]: boolean };

const defaults: LikesStateModel = {};

export class AddLike {
    static readonly type = '[Likes] Add like';
    constructor(public productId: number) { }
}

export class RemoveLike {
    static readonly type = '[Likes] Remove like';
    constructor(public productId: number) { }
}

export class FetchLikes {
    static readonly type = '[Likes] Fetch likes';
}

export class ClearLikes {
    static readonly type = '[Likes] Clear likes';
}

@State<LikesStateModel>({
    name: 'likes',
    defaults
})
@Injectable()
export class LikesState {

    constructor(
        private readonly likesService: LikesService
    ) { }

    @Action(AddLike)
    addLike({ getState, setState }: StateContext<LikesStateModel>, { productId }: AddLike) {
        const state = getState();

        setState({
            ...state,
            [productId]: true
        });

        this.likesService.save(productId)
            .pipe(
                catchError(() => {

                    const newState = { ...state };
                    delete newState[productId];

                    setState(newState);
                    return [];
                })
            )
            .subscribe();
    }

    @Action(RemoveLike)
    removeLike({ getState, setState }: StateContext<LikesStateModel>, { productId }: RemoveLike) {

        const state = { ...getState() };
        delete state[productId];

        setState(state);

        this.likesService.delete(productId)
            .pipe(
                catchError(() => {
                    setState({
                        ...state,
                        [productId]: true
                    });
                    return [];
                })
            )
            .subscribe();
    }

    @Action(FetchLikes)
    fetchLikes({ setState }: StateContext<LikesStateModel>) {
        this.likesService.all()
            .subscribe((likes) => {
                const state: LikesStateModel = {};
                likes.forEach(product => state[product.id] = true);
                setState(state);
            });
    }

    @Action(ClearLikes)
    logout({ setState }: StateContext<LikesStateModel>) {
        setState(defaults);
    }

    static isLiked(productId: number) {
        return createSelector([LikesState], (state: LikesStateModel) => {
            return state[productId] === true;
        });
    }

}