// U99350821

// This prevents the script from running before the DOM has loaded
document.addEventListener("DOMContentLoaded", (event) => {  

    document.getElementById("registrationForm").addEventListener("submit", (event)=>{
        event.preventDefault()  // Stops default form submission

        const firstName = document.getElementById("firstName").value 
        const lastName = document.getElementById("lastName").value
        const emailAddress = document.getElementById("emailAddress").value
        const date = document.getElementById("date").value                      // variables to receive inputs from form submission
        const vegetarian = document.getElementById("vegetarian").checked        // sees if checkboxes are checked or not 
        const nonVegetarian = document.getElementById("nonVegetarian").checked
        const vegan = document.getElementById("vegan").checked                  

        document.getElementById("registrationSubmission").innerHTML = `<h3>Registration Completed!</h3> 
            <b>First Name:</b> ${firstName} <br>
            <b>Last Name:</b> ${lastName} <br>
            <b>Email Address:</b> ${emailAddress} <br>
            <b>Date:</b> ${date} <br>
            <b>Meal Preferences:</b><br>
            Vegetarian: ${vegetarian} <br>
            Non-Vegetarian: ${nonVegetarian} <br>
            Vegan: ${vegan} <br>
            `                                                       // inputs in HTML 
        document.getElementById("registrationForm").reset()         // opens values in the form
    }) 
})
