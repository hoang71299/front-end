//spead---
let name_1 = "khoa"
let name_2 = name_1
name_2 = "son"
console.log(name_1);
console.log(name_2);

const jobKhoa1 = ["nấu cơm", "đón con", "lau nhà"]
let jobSon = [...jobKhoa1]
jobSon[2] = "quet nhà"
console.log(jobKhoa1);
console.log(jobSon);
const son_info = {
    name: "son",
    age: 20,
    gender: true
}
const khoa_info = {
    ...son_info,
    name: "Son"
}
console.log(khoa_info);
console.log(son_info);

//closure
function parent() {
    let count = 1;
    function getCount() {
        return count
    }
    function setCount(newValue) {
        count = newValue
    }
    return {
        getCount,
        setCount
    }
}
let func = parent()
console.log(func.getCount());
func.setCount(10)
console.log(func.getCount());