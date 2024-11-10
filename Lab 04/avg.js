function avg(scores) {
    let total = scores.reduce((acc, curr) => acc + curr, 0);
    return total / scores.length;
}

module.exports = avg;
