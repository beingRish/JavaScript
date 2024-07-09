const promise1 = new Promise(
    (resolve, reject) => {
        const timeout = Math.random() * 5000;
        setTimeout(() => resolve(`Promise 1 resolved after ${timeout}`), timeout);
    });

const promise2 = new Promise(
    (resolve, reject) => {
        const timeout = Math.random() * 5000;
        setTimeout(() => reject(`Promise 2 rejected after ${timeout}`), timeout);
    });

const promise3 = new Promise(
    (resolve, reject) => {
        const timeout = Math.random() * 5000;
        setTimeout(() => resolve(`Promise 3 resolved after ${timeout}`), timeout);
    });

Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error => {
        console.log(error);
    }))