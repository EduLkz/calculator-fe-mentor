var textAreaValue = "";
var textAreaElement;

function AddChar(charToAdd){
    if(charToAdd == undefined || charToAdd == null || charToAdd == ""){
        return;
    }

    if(textAreaValue != undefined)
        textAreaValue += charToAdd.toString()
    else{
        textAreaValue = charToAdd.toString()
    }

    UpdateText();
}

function DelChar(){
    if(textAreaValue == undefined || textAreaValue == null || textAreaValue == ""){
        return;
    }

    if(textAreaValue.length > 1){
        textAreaValue = textAreaValue.substring(0, textAreaValue.length - 1);
    }else{
        textAreaValue = ''
    }
    UpdateText();
}

function UpdateText(){
    if(textAreaElement == null || textAreaElement == undefined){
        textAreaElement = document.getElementById('text-area-value');
    }

    textAreaElement.value = textAreaValue.toString();
}

function Reset(){
    textAreaValue = "";
    UpdateText();
}

function Result(){
    if(textAreaValue == undefined || textAreaValue == null || textAreaValue == ""){
        return;
    }

    try {
        let numbers = eval(textAreaValue);
        textAreaValue = numbers;
        UpdateText();    
    } catch (error) {
        
    }

}