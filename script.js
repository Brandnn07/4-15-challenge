var total = 500
// var newTotal

function init () {
    var input = prompt("Would you like to deposit money or withdraw money? Please say either 'deposit', 'withdraw' or 'total'");
    if ( input === "deposit"){
        var inputD = parseInt(prompt("How much would you like to deposit?"));
        var newTotal = total + inputD;
        alert(`Your new balance is ${newTotal}`);
        if (newTotal > 0) {
            alert("YOU GOT MONEEYYYYYY! Let me hold some");
        } else {
            alert("Low funds :(")
        }
    } else if ( input === "withdraw") {
        var inputW = parseInt(prompt("How much would you like to withdraw?"));
        var newTotal = total - inputW
        alert(`Your new balance is ${newTotal}`);
        if (newTotal > 0) {
            alert("YOU GOT MONEEYYYYYY! Let me hold some");
        } else {
            alert("Low funds :(")
        }
    } else if (input === "total") {
        alert(total)
    }
    init();
}
 init();