
//Change Color for sub headings -----------------------------------------------------------------------------------
//Change color for sunheading 1
document.addEventListener('DOMContentLoaded', (event) => {
    const textInput = document.getElementById('textInput');
    const subheading = document.querySelector('.subheading');

    textInput.addEventListener('focus', () => {
        subheading.classList.add('focused');
    });

    textInput.addEventListener('blur', () => {
        subheading.classList.remove('focused');
    });
});

//Change color for sunheading 2
document.addEventListener('DOMContentLoaded', (event) => {
    const numberInput = document.getElementById("numberInput");
    const subhead2 = document.querySelector('.subheadTwo');

    numberInput.addEventListener('focus', () => {
        subhead2.classList.add('focused');
    });

    numberInput.addEventListener('blur', () => {
        subhead2.classList.remove('focused');
    });
});

//Change color for sunheading 3
document.addEventListener('DOMContentLoaded', (event) => {
    const textInputEx = document.getElementById('textInputEx');
    const subhead3 = document.querySelector('.subheadThree');

    textInputEx.addEventListener('focus', () => {
        subhead3.classList.add('focused');
    });

    textInputEx.addEventListener('blur', () => {
        subhead3.classList.remove('focused');
    });
});

//Change color for sunheading 4
document.addEventListener('DOMContentLoaded', (event) => {
    const numberInputEx = document.getElementById("numberInputEx");
    const subhead4 = document.querySelector('.subheadFour');

    numberInputEx.addEventListener('focus', () => {
        subhead4.classList.add('focused');
    });

    numberInputEx.addEventListener('blur', () => {
        subhead4.classList.remove('focused');
    });
});


// Get meal section from HTML
const mealSection = document.getElementById("mealSection");

// Get total calories from HTML
const totalCal = document.getElementById("totalCal");

// Create a variable to keep track of total calories
var totalCalValue = 0;

// Function to add a new meal
function addMeal() {
    // Get input values
    const mealName = document.getElementById("textInput");
    const mealCal = document.getElementById("numberInput");

    var mealNameValue = mealName.value;
    var mealCalValue = mealCal.value;

    // Check if both inputs have a value
    if (mealNameValue === "" || mealCalValue === "") {
        // Alert user both input need value
        alert('Both meal and Calorie section need to be filled in');
        return;
    } else {
        // Inner HTML for new div
        const AddMealHtml = `<h3 class="name">${mealNameValue}</h3> <h3 class="calories">${mealCalValue} kcal</h3>`;

        // Create new div and assign it the meal class and inner HTML value
        const newMeal = document.createElement("div");
        newMeal.classList.add("meal");
        newMeal.innerHTML = AddMealHtml;

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function() {
            // Remove the meal from the meal section
            mealSection.removeChild(newMeal);

            // Update total calories
            totalCalValue -= Number(mealCalValue);
            totalCal.innerText = totalCalValue;
        };

        // Create edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");
        editButton.onclick = function() {
            // Create input fields for editing
            const nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.value = mealNameValue;
            nameInput.classList.add("edit-name-input");

            const calInput = document.createElement("input");
            calInput.type = "number";
            calInput.value = mealCalValue;
            calInput.classList.add("edit-cal-input");

            // Create save button
            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            saveButton.classList.add("save-btn");

            // When save button is clicked, save the changes
            saveButton.onclick = function() {
                // Update the meal name and calories
                const newName = nameInput.value;
                const newCal = Number(calInput.value);

                // Update total calories
                totalCalValue = totalCalValue - Number(mealCalValue) + newCal;
                totalCal.innerText = totalCalValue;

                // Update the meal HTML
                newMeal.innerHTML = `<h3 class="name">${newName}</h3> <h3 class="calories">${newCal} kcal</h3>`;
                newMeal.appendChild(editButton);
                newMeal.appendChild(deleteButton);

                // Set new values
                mealNameValue = newName;
                mealCalValue = newCal;
            };

            // Clear the meal div and append the input fields and save button
            newMeal.innerHTML = "";
            newMeal.appendChild(nameInput);
            newMeal.appendChild(calInput);
            newMeal.appendChild(saveButton);
        };

        // Append delete and edit buttons to the new meal div
        newMeal.appendChild(editButton);
        newMeal.appendChild(deleteButton);

        // Append the new meal div to the meal section
        mealSection.appendChild(newMeal);

        // Update total calories
        totalCalValue += Number(mealCalValue);
        totalCal.innerText = totalCalValue;

        // Reset input values
        mealCal.value = "";
        mealName.value = "";
    }
}

//Adding Exercise---------------------------------------------------------------------------------------

// Function to add a new exercise
function addExercise() {
    // Get input values
    const exerciseName = document.getElementById("textInputEx");
    const exerciseCal = document.getElementById("numberInputEx");

    var exNameValue = exerciseName.value;
    var exCalValue = exerciseCal.value;

    // Check if both inputs have a value
    if (exNameValue === "" || exCalValue === "") {
        // Alert user both input need value
        alert('Both Exercise and Calorie section need to be filled in');
        return;
    } else {
        // Inner HTML for new div
        const AddExerciseHtml = `<h3 class="name">${exNameValue}</h3> <h3 class="calories">${exCalValue} kcal</h3>`;

        // Create new div and assign it the exercise class and inner HTML value
        const newEx = document.createElement("div");
        newEx.classList.add("exercise");
        newEx.innerHTML = AddExerciseHtml;

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function() {
            // Remove the exercise from the exercise section
            mealSection.removeChild(newEx);

            // Update total calories
            totalCalValue += Number(exCalValue);
            totalCal.innerText = totalCalValue;
        };

        // Create edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");
        editButton.onclick = function() {
            // Create input fields for editing
            const nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.value = exNameValue;
            nameInput.classList.add("edit-name-input");

            const calInput = document.createElement("input");
            calInput.type = "number";
            calInput.value = exCalValue;
            calInput.classList.add("edit-cal-input");

            // Create save button
            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            saveButton.classList.add("save-btn");

            // When save button is clicked, save the changes
            saveButton.onclick = function() {
                // Update the exercise name and calories
                const newName = nameInput.value;
                const newCal = Number(calInput.value);

                // Update total calories
                totalCalValue = totalCalValue + Number(exCalValue) - newCal;
                totalCal.innerText = totalCalValue;

                // Update the exercise HTML
                newEx.innerHTML = `<h3 class="name">${newName}</h3> <h3 class="calories">${newCal} kcal</h3>`;
                newEx.appendChild(editButton);
                newEx.appendChild(deleteButton);

                // Set new values
                exNameValue = newName;
                exCalValue = newCal;
            };

            // Clear the exercise div and append the input fields and save button
            newEx.innerHTML = "";
            newEx.appendChild(nameInput);
            newEx.appendChild(calInput);
            newEx.appendChild(saveButton);
        };

        // Append delete and edit buttons to the new exercise div
        newEx.appendChild(editButton);
        newEx.appendChild(deleteButton);

        // Append the new exercise div to the exercise section
        mealSection.appendChild(newEx);

        // Update total calories
        totalCalValue -= Number(exCalValue);
        totalCal.innerText = totalCalValue;

        // Reset input values
        exerciseCal.value = "";
        exerciseName.value = "";
    }
}
