toggleFlag = 0;
const toggleMenu = () =>{
    const menu = document.querySelector(".left_section_bottom");
    const rightSection = document.querySelector(".right_section");


    if(toggleFlag){
       menu.style.left = "-125px";
       rightSection.style.marginLeft = "0";
       var scrSize = screen.width+100;
        rightSection.style.width =  scrSize+"px";
        console.log(rightSection);
        toggleFlag = 0;
    }
    else{
        menu.style.left= "10px";
        rightSection.style.marginLeft = "105px";
    var scrSize = screen.width-100;
    rightSection.style.width =  scrSize+"px";
        
        toggleFlag = 1;
    }

}


const form = document.querySelector('#newform');
const fullname = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');


newform.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInput();
});


const checkInput = () => {
    const nameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();
    console.log(nameValue,emailValue,subjectValue,messageValue);
    if(nameValue === "" ){
        setError(fullname,"Name cannot be Blank");
    }
   
    else{
        setSuccess(fullname)
    }

    if(emailValue === "" ){
        setError(email,"email cannot be Blank");
    }
   
    else if(!isEmail(emailValue)){
        setError(email,"email not valid");
    }

    else{
        setSuccess(email);
    }

    if(subjectValue === "" ){
        setError(subject,"subject cannot be Blank");
    }
   
    else{
        setSuccess(subject)
    }

    if(messageValue === "" ){
        setError(message,"Message cannot be Blank");
    }
   
    else{
        setSuccess(message)
    }
    
}


const setError = (labelFor, errMsg) =>{
    const form_group = labelFor.parentElement;
    const errorSpan = form_group.querySelector('.errorMsg');
    const icon = form_group.querySelector('.fa-exclamation-circle');
    form_group.className = "form_group error col-sm-9";
    errorSpan.innerText = errMsg;
}

const setSuccess = (labelFor) =>{
    const form_group = labelFor.parentElement;
    form_group.className = "form_group success col-sm-9";

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}





