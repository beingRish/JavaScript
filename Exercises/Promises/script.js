const someLongProcess = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Fullfilled'), 2000);
    setTimeout(() => reject('Rejected'), 3000);
});

const someLongProcess2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Fullfilled'), 1000);
    setTimeout(() => reject('Rejected'), 3000);
});

console.log(someLongProcess);

someLongProcess
    .then((result) => {
        console.log('Promise is ' + result);
        return someLongProcess2;
    })
    .then((result) => {
        console.log('Second promise is ' + result);
    })
    .catch((error) => {
        console.log('Promise is ' + error);
    })
    .finally(() => {
        console.log('Finally');
    })