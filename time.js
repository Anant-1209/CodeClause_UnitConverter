function convertTime() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const input = parseFloat(document.getElementById("input-value").value);
    let output;

    // Convert to seconds
    switch (fromUnit) {
      case "second":
        output = input;
        break;
      case "minute":
        output = input * 60;
        break;
      case "hour":
        output = input * 3600;
        break;
      case "day":
        output = input * 86400;
        break;
      case "week":
        output = input * 604800;
        break;
      case "month":
        output = input * 2629800;
        break;
      case "year":
        output = input * 31557600;
        break;
      default:
        output = NaN;
    }

    // Convert to target unit
    switch (toUnit) {
      case "second":
        output = output;
        break;
      case "minute":
        output = output / 60;
        break;
      case "hour":
        output = output / 3600;
        break;
      case "day":
        output = output / 86400;
        break;
      case "week":
        output = output / 604800;
        break;
      case "month":
        output = output / 2629800;
        break;
      case "year":
        output = output / 31557600;
        break;
      default:
        output = NaN;
    }

    // Update output field
    document.getElementById("result").innerHTML = input + " " + fromUnit + " = " + output.toFixed(2) + " " + toUnit;
    //document.getElementById("toValue").innerHTML = output.toFixed(2);
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
