/*
Liskov substitution principle (Princípio da substituição de Liskov) -
Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
Mais simples ainda: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
*/

// Importa os serviços e classes necessárias
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';

// Importa todas as classes de desconto (cada uma estende Discount)
import {
  TenPercentDiscount,
  TwentyPercentDiscount,
  ThirtyPercentDiscount,
  NoDiscount,
  FiftyPercentDiscount,
} from './classes/discount';

// Criação das estratégias de desconto
// Cada uma destas classes segue o OCP: você cria novas sem alterar o código existente
const noDiscount = new NoDiscount();
const thirtyPercentDiscount = new ThirtyPercentDiscount();
const twentyPercentDiscount = new TwentyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const fiftyPercentDiscount = new FiftyPercentDiscount();

// Instancia o carrinho usando um desconto específico
// Aqui estamos usando: sem desconto (NoDiscount)
const shoppingCart = new ShoppingCart(noDiscount);

// Serviços auxiliares
const messaging = new Messaging();
const persistency = new Persistency();

// Cria o pedido com injeção das dependências necessárias
const order = new Order(shoppingCart, messaging, persistency);

// Adiciona itens ao carrinho
shoppingCart.addItem(new Product('Caderno', 49.91));
shoppingCart.addItem(new Product('Lapis', 9.9123));
shoppingCart.addItem(new Product('Borracha', 1.59));

// Exibe os itens do carrinho (somente leitura)
console.log(shoppingCart.Items);

// Exibe o total bruto sem desconto (soma dos preços)
console.log(shoppingCart.total());

// Exibe o total com o desconto configurado no carrinho
console.log(shoppingCart.totalWithDiscount());

// Status inicial do pedido (open)
console.log(order.orderStatus);

// Finaliza o pedido
// - verifica se o carrinho está vazio
// - aplica desconto
// - envia mensagem
// - persiste o pedido
// - limpa o carrinho
// - altera status para 'closed'
order.checkout();

// Exibe o novo status (closed)
console.log(order.orderStatus);
