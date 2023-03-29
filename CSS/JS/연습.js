function goMart() {
  console.log("마트에 가서 어떤 음료 살지 고민!");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝~!");
      product = "제로 콜라";
      price = 4000;
      resolve();
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
async function exec() {
  let mart = await goMart();
  let Drink = await pickDrink();
  let pey = await pay();
}
exec();
