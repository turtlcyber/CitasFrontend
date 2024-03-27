document.addEventListener('DOMContentLoaded', function () {
  fetch('http://192.168.1.26:5001/api/v1/getUser/seiWkF1CsbrPTpCykdGeiQxdl')
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      const user = data.userData;
      console.log(data);
      // Build HTML to display user information
      const userInfoHTML = `
                 <img src="${user.userImage}" alt="User Picture" class="userimg">
                <h2 class="texth2">${user.userName}</h2>
                <p class="textp">${user.userPronoun}</p>
                <p class="textp">${user.userAge} -Years</p>
               
                            `;
      document.getElementById('userData').innerHTML = userInfoHTML;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});