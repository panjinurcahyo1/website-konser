// Fungsi untuk menampilkan kursi yang tersedia  
function showSeating(concertId) {  
    const seatingChart = document.getElementById('seatingChart');  
    const seats = document.getElementById('seats');  
  
    // Clear previous seats  
    seats.innerHTML = '';  
  
    // Simulasi kursi  
    for (let i = 1; i <= 10; i++) {  
        const seat = document.createElement('div');  
        seat.className = 'seat';  
        seat.innerText = i;  
        seat.onclick = function() {  
            seat.classList.toggle('selected');  
        };  
        seats.appendChild(seat);  
    }  
  
    seatingChart.style.display = 'block'; // Tampilkan chart kursi  
}  
  
// Fungsi untuk memesan tiket  
function bookTickets() {  
    const selectedSeats = document.querySelectorAll('.seat.selected');  
    if (selectedSeats.length > 0) {  
        const ticketCode = 'TIKET-' + Math.random().toString(36).substr(2, 9); // Generate kode tiket  
        window.location.href = `qr.html?code=${ticketCode}`; // Redirect ke halaman QR  
    } else {  
        alert('Silakan pilih kursi terlebih dahulu.');  
    }  
}  
  
// Fungsi untuk mencari konser (jika diperlukan)  
function searchConcerts() {  
    const date = document.getElementById('concertDate').value;  
    const location = document.getElementById('concertLocation').value;  
    const scheduleList = document.getElementById('scheduleList');  
  
    // Clear previous results  
    scheduleList.innerHTML = '';  
  
    // Simulasi data konser  
    const concerts = [  
        { id: 1, name: 'Konser Band A', date: '2025-01-20', location: 'Jakarta' },  
        { id: 2, name: 'Konser Band B', date: '2025-01-25', location: 'Bandung' },  
        { id: 3, name: 'Konser Band C', date: '2025-01-30', location: 'Surabaya' },  
    ];  
  
    // Filter konser berdasarkan tanggal dan lokasi  
    const filteredConcerts = concerts.filter(concert => {  
        return (!date || concert.date === date) && (!location || concert.location.toLowerCase().includes(location.toLowerCase()));  
    });  
  
    // Tampilkan hasil  
    filteredConcerts.forEach(concert => {  
        const concertDiv = document.createElement('div');  
        concertDiv.className = 'concert-item';  
        concertDiv.innerHTML = `  
            <img src="https://via.placeholder.com/150" alt="${concert.name}" />  
            <div class="concert-details">  
                <span>${concert.name} - ${concert.date} - ${concert.location}</span>  
                <button onclick="showSeating(${concert.id})">Pilih Kursi</button>  
            </div>  
        `;  
        scheduleList.appendChild(concertDiv);  
    });  
}  
