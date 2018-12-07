
(fetch('http://localhost:8000/api/v1/artisans')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson.data);
        displayData(myJson.data);
        deleteData();
        updateData();
        // location.reload();
    })
)();

const displayData = (data) => {
    const table = document.querySelector('table');
    data.forEach(datum => {
        let row =document.createElement('tr');
        row.setAttribute("id", datum._id);
        let cellName = document.createElement('td')
        cellName.textContent = `${datum.firstName}, ${datum.lastName}`;
        /* let cellOccupation = document.createElement('td')
        cellOccupation.textContent = datum.occupation;
        let cellPhoneNumber = document.createElement('td')
        cellPhoneNumber.textContent = datum.phoneNumber; */
        let cellLocation = document.createElement('td')
        cellLocation.textContent = datum.location; 
        // let deleteCell = document.createElement('td')
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete");
        // deleteCell.appendChild(deleteButton);
        deleteButton.textContent = "Delete";
        let updateCell = document.createElement('td')
        let updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.setAttribute("class", "update")
        // updateCell.appendChild(updateButton)
        
        row.appendChild(cellName);
        /* row.appendChild(cellOccupation)
        row.appendChild(cellPhoneNumber) */ 
        row.appendChild(cellLocation)
        row.appendChild(deleteButton);
        row.appendChild(updateButton);
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
        fetch('http://localhost:3000/api/v1/artisans', {
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

function deleteData() {
    console.log("Hello")
    const deleteBtns = document.querySelectorAll(".delete");

    deleteBtns.forEach(button => {
        button.addEventListener("click", function() {
            console.log("Hello!")
            const parentId = this.parentElement.id;
            console.log(parentId)
            const url = `http://localhost:8000/api/v1/artisans/${parentId}`;
            fetch(url, {
                method: "DELETE",
                mode:  "cors",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
            })
        })
    })
}

function updateData() {
    const updateBtns = document.querySelectorAll(".update");
    const updateForm = document.querySelector("#update-form");
    const updateButton2= document.querySelector("#update-btn");
    const updateInput = document.querySelector("#update-location")
    

    updateBtns.forEach(button => {
        button.addEventListener("click", function() {
            console.log("Hello!")
            const parentId = this.parentElement.id;
            console.log(parentId);
            updateForm.style.display = "block";
            updateButton2.addEventListener('click', function(e) {
                e.preventDefault();
                const data = {
                    location : updateInput.value,
                }
                console.log(updateInput.value)
                fetch(`http://localhost:8000/api/v1/artisans/${parentId}`, {
                        method: "PUT",
                        // mode: "cors",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                    .then((response) => response.json)
                    .then((myJson) => {
                        console.log(myJson);
                        para.textContent = "Successfully Updated details"
                    })
                    .catch((err) => {`Error: ${err}`})
            })

        })
    })
}

