function searchGames() {
    const discountInput = document.getElementById('discountInput');
    const discount = discountInput.value;

    // Make API request to retrieve Steam games with the given discount percentage
    // Replace the placeholder URL with the actual Steam API endpoint
    // Remember to handle CORS and other security considerations if accessing the API from the browser
    const apiUrl = `https://api.example.com/steam/games?discount=${discount}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    data.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.innerHTML = `
            <h3>${game.name}</h3>
            <p>Discount: ${game.discount}%</p>
            <p>Price: $${game.price}</p>
        `;
        resultsContainer.appendChild(gameElement);
    });
}
