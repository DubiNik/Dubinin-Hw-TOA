function digitSum(k) {
    k = Math.abs(k);

    if (k < 10) {
        return k;
    }

    return (k % 10) + digitSum(Math.floor(k / 10));
}

console.log(digitSum(123)); // 6
console.log(digitSum(456)); // 15
console.log(digitSum(999)); // 27
