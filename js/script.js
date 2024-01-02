const body = document.getElementsByTagName("body")[0];
body.innerHTML = carouselCard();

const prev = document.getElementById("prev-btn");
const next = document.getElementById("next-btn");
const list = document.getElementById("item-list");

const itemWidth = 320;
const padding = 10;

function carouselCard() {
  const images = [
    "https://images.unsplash.com/photo-1662466818758-0e299f92591a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ3ODc1NDY&ixlib=rb-1.2.1&q=80",
    "https://images.unsplash.com/photo-1662466818758-0e299f92591a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ3ODc1NDY&ixlib=rb-1.2.1&q=80",
    "https://images.unsplash.com/photo-1662466818758-0e299f92591a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ3ODc1NDY&ixlib=rb-1.2.1&q=80",
    "https://images.unsplash.com/photo-1662466818758-0e299f92591a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ3ODc1NDY&ixlib=rb-1.2.1&q=80",
    "https://images.unsplash.com/photo-1662466818758-0e299f92591a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ3ODc1NDY&ixlib=rb-1.2.1&q=80",
    "https://images.unsplash.com/photo-1662466818758-0e299f92591a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ3ODc1NDY&ixlib=rb-1.2.1&q=80",
    "https://images.unsplash.com/photo-1662466818758-0e299f92591a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ3ODc1NDY&ixlib=rb-1.2.1&q=80",
  ];

  let mappedImages = images.map((link) => (
     `<img id="item" class="item" src=${link}/>`
  )).join("");



  return `
  <div class="container">
        <div class="carousel-view">
          <button id="prev-btn" class="prev-btn">
           <svg viewBox="0 0 512 512" width="20" title="chevron-circle-left">
        <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" />
      </svg>
          </button>
          <div id="item-list" class="item-list">
          ${mappedImages}
    </div>
          <button id="next-btn" class="next-btn">
                <svg viewBox="0 0 512 512" width="20" title="chevron-circle-right">
        <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
      </svg>
              </button>
          </div>
      </div>`;
}

prev.addEventListener("click", () => {
  console.log(list.scrollIntoView);
  list.scrollLeft -= itemWidth + padding;
});

next.addEventListener("click", () => {
  list.scrollLeft += itemWidth + padding;
});
