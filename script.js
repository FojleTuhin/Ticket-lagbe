const allSeat = document.getElementsByClassName('seat');

let totalSeatLeft = 40;
let totalCount = 0;
const arr = [];
let cost = 0;

for (const seat of allSeat) {
  seat.addEventListener('click', function (e) {



    if (arr.includes(seat)) {
      alert('Do not add same seat twice')
    }
    else {
      arr.push(seat)
      totalSeatLeft -= 1;
      totalCount += 1;


      if (totalCount <= 4) {

        e.target.style.backgroundColor = '#1DD100'
        document.getElementById('totalCount').innerText = totalCount;
        document.getElementById('totalSeatLeft').innerText = totalSeatLeft;


        const elements = document.getElementById("upcoming-price");
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = e.target.innerText;
        const Economy = document.createElement("p");
        Economy.innerText = "Economy";
        const SinglePrice = document.createElement("p");
        SinglePrice.innerText = 550;

        li.appendChild(p)
        li.appendChild(Economy)
        li.appendChild(SinglePrice)
        elements.appendChild(li)

        const totalPriceValue = document.getElementById('total-price')
        cost = cost + 550;
        totalPriceValue.innerText = cost;
        coupon(totalCount)
        apply(cost)
      }
      else {
        alert("Sorry, You can't buy 5 or more ticket");
      }
    }
  })
}



function coupon(totalCount) {

  const CouponBtn = document.getElementById('Coupon-btn')
  if (totalCount === 4) {
    CouponBtn.classList.remove('hidden');
  }
  else {
    CouponBtn.classList.add('hidden');
  }
}


function apply() {

  const totalPrice = document.getElementById('total-price').innerText;
  const convertedTotalPrice=parseInt(totalPrice);

  const discountValue = document.getElementById('discount');
  const grandTotalValue = document.getElementById('grand-total');
  const input = document.getElementById('input').value;



  if (input === "NEW15") {
    const grandTotal = convertedTotalPrice - (convertedTotalPrice * 15) / 100;
    grandTotalValue.innerText = grandTotal;

    const discountPrice= (convertedTotalPrice * 15) / 100;
    discountValue.innerText=discountPrice;
  }

  else if (input === "Couple 20") {
    const grandTotal = convertedTotalPrice - (convertedTotalPrice * 20) / 100;
    grandTotalValue.innerText = grandTotal;

    const discountPrice= (convertedTotalPrice * 20) / 100;
    discountValue.innerText=discountPrice;
  }
     else{
      grandTotalValue.innerText=convertedTotalPrice;
     }


}


console.log(input)
