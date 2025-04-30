// Form Elements
let frmSuhu = document.getElementById("frmSuhu");
let nCelcius = document.getElementById("nCelcius");
let frmCelc = document.getElementById("frmCelc");
let nFarenheit = document.getElementById("nFarenheit");
let frmFaren = document.getElementById("frmFaren");
let btnAction = document.getElementById("btnAction");
let cMethod = document.getElementById("cMethod");
let frmMethod = document.getElementById("frmMethod");
let btnConversion = document.getElementById("convert");
let btnReset = document.getElementById("reset");
let btnReverse = document.getElementById("reverse");
let tempDeg;
let resultTempDeg;
let celcToFaren = true;
const degreeSymbol = String.fromCharCode(176);

// Functions
function resetForm() {
    nCelcius.value = "";
    nFarenheit.value = "";
    cMethod.value = "";

    tempDeg = undefined;
    resultTempDeg = undefined;
}

function calcCelcToFaren(tempDeg) {
    return (tempDeg * 9/5) + 32;
}

function calcFarenToCelc(tempDeg) {
    return (tempDeg - 32) * 5/9;
}

function showError(msg){
    alert(msg);
}

btnConversion.onclick = (event) => { 

    event.preventDefault();

    if (celcToFaren) {
        temp = nCelcius.value;
        if(temp === ""){
            showError("Mohon Isi Nilai Celcius") ;
            resetForm() ;
            return;
        }else{
            resultTemp = calcCelcToFaren(temp);

            nFarenheit.value = resultTemp;
            cMethod.value = `(${temp} ${degreeSymbol}C x 9/5) + 32 = ${resultTemp} ${degreeSymbol}F`
        }

    } else {
        temp = nFarenheit.value;
        if(temp === ""){
            showError("Mohon Isi Nilai Fahrenheit") ;
            resetForm() ;
            return;
        }else{
            resultTemp = calcFarenToCelc(temp);

            nCelcius.value = resultTemp;
            cMethod.value = `(${temp} ${degreeSymbol}F - 32) * 5/9 = ${resultTemp} ${degreeSymbol}C`;
        }

    }

};

btnReset.onclick = (event) => { 
    event.preventDefault();
    resetForm();
}

btnReverse.onclick = (event) => { 
    event.preventDefault();

    if (celcToFaren) {
        celcToFaren = false;

        nCelcius.disabled = true;
        nFarenheit.disabled = false;

        frmSuhu.removeChild(frmCelc);
        frmSuhu.removeChild(frmFaren);

        frmSuhu.insertBefore(frmFaren, btnAction);
        frmSuhu.insertBefore(frmCelc, frmMethod);


    } else {
        celcToFaren = true;

        nCelcius.disabled = false;
        nFarenheit.disabled = true;

        frmSuhu.removeChild(frmCelc);
        frmSuhu.removeChild(frmFaren);

        frmSuhu.insertBefore(frmCelc, btnAction);
        frmSuhu.insertBefore(frmFaren, frmMethod);

    }
};

// end of function