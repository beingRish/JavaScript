const request = fetch('https://api.github.com/users/codebubb');

request
    .then((result) => {
        return result.json();
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })