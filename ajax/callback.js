setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
        setTimeout(function () {
            console.log(3);
        }, 4000)
    }, 2000)
}, 5000)
//callback hell
