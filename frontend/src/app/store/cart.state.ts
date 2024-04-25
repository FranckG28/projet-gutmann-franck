import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Product } from "../models/product";
import { Injectable } from "@angular/core";

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

export class AddToCart {
    static readonly type = '[Cart] Add to Cart';
    constructor(public payload: Product[]) { }
}

export class RemoveFromCart {
    static readonly type = '[Cart] Remove from Cart';
    constructor(public payload: Product[]) { }
}

export class EmptyCart {
    static readonly type = '[Cart] Empty Cart';
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

        const products = { ...state.products }
        const counts = { ...state.counts }

        const newCounts = payload.reduce((acc, product) => {
            const id = product.id;
            acc[id] = (acc[id] || state.counts[id] || 0) - 1;
            if (acc[id] <= 0) {
                delete acc[id];
            }
            return acc;
        }, counts);

        setState({
            products: Object.keys(products).reduce((acc, product) => {
                if (newCounts[+product] > 0) {
                    return { ...acc, [product]: products[+product] }
                }
                return acc;
            }, {}),
            counts: newCounts
        })

    }

    @Action(EmptyCart)
    emptyCart({ setState }: StateContext<CartStateModel>) {
        setState(defaults);
    }

    @Selector()
    static list(state: CartStateModel): { product: Product, count: number }[] {
        return Object.keys(state.counts).map((id) => ({
            product: state.products[+id],
            count: state.counts[+id]
        }))
    }

    @Selector()
    static count(state: CartStateModel): number {
        return Object.values(state.counts).reduce((acc, count) => acc + count, 0);
    }

    @Selector()
    static total(state: CartStateModel): number {
        return Object.keys(state.products).reduce((acc, id) => {
            const product = state.products[+id];
            const count = state.counts[+id];
            return acc + product.price * count;
        }, 0);
    }

}