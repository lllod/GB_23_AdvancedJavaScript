document.addEventListener('DOMContentLoaded', function() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const productList = document.getElementById('product-list');

    for (let product in reviews) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productTitle = document.createElement('h2');
        productTitle.textContent = product;
        productTitle.style.cursor = 'pointer';
        productDiv.appendChild(productTitle);

        const reviewsList = document.createElement('ul');
        reviewsList.style.display = 'none';

        reviews[product].forEach((review, index) => {
            const reviewItem = document.createElement('li');
            reviewItem.textContent = review;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.style.marginLeft = '10px';

            deleteButton.addEventListener('click', function() {
                reviews[product].splice(index, 1);
                if (reviews[product].length === 0) {
                    delete reviews[product];
                }
                localStorage.setItem('reviews', JSON.stringify(reviews));
                location.reload();
            });

            reviewItem.appendChild(deleteButton);
            reviewsList.appendChild(reviewItem);
        });

        productDiv.appendChild(reviewsList);
        productList.appendChild(productDiv);

        productTitle.addEventListener('click', function() {
            if (reviewsList.style.display === 'none') {
                reviewsList.style.display = 'block';
            } else {
                reviewsList.style.display = 'none';
            }
        });
    }
});
