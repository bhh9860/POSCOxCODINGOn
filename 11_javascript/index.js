// 배열 구조 분해
// 특징 : 구조 분해 당시 순서가 중요 !
const lists = ['apple', 'grape'];

console.log(lists[0]);
[item1, item2] = lists;

//const item1 = 'apple'
console.log(item1, item2);

const [one, two, three, four = 'four'] = ['one', 'two', 'three']
console.log(one, two, three, four)

let a = 10;
let b = 20;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);


// 객체 구조 분해
// 특징 : 키 값이 중요 !
const obj = {
    key1 : 'one',
    key2 : 'two'
}

console.log(obj.key1);
console.log(obj['key1']);
const {key1, key2} = obj;
console.log(key1, key2);

const {a:a2, b:b2} = {a:10, b:20}

const i = [10, 20, 30];
const j = [40, 50];

const concat = i.concat(j);

console.log(concat)

const spread = [...i, ...j];
console.log(spread)

const z = [..."hello"]
console.log(z)

function spreadFunc(a, b, c) {
    console.log(a+b+c)
}

spreadFunc(...i)

function restFunc(a, ...res) {
    console.log(res)
}
restFunc(...i)