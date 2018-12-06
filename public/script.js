
fetch('http://localhost:3000/')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson.data);
        displayData(myJson.data);
    });

const displayData = (data) => {
    const table = document.querySelector('table');
    data.forEach(datum => {
        let row =document.createElement('tr');
        let cellName = document.createElement('td')
        cellName.textContent = `${datum.firstName}, ${datum.lastName}`;
        let cellOccupation = document.createElement('td')
        cellOccupation.textContent = datum.occupation;
        let cellPhoneNumber = document.createElement('td')
        cellPhoneNumber.textContent = datum.phoneNumber;
        let cellLocation = document.createElement('td')
        cellLocation.textContent = datum.location;
        row.appendChild(cellName);
        row.appendChild(cellOccupation)
        row.appendChild(cellPhoneNumber)
        row.appendChild(cellLocation)
        table.append(row);
    });
}

function postInfo() {
    const submitBtn = document.querySelector('#submit-btn');
    const para = document.querySelector('p');
    
    
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const nameInput = document.querySelector('#first-name').value;
        const lastInput = document.querySelector('#last-name').value;
        const location = document.querySelector('#location').value;
        const occupation = document.querySelector('#occupation').value;
        const phoneNumber = document.querySelector('#phone-number').value;
        
        const data = {};
        data.firstname = nameInput;
        data.lastname = lastInput;
        data.location = location;
        data.occupation = occupation;
        data.phoneNumber = phoneNumber;

        console.log(data);
        fetch('http://localhost:3000/', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json)
        .then((myJson) => {
            console.log(myJson);
            para.textContent = "Successfully sent details"
        })
        .catch((err) => {`Error: ${err}`})
    })

}

postInfo();