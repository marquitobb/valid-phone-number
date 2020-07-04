const isValidPhone = (country, number) => {
  //convert to array for length read
  let num = number.toString().length;
  switch (country) {
    case 52: {
      //country is mexico
      if (parseInt(num) === 10) {
        //is valid number
        return true;
      } else {
        //is invalid number
        return false;
      }
      break;
    }
    case 53: {
      //statements;
      console.log("this country is not defined yet");
      break;
    }
    default: {
      console.log("insert side of the country");
      break;
    }
  }
};
//isValidPhone(52,312138557)

module.exports = {
    isValidPhone
}
