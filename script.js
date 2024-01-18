const btn = document.querySelector(".btn");
const search = document.querySelector(".search");


search.addEventListener("focus",()=>{
	btn.classList.add("active");
})

