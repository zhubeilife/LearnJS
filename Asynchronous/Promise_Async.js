fetch('products.json').then(function (response) {
    return response.json();
}).then(function (json) {
    let products = json;
    initialize(products);
}).catch(function (err) {
    console.log('Fetch problem: ' + err.message);
});

fetch('coffee.jpg')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
    })
    .then(myBlob => {
        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    })
    .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });

async function myFetch() {
    let response = await fetch('coffee.jpg');

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    let myBlob = await response.blob();

    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}

myFetch()
    .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });