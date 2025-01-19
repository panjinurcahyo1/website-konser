function selectConcert(concert) {  
    const seatSelectionHtml = `  
        <h1>Select Your Seat</h1>  
        <form id="seatForm">  
            <label for="seat">Choose your seat:</label>  
            <select id="seat" name="seat" required>  
                <option value="">Select a seat</option>  
                <option value="seat1">Seat 1</option>  
                <option value="seat2">Seat 2</option>  
                <option value="seat3">Seat 3</option>  
            </select>  
            <button type="button" onclick="goToPersonalInfo()">Next</button>  
        </form>  
    `;  
    document.body.innerHTML = seatSelectionHtml + document.body.innerHTML;  
}  
  
function goToPersonalInfo() {  
    const personalInfoHtml = `  
        <h1>Enter Your Personal Information</h1>  
        <form id="personalInfoForm">  
            <label for="name">Name:</label>  
            <input type="text" id="name" name="name" required>  
            <label for="email">Email:</label>  
            <input type="email" id="email" name="email" required>  
            <label for="phone">Phone Number:</label>  
            <input type="tel" id="phone" name="phone" required>  
            <button type="button" onclick="goToPayment()">Proceed to Payment</button>  
        </form>  
    `;  
    document.body.innerHTML = personalInfoHtml + document.body.innerHTML;  
}  
  
function goToPayment() {  
    const paymentHtml = `  
        <h1>Payment</h1>  
        <p>Please choose your payment method:</p>  
        <form id="paymentForm">  
            <label for="paymentMethod">Payment Method:</label>  
            <select id="paymentMethod" name="paymentMethod" required>  
                <option value="">Select a payment method</option>  
                <option value="creditCard">Credit Card</option>  
                <option value="paypal">PayPal</option>  
            </select>  
            <button type="button" onclick="confirmBooking()">Confirm Payment</button>  
        </form>  
    `;  
    document.body.innerHTML = paymentHtml + document.body.innerHTML;  
}  
  
function confirmBooking() {  
    const confirmationHtml = `  
        <h1>Thank You for Your Purchase!</h1>  
        <p>Your ticket has been booked successfully.</p>  
    `;  
    document.body.innerHTML = confirmationHtml + document.body.innerHTML;  
}  
