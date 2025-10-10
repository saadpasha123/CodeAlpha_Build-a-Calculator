const display = document.getElementById('display');
function appendToDisplay(input) {
    display.value += input; 
}
function clearDisplay() {
    display.value = ""; 
}
function answer() {
    try{
    display.value = eval(display.value); 
        }
        catch (e) {
        display.value = "Error";
    }
}