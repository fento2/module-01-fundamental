// exercise 1

interface Student {
    name: string,
    email: string,
    age: Date,
    score: number
}

interface StatResult {
    highest: number,
    lowest: number,
    average: number
}

interface StudentStatsResult {
    score: StatResult,
    age: StatResult
}

class StudentStatsCalculator {
    private student: Student[]

    constructor(student: Student[]) {
        this.student = student
    }

    private calculateAge(birthDate: Date) {
        const today = new Date()
        const actualBirthDate = new Date(birthDate)


        const age = today.getFullYear() - actualBirthDate.getFullYear()
        const hasHadBirthdayThisYear = today.getMonth() > actualBirthDate.getMonth() ||
            (today.getMonth() === actualBirthDate.getMonth() && today.getDate() >= actualBirthDate.getDate())
        return hasHadBirthdayThisYear ? age : age - 1
    }

    private calculateStats(values: number[]) {
        const highest = Math.max(...values)
        const lowest = Math.min(...values)

        const average = values.reduce((acc, val) => acc + val, 0) / values.length

        return {
            highest, lowest, average: parseFloat(average.toFixed(2))
        }
    }

    public getStats() {
        const scores = this.student.map((student) => student.score)
        const ages = this.student.map((student) => this.calculateAge(student.age))

        return {
            score: this.calculateStats(scores),
            age: this.calculateStats(ages)
        }
    }

}

const listStudent: Student[] = [
    {
        name: 'Alice',
        email: 'alice@example.com',
        age: new Date('2002-06-10'),
        score: 88
    },
    {
        name: 'Bob',
        email: 'bob@example.com',
        age: new Date('2001-07-08'),
        score: 92
    },
    {
        name: 'Charlie',
        email: 'charlie@example.com',
        age: new Date('2001-05-10'),
        score: 75
    }
]

const calculator = new StudentStatsCalculator(listStudent);
console.log(calculator.getStats());


// Exercise 2
// ● Create a program to create transaction
// ● Product Class
// ○ Properties
// ■ Name
// ■ Price
// ● Transaction Class
// ○ Properties
// ■ Total
// ■ Product
// ● All product data
// ● Qty
// ○ Add to cart method → Add product to transaction
// ○ Show total method → Show total current transaction
// ○ Checkout method → Finalize transaction, return transaction data





class Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getName() {      //method unutk akses nama
        return this.name;
    }

    public getPrice() {     ////method unutk akses harga
        return this.price;
    }
}

interface CartItem {                    //interface unutk cetakan cartItem
    product: Product; 
    qty: number;
}

class Transaction {                             //class unutk transaksi
    private cartItems: CartItem[] = [];             //variabel cartItems tipe interfaceCartItem array buat nampung belanjaan
    private totalAkhir: number = 0;                 //variabel totalAkhir buat nyimpan hasil kalkulasi belanjaan

    public cart(product: Product, qty: number) {        //method unutk cart 
        this.cartItems.push({ product, qty });
        this.totalAkhir += product.getPrice() * qty;
    }

    public Checkout() {                                     //method unutk checkout
        const result: string = this.cartItems.map(value => {
            return `${value.product.getName()}-> ${value.qty} pcs`}).join(', ');
        return `belanjaanmu: ${result}. total: Rp${this.totalAkhir.toLocaleString("id",{style: "currency",currency: "IDR",})}. Berhasil di-checkout.`;
    }

    public displayTotal() {                                 //method unutk tampil total
        const result: string = this.cartItems.map(value => {
            return `${value.product.getName()}-> ${value.qty} pcs`}).join(', ');
        return `keranjang berisi: ${result}. jumlah total: ${this.totalAkhir.toLocaleString("id",{style: "currency",currency: "IDR",})}`;
    }
}


const produk1 = new Product("Celana", 25000);
const produk2 = new Product("Kaos", 30000);
const produk3 = new Product("Kemeja", 10000);

const transaction = new Transaction();
transaction.cart(produk1, 2); 
transaction.cart(produk2, 2);
transaction.cart(produk3, 5);

console.log(transaction.displayTotal()); 
console.log(transaction.Checkout());     



