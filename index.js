



    //  // function to convert length units
    function convertLength() {
        // get input value and selected units
        const inputValue = document.getElementById("input-value").value;
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;
  
        // calculate conversion factor
        const conversionFactors = {
          meter: 1,
          kilometer: 1000,
          centimeter: 0.01,
          millimeter: 0.001,
          micrometer: 0.000001,
          nanometer: 0.000000001,
          mile: 1609.344,
          yard: 0.9144,
          foot: 0.3048,
          inch: 0.0254,
          lightyear: 9460730472580800,
        };
  
        const conversionFactor = conversionFactors[fromUnit] / conversionFactors[toUnit];
  
        // calculate result and display it
        const result = inputValue * conversionFactor;
        document.getElementById("result").innerHTML = `${inputValue} ${fromUnit} = ${result} ${toUnit}`;
       
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
  
  
  
  
  