// Задание 1: Музыкальная коллекция
const musicCollection = {
    albums: [
        { title: "Abbey Road", artist: "The Beatles", year: 1969 },
        { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973 },
        { title: "Rumours", artist: "Fleetwood Mac", year: 1977 },
    ],
    [Symbol.iterator]() {
        let index = 0;
        let albums = this.albums;

        return {
            next() {
                if (index < albums.length) {
                    return { value: albums[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

const musicCollectionDiv = document.getElementById('music-collection');
for (let album of musicCollection) {
    const albumInfo = document.createElement('p');
    albumInfo.textContent = `${album.title} - ${album.artist} (${album.year})`;
    musicCollectionDiv.appendChild(albumInfo);
}

// Задание 2: Управление заказами в ресторане
const chefs = new Map([
    ["Пицца", "Виктор"],
    ["Суши", "Ольга"],
    ["Десерты", "Дмитрий"]
]);

const dishes = new Map([
    ["Пицца 'Маргарита'", "Виктор"],
    ["Пицца 'Пепперони'", "Виктор"],
    ["Суши 'Филадельфия'", "Ольга"],
    ["Суши 'Калифорния'", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"]
]);

const clients = new Map();

const alexey = { name: "Алексей" };
const maria = { name: "Мария" };
const irina = { name: "Ирина" };

clients.set(alexey, ["Пицца 'Пепперони'", "Тирамису"]);
clients.set(maria, ["Суши 'Калифорния'", "Пицца 'Маргарита'"]);
clients.set(irina, ["Чизкейк"]);

function printOrders(clients, dishes, chefs) {
    const restaurantOrdersDiv = document.getElementById('restaurant-orders');

    const chefsInfo = document.createElement('h2');
    chefsInfo.textContent = 'Повара и их специализации';
    restaurantOrdersDiv.appendChild(chefsInfo);

    chefs.forEach((chef, specialty) => {
        const chefInfo = document.createElement('p');
        chefInfo.textContent = `${chef} специализируется на ${specialty}`;
        restaurantOrdersDiv.appendChild(chefInfo);
    });

    const ordersInfo = document.createElement('h2');
    ordersInfo.textContent = 'Заказы клиентов';
    restaurantOrdersDiv.appendChild(ordersInfo);

    clients.forEach((orders, client) => {
        const clientInfo = document.createElement('p');
        clientInfo.textContent = `Клиент ${client.name} заказал:`;
        restaurantOrdersDiv.appendChild(clientInfo);

        orders.forEach(order => {
            const orderInfo = document.createElement('p');
            orderInfo.textContent = `${order} - повар: ${dishes.get(order)}`;
            orderInfo.style.marginLeft = "20px";
            restaurantOrdersDiv.appendChild(orderInfo);
        });
    });
}

printOrders(clients, dishes, chefs);
