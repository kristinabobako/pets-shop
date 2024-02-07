const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];

const cardTemplate = document.querySelector('#item-template');
const cardsContainer = document.querySelector('#shop-items');

function makeCardByTemplate(img, title, description, price, tags) {
  const cardItem = cardTemplate.content.cloneNode(true);

  cardItem.querySelector('img').src = img;
  cardItem.querySelector('h1').textContent = title;
  cardItem.querySelector('p').textContent = description;
  cardItem.querySelector('span').textContent = `${price}Р`;

  tags.forEach(function(item) {
    const elemSpan = document.createElement('span');
    elemSpan.classList.add('tag');
    elemSpan.textContent = item;
    cardItem.querySelector('.tags').append(elemSpan);
  });

  return cardsContainer.append(cardItem);
};

items.forEach((item) => {
  makeCardByTemplate(item.img, item.title, item.description, item.price, item.tags);
});

const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');
const nothingFound = document.querySelector('#nothing-found');

function checkSearchString() {
  const searchString = searchInput.value;
  
  const searchResult = items.filter((item) => item.title.toLowerCase().trim().includes(searchString.toLowerCase().trim()));

  if (searchResult.length == 0) {
    nothingFound.textContent = "Ничего не найдено";
  } else {
    nothingFound.innerHTML = '';
  };

  searchResult.forEach((item) => {
    makeCardByTemplate(item.img, item.title, item.description, item.price, item.tags);
  });
};

function clearCardsContainer() {
  cardsContainer.innerHTML = '';
};

searchBtn.addEventListener('click', function () {
  clearCardsContainer();
  checkSearchString();
});
