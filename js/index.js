// All Categories
const loadCategory = () => {
  const url = "https://openapi.programming-hero.com/api/categories"
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};
// Specific Tree
const loadTrees = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTrees(data.plants));
}
// All Plants
const loadAllPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants"
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllPlants(data.plants));
};

const loadTreeDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayModal(data.plants));
};

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container")
  categoryContainer.innerHTML = '';
  for (let cat of categories) {
    const categoryCard = document.createElement("div")
    categoryCard.innerHTML = `<p onclick="loadTrees(${cat.id})" class="p-1">${cat.category_name}</p>`;
    categoryContainer.append(categoryCard);
  }
}
const displayTrees = (plants) => {
  const treeContainer = document.getElementById("card-container")
  treeContainer.innerHTML = '';
  for (let plant of plants) {
    const treeCard = document.createElement("div")
    treeCard.innerHTML = `<div class="card bg-base-100 shadow-sm h-full">
            <figure class="m-4 h-[250px] w-auto">
              <img src="${plant.image}" alt="tree" class="rounded-xl"/>
            </figure>
            <div class="card-body">
              <h2 onclick="loadTreeDetails(${plant.id})" class="card-title">${plant.name}</h2>
              <p class="text-gray-600">${plant.description}</p>
              <div class="flex items-center gap-25">
                <div class="badge bg-green-100 p-5 rounded-3xl text-green-700 font-semibold text-sm">${plant.category}</div>
                <p class="font-bold noto-sans-bengali-font">৳<span>${plant.price}</span></p>
              </div>
              <div class="card-actions">
                <button class="btn btn-primary bg-[#15803d] my-2 w-full rounded-3xl text-white">Add to Cart</button>
              </div>
            </div>
          </div>`;
    treeContainer.append(treeCard);
  }
}
const displayAllPlants = (plants) => {
  const cardsContainer = document.getElementById("card-container")
  cardsContainer.innerHTML = '';
  for (let card of plants) {
    const childCard = document.createElement("div")
    childCard.innerHTML = `<div class="card bg-base-100 shadow-sm h-full">
            <figure class="m-4 h-[250px] w-auto">
              <img src="${card.image}" alt="tree" class="rounded-xl"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">${card.name}</h2>
              <p class="text-gray-600">${card.description}</p>
              <div class="flex items-center gap-25">
                <div class="badge bg-green-100 p-5 rounded-3xl text-green-700 font-semibold text-sm">${card.category}</div>
                <p class="font-bold noto-sans-bengali-font">৳<span>${card.price}</span></p>
              </div>
              <div class="card-actions">
                <button class="btn btn-primary bg-[#15803d] my-2 w-full rounded-3xl text-white">Add to Cart</button>
              </div>
            </div>
          </div>`;
    cardsContainer.append(childCard);
  }
}
const displayModal = (details) => {
  const detailContainer = document.getElementById("detail-container")
  detailContainer.innerHTML = `<div class="card bg-base-100 shadow-sm h-full">
            <h2 class="card-title m-4 text-xl">${details.name}</h2>
           <figure class="m-4 h-[250px] w-auto overflow-hidden">
              <img src="${details.image}" alt="tree" class="rounded-xl"/>
            </figure>
            <div class="card-body">
                <div>Category: ${details.category}</div>
                          
              <p>Description: ${details.description}</p>
                <p class="noto-sans-bengali-font">Price: ৳<span>${details.price}</span></p>
              </div>
            </div>
          </div>`;
  document.getElementById("my_modal_5").showModal();

}
loadCategory()
loadAllPlants()