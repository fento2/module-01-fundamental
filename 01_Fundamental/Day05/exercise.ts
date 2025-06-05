
{
    //Write a function to get the lowest, highest and average value in the array (with and without sort function).
    //a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
    const arr: number[] = [12, 5, 23, 18, 4, 45, 32];

    function minMax() {
        let min: number = Math.max(...arr); //... adalah spread operator unutuk mebuka array satu persatu
        let max: number = Math.min(...arr);
        let print: string = "";
        let average: number = 0;
        let sum: number = 0;

        for (let i: number = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        average = sum / arr.length;
        print += `arr = [${arr}] → { highest: ${max}, lowest : ${min}, average: ${average}}`

        return print;
    }
    console.log(minMax());


}

{
    //Write a function that takes an array of words and returns a string by concatenating the words in the array,
    //separated by commas and - the last word - by an 'and'.
    //a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

    const findnumber: string[] = ["apple", "banana", "cherry", "date"];
    function sliceAnd() {
        let result: string = `arr = [${findnumber}] → "`;

        for (let i: number = 0; i < findnumber.length; i++) {
            result += `${findnumber[i]},`;
            if (i === findnumber.length - 1) {
                result += ` and ${findnumber[i]}"`;
            }

        }
        return result;

    }
    console.log(sliceAnd());
}

{
    //Write a function from a given array of numbers and return the second smallest number
    //a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
    let print: number;
    let numbers: number[] = [5, 3, 1, 7, 2, 6];
    function secondSmallest() {

        let result: number[];
        result = numbers.sort();        //sort() array method untuk mengurutkan angka array
        print = result[1];
        return print;

    }
    console.log(secondSmallest());

}


{
    //Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
    //of the same length.
    //a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
    const Example: number[] = [1, 2, 3];
    const Example2: number[] = [3, 2, 1];
    let result: number[] = [];

    function calculatePosition() {
        for (let i: number = 0; i < Example.length; i++) {
            result[i] = Example[i] + Example2[i];
        }
        return result;
    }

    console.log(calculatePosition());
}


{
    // Write a function that adds an element to the end of an array. However, the element should only be added if it is
    ///not already in the array.
    //a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
    //b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
    const arr: number[] = [1, 2, 3, 4];
    let add: number = 7;
    function addelement() {
        if (!arr.includes(add)) {
            arr.push(add);
            return arr;
        } else {
            return arr;
        }

    }
    console.log(addelement());


}

{
    //Based on the array below write a function that will return primitive data types only.
    //let arr = [1, [], undefined, {}, "string", {}, []];
    //a.The function will return [1, undefined, “string”]


    
    let arr: any = [1, [], undefined, {}, "string", {}, []];
    function primitiveDateOnly() {
        let result: any[] = [];
        for (let i: number = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number" || typeof arr[i] === "undefined" ||
                typeof arr[i] === "string" || typeof arr[i] === "boolean") {
                result.push(arr[i]);
            }
        }
        return result;
    }
    console.log(primitiveDateOnly());
    console.log(typeof {});
}

{
    // Write a function from the below array of number that will return sum of duplicate values.
    // letarr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
    // a.The function will return 40

    let arr: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];

    function sumDuplicate() {
        let result: number = 0;
        let find: number[] = findDuplicate(arr);
        for (let i: number = 0; i < find.length; i++) {
            result += find[i];
        }
        return result;
    }
    console.log(sumDuplicate());
}

{
    //Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
    //between rock, paper, or scissor.
    //a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

    //contoh input = rock/paper/scissor
    const inputGame: string = "paper";

    function randomRPS() {
        let random: number = Math.floor(Math.random() * 3);
        let result: string = "input sesuai contoh diatas";
        if (inputGame === "rock") {
            if (random === 0) {
                result = `👨🏻‍💻:✊   ✊:🤖  (Draw)`;
            } else if (random === 1) {
                result = `👨🏻‍💻:✊   ✌️:🤖  (User Win)`;
            } else if (random === 2) {
                result = `👨🏻‍💻:✊   ✋:🤖  (Robot Win)`;
            }
        } else if (inputGame === "paper") {
            if (random === 0) {
                result = `👨🏻‍💻:✋   ✋:🤖  (Draw)`;
            } else if (random === 1) {
                result = `👨🏻‍💻:✋   ✌️:🤖  (Robot Win)`;
            } else if (random === 2) {
                result = `👨🏻‍💻:✋   ✊:🤖  (User Win)`;
            }
        } else if (inputGame === "scissor") {
            if (random === 0) {
                result = `👨🏻‍💻:✌️   ✌️:🤖  (Draw)`;
            } else if (random === 1) {
                result = `👨🏻‍💻:✌️   ✋:🤖  (User Win)`;
            } else if (random === 2) {
                result = `👨🏻‍💻:✌️   ✊:🤖  (Robot Win)`;
            }
        } else {

        }

        return result;
    }

    console.log(randomRPS());
}