// setTimeout

function delay(i){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(i)
        }, i*1000);
    });
}

async function test(){
    console.log('Started');
    for(let i=1; i<=10; i++){
        const result = await delay(i);
        console.log(result);
    }
    console.log('Ended');
}

// test();


// We have list of users to whom we have to send the emails one by one.
// In the end We have to console 'All mails are sent'.

const users = ["rish@gmail.com", 'rit@gmail.com', 'vishu@gmail.com'];

function delay(user){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(`Email sent to ${user}`);
        }, 1000);
    });
}

async function sendEmail(){
    for(user of users){
        const confirmation = await delay(user);
        console.log(confirmation);
    }
    console.log('Email sent to all the users.....');
}

sendEmail();