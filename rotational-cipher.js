const rotate = (str, num) => {
  const arr = str.split("");
  const arr2 = arr.map((element) => {
    if (element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122) {
      return String.fromCharCode(element.charCodeAt(0) + num);
    } else if (element.charCodeAt(0) <= 90 && element.charCodeAt(0) >= 65) {
      return String.fromCharCode(element.charCodeAt(0) - num);
    } else {
      return String.fromCharCode(element.charCodeAt(0));
    }
  });
  console.log(arr2.join(""));
};

rotate("n", 13);
