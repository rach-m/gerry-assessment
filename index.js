let faveBtn = document.querySelector("#favorite")

if (localStorage.getItem("btnText")){
faveBtn.textContent = localStorage.getItem("btnText")
}

let addFacilityToFaves = () => {
if(faveBtn.innerHTML === "Add To Favorites"){
  faveBtn.innerHTML = "Remove From Favorites"
  localStorage.setItem("btnText", "Remove From Favorites")
}
else{
  faveBtn.innerHTML = "Add To Favorites"
  localStorage.setItem("btnText", "Add To Favorites")
}
}

faveBtn.addEventListener("click", addFacilityToFaves)
