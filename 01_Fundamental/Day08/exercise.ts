{

    // ● Create a function to merge two array of student data and remove duplicate data
    // ● Student data : name & email
    // ● Example :
    // Array1 → [
    // { name: ‘Student 1’, email : ‘student1@mail.com’ },
    // { name: ‘Student 2’, email : ‘student2@mail.com’ }
    // ]
    // Array2 → [
    // { name: ‘Student 1’, email : ‘student1@mail.com’ },
    // { name: ‘Student 3’, email : ‘student3@mail.com’ }
    // ]
    // ● Result :
    // ArrayResult → [
    // { name: ‘Student 1’, email : ‘student1@mail.com’ },
    // { name: ‘Student 2’, email : ‘student2@mail.com’ },
    // { name: ‘Student 3’, email : ‘student3@mail.com’ }
    // ]

    const data1Student = [
        {
            name: "mbappe",
            email: "mbappe@mail.com"
        },
        {
            name: "lamine",
            email: "lamine@mail.com"
        },
        {
            name: "pedri",
            email: "pedri@mail.com"
        },
    ]

    const data2Student = [
        {
            name: "halland",
            email: "hallad@mail.com"
        },
        {
            name: "desire",
            email: "desire@mail.com"
        },
        {
            name: "lamine",
            email: "lamine@mail.com"
        },
    ]

    function RemoveDuplicate(data1: { name: string; email: string }[], data2: { name: string; email: string }[]) {
        const gabung = [...data1, ...data2];
        const newList: { name: string; email: string }[] = [];

        gabung.forEach((value1) => {
            if (!newList.some((value2) => (value2.name === value1.name) || (value2.email === value1.email))) {
                newList.push(value1);
            }
        });
        return newList;
    }


    console.log(RemoveDuplicate(data1Student, data2Student));

}


// ● Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]


{

    const Orang = [{ name: "antony", age: 20 }]

    function SwitchProperty(input: { name: string, age: number }[]) {
        
    
    }

    console.log(SwitchProperty(Orang))
}