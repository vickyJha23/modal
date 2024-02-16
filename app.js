// console.log("Har Har Mahadev");
const openModalBtn = document.querySelector(".open_modal");
const overlay = document.querySelector(".modal-overlay");
openModalBtn.addEventListener("click", () => {
     if(!overlay.classList.contains("show-overlay")){
            overlay.classList.add("show-overlay");
     }
     else{
         overlay.classList.remove("show-overlay");
     }
});
const closeBtn = document.querySelector(".close_btn");
closeBtn.addEventListener("click", () => {
       overlay.classList.remove("show-overlay");
})