{
    // Write a function from a given array of mixed data types and return the sum of all the number
    //a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

    const mixarray: any[] = ["3", 1, "string", null, false, undefined, 2];
    let print: string = "";
    function sumMix() {
        let result: number = 0;
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
    const array: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];

    function findDuplicate(findNumber: number[] = []) {
        let check1: number;
        let check2: number;
        let result: number[] = [];
        for (let i: number = 0; i < findNumber.length; i++) {
            check1 = findNumber.indexOf(findNumber[i]);
            check2 = findNumber.lastIndexOf(findNumber[i]);
            if (check1 !== check2 && !result.includes(findNumber[i])) {
                result.push(findNumber[i]);
            }
        }
        return result;

    }
    console.log(findDuplicate(array));

}

{

    //Write a function to find the difference in 2 given array
    //b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7] 
    const arr1: number[] = [1, 2, 3, 4, 5];
    const arr2: number[] = [3, 4, 5, 6, 7];

    function diffArray() {
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
