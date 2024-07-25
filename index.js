const likeIcons = document.querySelectorAll(".fa-heart");

let liked = false;

likeIcons.forEach(function (likeIcon) {
  likeIcon.addEventListener("click", function () {
    liked = !liked;

    if (liked) {
      likeIcon.setAttribute("class", "fa-solid fa-heart");
    } else {
      likeIcon.setAttribute("class", "fa-regular fa-heart");
    }
  });
});

//Increment Button
const incrementButtons = document.querySelectorAll(".fa-plus-circle");
const subTotalElement = document.querySelector(".quantity");

//To calculate individual total prices
let total = 0;

//To calculate an array of  total prices
let overallTotal = [0, 0, 0];

//Query selectors to get the DOM total price element
const totals = document.querySelector(".total");

let retotal = 0;

incrementButtons.forEach(function (incrementButton, index) {
  incrementButton.addEventListener("click", function () {
    //Increment Item Quantity
    const qtyParagraph = incrementButton.nextElementSibling;

    let quantity = parseInt(qtyParagraph.textContent);
    quantity++;
    qtyParagraph.textContent = quantity;

    //Increment Subtotal
    const priceDiv = incrementButton.parentElement.previousElementSibling;

    const [val1, val2, val3] = priceDiv.textContent.split("");

    let price = parseInt(val1 + val2 + val3);

    total = quantity * price;

    overallTotal[index] = total;

    switch (index) {
      case 0:
        totals.textContent =
          overallTotal[index] +
          overallTotal[index + 1] +
          overallTotal[index + 2] +
          " $";
        break;
      case 1:
        totals.textContent =
          overallTotal[index - 1] +
          overallTotal[index] +
          overallTotal[index + 1] +
          " $";
        break;

      case 2:
        totals.textContent =
          overallTotal[index - 2] +
          overallTotal[index - 1] +
          overallTotal[index] +
          " $";
        break;
      default:
        break;
    }
  });
});

//Decrement Button
const decrementButtons = document.querySelectorAll(".fa-minus-circle");
const subTotalQty = document.querySelector(".quantity");

decrementButtons.forEach(function (decrementButton, index) {
  decrementButton.addEventListener("click", function () {
    //Decrement Item Quantity
    const qtyParagraph = decrementButton.previousElementSibling;

    let quantity = parseInt(qtyParagraph.textContent);
    quantity--;

    if (quantity >= 0) {
      qtyParagraph.textContent = quantity;
    }

    const priceDiv = decrementButton.parentElement.previousElementSibling;

    const [val1, val2, val3] = priceDiv.textContent.split("");

    let price = parseInt(val1 + val2 + val3);

    if (overallTotal[index] === 0) {
      return;
    }
    overallTotal[index] -= price;

    console.log(overallTotal);

    switch (index) {
      case 0:
        totals.textContent =
          overallTotal[index] +
          overallTotal[index + 1] +
          overallTotal[index + 2] +
          " $";
        break;
      case 1:
        totals.textContent =
          overallTotal[index - 1] +
          overallTotal[index] +
          overallTotal[index + 1] +
          " $";
        break;

      case 2:
        totals.textContent =
          overallTotal[index - 2] +
          overallTotal[index - 1] +
          overallTotal[index] +
          " $";
        break;
      default:
        break;
    }
    // const itemPriceElement = priceDiv.querySelector(".item_price");

    // const itemPriceNum = parseInt(itemPriceElement);
    // if (subTotalPrice === 0) {
    //   return;
    // }
    // subTotalPrice = subTotalPrice - itemPriceNum;
    // qtyParagraph.textContent = quantity;
  });
});

//Delete Icon
const deleteIcons = document.querySelectorAll(".fa-trash-alt");
const cardBody = document.querySelectorAll(".card-body");
console.log(deleteIcons);

deleteIcons.forEach(function (deleteIcon, index) {
  deleteIcon.addEventListener("click", function () {
    const cardBody = deleteIcon.closest(".card");
    cardBody.remove();

    //To reset the total price upon deletion
    overallTotal[index] = 0;
    switch (index) {
      case 0:
        totals.textContent =
          overallTotal[index] +
          overallTotal[index + 1] +
          overallTotal[index + 2] +
          " $";
        break;
      case 1:
        totals.textContent =
          overallTotal[index - 1] +
          overallTotal[index] +
          overallTotal[index + 1] +
          " $";
        break;

      case 2:
        totals.textContent =
          overallTotal[index - 2] +
          overallTotal[index - 1] +
          overallTotal[index] +
          " $";
        break;
      default:
        break;
    }
  });
});
