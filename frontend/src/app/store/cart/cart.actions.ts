import { Product } from "../../models/product";

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

