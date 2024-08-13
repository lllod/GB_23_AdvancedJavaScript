document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value.trim();
    const reviewText = document.getElementById('review-text').value.trim();

    if (productName && reviewText) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || {};

        if (!reviews[productName]) {
            reviews[productName] = [];
        }

        reviews[productName].push(reviewText);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        alert('Отзыв добавлен!');
        document.getElementById('review-form').reset();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});
