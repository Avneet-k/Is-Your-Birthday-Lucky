const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNo = document.querySelector("#lucky-no");
const checkBtn = document.querySelector("#btn-check");
const output = document.querySelector("#txtarea");

checkBtn.addEventListener("click",() =>{
    var dob = dateOfBirth.value;
    var LuckyNo = luckyNo.value;
    dob = dob.replaceAll("-","");
    let sum = 0;
    for (let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));      
    }
    console.log(sum);
    // return sum;   
    if ( sum % LuckyNo === 0){
        output.innerText =`YAY!🥳 Your Birthday is Lucky!!!🎉🎉✨🎊🎉🎉`
        // console.log("YAY!🥳 Your Birthday is Lucky!!!");
    }else{
        output.innerText = "Your Bithday is not Lucky🥺 but YOU ARE🙌!!"
        // console.log("Your Bithday is not Lucky🥺 but YOU ARE🙌!!");
    }


})