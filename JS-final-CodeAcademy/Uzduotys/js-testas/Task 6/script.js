/* ------------------------------ TASK 6 -----------------------------------
Turimas "products" masyvas. 

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "getAveragePrice" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų "products" vidutinę kainą kaip skaičių.
2. funkcija "getProductsNames" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų "products" pavadinimus naujame masyve pvz., ['Product 1', 'Product 2', ...].
3. funkcija "getUniqueCategories" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų unikalių "products" kategorijų sąrašą.
-------------------------------------------------------------------------- */

const products = [
  { id: "1", name: "Product 1", price: 10, category: "Electronics" },
  { id: "2", name: "Product 2", price: 20, category: "Books" },
  { id: "3", name: "Product 3", price: 30, category: "Clothing" },
  { id: "4", name: "Product 4", price: 40, category: "Electronics" },
  { id: "5", name: "Product 5", price: 50, category: "Books" },
];

const getAveragePrice = (array) => {
  const whole = array.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);
  console.log(whole / products.length);
};

const getProductsNames = (array) => {
  const names = array.map((item) => item.name);
  console.log(names);
};

const getUniqueCategories = (array) => {
  const unique = [];
  array.forEach((item) => {
    if (!unique.includes(item.category)) {
      unique.push(item.category);
    }
  });
  console.log(unique);
};

getAveragePrice(products);
getProductsNames(products);
getUniqueCategories(products);
