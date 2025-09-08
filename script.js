const loadCatagorie = (params) => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then((json) => displaycatagorie(json.categories));

};




const displaycatagorie = (categories) => {
  const CategoriesContainer = document.getElementById("CategoriesContainer")
  CategoriesContainer.innerHTML = "";

  for (let catagorie of categories) {


    const catagorieLink = document.createElement("div")
    catagorieLink.innerHTML = `
   <a id="${catagorie.id}" class=" hover:bg-green-200 rounded-md cursor-pointer p-2">${catagorie.category_name}</a>
   
   `
    CategoriesContainer.append(catagorieLink)
  }

  CategoriesContainer.addEventListener('click', (e) => {
    // all class remove
    const alla = document.querySelectorAll('a')
    alla.forEach(a => {
      a.classList.remove('bg-[#15803D]')
    })
    // condition for only a

    if (e.target.localName === 'a') {
      // console.log(e.target.id);
      e.target.classList.add('bg-[#15803D]')
      loadCardByCategorie(e.target.id)
    }

  })



}
const loadCardByCategorie = (id) => {
  console.log(id);

  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data.plants);
       ShowcardByCategorie(data.plants)
    })
    .catch(err => {
      console.log(err);

    })
}

const ShowcardByCategorie=(plants) => {
  // console.log(plants);
  const plantsContainer=document.getElementById("card-container")
  plantsContainer.innerHTML="";

  for(let plant of plants){
   const plantcards = document.createElement("div")
    plantcards.innerHTML = `
       <div class="h-[400px] w-[330px] border-4 rounded-lg border-none shadow-lg p-4">
        <img class="h-[179px] w-[298px] rounded-md " src="${plant.image}" alt="">
        <h1 class="font-semibold">${plant.name}</h1>
        <p class="text-[12px]">${plant.description}</p>
        <div class="flex justify-between p-3">
            <button onclick="" class="bg-[#DCFCE7] rounded-md p-1 text-[#15803D]">${plant.category}</button>
            <P>$${plant.price}</P>
        </div>
        <button class="w-full bg-[#15803D] py-1 rounded-2xl text-white">Add to Cart</button>
    </div>

    `
    plantsContainer.append(plantcards)
  }
}




loadCatagorie()










const loadcard = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then((data) => dislpayCard(data.plants));
}

const dislpayCard = (plants) => {
  const cardcontainer = document.getElementById("card-container")
  cardcontainer.innerHTML = "";
  for (let plant of plants) {


    const cards = document.createElement("div")
    cards.innerHTML = `
       <div class="h-[400px] w-[330px] border-4 rounded-lg border-none shadow-lg p-4">
        <img class="h-[179px] w-[298px] rounded-md " src="${plant.image}" alt="">
        <button onclick="loadPlantsDetail()" class="font-semibold mt-2">${plant.name}</button>
        <p class="text-[12px]">${plant.description}</p>
        <div class="flex justify-between p-3">
            <button  class="bg-[#DCFCE7] rounded-md p-1 text-[#15803D]">${plant.category}</button>
            <P>$${plant.price}</P>
        </div>
        <button class="w-full bg-[#15803D] py-1 rounded-2xl text-white">Add to Cart</button>
    </div>

    `
    cardcontainer.append(cards)
  }
}

loadcard()



