{
/**
 * OOP (Object-Oriented Programming) in TypeScript
 * -----------------------------------------------
 * This file demonstrates key OOP concepts in TypeScript:
 * - Class & Object
 * - Encapsulation (Access Modifiers)
 * - Inheritance
 * - Polymorphism
 * - Abstraction (Abstract Class/Interface)
 */

// ==================== 1. Class & Object ====================
/**
 * Basic class example with constructor and method.
 * @class Person
 * @property {string} name - The name of the person.
 * @property {number} age - The age of the person.
 */
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /** Returns a greeting message. */
  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

// ==================== 2. Encapsulation ====================
/**
 * Demonstrates encapsulation using access modifiers:
 * - `private`: Property hanya bisa diakses di dalam class.
 * - `protected`: Bisa diakses di class dan subclass.
 * - `public` (default): Bisa diakses di mana saja.
 * @class Animal
 */
class Animal {
  private secret: string = "This is private";
  protected species: string;
  public name: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  /** Getter untuk properti private */
  getSecret(): string {
    return this.secret; // Bisa diakses karena masih dalam class
  }
}

// ==================== 3. Inheritance ====================
/**
 * Inheritance example using `extends`.
 * @class Student
 * @extends Person
 */
class Student extends Person {
  grade: number;

  constructor(name: string, age: number, grade: number) {
    super(name, age); // Memanggil constructor parent class
    this.grade = grade;
  }

  /** Override method greet() dari parent class */
  greet(): string {
    return `${super.greet()} (Grade: ${this.grade})`;
  }
}

// ==================== 4. Polymorphism ====================
/**
 * Polymorphism: Method dengan nama sama tapi implementasi berbeda.
 * @class Cat
 * @extends Animal
 */
class Cat extends Animal {
  constructor(name: string) {
    super(name, "Felis catus");
  }

  /** Override behavior */
  makeSound(): string {
    return "Meow!";
  }
}

// ==================== 5. Abstraction ====================
/**
 * Abstract class: Tidak bisa di-instansiasi langsung.
 * @abstract Shape
 */
abstract class Shape {
  abstract getArea(): number; // Harus diimplementasikan di subclass
}

/** 
 * Implementasi abstract class.
 * @class Circle
 * @extends Shape
 */
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// ==================== 6. Interface ====================
/**
 * Interface: Kontrak struktur object.
 * @interface Drivable
 */
interface Drivable {
  start(): void;
  drive(speed: number): void;
}

/** 
 * Implementasi interface.
 * @class Car
 * @implements Drivable
 */
class Car implements Drivable {
  start() {
    console.log("Engine started!");
  }

  drive(speed: number) {
    console.log(`Driving at ${speed} km/h`);
  }
}

// ==================== Usage Examples ====================
const person = new Person("Alice", 25);
console.log(person.greet()); // "Hello, my name is Alice"

const student = new Student("Bob", 18, 12);
console.log(student.greet()); // "Hello, my name is Bob (Grade: 12)"

const circle = new Circle(5);
console.log(circle.getArea()); // ~78.54

const myCar = new Car();
myCar.drive(60); // "Driving at 60 km/h"

}