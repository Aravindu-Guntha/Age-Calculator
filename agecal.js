

function calculateage(){
    // to get the todays date
    const today = new Date();
    // to get the input from the user and when user enters tee input this strores as string because we use text ad input
    const birthdateinput=document.getElementById("birthdate").value;
    //the output of the above line will be string an it converts into array to get the date month and year seperately by using the below line
    const birthparts=birthdateinput.split("-");
    const birthday=birthparts[0];
    const birthmonth=birthparts[1]-1; // here the js takes month starting from 2 thats why we put -1
    const birthyear=birthparts[2];
    // creating object by taking above day month year
    const birthDate = new Date(birthyear,birthmonth,birthday);

    // to check if the input is in the form of dateofbirth or not to check this we use helper function
    const isValidDate =(date) =>{
        return (
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );
    };
    // checking if the text is dateof birth format or characters of string , the above code gives you true or false  
    if (!isValidDate(birthDate)){ // executes when the dateof birth is not valid by calling above isvalidDate helper function
        alert("Invalid Date Format: Please Enter a valid DD-MM-YYYY Format");
        return;
    }

    // if true we show the result container with result
    const ageinmilliseconds=today-birthDate;
    const ageinsconds=Math.floor(ageinmilliseconds/1000);
    const ageinminutes=Math.floor(ageinsconds/60);
    const ageinhours=Math.floor(ageinminutes/60);
    const ageindays=Math.floor(ageinhours/24);
    const ageinweeks=Math.floor(ageindays/7);
    const ageinmonths=Math.floor(ageindays/30.436875); // here we use approximate float value because some months have 31 and 30 days
    const ageinyears=Math.floor(ageindays/365.25) // here also leap year has 366 days and some years has 365 days only so we use approximate value

    const resultcontainer=document.getElementById("resultcontainer");
    const result=document.getElementById("result");

    result.innerHTML=`
            <div class="result-item">
                <h3>Age:</h3>
                <p>${ageinyears} Years ${ageinmonths % 12} Months ${ageindays % 30} Days</p>
            </div>
            <div class="result-item">
                <h3>Months Passed:</h3>
                <p>${ageinmonths} Months</p>
            </div><div class="result-item">
                <h3>Weeks Passed:</h3>
                <p>${ageinweeks} Weeks</p>
            </div><div class="result-item">
                <h3>Days Passed:</h3>
                <p>${ageindays} Days </p>
            </div><div class="result-item">
                <h3>Hours Passed:</h3>
                <p>${ageinhours} Hours</p>
            </div><div class="result-item">
                <h3>Minutes Passed:</h3>
                <p>${ageinminutes} Minutes</p>
            </div><div class="result-item">
                <h3>Seconds Passed:</h3>
                <p>${ageinmilliseconds} Seconds</p>
            </div></>
    `;

    resultcontainer.style.display = "block";
}


const agecalculatorform = document.getElementById("agecalculator");
agecalculatorform.addEventListener("submit",(event) =>{
    event.preventDefault(); // prevents page reload
    calculateage();
});

