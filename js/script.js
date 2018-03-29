// scripts.js file

var a = prompt('Enter a numerical value for triangle base \'a\'.');
alert('Your triangle base "a" is equal to: '+ a + '. Please remember this number.');
console.log('Your triangle base "a" is equal to: ' + a + '. Please remember this number.');
var h = prompt('Enter a numerical value for triangle height \'h\'.');
alert('Your triangle height "h" is now equal to: ' + h + '. Please remember this number.');
console.log('Your triangle height "h" is now equal to: ' + h + '. Please remember this number.');
var calculatingTriangleArea = alert('Now we can calculate your triangle area, which is equal to: ' + '"a*h/2". Please try to do the math on your own and then see the result below!');
var triangleArea = a*h/2;
alert('Your triangle area is equal to: '+ triangleArea);
console.log('Your triangle area is equal to: '+ triangleArea);*/
alert("Let's try to do something a little bit more difficult, shall we? How about calculating a trapeze area?");
var a = prompt('Enter a numerical value for your trapeze base \'a\'.');
    alert('Your trapeze base \'a\' is now equal to: ' + a + '. Please remember this number.');
    console.log('Your trapeze base \'a\' is now equal to: ' + a + '. Please remember this number.');
var b = prompt('Enter a numerical value for your trapeze base \'b\'.');
    alert('Your trapeze base \'b\' is now equal to: ' + b + '. Please remember this number.');
    console.log('Your trapeze base \'b\' is now equal to: ' + b + '.Please remember this number.');
var h = prompt('Enter a numerical value for your trapeze height \'h\'.');
    alert('Your trapeze height \'h\' is now equal to: ' + h + '. Please remember this number.');
    console.log('Your trapeze height \'h\' is now equal to: ' + h + '.Please remember this number.');
var calculatingTrapezeArea = alert('The formula for trapeze area is equal to: "1/2*(a+b)*h". Do your math without cheating and then check the result below, ok?');
var trapezeArea = (1/2*(Number(a)+Number(b))*(Number(h)));
    alert('Your trapeze area is equal to: ' + trapezeArea + '. I hope you\'ve got it just all right;.');
    console.log ('Your trapeze area is equal to: ' + trapezeArea + '. I hope you\'ve got it just all right;.');
