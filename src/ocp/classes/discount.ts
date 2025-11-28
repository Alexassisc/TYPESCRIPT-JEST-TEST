export abstract class Discount {
  constructor(protected readonly discount: number) {}

  calculate(price: number): number {
    if (this.discount <= 0) return price;
    return Number((price * (1 - this.discount)).toFixed(2));
  }
}

export class NoDiscount extends Discount {
  constructor() {
    super(0);
  }
}

export class TenPercentDiscount extends Discount {
  constructor() {
    super(0.1);
  }
}

export class TwentyPercentDiscount extends Discount {
  constructor() {
    super(0.2);
  }
}

export class ThirtyPercentDiscount extends Discount {
  constructor() {
    super(0.3);
  }
}

export class FiftyPercentDiscount extends Discount {
  constructor() {
    super(0.5);
  }
}
