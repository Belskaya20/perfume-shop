const items = [
  {
    title: "Versace Bright Crystal",
    description: "Туалетная вода, 30 мл",
    tags: ["woman"],
    price: 158,
    img: "./img/versace-bright-crystal.jpeg",
    rating: 3.9,
  },
  {
    title: "Trussardi Donna",
    description: "Парфюмерная вода, 30 мл",
    tags: ["woman"],
    price: 148,
    img: "./img/trussardi-donna.jpeg",
    rating: 4.1,
  },
  {
    title: "Tom Ford Black Orchid",
    description: "Парфюмерная вода-спрей, 30 мл",
    tags: ["woman"],
    price: 256,
    img: "./img/tom_ford_black_orchid.jpeg",
    rating: 4.9,
  },
  {
    title: "BVLGARI POUR HOMME",
    description: "Туалетная вода, 50 мл",
    tags: ["man"],
    price: 217,
    img: "./img/bvlgari-pour-homme.jpeg",
    rating: 4.7,
  },
  {
    title: "Euphoria Men Eau De Toilette",
    description: "Туалетная вода, 50 мл",
    tags: ["man"],
    price: 322,
    img: "./img/euphoria.jpeg",
    rating: 3.5,
  },
  {
    title: "BOSS HUGO BOSS BOTTLED INFINITE",
    description: "Парфюмерная вода, 50 мл",
    tags: ["man"],
    price: 365,
    img: "./img/boss-bottled-infinite.jpeg",
    rating: 3.2,
  },
  {
    title: "ARMANI EAU DE CEDRE",
    description: "Туалетная вода, 100 мл",
    tags: ["man"],
    price: 425,
    img: "./img/armani-eau-de-cedre.jpeg",
    rating: 4.0,
  },
  {
    title: "MEXX CITY BREEZE FOR HIM",
    description: "Туалетная вода, 30 мл",
    tags: ["man"],
    price: 110,
    img: "./img/mexx-city-breeze.jpeg",
    rating: 2.9,
  },
  {
    title: "MY WAY INTENSE",
    description: "Парфюмерная вода, 50 мл",
    tags: ["woman"],
    price: 584,
    img: "./img/my_way_intense.jpeg",
    rating: 4.8,
  },
  {
    title: "GUCCI FLORA",
    description: "Туалетная вода, 30 мл",
    tags: ["woman"],
    price: 284,
    img: "./img/gucci-flora.jpeg",
    rating: 3.8,
  },
  {
    title: "Cheap and Chic Moschino I Love love",
    description: "Туалетная вода, 30 мл",
    tags: ["woman"],
    price: 119,
    img: "./img/love_love.jpeg",
    rating: 2.7,
  },
  {
    title: "1 MILLION PARFUM",
    description: "Духи, 50 мл",
    tags: ["woman"],
    price: 214,
    img: "./img/1-million.jpeg",
    rating: 4.6,
  },
];



let copyItems = [...items];

//Контейнер для товаров
const itemsContainer = document.querySelector("#shop-items");
// Шаблон для товара
const itemTemplate = document.querySelector("#item-template");
// Ничего не найдено
const nothingFound = document.querySelector("#nothing-found");

// Отрисовка 
 function paintItems(arr) {
  nothingFound.textContent = "";
  itemsContainer.innerHTML = "";
  arr.forEach((item) => {
    itemsContainer.append(createItem(item));
});
  if (!arr.length) {
    nothingFound.textContent = "Ничего не найдено";
  }
}

function createItem(shopItem) {
  const { title, description, tags, img, price, rating } = shopItem;
  
  const item = itemTemplate.content.cloneNode(true);
  item.querySelector("h1").textContent = title;
  item.querySelector("p").textContent = description;
  item.querySelector("img").src = img;
  item.querySelector(".price").textContent = `${price}BYN`;
  
// Рейтинг
 const ratingContainer = item.querySelector(".rating");
 for (let i = 0; i < rating; i++) {
  const star = document.createElement("i");
  star.classList.add("fa", "fa-star");
  ratingContainer.append(star);
}
  
// Теги
 const tagsHolder = item.querySelector(".tags");
  
 tags.forEach((tag) => {
  const element = document.createElement("span");
  element.textContent = tag;
  element.classList.add("tag");
  tagsHolder.append(element);
});
  return item;
}

// Сортировка товаров по алфавиту
 function sortAlphabet(a, b) {
  if (a.title > b.title) {
    return 1;
}
  if (a.title < b.title) {
    return -1;
}
    return 0;
}

 paintItems(copyItems.sort((a, b) => sortAlphabet(a, b)));

// Переменная поиска
 const searchInput = document.querySelector("#search-input");
// Кнопка
 const searchButton = document.querySelector("#search-button");

// Функция для поиска по товарам
 function applySearch() {
  const searchLine = searchInput.value.trim().toLowerCase();
  copyItems = items.filter((el) =>
  el.title.toLowerCase().includes(searchLine)
);
  copyItems.sort((a, b) => sortAlphabet(a, b));
  paintItems(copyItems);
// По умолчанию сортировка "по алфавиту"
  sort.selectedIndex = 0;
}

// Обработчик при клике на кнопку поиска
 searchButton.addEventListener("click", applySearch);
// Обработчик события поиска при взаимодействии с инпутом
 searchInput.addEventListener("search", applySearch);

// Сортировка
 const sort = document.querySelector("#sort");
 
 sort.addEventListener("change", (event) => {
  
  const selectedOption = event.target.value;
  
  switch (selectedOption) {
    case "expensive": {
      copyItems.sort((a, b) => b.price - a.price);
      break;
    }
    case "cheap": {
      copyItems.sort((a, b) => a.price - b.price);
      break;
    }
    case "rating": {
      copyItems.sort((a, b) => b.rating - a.rating);
      break;
    }
    case "alphabet": {
      copyItems.sort((a, b) => sortAlphabet(a, b));
      break;
    }
  }

  paintItems(copyItems);
});
