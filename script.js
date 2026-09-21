const btn = document.getElementById("btn");
const input = document.getElementById("ip");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
    const value = Number(input.value);

    new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, 2000);
    })
    .then((result) => {
        const newResult = result * 2;
        output.textContent = "Result: " + newResult;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(newResult);
            }, 2000);
        });
    })
    .then((result) => {
        const newResult = result - 3;
        output.textContent = "Result: " + newResult;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(newResult);
            }, 2000);
        });
    })
    .then((result) => {
        const newResult = result / 2;
        output.textContent = "Result: " + newResult;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(newResult);
            }, 2000);
        });
    })
    .then((result) => {
        const newResult = result + 10;
        output.textContent = "Final Result: " + newResult;
    });
});