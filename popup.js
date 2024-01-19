$(document).ready(function() {

function showNotification() {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon48.png',
    title: 'Hello, Notification!',
    message: 'This is a simple notification from your Chrome extension.'
  });
}



function fetchDataFromKhamsat() {
  $.ajax({
    url: 'http://localhost/freelancingapi/public/api/khamsat',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
      // Handle the response if needed
      console.log('API Response:', response);
    },
    error: function(error) {
      console.error('Error:', error);
    }
  });
}


function fetchDataFrommostaql() {
  $.ajax({
    url: 'http://localhost/freelancingapi/public/api/mostaql',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
      // Handle the response if needed
      console.log('API Response:', response);
    },
    error: function(error) {
      console.error('Error:', error);
    }
  });
}

function fetchDataFromnafezly() {
  $.ajax({
    url: 'http://localhost/freelancingapi/public/api/nafezly',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
      // Handle the response if needed
      console.log('API Response:', response);
    },
    error: function(error) {
      console.error('Error:', error);
    }
  });
}

function fetchDataFromkafiil() {
  $.ajax({
    url: 'http://localhost/freelancingapi/public/api/kafiil',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
      // Handle the response if needed
      console.log('API Response:', response);
    },
    error: function(error) {
      console.error('Error:', error);
    }
  });
}
function showNotification() {

}

// Initial execution

// Set up interval for every 5 seconds (5000 milliseconds)


  $.ajax({

    url: 'http://localhost/freelancingapi/public/api/order',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      if (Array.isArray(data.results)) {
        const orderTable = $('#orderTableBody');

        data.results.forEach(orderData => {
          const newRow = $('<tr>');
          newRow.html(`
            <td class="w-100">${orderData.text}</td>
            <td><a href="${orderData.Link}" target="_blank" class="btn btn-primary">فتح الرابط</a></td>
            <td><img src="${orderData.picture}" alt="Picture" style="max-width: 50px; max-height: 50px;"></td>
            <td>${orderData.condition}</td>
            <td>${orderData.sort}</td>
            <td>${orderData.keywords}</td>
          `);
          orderTable.append(newRow);
        });


  showNotification();

        // Check if notifications are supported

      } else {
        console.error('Data is not an array or does not have a results property:', data);
      }
    },
    error: function(error) {
      console.error('Error:', error);
    }
  });


setInterval(fetchDataFromKhamsat, 5000);

setInterval(fetchDataFrommostaql, 60000);

setInterval(fetchDataFromnafezly, 1800000);

setInterval(fetchDataFromkafiil, 1800000);


});
