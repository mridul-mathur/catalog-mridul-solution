const fs = require('fs');

function decodeValue(value, base) {
    return parseInt(value, base);
}

function lagrangeInterpolation(points, k) {
    let secret = 0;
    for (let [x, y] of points) {
        let numerator = 1;
        let denominator = 1;
        for (let [xj, _] of points) {
            if (x !== xj) {
                numerator *= -xj;
                denominator *= (x - xj);
            }
        }
        secret += y * numerator / denominator;
    }
    return Math.floor(secret % Number.MAX_SAFE_INTEGER);
}

fs.readFile('input.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    try {
        const input = JSON.parse(data);
        const n = input.keys.n;
        const k = input.keys.k;

        const points = [];
        for (let i = 1; i <= n; i++) {
            if (input[i]) {
                const x = i;
                const y = decodeValue(input[i].value, parseInt(input[i].base));
                points.push([x, y]);
            }
        }

        const secret = lagrangeInterpolation(points, k);

        console.log("The secret for input 1 is:", secret);
    } catch (error) {
        console.error("Error processing data:", error);
    }
});

fs.readFile('input2.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    try {
        const input = JSON.parse(data);
        const n = input.keys.n;
        const k = input.keys.k;

        const points = [];
        for (let i = 1; i <= n; i++) {
            if (input[i]) {
                const x = i;
                const y = decodeValue(input[i].value, parseInt(input[i].base));
                points.push([x, y]);
            }
        }

        const secret = lagrangeInterpolation(points, k);

        console.log("The secret for input 2 is:", secret);
    } catch (error) {
        console.error("Error processing data:", error);
    }
});
