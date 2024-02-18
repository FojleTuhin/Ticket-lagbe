const allSeat = document.getElementsByClassName('seat');

let totalSeatLeft = 40;
let totalCount = 0;
const arr = [];

for (const seat of allSeat) {
  seat.addEventListener('click', function (e) {

    if (arr.includes(seat)) {
      alert('Do not add same seat twice')
    }
    else{
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
        const p1 = document.createElement("p");
        p1.innerText = "Economy";
        const p2 = document.createElement("p");
        p2.innerText = 550;


        li.appendChild(p)
        li.appendChild(p1)
        li.appendChild(p2)
        elements.appendChild(li)

      }
      else {
        alert("Sorry, You can't buy 5 or more ticket");
      }
    }

      

    
  })
}

