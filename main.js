console.log("1");
function processArray(array, callback) {
    let result = [];

    for (let element of array) {
        result.push(callback(element));
    }

    return result;
}
function doubleElement(element) {
    return element * 2;
}
function reverseElement(element) {
    return element.split("").reverse().join("");
}
console.log(processArray([1, 2, 3, 4, 5], doubleElement));
console.log(processArray(["hello", "world"], reverseElement));
console.log("2");
function filterArray(array, callback) {
    let result = [];
    for (let element of array) {
        if (callback(element)) {
            result.push(element);
        }
    }
    return result;
}
function isEven(number) {
    return number % 2 === 0;
}
function isShortWord(word) {
    return word.length <= 4;
}
console.log(filterArray([1, 2, 3, 4, 5], isEven));
console.log(filterArray(["cat", "elephant", "dog", "bird"], isShortWord));
console.log("3");
function washDishes() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Посуд вимито");
        }, 2000);
    });
}
function cleanRoom() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Кімнату прибрано");
        }, 4000);
    });
}
function makeDinner() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Вечеря приготована");
        }, 7000);
    });
}
washDishes()
    .then(function(result) {
        console.log(result);
        return cleanRoom();
    })
    .then(function(result) {
        console.log(result);
        return makeDinner();
    })
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });
console.log("4");
function sortArray(array) {
    return new Promise(function(resolve, reject) {
        if (array.length === 0) {
            reject(new Error("Масив порожній"));
        } else {
            setTimeout(function() {
                let result = [...array].sort(function(a, b) {
                    return a - b;
                });

                resolve(result);
            }, 2000);
        }
    });
}
sortArray([5, 2, 8, 1, 3])
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error.message);
    });
console.log("5");
function multiplyAsync(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a !== "number" || typeof b !== "number" ||
            !Number.isFinite(a) || !Number.isFinite(b)) {
            reject(new Error("Некоректні значення"));
        } else {
            setTimeout(function() {
                resolve(a * b);
            }, 2000);
        }
    });
}
async function mainMultiply() {
    try {
        let result = await multiplyAsync(6, 9);
        console.log("Multiplication result:", result);
    } catch (error) {
        console.log(error.message);
    }
}
mainMultiply();
console.log("6");
function sortArrayAsync(array) {
    return new Promise(function(resolve, reject) {
        if (array.length === 0) {
            reject(new Error("Масив порожній"));
        } else {
            setTimeout(function() {
                let result = [...array].sort(function(a, b) {
                    return a - b;
                });
                resolve(result);
            }, 2000);
        }
    });
}
async function mainSort() {
    try {
        let result = await sortArrayAsync([9, 4, 7, 1, 5]);
        console.log("Sorted array:", result);
    } catch (error) {
        console.log(error.message);
    }
}
mainSort();
