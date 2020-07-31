const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie');

let ticketPrice = parseInt(movieSelect.value);

// functions

function updateSelectedTotal(seatTotal){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    
    const selectedSeatsCount = selectedSeats.length;

    console.log(selectedSeatsCount);

    count.innerText = selectedSeatsCount;

    total.innerText = selectedSeatsCount * ticketPrice;
}

// event listeners

movieSelect.addEventListener('change', function(e) {
    ticketPrice = +e.target.value;
    updateSelectedTotal();

})

container.addEventListener('click', function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedTotal();
    } 
})