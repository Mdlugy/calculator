
var i = 1
function calculate() {
    if (workingString == "") { workingString = "0" }
    document.getElementById("historyrows").innerHTML += "<div id = history" + i + " onclick = (this.id)>" + workingString + "</div>"
    i++
    if (workingString[0] == "0") {

        workingString = workingString.substring(1)
        console.log(workingString)
    }
    workingString = eval(workingString)
    document.getElementById("display").innerHTML = eval(workingString)
    workingString = ""

}
var workingString = ""
var isTwoOP = false
function press(num) {
    if (workingString == '0' && num == '0') { workingString == "" }
    else { workingString += num }
    document.getElementById("display").innerHTML = workingString
    isTwoOP = false

}
function setOP(op) {
    if (isTwoOP == true) { return }
    isTwoOP = true
    // if (workingString == "") { workingString = "" }
    workingString += op
    document.getElementById("display").innerHTML = workingString
}
function clr() {
    workingString = ""
    document.getElementById("display").innerHTML = workingString
}