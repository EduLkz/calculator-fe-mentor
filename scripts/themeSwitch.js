function split(str, index) {
    const result = [str.slice(0, index), str.slice(index)];
  
    return result;
  }


function switchTheme(element, value){
    var oldlink = document.getElementsByTagName("link");
    let checks = document.getElementsByClassName("switch-input");
    
    for (let i = 0; i < checks.length; i++) {
        const e = checks[i];
        if(e != element){
            e.checked = false;
        }
    }

    for (let i = 2; i < 5; i++) {
        if(i == value+1){
            oldlink[i].disabled = false;
        }else{
            oldlink[i].disabled = true;
        }
        
    }
    
    return;
    let changeTheme = document.getElementsByClassName("theme-change");

    for (let i = 0; i < changeTheme.length; i++) {
        let e = changeTheme[i].classList[0].toString();
        if(!isNaN(e[e.length-1])){
            e = e.substring(0, e.length - 1);
        }
        

        if(value == 1){
            value = ''
        }


        changeTheme[i].className = e + value.toString() + " theme-change"      
    }
    
}