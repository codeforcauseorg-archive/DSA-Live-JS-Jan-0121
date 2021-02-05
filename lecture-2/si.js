function si(p, r, t) {
    var interest = (p*r*t)/100;
    return interest;
}

function leap_year(year){
    if ((year%4) === 0){
        console.log("leap year");
    } else {
        console.log("not leap");
    }
}

leap_year("hello");

// var result = si(10000, 10, 1);
// console.log(result);