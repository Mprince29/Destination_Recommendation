function searchHotels() {
  var city = document.getElementById('city').value;
  var guests = document.getElementById('guests').value;
  var features = document.getElementById('features').value;

  // Make AJAX request to backend
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/search', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
          if (xhr.status == 200) {
              var results = JSON.parse(xhr.responseText);
              displayResults(results);
          } else {
              console.error('Error:', xhr.statusText);
          }
      }
  };
  xhr.send(JSON.stringify({city: city, guests: guests, features: features}));
}

function displayResults(results) {
  var resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (results.length === 0) {
      resultsDiv.innerHTML = '<p>No results found.</p>';
  } else {
      var ul = document.createElement('ul');
      results.forEach(function(hotel) {
          var li = document.createElement('li');
          li.textContent = hotel.hotelname + ' - ' + hotel.address;
          ul.appendChild(li);
      });
      resultsDiv.appendChild(ul);
  }
}
