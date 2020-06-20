// var fName=prompt("Enter First Name")
// var lName=prompt("Enter Last Name")
// document.write("FullNaame:"+fName+lName)

// var phone=prompt("Enter Mobile Model")

// document.write("My favorite phone is : "+phone)
// document.write("<br>Lengths of string is : "+phone.length)

// var con="Pakistani"
// document.write("String : "+con+"<br>")
// document.write("Index of 'n' : "+con.indexOf("n"))

// var con="Hello World"
// document.write("String : "+con+"<br>")
// document.write("Index of 'l' : "+con.lastIndexOf("l"))

// var con="Pakistani"
// document.write("String : "+con+"<br>")
// document.write("Index of 'n' : "+con.charAt(3))

// var fName=prompt("Enter First Name")
// var lName=prompt("Enter Last Name")
// document.write(fName.concat(lName))

// var city="Hyderabad"
// document.write("City:"+city+"<br>")
// city=city.replace("Hyder","Islam")
// document.write("After replacement:"+city+"<br>")


// var Message ="Ali and Sami are best friends. They play cricket and football together."
// document.write(Message+"<br>")
// Message=Message.replace("and","&")
// Message=Message.replace("and","&")
// document.write(Message+"<br>")


// var num="472"
// document.write("Value : "+num)
// document.write("<br>Type : "+typeof num)
// var num1=parseInt(num)
// document.write("<br>Value : "+num1)
// document.write("<br>Type : "+typeof num1)

// var inp=prompt("Enter ")
// inp1=inp.toUpperCase()

// document.write("User input: "+inp)
// document.write("<br>Upper Case: "+inp1)

// var inp=prompt("Enter ")
// var inpSmall=inp.toLowerCase()
// var chrCap=inpSmall.charAt(0)
// chrCap=chrCap.toUpperCase()
// var sep = inpSmall.split("")
// sep[0]=chrCap
// inpSmall=sep.join("")
// document.write(inpSmall)


// var inp=35.36
// inp = inp+""
// var sep = inp.split("")
// sep[2]=""
// joined=sep.join("")
// document.write("Number :"+inp+"<br>Result : "+joined)


// var user=prompt("Enter UserName ")
// var sep = user.split("")

// for(i=0;i<sep.length;i++){

//     if(sep[i]=="!"||sep[i]==","||sep[i]=="."||sep[i]=="@"){

//         alert("Enter valid Username")
//     }
// }

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput=prompt("Enter item for search")
// userInput=userInput.toLowerCase()
// var foun=false
// for(i=0;i<A.length;i++){

//     if(A[i]==userInput){

//         document.write(userInput+" is <b>available</b> at index "+i+" in our bakery")
//         foun=true
//     }
// }
// if(foun==false){

//     document.write("We are sorry."+userInput+" is <b>not available</b> in our bakery")
// }











// var pass=prompt("Enter password")
// var sep = pass.split("")

// var numcount=0
// var Calpacount=0
// var alpacount=0

// for(i=0;i<sep.length;i++){

//     document.write(splt)

//     }

// }

// if(sep.length>6){

//     if(numcount>0&&Calpacount>0||numcount>0&&alpacount>0){

//         if(sep[0]>=0&&sep[0]<=9){

//                 document.write("Password can not begin with a number")

//         }
//         else {
//             document.write("Password is correct")
//         }

//     }else{
//         document.write("Passwor must contain Alphabets and numbers")
//     }  
// }
// else{
//     document.write("Password to short")
// }








// var university = "University of Karachi";

// var sep = university.split("")

// for(i=0;i<sep.length;i++){

//     document.write(sep[i]+"<br>")
// }









// var userInput=prompt("Enter inputs")

// var sep = userInput.split("")

// document.write("User input : "+userInput+"<br> Last character of input : "+sep[userInput.length-1])



// var university = "The quick brown fox jumps over the lazy dog";

// var sep = university.split(" ")
// var count=0
// for(i=0;i<sep.length;i++){

//    if(sep[i]=="The"||sep[i]=="the"){

//     count=count+1
//    }
// }

// document.write("Text: "+university+"<br>There are "+count+" occurrences of word 'the'")








//             chp26-30



// var num =prompt("Enter Number")
// var roundoff=Math.round(num)
// var floor=Math.floor(num)
// var ceil= Math.ceil(num)
// document.write("number : "+num+"<br>round off value : "+roundoff+"<br>floor value : "+floor+"<br>ceil value : "+ceil)







// var num =prompt("Enter Number")
// var roundoff=Math.round(num)
// var floor=Math.floor(num)
// var ceil= Math.ceil(num)
// document.write("number : "+num+"<br>round off value : "+roundoff+"<br>floor value : "+floor+"<br>ceil value : "+ceil)





// var num =prompt("Enter Number")
// var abso=Math.abs(num)
// document.write("The absolute value of "+num+" is "+abso)






// document.write("random dice value : "+Math.floor(Math.random() * 7) )







// if(Math.floor(Math.random()*2)==0){

//     coin="Head"
// }else{

//     coin="Tail"
// }


// document.write("random dice value : "+coin )









//  document.write("random number between 1 and 100 : "+Math.floor(Math.random() * 101) )












// var weight = prompt("Enter Weight in kg")
// var splt = weight.split("");
// //document.write(splt.length)
// var nub=""
// for(i=0;i<splt.length;i++) {

//   if(splt[i]>=0&&splt[i]<=9||splt[i]=="."){

//       nub=nub+splt[i]
//   }

// }

// document.write("The weight of user is "+nub+" Kilograms")







// num=Math.floor(Math.random()*11)

// if(num==0){

//   num=1  
// }

// var guess=prompt("Enter a number between 1 to 10")

// if(guess==num){

//     alert("You Win")

// }else{

//     alert("Try again!")
// }







//chp 31-34




// var d = new Date()
// var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
// var days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]

// document.write(days[d.getDay()]+" "+months[d.getMonth()]+" "+d.getDate()+" "+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" GMT+0500 (PKT)")






// var d = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// document.write("Current Month: "+months[d.getMonth()])



// var d =new Date();
// var days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
// document.write("Today is "+days[d.getDay()])





// var d =new Date();
// if(d.getDay==0||d.getDay==6){

//     document.write("It’s Fun day")
// }







// var d =new Date();
// if(d.getDate<=15){

//     document.write("First fifteen days of the month")
// }else{

//     document.write("Last days of the month")
// }






// var d = new Date()
// var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
// var days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]

// document.write("Current Date: "+days[d.getDay()]+" "+months[d.getMonth()]+" "+d.getDate()+" "+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" GMT+0500 (PKT)")
// document.write("<br>Elapse milliseconds since January 1,1970: "+d.getTime())
// document.write("<br>Elapse Minutes since January 1,1970: "+Math.round(d.getTime()/3600))








// var d =new Date();
// if(d.getHours<=12){

//     document.write("Its AM")
// }else{

//     document.write("Its PM")
// }







// var d = new Date(2020,11,31)
// var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
// var days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]

// document.write("later Date: "+days[d.getDay()]+" "+months[d.getMonth()]+" "+d.getDate()+" "+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" GMT+0500 (PKT)")









// var month=5
// var date=18
// var year=2015

// var d = new Date(year,month,date)
// var d1 =new Date()


// var time=d1.getTime()-d.getTime()

// var days = (time / (60*60*24*1000))

// document.write(Math.floor(days)+" days have passed since 1st Ramadan,2015")









// var month=0
// var date=1
// var year=2015

// var d1 = new Date(year,month,date)
// var d =new Date()

// var time=d.getTime()-d1.getTime()
// var second = (time / (60*60))

// var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
// var days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]

// document.write("on refrence date  "+days[d.getDay()]+" "+months[d.getMonth()]+" "+d.getDate()+" "+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" GMT+0500 (PKT),<br>"+Math.floor(second)+" seconds had passed since the beginning of 2015")














// var d =new Date()

// var d1 = new Date(d.getFullYear(),d.getMonth(),d.getDate(),d.getHours()-1,d.getMinutes(),d.getSeconds())

// var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
// var days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]

// document.write("Current date : "+days[d.getDay()]+" "+months[d.getMonth()]+" "+d.getDate()+" "+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" GMT+0500 (PKT),<br>1 hour ago, it was "+days[d1.getDay()]+" "+months[d1.getMonth()]+" "+d1.getDate()+" "+d1.getFullYear()+" "+d1.getHours()+":"+d1.getMinutes()+":"+d1.getSeconds()+" GMT+0500 (PKT)")








// var age=prompt("Enter Your age")
// var ageI = parseInt(age)
// var d =new Date()

// document.write("Your age is "+age+"<br>Your birth year is "+(d.getFullYear()-ageI))











// var d =new Date()

// var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]


// var name=prompt("Name")
// var un=Math.random()*801
// var unit=un.toFixed(2)
// document.writeln("<h1>K-Electric Bill</h1>")
// document.write("Customer Name: "+name+"<br>Month: "+months[d.getMonth()]+"<br>Number of Units: "+unit+"<br>charges per unit: 16<br><br>")
// document.write("Net Amount Payable (Within Due Date):"+(16*unit)+"<br>Late payment surcharge: 350<br>Gross Amount Payable (after Due Date): "+(350+(unit*16)))







//chp35-38




// function nowdate() {

//     var d = new Date()
//     var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
//     var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]


//     return days[d.getDay()] + " " + months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " GMT+0500 (PKT)"

// }

// document.write(nowdate())








// function name(fName,lName){



//     return "Welcome "+fName+lName

// }

// var firstName=prompt("Enter firstname")

// var lastName=prompt("Enter lastname")

// document.write(name(firstName,lastName))











// function add(num1,num2){

//     Inum1 = parseInt(num1)
//     Inum2 = parseInt(num2)
//     return Inum1+Inum2

// }

// var numb1=prompt("Enter number1")

// var numb2=prompt("Enter number2")

// document.write(add(numb1,numb2))
























// function add(num1,num2){

//     Inum1 = parseInt(num1)
//     Inum2 = parseInt(num2)
//     return Inum1+Inum2

// }


// function sub(num1,num2){

//     Inum1 = parseInt(num1)
//     Inum2 = parseInt(num2)
//     return Inum1-Inum2

// }

// function mul(num1,num2){

//     Inum1 = parseInt(num1)
//     Inum2 = parseInt(num2)
//     return Inum1*Inum2

// }


// function div(num1,num2){

//     Inum1 = parseInt(num1)
//     Inum2 = parseInt(num2)
//     return Inum1/Inum2

// }


// var numb1=prompt("Enter number1")
// var op=prompt("Enter Operator")
// var numb2=prompt("Enter number2")

// if(op=="+"){

//     document.write(add(numb1,numb2))
// }else if(op=="-"){

//     document.write(sub(numb1,numb2))
// }else if(op=="*"){

//     document.write(mul(numb1,numb2))
// }else if(op=="/"){

//     document.write(div(numb1,numb2))
// }












// function sqrt(num1) {

//     Inum1 = parseInt(num1)
//     return Inum1 * Inum1
// }


// var numb1 = prompt("Enter number1")


// document.write(sqrt(numb1))











// function factorial(num){

//     if(num<=1){

//         return 1
//     }
//     else{
//         temp=num
//         var fct=1
//         for(i=0;i<num;i++){

//             fct=fct*temp
//             temp--

//         }
//         return fct
//     }

// }

// num=prompt("enter num")
// numI=parseInt(num)

// document.write(factorial(numI))










// function count(num1,num2){

//     var numb=[] 
//     temp=num1
//     for(i=0;i<num2-temp;i++){
//      numb[i]=num1+1
//      num1++
//     }
//     return numb
// }

// var start=prompt("Enter start num")
// var end=prompt("Enter end num")

// startI=parseInt(start)
// endI=parseInt(end)

// document.writeln(count(startI,endI))












// function sq(num1) {

//     Inum1 = parseInt(num1)
//     return Inum1 * Inum1
// }


// function hyp(num1,num2){

//     return Math.sqrt(sq(num1)+sq(num2))
// }



// num=prompt("enter base")
// numI=parseInt(num)

// num1=prompt("enter perp")
// num1I=parseInt(num1)


// document.write(hyp(numI,num1I))










// function rectA(height,width){

//      return height*width

// }


// var height =prompt("Enter Height")
// var width=prompt("Enter width ")

// document.write(rectA(height,width))










// var wordR=""
// var ln = prompt("Enter to check palindrome")
// var tempWord = ln.split("");


// for(i=tempWord.length-1;i>=0;i--){

//     wordR=wordR+tempWord[i]

// }


// if (ln==wordR) {
//     document.write("word is a palindrome")
// } else {
//     document.write("word isn't a palindrome")
// }









// function small(inp) {


//     var inpSmall = inp.toLowerCase()
//     var chrCap = inpSmall.charAt(0)
//     chrCap = chrCap.toUpperCase()
//     var sep = inpSmall.split("")
//     sep[0] = chrCap
//     inpSmall = sep.join("")
//     return inpSmall

// }


// function Capsent(inp){


// var propSent=""
// var inpSmall = inp.toLowerCase()
// var sp = inpSmall.split(" ")

// for(i=0;i<sp.length;i++){


//    propSent=propSent+small(sp[i])+" "

// }

// return propSent
// }

// var inp = prompt("Enter ")

// document.write(Capsent(inp))












// function Long(sent) {

//     var strSp = sent.split(' ')
//     var longestWord = 0


//     for(var i = 0; i < strSp.length; i++){

//       if(strSp[i].length > longestWord){
//       longestWord = strSp[i].length
//       num=i
//        }
//     }


//     return strSp[num]
// }

// var sen =prompt("Enter Sentence")

// document.write(Long(sen))











// function chec(sent, chr) {

//     var strSp = sent.split('');


//     num = 0
//     for (var i = 0; i < strSp.length; i++) {

//         if (strSp[i] == chr) {
//             num = num + 1

//         }
//     }


//     return num
// }

// var sen =prompt("Enter Sentence")
// var ch =prompt("Enter character")


// document.write(chec(sen,ch))













// function calcCircumference(radius){

     
//     return "The circumference is"+(2*3.14*radius)

// }



// function calcCircumference(radius){

     
//     return "The area is"+(3.14*radius*radius)

// }