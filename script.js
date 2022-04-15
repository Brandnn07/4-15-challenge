var total = 500
var newTotal

function init () {
    var input = prompt("Would you like to deposit money or withdraw money? Please say either 'deposit' or 'withdraw'");
    if ( input === "deposit"){
        var inputD = parseInt(prompt("How much would you like to deposit?"));
        let newTotal = total + inputD;
        alert(`Your new balance is ${newTotal}`);
        if (newTotal > 0) {
            alert("YOU GOT MONEEYYYYYY! Let me hold some");
        } else {
            alert("Low funds :(")
        }
    } else if ( input === "withdraw") {
        var inputW = parseInt(prompt("How much would you like to withdraw?"));
        let newTotal = total - inputW
        alert(`Your new balance is ${newTotal}`);
        if (newTotal > 0) {
            alert("YOU GOT MONEEYYYYYY! Let me hold some");
        } else {
            alert("Low funds :(")
        }
    }
    init();
}
 init();