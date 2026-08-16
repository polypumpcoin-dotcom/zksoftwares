const calculate = () => {
    let chemistry = document.querySelector("#chemistry").value;
    let hindi = document.querySelector("#hindi").value;
    let maths = document.querySelector("#maths").value;
    let phy = document.querySelector("#phy").value;
    let grades = "";

    let totalgrades =
        parseFloat(chemistry) +
        parseFloat(hindi) +
        parseFloat(maths) +
        parseFloat(phy);

    let percentage = (totalgrades / 400) * 100;
    if (percentage >= 80) {
        grades = "A+";
    } else if (percentage >= 70 ) {
        grades = "A";
    } else if (percentage >= 60) {
        grades = "B";
    } else if (percentage >= 50) {
        grades = "C";
    } else {
        grades = "F";
    }



   

    if (chemistry == "" || hindi == ""
        || maths == "" || phy == "") {
        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
    } else {
        if (percentage >= 50) {
            document.querySelector(
                "#showdata"
            ).innerHTML =
                ` Out of 400 your total is  ${totalgrades} 
          and percentage is ${percentage}. <br> 
          Your grade is ${grades}. You are Pass. `;
        } else {
            document.querySelector(
                "#showdata"
            ).innerHTML =
                ` Out of 400 your total is  ${totalgrades} 
          and percentage is ${percentage}. <br> 
          Your grade is ${grades}. You are Fail. `;
        }
    }
};