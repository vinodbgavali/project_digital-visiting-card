toggleFlag = 0;
const toggleMenu = () =>{
    const menu = document.querySelector(".left_section_bottom");
    const rightSection = document.querySelector(".right_section");


    if(toggleFlag){
       menu.style.left = "-80px";
       rightSection.style.marginLeft = "10px";
       rightSection.style.width = "97%";
        console.log(rightSection);
        toggleFlag = 0;
    }
    else{
        menu.style.left= "10px";
        rightSection.style.marginLeft = "100px";
        rightSection.style.width = "80%";
        console.log(rightSection);
        toggleFlag = 1;
    }

}