// ● Specifications :
// ○ Create a program to calculate total salary based on employee type
// ○ There are two types of employee : full-time & part-time
// ○ Salary for full-time employee :
// ■ IDR 100.000 / hour
// ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// ○ Salary for part-time employee :
// ■ IDR 50.000 / hour
// ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// ● Requirements :
// ○ Create an Employee as a parent class
// ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// ■ Create a method in that class to add working hour per day
// ■ Create a method in that class to calculate total salary
// ○ Use inheritance concept


interface IEmployee {
    name: string;
    waktuMasuk: string;
    waktuKeluar: string;
    dailyHour: number;
    dailySalary: number;
}

class Employee {

    employee: IEmployee;
    constructor(karyawan: IEmployee) {
        this.employee = karyawan;
    }
    working() {
        const w1: Date = new Date(`1970-01-01T${this.employee.waktuMasuk}:00`);
        const w2: Date = new Date(`1970-01-01T${this.employee.waktuKeluar}:00`);

        const selisihMs: number = w2.getTime() - w1.getTime();

        const totalMenit = selisihMs / (1000 * 60);
        const jam = Math.floor(totalMenit / 60);
        const menit = totalMenit % 60;

        this.employee.dailyHour = jam;
        if (menit === 60) this.employee.dailyHour++;

        return this.employee;
    }

}
class Fulltime extends Employee {

    constructor(name: string) {

        const karyawan: IEmployee = {
            name: name,
            waktuMasuk: "",
            waktuKeluar: "",
            dailyHour: 0,
            dailySalary: 0,
        }
        super(karyawan);
    }
    addWorkingHours(masuk: string, keluar: string): void {
        this.employee.waktuMasuk = masuk;
        this.employee.waktuKeluar = keluar;
    }
    calculateSalary(): void {
        this.employee.dailySalary = this.employee.dailyHour * 100000;
        if (this.employee.dailyHour > 6) {
            let sisa: number = this.employee.dailyHour - 6;
            this.employee.dailySalary += sisa * 75000;
        }
    }
    getSalary() {

        const total: number = this.employee.dailySalary;
        this.employee.dailySalary = 0;

        return `${this.employee.name}: ${total.toLocaleString("id", {
            style: "currency",
            currency: "IDR",
        })}`;
    }

}

class Parttime extends Employee {

    constructor(name: string) {

        const karyawan: IEmployee = {
            name: name,
            waktuMasuk: "",
            waktuKeluar: "",
            dailyHour: 0,
            dailySalary: 0,
        }
        super(karyawan);
    }
    addWorkingHours(masuk: string, keluar: string): void {
        this.employee.waktuMasuk = masuk;
        this.employee.waktuKeluar = keluar;
    }
    calculateSalary(): void {
        this.employee.dailySalary = this.employee.dailyHour * 50000;
        if (this.employee.dailyHour > 6) {
            let sisa: number = this.employee.dailyHour - 6;
            this.employee.dailySalary += sisa * 30000;
        }
    }
    getSalary() {
        const total: number = this.employee.dailySalary;
        this.employee.dailySalary = 0;

        return `${this.employee.name}: ${total.toLocaleString("id", {
            style: "currency",
            currency: "IDR",
        })}`;
    }

}

const lamine = new Fulltime("Lamine Yamal");

lamine.addWorkingHours("09:00", "16:00");
console.log(lamine.working());
lamine.calculateSalary();
console.log(lamine.getSalary());

const mbappe = new Parttime("Kylian Mbappe");

mbappe.addWorkingHours("09:00", "15:00");
console.log(mbappe.working());
mbappe.calculateSalary();
console.log(mbappe.getSalary());

