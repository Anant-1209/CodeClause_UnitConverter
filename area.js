function convertArea() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const input = parseFloat(document.getElementById("input-value").value);
    let output;

    // Convert to square meters
    switch (fromUnit) {
      case "squaremeter":
        output = input;
        break;
      case "hectare":
        output = input * 10000;
        break;
      case "squarefoot":
        output = input / 10.764;
        break;
      case "squareinch":
        output = input / 1550.0031;
        break;
      case "squaremile":
        output = input * 2589988.11;
        break;
      case "acre":
        output = input * 4046.8564;
        break;
      default:
        output = NaN;
    }

    // Convert to target unit
    switch (toUnit) {
      case "squaremeter":
        output = output;
        break;
      case "hectare":
        output = output / 10000;
        break;
      case "squarefoot":
        output = output * 10.764;
        break;
      case "squareinch":
        output = output * 1550.0031;
        break;
      case "squaremile":
        output = output / 2589988.11;
        break;
      case "acre":
        output = output / 4046.8564;
        break;
      default:
        output = NaN;
    }

    // Update output field
    document.getElementById("result").innerHTML = `${input} ${fromUnit} = ${output.toFixed(4)} ${toUnit}`;
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

