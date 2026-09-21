const btn = document.getElementById("btn");
const input = document.getElementById("ip");
const output = document.getElementById("output");

btn.addEventListener("click", function () {
    const value = Number(input.value);

    new Promise((resolve) => {
        setTimeout(() => {
            output.textContent = "Result: " + value;
            resolve(value);
        }, 2000);
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result * 2;
                output.textContent = "Result: " + newResult;
                resolve(newResult);
            }, 1000);
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result - 3;
                output.textContent = "Result: " + newResult;
                resolve(newResult);
            }, 1000);
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result / 2;
                output.textContent = "Result: " + newResult;
                resolve(newResult);
            }, 1000);
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result + 10;
                output.textContent = "Final Result: " + newResult;
                resolve(newResult);
            }, 1000);
        });
    });
});