{
    {
        //Write a function to get the lowest, highest and average value in the array (with and without sort function).
        //a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
        const arr: number[] = [12, 5, 23, 18, 4, 45, 32];

        function minMax() {
            let min: number = Math.max(...arr);
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
    let result: string = `arr = [${arr}] → "`;
    {
        function sliceAnd() {

            for (let i: number = 0; i < arr.length; i++) {
                result += `${arr[i]},`;
                if (i === arr.length - 1) {
                    result += ` and ${arr[i]}"`;
                }
            }
            return result;
        }
        console.log(sliceAnd());

    }

    //Write a function from a given array of numbers and return the second smallest number
    //a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

    {
        let print: number;
        let numbers: number[] = [5, 3, 1, 7, 2, 6];
        function secondSmallest() {

            let result: number[];
            result = numbers.sort();
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
            print += `array = [${mixarray}] → ${result}`
            return print;
        }
        console.log(sumMix());

    }

}