import { CartItem } from './interfaces/cart-item';
import { OrderStatus } from './interfaces/order-status';

export class ShoppingCart {
  // Array privado que armazena os itens do carrinho
  // readonly impede reatribuição do array, mas o conteúdo pode mudar
  private readonly _items: CartItem[] = [];

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
