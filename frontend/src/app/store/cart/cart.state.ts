import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Product } from "../../models/product";
import { Injectable } from "@angular/core";
import { AddToCart, EmptyCart, RemoveFromCart } from "./cart.actions";

type ProductStateModel = { [key: number]: Product };
type CountStateModel = { [key: number]: number };

export type CartStateModel = {
    products: ProductStateModel;
    counts: CountStateModel;
}

const defaults = {
    products: {},
    counts: {}
}

@State<CartStateModel>({
    name: 'cart',
    defaults
})
@Injectable()
export class CartState {
    constructor() { }

    @Action(AddToCart)
    addToCart({ getState, setState }: StateContext<CartStateModel>, { payload }: AddToCart) {
        const state = getState();

        setState({
            products: {
                ...state.products,
                ...payload.reduce((acc, product) => ({ ...acc, [product.id]: product }), {})
            },
            counts: {
                ...state.counts,
                ...payload.reduce((acc, product) => {
                    const id = product.id;
                    acc[id] = (acc[id] || state.counts[id] || 0) + 1;
                    return acc;
                }, {} as CountStateModel)
            }
        });
    }

    @Action(RemoveFromCart)
    removeFromCart({ getState, setState }: StateContext<CartStateModel>, { payload }: RemoveFromCart) {
        const state = { ...getState() }

        payload.forEach(product => {
            if (state.products[product.id]) {
                state.counts[product.id]--;

                if (state.counts[product.id] === 0) {
                    delete state.products[product.id];
                    delete state.counts[product.id];
                }
            }
        });

        setState(state);

    }

    @Action(EmptyCart)
    emptyCart({ setState }: StateContext<CartStateModel>) {
        setState(defaults);
    }

    @Selector()
    static list(state: CartStateModel): { product: Product, count: number }[] {
        return Object.keys(state.products).map((id) => ({
            product: state.products[+id],
            count: state.counts[+id]
        }))
    }

}