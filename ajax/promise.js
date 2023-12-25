const promise = new Promise(
    function excutor(resolve, reject) {
        let number = 5;
        if (number >= 5) {
            return resolve(0)
        }
        return reject()
    }
)
promise
    .then(function (data) {
        data = data + 1
        console.log(data);
        return data
    })
    .then(function (data) {
        data = data + 1
        console.log(data);
        return data
    })
    .catch(function () {
        console.log("error");
    })
    .finally(function () {
        console.log("Done");
    })