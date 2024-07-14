console.log('========== Async / Await ==========');

// async keyword with function always return promise

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Data Received')
//     }, 3000);
// })

// async function getData() {
//     let response = await promise;
//     console.log(response);
// }

// getData();



console.log('========== Ex - 01 : With Promise ==========');

let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');

let dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
}

let buyLaptop = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dell)
        }, 3000);
    })

let buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())

function fetch1() {
    result1.innerText = 'Fetching Data...'

    buyLaptop.then(res => {
        console.log(res);
        result1.innerText = JSON.stringify(res);
    })
}



console.log('========== Ex - 02 : With Async / Await ==========');

async function fetch2() {
    result2.innerText = 'Fetching Data...'

    let res = await buyLaptop;

    result2.innerText = JSON.stringify(res);
}


console.log('========== Ex - 03 : With Fetch Api ==========');


// // Promise

// function fetch3() {
//     result3.innerText = 'Fetching Data...'

//     buyLaptop2.then(res => {
//         result3.innerText = JSON.stringify(res);
//     })
// }

// Async / Await

async function fetch3() {
    result3.innerText = 'Fetching Data...'

    let res = await buyLaptop2

    result3.innerText = JSON.stringify(res)
}