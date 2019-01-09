function sayHello(person, test) {
    return 'Hello, ' + person;
}
var user = 111;
console.log(sayHello(user, 111));
var wxy = {
    name: 'wxy',
    age: 12,
    id: 08880
};
console.log(wxy.id);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
var ds;
(function (ds) {
    ds[ds["up"] = 0] = "up";
    ds[ds["down"] = 1] = "down";
    ds[ds["left"] = 2] = "left";
    ds[ds["right"] = 3] = "right";
})(ds || (ds = {}));
function aaa(index) {
    switch (index) {
        case ds['up']:
            console.info('这是上', ds['up']);
            break;
        case ds['down']:
            console.info('这是下', ds['down']);
            break;
        case ds['left']:
            console.info('这是左', ds['left']);
            break;
        case ds['right']:
            console.info('这是右', ds['right']);
            break;
        default:
            break;
    }
}
aaa(0);
