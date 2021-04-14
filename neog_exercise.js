const adding = (num1,num2,num3,num4,num5) => {

    var x =  num1+num2+num3+num4+num5
    console.log(x)
}



const oddEven = () =>{

    var x = prompt("Enter a number")
    x = Number(x)

    if(x%2==0){
        console.log("Even number")
    }
    else{
        console.log("Odd number")
    }
    }
const larger = (num1,num2) => {

    if(num1>num2){
        console.log("No.1 is greater")
    }
    else{
        console.log("No.2 is greater")
    }

}

const largerThree = (num1,num2,num3) => {

    if(num1>num2 && num1 > num3){
        console.log("No.1 is greater=", num1)
    }

    if(num2>num3 && num2 > num1){
        console.log("No.2 is greater=", num2)
    }
    else{
        console.log("No.3 is greater=", num3)
    }

}

const SmallerThree = (num1,num2,num3) => {

    if(num1<num2 && num1 < num3){
        console.log("No.1 is Smaller=", num1)
    }

    if(num2<num3 && num2 < num1){
        console.log("No.2 is Smaller=", num2)
    }
    if(num3<num1 && num3<num2) {
        console.log("No.3 is Smaller=", num3)
    }

}

const monthDays = () =>{

    month = prompt("Enter month")

    if(month == 'January' || month == 'March' ||month == 'May' ||month == 'July' ||month == 'August' ||month == 'October' || month == 'December'){
    console.log("This month has 31 days");
    }
    else{
        console.log("This month has 30  days");
    }
}


const fizzBuzz = () => {

    list = []
    for (i=1;i<101;i++){
        
        if (i%3==0 && i%5==0){
            list.push("FizzBuzz")
            continue
        }
        if (i%3==0){
            list.push("Fizz")
            continue
        }
        if (i%5==0){
            list.push("Buzz")
            continue
        }

        else{
        list.push(i)
        }
    }
    console.log(list)
}

const starPattern =  (num) => {
    for(var i=1;i<=num;i++){
        for(var j=1;j<=i;j++){
            document.write("*")
        }
        document.write("<br>")
        }
}

const table = () => {

    var tableLength = prompt("Enter the length of the table");
    tableLength = Number(tableLength)
    for (var i=1;i<=tableLength;i++){
        tables = tableLength*i;
        console.log(tables);
    }
}

const fibonacci = () => {
    
    var zero = 0
    var oldNum = 1;
    var newNum=0;
    document.write(zero,",",oldNum,",")
    for(i=1;i<=50;i++){
        newNum = zero +oldNum;
        document.write(newNum,",")
        zero = oldNum;
        oldNum = newNum;
        }
}

const factorial = (lengthOfFactorial) => {

    var x = 1;

    for (i=lengthOfFactorial;i>0;i--){

        x = x*i;
    }
    console.log("factorial of ",lengthOfFactorial,"is:",x)
}

const primeNo = (num) => {

    var m = num/2;
    var flag = 0
    if (m%2==0){
        flag = 1
    }
    else{
        flag = 0
    }
    if (flag = 0){
        console.log("prime no.")
    }
    else {
        console.log("Not a prime no.")
    }
}


const noOfWords =  () => {
    var x = prompt();
    var pos = x.split(" ");
    // pos.length;
    // console.log(x)
    console.log("No of words = ",pos.length)
}


const arrLen = (arr) => {
    return arr.length
}

const posIndex = (arr,num) => {

    return arr.indexOf(num)
}

const repNum = (arr,numToBeReplaced,numReplacedBy) =>{

    var y = arr.indexOf(numToBeReplaced);
    arr[y] = numReplacedBy;
    return arr
}

const concatArrays = (arr1,arr2) => {

    return arr1.concat(arr2);

}

const largerArray = (...args) => {
    // ...args is rest parameters, add as many arguments as u want
    var array = args;
    console.log(array)
    var largestNum = array[0]
    for(i=1;i<array.length;i++){

        if(largestNum<array[i]){
            largestNum = array[i]
            // console.log(largestNum)
        }
    }
    return largestNum
    // console.log(largestNum)
}

const ceaserCipher = (keyWord,code) => {

    // console.log((keyWord.length))
    var currentChar;
    encodedArray = []
    for(i=0;i<keyWord.length;i++){
        currentChar = keyWord.charCodeAt(i);
        currentChar+=code; 
        encoded = String.fromCharCode(currentChar)
        encodedArray.push(encoded)
    }    
    encodedArray = encodedArray.join('')
    console.log(encodedArray)  

}

const upperCase = (sentence) => {
    
    sentence = sentence.split(" ");
    console.log(sentence)
    sentArray = []
    // var newSent;
    for (i=0;i<sentence.length;i++){

        newSent = sentence[i][0].toUpperCase() +sentence[i].substring(1)
        sentArray.push(newSent)    
    }
    console.log(sentArray.join(" "));
    return sentArray.join(" ")
}

const reverseString = (sentence) => {
    sentence = sentence.split(" ");
    console.log(sentence)
    sentArray = []
    for (i=0;i<sentence.length;i++){

        currentWord = sentence[i];
        currentWord = currentWord.split("");
        currentWord = currentWord.reverse();
        currentWord = currentWord.join("")
        sentArray.push(currentWord);
    }
    return sentArray.join(" ");
}

const sumN = (num) => {

    var total = 0;
    total = num*(num+1)/2;    
    // console.log(total)
    return total
}

const sumString = (numString) =>{

    numString = String(numString)
    lst = numString.split("");
    var currentNum = 0;
    var sum = 0;
    for (let i = 0;i < lst.length;i++) {
        currentNum = Number(lst[i]);
        sum += currentNum;
        // console.log(currentNum);
    }
    return sum
}

const reverseNumber = (numString) => {

    var num = 0;
    numString = String(numString)
    num = numString.split("");
    num = num.reverse();
    num = num.join("");
    num = Number(num);
    return num;
}

const rightShift = (numString,shiftBy) => {

    numString = String(numString)
    var lst = numString.split("")
    var tempLst = lst

    for(var i=0;i<tempLst.length;i++){

        tempLst[i] =lst[i+shiftBy]
        if (i+shiftBy < tempLst.length){
            lst[i+shiftBy-1] = lst[i]
        } 
        console.log(tempLst)
    }
    return tempLst
}

const BinHexOct = (number,baseNumber) =>{

    number = parseInt(number);
    var msg = "";
    if (baseNumber == 2) {
    var result = number.toString(2)
        msg ="Binary Conversion = "
    }
if (baseNumber == 8) {
    var result = number.toString(8)
    result = result.toUpperCase()
    msg ="Octal Conversion = "
    }
if (baseNumber == 16) {
    var result = number.toString(16)
    result = result.toUpperCase()
    msg ="Hexa Conversion = "
    }
else{
    console.log("Enter a number from 2,8 or 16")
}
console.log(msg + result)
return result
}

const arrSum = (numArr) => {
    var sum = 0;

    for(i=0;i<numArr.length;i++){
        sum += numArr[i]
    }
    return sum
}

const arrAvg = (numArr) => {
    var sum = 0;
    
    for(i=0;i<numArr.length;i++){
        sum += numArr[i]
    }
    return sum/numArr.length;
}

const maxMin = (...arg) => {
    const min =  Math.min(...arg)
    const max = Math.max(...arg)
    return "min = " + min + "," +"max = " + max
}

const vowels = (str)=> {
    var vowel = ["a","e","i","o","u"]
    var cnt = 0
    str = str.split("")
    for(i=0;i<str.length;i++){
        for(j=0;j<vowel.length;j++){
            if(str[i] == vowel[j]){
                cnt++;
                console.log("Vowel found");
            }
        }
    }
    var consonents =  str.length-cnt;
    return "Vowel = " + cnt + ",Consonents = " + consonents;

}
