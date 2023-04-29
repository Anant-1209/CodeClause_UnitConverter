function convertVolume() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const input = parseFloat(document.getElementById("input-value").value);
    let output;

    // Convert to liters
    switch (fromUnit) {
      case "liter":
        output = input;
        break;
      case "milliliter":
        output = input / 1000;
        break;
      case "cubicmeter":
        output = input * 1000;
        break;
      case "cubicinch":
        output = input / 61.024;
        break;
      case "gallon":
        output = input * 3.785;
        break;
      case "quart":
        output = input * 0.946;
        break;
      case "pint":
        output = input * 0.473;
        break;
      case "fluidounce":
        output = input * 0.02957;
        break;
      default:
        output = NaN;
    }

    // Convert to target unit
    switch (toUnit) {
      case "liter":
        output = output;
        break;
      case "milliliter":
        output = output * 1000;
        break;
      case "cubicmeter":
        output = output / 1000;
        break;
      case "cubicinch":
        output = output * 61.024;
        break;
      case "gallon":
        output = output / 3.785;
        break;
      case "quart":
        output = output / 0.946;
        break;
      case "pint":
        output = output / 0.473;
        break;
      case "fluidounce":
        output = output / 0.02957;
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
