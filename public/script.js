
fetch('http://localhost:3000/')
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
    console.log(myJson.data);
});

console.log(myJson);