class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const products: Product[] = [
  new Product("Pen", 50),
  new Product("Notebook", 120),
  new Product("Bag", 200),
  new Product("Pencil", 30)
];

const expensiveProducts = products.filter(product => product.price > 100);

console.log(expensiveProducts);