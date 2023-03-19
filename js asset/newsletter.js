// Adăugați evenimentul de trimitere a formularului
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Adăugați aici codul pentru a trimite adresa de e-mail către server pentru înregistrare
    // După înregistrare, afișați lista de știri și ascundeți formularul
    document.querySelector('.newsletter-content').style.display = 'block';
    document.querySelector('#newsletter-form').style.display = 'none';
  });
  
  // Încărcați știrile din RSS-ul selectat
  fetch('https://rss.nytimes.com/services/xml/rss/nyt/Business.xml')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      // Parsați XML-ul și extrageți elementele relevante
      const items = data.querySelectorAll('item');
      const newsList = document.getElementById('news-list');
      // Iterați prin fiecare element și adăugați-l în lista de știri
      items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', item.querySelector('link').innerHTML);
        a.setAttribute('target', '_blank');
        a.innerText = item.querySelector('title').innerHTML;
        li.appendChild(a);
        newsList.appendChild(li);
      });
    })
    .catch(error => console.error(error));
  