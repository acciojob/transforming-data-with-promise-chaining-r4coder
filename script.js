//your JS code here. If required.
const output = document.getElementById("output");

function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

getNumbers()
    .then((numbers) => {
        return new Promise((resolve) => {
            const evenNumbers = numbers.filter((num) => num % 2 === 0);

            setTimeout(() => {
                output.textContent = evenNumbers;
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        const doubledNumbers = evenNumbers.map((num) => num * 2);

        setTimeout(() => {
            output.textContent = doubledNumbers;
        }, 2000);
    });