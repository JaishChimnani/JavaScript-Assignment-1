var counter=1;

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault();
    document.myForm.name.value="";
document.myForm.email.value="";
document.myForm.phNumber.value=""; } 
form.addEventListener('submit', handleForm);
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
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phNumber", phNumber);

    // alert(localStorage.getItem("name"));
    

    var table=document.getElementById("table");
    var record=document.createElement("tr");
    record.innerHTML=`<tr>
    <td>${counter}</td>
    <td>${localStorage.getItem("name")}</td>
    <td>${localStorage.getItem("email")}</td>
    <td>${localStorage.getItem("phNumber")}</td>
</tr>`;
table.append(record);
counter++;
    // alert("name: "+name +" email: "+ email+" phone Number: "+phNumber)
}
function load(){
    console.log("loaded");
}