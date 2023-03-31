let userName: string = 'Gio';
let hasLoggedIn: boolean = true;

hasLoggedIn += ' Temple'
console.log(hasLoggedIn)

let myNumber: number = 10;

let myRegex: myRegex = /foo/;

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1,2,3,4]

const myPerson: {
  first: string;
  last: string;
} = {
  first: 'Gio',
  last: 'Temple'
}

const ids: Record<number, string> = {
  10: "a",
  20: "b"
}

ids[30] = 'c';

[1, 2, 3].forEach(v => console.log(v))