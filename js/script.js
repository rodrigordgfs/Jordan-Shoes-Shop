// bivewe1009@advew.com = email api

let backToTop = document.getElementById("back_to_top");
// let shoesList = document.getElementById("main__content__list");

// async function getAPIData() {
//   try {
//     const response = await fetch(
//       "https://60e2c2cf9103bd0017b47526.mockapi.io/api/v1/shoes"
//     );
//     return await response.json();
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// function buildList(data) {
//   for (const item of data) {
//     const overlayText = document.createElement("p");
//     overlayText.innerHTML = item.name;
//     const divtText = document.createElement("div");
//     divtText.classList.add("main__content__list_item__text");
//     divtText.appendChild(overlayText);
//     const overlay = document.createElement("div");
//     overlay.classList.add("main__content__list_item__overlay");
//     overlay.appendChild(divtText);
//     const cardImage = document.createElement("img");
//     cardImage.src = item.image;
//     cardImage.alt = item.name;
//     const itemList = document.createElement("li");
//     itemList.classList.add("main__content__list_item");
//     itemList.appendChild(cardImage);
//     itemList.appendChild(overlay);
//     shoesList.appendChild(itemList);
//   }
// }

// getAPIData()
//   .then((data) => {
//     buildList(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Show/Hide Back to top button
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    backToTop.classList.remove("animate__fadeOutDown");
    backToTop.classList.add("animate__animated", "animate__fadeInUp");
    backToTop.style.display = "block";
  } else {
    backToTop.classList.remove("animate__fadeInUp");
    backToTop.classList.add("animate__fadeOutDown");
  }
});

backToTop.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Scrool Reveal Effect
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: true,
});

ScrollReveal().reveal(".main__content__list_item", { delay: 200 });
