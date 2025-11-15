// All Categories
const loadCategory=()=>{
    const url="https://openapi.programming-hero.com/api/categories"
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>displayCategory(data.categories));
};

const displayCategory=(categories)=>{ 
    const categoryContainer=document.getElementById("category-container")
    categoryContainer.innerHTML='';
    for(let category of categories)
    {
    const categoryCard=document.createElement("div")
    categoryCard.innerHTML=`<p class="p-1">${category.category_name}</p>`;
    categoryContainer.append(categoryCard);
    }
}
loadCategory()