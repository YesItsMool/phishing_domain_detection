document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;
    fetch('http://localhost:8000/predict', {  // Replace "localhost" and "8000" with your actual host and port
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('prediction-result').textContent = 'Prediction: ' + data.prediction;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
