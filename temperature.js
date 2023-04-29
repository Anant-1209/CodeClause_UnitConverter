function convertTemperature() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const input = parseFloat(document.getElementById("input-value").value);
    let output;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      output = input * 9 / 5 + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      output = (input - 32) * 5 / 9;
    } else {
      output = NaN;
    }

    // document.getElementById("result").innerHTML = output;
    document.getElementById("result").innerHTML = output
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
