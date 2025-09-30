// Handle Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;

  document.getElementById('msg').textContent = 
    `Thanks ${name}! Your ${service} appointment is booked for ${date}.
    contact:6300577044`;
  this.reset();
});
