class Person {
    constructor(name, gender, dob) {
        this.name = name
        this.gender = gender
        this.dob = dob
    }
    setMobile(phoneNumber) {
        this.mobile = phoneNumber
    }
    getMobile() {
        return this.mobile
    }
    set location(newLocation) {
        this.address = newLocation
    }
    get location() {
        return this.address
    }
    static slogun() {
        return `still breath still alive`
    }
}
class Student extends Person {
    constructor(name, gender, dob, email) {
        super(name, gender, dob)
        this.email = email
    }
}
let Khoa = new Person("Khoa", true, "10/10/2000")
console.log(Person.slogun());
// Khoa.setMobile("09057741354")
// Khoa.location = "Đà nẵng"
// console.log(Khoa);
// console.log(Khoa.getMobile());
// let chau = new Person("Khoa", false, "10/10/2000")
// let hoang = new Student("Thương", false, "05/05/2001", "hoang2003@gmail.com")
// console.log(hoang);
