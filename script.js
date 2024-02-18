const allSeat = document.getElementsByClassName('seat');

let totalSeatLeft=40;
let totalCount=0;

for( const seat of allSeat){
  seat.addEventListener('click', function(e){
    totalSeatLeft-=1;

    totalCount+=1;
   
   

   if(totalCount<=4){
    document.getElementById('totalCount').innerText=totalCount;
    document.getElementById('totalSeatLeft').innerText=totalSeatLeft;
   }
   else{
    alert("Sorry, You can't buy 5 or more ticket");
   }
  })
}

