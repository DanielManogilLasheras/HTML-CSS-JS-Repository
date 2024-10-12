//In the first place, we are declaring variables from the buttons to create content, and the areas that where content will be posted.
const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');
//We will declare an array of patients that we will fill as we add patients to the list
const patients = [];
//This function retrieves the form data, verifies that neither field is empty and pushes the data into the array of patients.
function addPatient() {
    const name = document.getElementById("name").value;
       //IMPORTANT: radio Inputs need to be accessed through a querySelector. It checks which input with the name "gender" has been checked, and saves the value.
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;
    if (name && gender && age && condition) {
      patients.push({ name, gender: gender.value, age, condition });
      //After the data validation, we will reset the fields and generate a report based on the patient's data.
      resetForm();
      generateReport();
    }
}
//Function to reset the fields.
function resetForm() {
    document.getElementById("name").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("age").value = "";
    document.getElementById("condition").value = "";
}
/*We make a function to generate a report based on the patient's data.
    To do so, we declare a series of objects with properties that all patients share.
*/
function generateReport() {
    const numPatients = patients.length;
    //these are object data structures
    const conditionsCount = {
      Diabetes: 0,
      Thyroid: 0,
      "High Blood Pressure": 0,
    };
    const genderConditionsCount = {
      Male: {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
      },
      Female: {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
      },
    };
    //Iteration through each patient using for...of loop
    for (const patient of patients) {
        /*In order to increase the counter of each condition variable,
        we access the object structure and it's attributes by quoting object.attribute,
        it works a little bit like a file path.
        */
      conditionsCount[patient.condition]++;
      genderConditionsCount[patient.gender][patient.condition]++;
    }
    //Updating information inside the HTML.
    report.innerHTML = `Number of patients: ${numPatients}<br><br>`;
    report.innerHTML += `Conditions Breakdown:<br>`;
    for (const condition in conditionsCount) {
      report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
    }
    report.innerHTML += `<br>Gender-Based Conditions:<br>`;
    for (const gender in genderConditionsCount) {
      report.innerHTML += `${gender}:<br>`;
      for (const condition in genderConditionsCount[gender]) {
        report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
      }
    }
  }
  //An event listener to add a patient when it's button is clicked.
addPatientButton.addEventListener("click", addPatient);
//This function fetches a condition inside our JSON matching the condition searched with the one in the list.
function searchCondition() {
    //Our json is in lowcaps, so we need to save our search in lowcaps too.
    const input = document.getElementById('conditionInput').value.toLowerCase();
    //We turn the  result div into a variable to 
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    //Fetching the JSON data
    fetch('health_analysis.json')
    //The way fetching JSON works is linear, so we only need to use .then(data) to include the result from .then(response)
      .then(response => response.json())
      .then(data => {
        const condition = data.conditions.find(item => item.name.toLowerCase() === input);
        //If the result of the fetch is not empty, it will fill the information about the condition found
        if (condition) {
            //join is used to declare that each value of the key is joined by the element we specify.
          const symptoms = condition.symptoms.join(', ');
          const prevention = condition.prevention.join(', ');
          const treatment = condition.treatment;
          resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
          resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;
          resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
          resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
          resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      //We include a catch error for any anomaly occurring in the fetching of our data.
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
  //An event listener associated to the button to initiate the condition searching.
    btnSearch.addEventListener('click', searchCondition);