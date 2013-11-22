var add_one = function (i) {
    return parseFloat(i) + 1;
}
var multiply_by_two = function (i) {
    return parseFloat(i)  * 2;
}
var substract_three = function (i) {
    return parseFloat(i) - 3;
}
var divide_by_four = function (i) {
    return parseFloat(i) / 4;
}
var to_the_power_of_two = function (i) {
    return Math.pow(parseFloat(i), 2);
}
var square_root = function (i) {
    return Math.sqrt(parseFloat(i));
}
var to_the_power_of_three = function (i) {
    return Math.pow(parseFloat(i), 3);
}

var mainFunction = function (funcVal, funcString) {
    var funcCall, next;
    var elements = funcString.split(",");
    
    try {
      while(next = elements.shift()) {      
        funcCall = next + "('" + funcVal + "')"; 
        var ret = eval(funcCall);
        document.writeln(ret);
      }
    }
    catch (err) {
          document.write("Err");
    }

}

// mainFunction ("4", "add_one, multiply_by_two, divide_by_four");
// mainFunction ("5", "substract_three, to_the_power_of_three, to_the_power_of_two");
// mainFunction ("12", "substrat_three, multiply_by_two, add_one, to_the_power_of_two");

