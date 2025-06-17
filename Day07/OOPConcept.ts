//contoh 1: membuat objek hewan peliharaan
const pet = {
    name: 'buddy',
    species: 'dog',
    age: 4,
    vaccinated: true,
    favoriteToy: 'Ball'
}
//cara mengakses value property dari objek pet
console.log("ambil property name dari pet:", pet.name);
console.log("ambil property favorite toy dari pet:", pet.favoriteToy);

//membuat object dengan method new object

const idCard: any = new Object();
idCard.name = 'Budi'
idCard.age = 30
idCard.gender = "Male"
console.log('isi dari idCard: ', idCard);

//membuat object dalam bentuk function
function createStudent(name: string, grade: number) {
    return {
        name: name,
        grade: grade
    }
}
const student = createStudent("Budi", 10);

console.log("hasil dari student: ", student);

//membuat objek dnegan method object.assign
const employee = Object.assign({}, { name: 'bob', role: 'superviso' });
console.log("informasi dari employee: ", employee);

// ---------interface--------

interface IPerson {
    id: number,
    name: string,
    age: number,
    hobby?: string[]         //  optional chaining (?) artinya property tidak wajib diikutsertakan
}

interface IAddress {
    street: string,
    zip_code: number
}

interface IDetailInformation {
    detail: IPerson,
    address: IAddress
}

const paket1: IDetailInformation = {
    detail: {
        id: 123,
        name: 'bambang',
        age: 40
    },
    address: {
        street: 'Jl. Merdeka, Jakarta pusat',
        zip_code: 456
    }
}

//untuk mengambil detail informasi
console.log('ambil info dari paket1:', paket1);


// const person1: IPerson = new object()
// person1.id = 1
// person1.name = 'bob'
// person1.age = 17
// person1.hobby = ['study', 'gaming']

const person1: IPerson = {
    id: 1,
    name: 'bob',
    age: 17,
    hobby: ['study', 'gaming']
}

const person2: IPerson = {
    id: 2,
    name: 'jhon',
    age: 22,
    hobby: ['sport', 'singing']
}

//untuk mengambil data dari person
console.log('info dari person1:', person1);
console.log('info dari person2:', person2);



//------Type-----
type color = 'red' | 'blue' | 'green'
const favoriteColor: color = 'blue'

type coordinates = {
    x: number,
    y: number
}

const point: coordinates = { x: 5, y: 10 }

console.log('hasil dari favorite color:', favoriteColor);
console.log('hasil dari point:', point);

type Vehicle = {
    brand: string,
    year: number

}

type Car = Vehicle & {
    seat: number
}
const car: Car = {
    brand: 'honda',
    year: 2015,
    seat: 6
}

//------properties & method ------

interface IWahingMachine {
    brand: string,
    loadCapacity: number,
    start: () => string
    stop: () => string
}

const washingMachine: IWahingMachine = {
    brand: 'LG',
    loadCapacity: 7,
    start() {
        return 'washing started'
    },
    stop() {
        return 'stopping machine...'
    }
}

console.log('menjalankan mesin cuci:', washingMachine.start());
console.log('sedang mencuci baju ... selesai');
console.log('mematikan mesin cuci:', washingMachine.stop());

//----- for in loop -----

const fridge = {
    milk: 1,
    eggs: 12
}

for (const key in fridge) {
    console.log(key);//-->unutk mengambil properties
    console.log(fridge[key]); //--> unutk mengambil value
    console.log(`${key}: ${fridge[key]}`); //--> unutk mengambil keseluruhan object
}

//--- Destructuring Assignment --

const { username, age } = {
    username: 'bob',
    age: 20
}

console.log('username: ', username);
console.log('age: ', age);
console.log('----------------------');

interface IAnimal {
    species: string,
    nickname: string,
    animalAge: number
}

const { species, nickname, animalAge }: IAnimal = {
    species: 'mamalia',
    nickname: 'elephant',
    animalAge: 10
}

console.log('species:', species);
console.log('nickname:', nickname);
console.log('animal age:', animalAge);

//----spread Operator ----
const basicInfo = { name: 'Tom' }
const fullInfo = {
    ...basicInfo,
    age: 35
}

fullInfo.name = 'test';

console.log('full info: ', fullInfo);
console.log('full info: ', basicInfo);

const a = {
    a: 1
}
const b = {
    b: 2
}
const merged = { ...a, ...b }

console.log(a);
console.log(b);
console.log(merged);

//{a: 1}, {b: 2}

//--- class ---
class BankAccount {
    balence: number = 0;
    deposit(amount: number) {
        this.balence += amount
    }
    withdraw(amount: number) {
        this.balence -= amount
    }

}
const myBankAcckount = new BankAccount()

console.log('saldo saat ini', myBankAcckount.balence);
console.log('menyimpan uang...')
myBankAcckount.deposit(50000);
console.log('saldo saat ini', myBankAcckount.balence);

console.log('tarik tunai uang...', myBankAcckount.balence)
myBankAcckount.withdraw(25000);
console.log('saldo setelah ditarik tunai', myBankAcckount.balence)


class Light {
    isOn: boolean = false;
    toggle() {
        this.isOn = !this.isOn;
    }
}

const light = new Light()

light.toggle()
console.log('kondisi lampu:', light.isOn);
light.toggle()
console.log('kondisi lampu:', light.isOn);


class Laptop {
    private brand: string;  //proses encapsulation (menyembuyikan property agar tidak bisa diakses di luar)
    public ram: number;

    constructor(brand: string, ram: number) {
        this.brand = brand;
        this.ram = ram;
    }
    getDisplay() {
        return {
            brand: this.brand,
            ram: this.ram
        }
    }
}
const laptop1 = new Laptop('Apple Macbook pro', 16);
const laptop2 = new Laptop('Asus Vivobook', 8);

console.log('laptop yang sedang diinputkan :', laptop1.getDisplay());
console.log('laptop yang sedang diinputkan :', laptop2.getDisplay());

//console.log(laptop1.brand); //tidak bisa dipanggil karna ada proses encapsulation

// contoh 2
class Motorcycle {
    private fuel: number = 50;
    public amount: number = 0

    constructor(amount: number) {
        this.amount = amount
    }

    riding() {
        console.log("Riding the motorcycle ...")
        if (this.fuel > 0) {
            this.fuel -= 5
        }
    }

    brake() {
        console.log("Brake the motorcycle ...")
    }

    refillFuel() {
        return this.fuel += this.amount
    }

    checkFuel() {
        return this.fuel
    }
}

const motorcycle = new Motorcycle(10)

console.log('cek isi bensin : ', motorcycle.checkFuel())
motorcycle.riding()
console.log('cek isi bensin setelah motor berjalan : ', motorcycle.checkFuel())
console.log('mlipir ke pom bensin ...')
motorcycle.refillFuel()
console.log('setelah isi bensin : ', motorcycle.checkFuel());
