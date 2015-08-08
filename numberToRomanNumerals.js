function convertToRomanNumeral(num) {
  
  var romanNum = ""; //Sets the string of Roman Numerals
  
  var code = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}; //Dictionary translation of roman Numerals to numbers
  while(num > 0){ //runs until num === 0
    for (var x in code){ //Run through dictionary
      if(num >= code[x]){ //Check if the number given is greater than the one in the dictionary
        romanNum += x; //Add the key of the dictionary correspondent to the largest number found
        num -= code[x]; //Remove the largest number found
        break; //Stop running through the dictionary (stops at the largest number found)
      }
    }
  }
 return romanNum; //Return the Roman Numeral
}


//use
//convertToRomanNumeral(36);
