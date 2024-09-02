
const validate=(email,password,fullName)=>{

   

    const emailValid = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const  passwordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)

   // if(fullName!=null){
   // if(fullName.length===0) return "Invalid Name"}

    if(!emailValid) return "Email Id Not Valid"
    if(!passwordValid) return "Password Not Valid"

    return null;

}

export default validate;