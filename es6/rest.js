//rest = phần còn lại
function sum(prefix, ...rest) {
    let total = 0
    for (let index = 0; index < rest.length; index++) {
        const element = rest[index];
        total += element
    }
    return `${prefix} ${total}`
}
console.log(sum("tông là", 3, 5, 4, 5, 4));
console.log(sum("sum là", 3, 5, 4, 5, 4));