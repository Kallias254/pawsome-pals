// Wait for the image to load
window.addEventListener('load', function () {
    var img = document.getElementById('dog-image');

    // Set explicit width and height attributes for the image
    img.width = 800; // Adjust to your preferred width
    img.height = 600; // Adjust to your preferred height
    //call api
    callApi();

});

document.getElementById('new-dog').addEventListener('click', callApi);

function callApi() {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            let dogContainer = document.getElementById('dog-container');
            // clear the previous image
            dogContainer.innerHTML = '';
            let dogImage = document.createElement('img');
            dogImage.src = data.message;
            dogContainer.appendChild(dogImage);
        })
        .catch(error => console.error('Error:', error));

}
