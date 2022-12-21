    const captcha = document.querySelector(".captcha"),
        reloadBtn = document.querySelector(".reload-btn"),
        inputField = document.querySelector(".input-area input"),
        checkBtn = document.querySelector(".check-btn"),
        statusTxt = document.querySelector(".status-text");

    //storing all captcha characters in array
    let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let check = 0;
    var kars;
    function getCaptcha() {
        if (check === 2) {
            for (let i = 0; i < 1; i++) { //getting 6 random characters from the array
                let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
                captcha.innerText += ` ${randomCharacter} + ${(randomCharacter*12) / 3}`; //passing 6 random characters inside captcha innerText
                //captcha.innerText +=randomCharacter + (randomCharacter*12) / 3;
                kars = randomCharacter + (randomCharacter*12) / 3;
                console.log(kars);
                
            
            }
        } else {
            for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
                let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
                captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
            }
        }
    }
    getCaptcha(); //calling getCaptcha when the page open
    //calling getCaptcha & removeContent on the reload btn click
    reloadBtn.addEventListener("click", () => {
        removeContent();
        getCaptcha();
    });

    checkBtn.addEventListener("click", e => {
        e.preventDefault(); //preventing button from it's default behaviour
        statusTxt.style.display = "block";
        //adding space after each character of user entered values because I've added spaces while generating captcha
       // let inputVal = inputField.value;//.split('').join(' ');
        let inputVal;
        if (check == 2){
             inputVal = inputField.value;//.split('').join(' ');
             console.log(inputVal);
        }
        if (check == 0){
            inputVal = inputField.value.split('').join(' ');
             console.log(check);
        }
        console.log(inputVal);
        if (check == 2){
            if (inputVal == kars){
                statusTxt.style.color = "#4cd619";
                statusTxt.innerText = "Nice! You don't appear to be a robot.";
            }else{
                statusTxt.innerText = "Captcha not matched. Please try again!";
            }
        }
        else
            if (inputVal == captcha.innerText ) { //if captcha matched
            statusTxt.style.color = "#4db2ec";
            statusTxt.innerText = "Nice! You don't appear to be a robot.";
//            setTimeout(() => { //calling removeContent & getCaptcha after 2 seconds
//                removeContent();
//                getCaptcha();
//            }, 2000);
        } else {
            check = 2;
            //statusTxt.innerText = "Captcha not matched. Please try again";
            allCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            statusTxt.style.color = "#ff0000";
            statusTxt.innerText = "Captcha not matched. Please try again on new switch";
        }
        
        
        
        
        
    });

    function removeContent() {
        inputField.value = "";
        captcha.innerText = "";
        statusTxt.style.display = "none";
    }
