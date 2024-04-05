import { Action, State, StateContext } from "@ngxs/store";
import { Product } from "../../models/product";
import { Injectable } from "@angular/core";
import { AddToCart, RemoveFromCart, UpdateCart } from "./cart.actions";

type CartStateModel = Product[];

@State<CartStateModel>({
    name: 'cart',
    defaults: []
})
@Injectable()
export class CartState {
    constructor() { }

    @Action(AddToCart)
    addToCart({ getState, patchState }: StateContext<CartStateModel>, { payload }: AddToCart) {
        const state = getState();
        patchState([...state, ...payload]);
    }

    @Action(RemoveFromCart)
    removeFromCart({ getState, patchState }: StateContext<CartStateModel>, { payload }: RemoveFromCart) {
        const state = getState();
        patchState(state.filter(product => !payload.includes(product)));
    }

    @Action(UpdateCart)
    updateCart({ patchState }: StateContext<CartStateModel>, { payload }: UpdateCart) {
        patchState(payload);
    }

}