// Selecteaza toate elementele cu clasa timestamp
var timestamps = document.querySelectorAll(".timestamp");

// Itereaza prin fiecare element si actualizeaza textul cu data si ora curenta
for (var i = 0; i < timestamps.length; i++) {
  timestamps[i].textContent = new Date().toLocaleString();
}
