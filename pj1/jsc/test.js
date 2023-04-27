function printStringByChar(str) {
    for (let i = 1; i <= str.length; i++) {
      console.log(str.slice(0, i));
    }
}
function runPrintStringByChar() {
    const inputText = document.getElementById("input-text").value;
    printStringByChar(inputText);
}