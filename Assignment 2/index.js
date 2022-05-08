function validateForm(){
    const name =document.myForm.name.value;
    const email=document.myForm.email.value;
    const phNumber=document.myForm.phNumber.value;
    
    if(validateName(name)===false){
    alert("Name can only contain alphabets");
}
if(validateEmail(email)===false){
    alert("Please Enter valid email");
}
if(validateNumber(phNumber)===false){
    alert("Please enter a valid phone Number");
}
else{
    addToTable(name,email,phNumber);
}
}
function validateName(name){
    return /^[A-Za-z ]+$/.test(name);
}
function validateEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
function validateNumber(phNumber){
    return /^[789][0-9]{9}$/.test(phNumber);
}
function addToTable(name,email,phNumber){
    
    alert(name + email+phNumber)
}
