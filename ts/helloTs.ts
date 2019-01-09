function sayHello(person: any, test?: number): string {
    return 'Hello, ' + person;
}

let user = 111;
console.log(sayHello(user, 111));

interface person {
    name: string,
    age: number,
    readonly id: number
}

let wxy: person = {
    name: 'wxy',
    age: 12,
    id: 08880
}

console.log(wxy.id)


function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return <number>Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

enum ds {up, down, left, right}

function aaa (index: number) {
    switch (index) {
        case ds['up']:
            console.info('这是上',ds['up'])
            break;
        case ds['down']:
            console.info('这是下',ds['down'])
        break;
        case ds['left']:
            console.info('这是左',ds['left'])
        break;
        case ds['right']:
            console.info('这是右',ds['right'])
        break;
        default:
            break;
    }
}

aaa(0)