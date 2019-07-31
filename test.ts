// undefined, null, string, number, object, function

/* const myNumber: number = 5;
console.log(myNumber);

function add(a: number, b: number) {
    return a+b;
}
add(5,10);
*/
const myAnyValue: any = () => {};
const myNumber: number = 5;
const myString: string = "1234";

const myArray: number[] = [1,2,3];
const myTuple: [number,number | string] = [10, 20];

const myObject: {a: number} & {b: string} = {a: 10, b: "aaa"};

const myFunction: (a: number) => number = (a) => a.toString();

myFunction(10).charAt(1);
