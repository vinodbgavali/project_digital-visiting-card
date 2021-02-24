toggleFlag = 0;
const toggleMenu = () =>{
    const menu = document.querySelector(".left_section_bottom");
    const rightSection = document.querySelector(".right_section");
    const toggler = document.querySelector(".navbar-toggler");
    const togglerIcon = toggler.querySelector("i");

    // clear the form after error and coming back to contact us page

    // const form_group = document.querySelectorAll(".form_group");
    // form_group.forEach(e => {
    //     e.classList = "form_group";
    //     console.log(e);
    // });
    // end-  clear the form after error and coming back to contact us page





    if(screen.width<768){
        if(toggleFlag){
            menu.style.left = "-125px";
            rightSection.style.marginLeft = "0";
            var scrSize = screen.width+100;
                rightSection.style.width =  scrSize+"px";
                togglerIcon.classList = "fas fa-bars fa-2x";
                console.log(togglerIcon);
                toggleFlag = 0;
        }
        else{
                menu.style.left= "0px";
                rightSection.style.marginLeft = "110px";
            var scrSize = screen.width-110;
            rightSection.style.width =  scrSize+"px";
            togglerIcon.classList = "fas fa-times fa-2x";
            console.log(togglerIcon);
                toggleFlag = 1;
        }
    }
}


function myFunction() {
    document.getElementById("newform").reset();
    const form_group = document.querySelector('.form_group');
    form_group.className = "form_group col-sm-9";
    console.log(formGroup);

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
    const form_input = labelFor.parentElement;
    const errorSpan = form_input.querySelector('.errorMsg');
    const icon = form_input.querySelector('.fa-exclamation-circle');
    form_input.className = "form_group error";
    errorSpan.innerText = errMsg;
}

const setSuccess = (labelFor) =>{
    const form_input = labelFor.parentElement;
    form_input.className = "form_group success ";

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



// gallery display image in banner  

function expandImage(imgs) {
    var expandImg = document.getElementById("expandedImg");

    expandImg.src = imgs.src;
  
 
  }


  const clearForm = () =>
  {
    const form_group = document.querySelectorAll(".form_group");
    form_group.forEach(e => {
        e.classList = "form_group";
    });
  }



