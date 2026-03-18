let input = document.getElementById('inputBOX');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            // Calculate and show the result
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } 
        else if (value == 'AC') {
            // Clear the whole screen
            string = "";
            input.value = string;
        } 
        else if (value == 'DEL') {
            // Remove just the last number
            string = string.toString().substring(0, string.toString().length - 1);
            input.value = string;
        } 
        else {
            // Add the clicked number/operator to the screen
            string += value;
            input.value = string;
        }
    })
})