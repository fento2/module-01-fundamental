
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

    //Write a function that takes an array of words and returns a string by concatenating the words in the array,
    //separated by commas and - the last word - by an 'and'.
    //a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
}


let arr: string[] = ["apple", "banana", "cherry", "date"];
function sliceAnd() {
    let result: string = `arr = [${arr}] → "`;

    for (let i: number = 0; i < arr.length; i++) {
        result += `${arr[i]},`;
        if (i === arr.length - 1) {
            result += ` and ${arr[i]}"`;
        }

    }
    return result;
}
console.log(sliceAnd());

//Write a function from a given array of numbers and return the second smallest number
//a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

{
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

//Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
//of the same length.
//a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
{
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

// Write a function that adds an element to the end of an array. However, the element should only be added if it is
///not already in the array.
//a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
//b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
{
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
    // Write a function from a given array of mixed data types and return the sum of all the number
    //a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

    const mixarray: any[] = ["3", 1, "string", null, false, undefined, 2];
    let result: number = 0;
    let print: string = "";
    function sumMix() {
        for (let i: number = 0; i < mixarray.length; i++) {
            if (typeof mixarray[i] === "number") {
                result += mixarray[i];

            }

        }
        print += `→ ${result}`;
        return print;
    }
    console.log(sumMix());

}
{

    // Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
    //array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
    //array can only contain 5 elements).
    //a. Example :
    //maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
    //The function will return [5, 10, 24, 3, 6]

    let maxSize: number = 8;
    let input: string = "5, 10 ,24 ,3 ,6 ,7 ,8, 9";
    function giveIntegers() {
        let result: number[] = [];
        let input1: string[] = input.split(",");
        for (let i: number = 0; i < maxSize; i++) {
            result.push(parseInt(input1[i]));
            if (i === input1.length - 1) {
                break;
            }
        }
        return result;
    }
    console.log(giveIntegers());

}

{
    //Write a function that will combine 2 given array into one array
    //b. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6] 
    const arr1: number[] = [1, 2, 3];
    const arr2: number[] = [4, 5, 6];

    function combineArray() {
        arr1.push(...arr2);

        return arr1;
    }
    console.log(combineArray());
}

{

    //Write a function to find duplicate values in an array
    //b. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5] 
    const arr: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];

    function findDuplicate() {
        let check1: number;
        let check2: number;
        let result: number[] = [];
        for (let i: number = 0; i < arr.length; i++) {
            let item: number = arr[i];
            check1 = arr.indexOf(arr[i]);
            check2 = arr.lastIndexOf(arr[i]);
            if (check1 !== check2 && !result.includes(item)) {
                result.push(arr[i]);
            }
        }
        return result;

    }
    console.log(findDuplicate());
}
{

    //Write a function to find the difference in 2 given array
    //b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7] 
    const arr1: number[] = [1, 2, 3, 4, 5];
    const arr2: number[] = [3, 4, 5, 6, 7];

    function diffArray() {
        let check1: number;
        let check2: number;
        let result: number[] = [];
        for (let i: number = 0; i < arr1.length + arr2.length; i++) {
            let item1: number = arr1[i];
            let item2: number = arr2[i];
            if (!arr1[i] || !arr2[i]) {
                break;
            } else if (!arr1.includes(item2)) {
                result.push(arr2[i]);

            } else if (!arr2.includes(item1)) {
                result.push(arr1[i]);
            }
        }
        return result;
    }
    console.log(diffArray());
}

{
    //Based on the array below write a function that will return primitive data types only.
    //letarr = [1, [], undefined, {}, "string", {}, []];
    //a.The function will return [1, undefined, “string”]

    let letarr: any = [1, [], undefined, {}, "string", {}, []];
    function primitiveDateOnly() {
        let result: any[] = [];
        for (let i: number = 0; i < letarr.length; i++) {
            if (typeof letarr[i] === "number" || typeof letarr[i] === "undefined" || typeof letarr[i] === "string") {
                result.push(letarr[i]);
            }
        }
        return result;
    }
    console.log(primitiveDateOnly());
}
{
    // Write a function from the below array of number that will return sum of duplicate values.
    // letarr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
    // a.The function will return 40

    let letarr: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];

    function sumDuplicate() {
        let check1: number;
        let check2: number;
        let result: number = 0;
        for (let i: number = 0; i < letarr.length; i++) {
            check1 = letarr.indexOf(letarr[i]);
            check2 = letarr.lastIndexOf(letarr[i]);
            if (check1 !== check2) {
                result += letarr[i];
            }
        }
        return result;
    }
    console.log(sumDuplicate());
}
{
    //Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
    //between rock, paper, or scissor.
    //a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
    const inputGame: string = "paper";

    function randomRPS() {
        let random: number = Math.floor(Math.random() * 3);
        let result: string = "";
        if (inputGame === "rock") {
            if (random === 0) {
                result = `👨🏻‍💻:✊   ✊:🤖  (Equel)`;
            } else if (random === 1) {
                result = `👨🏻‍💻:✊   ✌️:🤖  (User Win)`;
            } else if (random === 2) {
                result = `👨🏻‍💻:✊   ✋:🤖  (Robot Win)`;
            }
        } else if (inputGame === "paper") {
            if (random === 0) {
                result = `👨🏻‍💻:✋   ✋:🤖  (Equel)`;
            } else if (random === 1) {
                result = `👨🏻‍💻:✋   ✌️:🤖  (Robot Win)`;
            } else if (random === 2) {
                result = `👨🏻‍💻:✋   ✊:🤖  (User Win)`;
            }
        } else if (inputGame === "scissor") {
            if (random === 0) {
                result = `👨🏻‍💻:✌️   ✌️:🤖  (Equel)`;
            } else if (random === 1) {
                result = `👨🏻‍💻:✌️   ✋:🤖  (User Win)`;
            } else if (random === 2) {
                result = `👨🏻‍💻:✌️   ✊:🤖  (Robot Win)`;
            }
        }

        return result;
    }

    console.log(randomRPS());
}