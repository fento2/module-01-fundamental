{
    //callback function : - sebuah fungsi yang dijalankan didalam fungsi lain dan dimasukan melalui parameter
    /**
     * aturan penulisan: 
     * 
     * function mainFunction(callbackfn){
     *          //code
     *          callback(fn)
     * }
     * - callbackfn : parmeter yang harus diisi dengan function
     */

    function mainFanction(callbackfn) {
        console.log(callbackfn());
    }
    mainFanction(function () {       //saat digunakan mainfunctionnya harus diisi fungsi fungsinya dibuat langsung di fungsinya sehingga tidak perlu diberikan nama
        return "hello";
    });

    function printCalculation(cb) {
        let angkaA: number = 20;
        let angkaB: number = 10;

        const result: number = cb(angkaA, angkaB)      //return dari cb disimpan di variabeel result
        return `hasil perhitungan adalah ${result}`
    }

    const calculate: string = printCalculation(function (angkaA: number, angkaB: number) {
        return angkaA * angkaB;
    });

    console.log(calculate);

    const dataArr: any[] = [1, 2, 3, 3, 6, 4, 8, 8, 0, 2];

    // array/forEach(cbfn) : unutk mengakses isi dan index dari tiap data array
    dataArr.forEach((value: number, index: number) => {
        console.log(value);
    });

    //array.map(cbfn) : unutk merubah seluruh data array dan dijadikan data array baru
    const newDataArray: number[] = dataArr.map((value: number) => {
        return value * 2;
    })

    console.log(newDataArray);

    //array.fulter(cbfn): unutk  mencari data sesuai acuan filter dan menampungnya kedalam array baru
    const filterArr: number[] = dataArr.filter((value: number) => {       //yang diretrun yang berlinai true saja
        return value % 2 !== 0;
    })
    console.log(filterArr);

    // object : merupakan tipe data yang dapat menampung tipe data lain dan tiap data ditampung kedalam property object non-primive data type
    /**
     * aturan penulisan:
     * cara 1: const =>{
     * nameProperty : value,
     * name: "Edi",
     * usia: 18
     * isActive: true,
     * grade: ["A", "B", "C"]
     * 
     * getInfo: function(){
     *      //code
     *          }
     * 
     * }
     * 
     * 
     * 
     * cara 2 const object = new object();
     * object.name = "Edi";
     * object.usia = 15;
     * 
     * cara 3
     * classMyObj{
     * constructor (name, usia){
     *              this.name = name;
     *              this.usia = usia;  
     *      }
     * 
     * }
     */

    interface IHuman {
        name: string;
        age: number;
        gender: "Male" | "Female";
        isLive: boolean;
    }

    //cara 1

    const dataHuman: IHuman = {
        name: "Edi",
        age: 17,
        gender: "Male",
        isLive: true
    }

    //cara 2


    const dataHumanB: any = new Object();
    dataHumanB.name = "Edo";
    dataHumanB.age = 17;
    dataHumanB.gender = "Male";
    dataHumanB.isLive = true;

    //cara 3
    class Human implements IHuman {         //implements unutk memastikan class Human sama dengan interfacenya
        name: string;
        age: number;
        gender: "Male" | "Female";
        isLive: boolean = true;
        private religion: string = "islam";         //encapsulation : menyembunyikan proprty


        constructor(name: string,               //seperti parameter kalu pake constructor berarti butuh nilai dari luar bergitupun sebaliknya
            age: number,
            gender: "Male" | "Female",

        ) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
    }
    //class juga bisa digunakan seperti interfa
    const data: IHuman = new Human('Aldi', 20, 'Male');          // instance tahap dimana menggunakan class constructor
    console.log(data);

    // inheritance : pewarisan data dari class utama supaya class turunan memiliki property dari class utama
    class Employee extends Human {
        posotion: string;
        salary: number;

        constructor(name: string,
            age: number,
            gender: "Male" | "Female",
            posisi: string,
            salary: number
        ) {
            super(name, age, gender);
            this.posotion = posisi;
            this.salary = salary;
        }


    }

    const employee = new Employee(
        "irfan",
        15,
        "Male",
        "Fornd-end",
        5000000
    );

    console.log(employee);

    //Destructure: mengeluarkan nilai ddari property menjadi vaiable yang berdiri sendiri

    const { name, age: umur, isLive, gender } = employee
    console.log(umur);//contoh destructure: properti age disimpan di variabel umur
    console.log(name);
    console.log(isLive);
    console.log(gender);

    
}