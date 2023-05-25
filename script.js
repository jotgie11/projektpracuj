   /* function weather(response) {
      const pogoda = document.getElementById('pogoda');
      console.log(response);
      const miasto = response.address;
      const warunki = response.days;
      for (let i = 0; i < warunki.length; i++) {
          pogoda.innerHTML += '<ul id = "pogodalista">';
          pogoda.innerHTML += '<li>Miasto: ' + miasto + '</li>';
          pogoda.innerHTML += '<li>Temperatura: ' + warunki[i].temp + ' zł</li>';
          pogoda.innerHTML += '<li>Wschód: ' + warunki[i].sunrise + ' zł</li>';
          pogoda.innerHTML += '<li>Zachód: ' + warunki[i].sunset + ' zł</li>';
          pogoda.innerHTML += '</ul>';
        }
    }
    */
    function validateForm() {

      let stanowisko = document.getElementById('stanowisko').value;
      let placa = document.getElementById('placa').value;

      if (stanowisko == "") {
        alert("Pole stanowisko musi być wypełnione.");
        return false;
      }

      if (placa == "") {
        alert("Pole płaca musi być wypełnione.");
        return false;
      }
      
      let formData = getFormData() || [];

      let newFormData = stanowisko + ',' + placa;
      
      formData.push(newFormData);
      
      setFormData(formData);
      
      return true;
    }

    
    function getFormData() {
      let formDataString = localStorage.getItem('formData');
      if (formDataString) {
        return formDataString.split(';');
      } else {
        return [];
      }
    }
    
    function setFormData(formData) {
      let formDataString = formData.join(';');
      localStorage.setItem('formData', formDataString);
    }
    function displayFormData() {
      let formData = getFormData();
      let output = document.getElementById('output');
      
      if (formData.length > 0) {
        output.innerHTML = '';
        
        for (let i = 0; i < formData.length; i++) {
          let entry = formData[i].split(',');
          output.innerHTML += '<div><p>Stanowisko: ' + entry[0] + '</p><p>Płaca: ' + entry[1] + ' zł</p></div>';
          output.innerHTML += '<button id = "apply">Aplikuj!</button>'
        }
      } else {
        output.innerHTML = 'Brak ofert.';
      }
    }
    function clearFormData() {
      localStorage.removeItem('formData');
      displayFormData();
    }
