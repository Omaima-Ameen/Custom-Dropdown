const selectBox = document.querySelector(".select-Box");
const SelectOption = document.querySelector(".select-Option");
const soValue = document.querySelector("#soValue");
const OptionSearch = document.querySelector("#optionSearch");
const Options = document.querySelector(".options");
const optionList = document.querySelectorAll(".options li");


SelectOption.addEventListener("click", function(){
    selectBox.classList.toggle("active");

    })

    optionList.forEach( function(optionListSingle) {
        optionListSingle.addEventListener("click", function(){
            text= this.textContent
            soValue.value = text;
            selectBox.classList.remove("active")
        })

    })


    OptionSearch.addEventListener("keyup", function(){
        var filter , i , li , textValue

        filter = OptionSearch.value.toUpperCase();
        li = Options.getElementsByTagName("li");
        for ( i=0;  i<li.length; i++){
            liCount = li[i];
            textValue = liCount.textValue || liCount.innerText;

            if(textValue.toUpperCase().indexOf(filter) > -1){
                li[i].style.display = "";
            }
            else{
                li[i].style.display = "none";
            }
        }
    })