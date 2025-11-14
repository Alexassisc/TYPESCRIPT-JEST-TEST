// Tipo de um item do carrinho: contém nome e preço
type CartItem = { name: string; price: number };

// Tipo literal para o status do pedido
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  // Array privado que armazena os itens do carrinho
  // readonly impede reatribuição do array, mas o conteúdo pode mudar
  private readonly _items: CartItem[] = [];

  // Status do pedido (aberto ou fechado)
  private _ordersStus: OrderStatus = 'open';

  // Adiciona um item ao carrinho
  addItem(item: CartItem): void {
    this._items.push(item);
  }

  // Remove um item pelo índice, com verificação de posição válida
  remove(index: number) {
    if (index >= 0 && index < this._items.length) {
      this._items.splice(index, 1);
    }
  }

  // Getter que retorna os itens do carrinho como somente leitura
  get Items(): Readonly<CartItem[]> {
    return this._items;
  }

  // Getter que retorna o status atual do pedido
  get orderStatus(): OrderStatus {
    return this._ordersStus;
  }

  // Calcula o total dos preços dos itens e retorna como string com 2 casas decimais
  total(): string {
    return this._items
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  }

  // Retorna true se o carrinho estiver vazio
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  // Limpa todos os itens do carrinho
  clear(): void {
    this._items.length = 0;
  }
}

// ---------------------------------------------
// TESTE DA CLASSE
// ---------------------------------------------

const shoppingCart = new ShoppingCart();

// Adiciona itens ao carrinho
shoppingCart.addItem({ name: 'Caderno', price: 12.5 });
shoppingCart.addItem({ name: 'Lapis', price: 2.0 });
shoppingCart.addItem({ name: 'Borracha', price: 1.0 });

// Exibe itens
console.log(shoppingCart.Items);

// Verifica se o carrinho está vazio (false)
console.log(shoppingCart.isEmpty());

// Exibe o total formatado (por exemplo: "15.50")
console.log(shoppingCart.total());
