function convertWeight() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const input = parseFloat(document.getElementById("input-value").value);
    let output;

    // Convert to grams
    switch (fromUnit) {
      case "gram":
        output = input;
        break;
      case "kilogram":
        output = input * 1000;
        break;
      case "pound":
        output = input * 453.592;
        break;
      case "ounce":
        output = input * 28.3495;
        break;
      default:
        output = NaN;
    }

    // Convert to target unit
    switch (toUnit) {
      case "gram":
        output = output;
        break;
      case "kilogram":
        output = output / 1000;
        break;
      case "pound":
        output = output / 453.592;
        break;
      case "ounce":
        output = output / 28.3495;
        break;
      default:
        output = NaN;
    }

    // Update output field
    // document.getElementById("result").innerHTML = output;
    document.getElementById("result").innerHTML = `${input} ${fromUnit} = ${output.toFixed(4)} ${toUnit}`;
    //document.getElementById("toValue").innerHTML = toUnit;
  }
  function changeText1() {
    var converttext = document.getElementById("convertertext");
    converttext.innerHTML = "LENGTH";
  }
  function changeText2() {
    var converttext = document.getElementById("convertertext");
    converttext.innerHTML = "TEMPERATURE";
  }
  function changeText3() {
    var converttext = document.getElementById("convertertext");
    converttext.innerHTML = "AREA";
  }
  function changeText4() {
    var converttext = document.getElementById("convertertext");
    converttext.innerHTML = "VOLUME";
  }
  function changeText5() {
    var converttext = document.getElementById("convertertext");
    converttext.innerHTML = "WEIGHT";
  }
  function changeText6() {
    var converttext = document.getElementById("convertertext");
    converttext.innerHTML = "TIME";
  }

