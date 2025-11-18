import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

// Adiciona itens ao carrinho
shoppingCart.addItem(new Product('Caderno', 12.5));
shoppingCart.addItem(new Product('Lapis', 2.0));
shoppingCart.addItem(new Product('Borracha', 1.0));

console.log(shoppingCart.Items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
