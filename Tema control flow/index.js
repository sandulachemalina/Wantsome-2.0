let tipVehicul = prompt("Introduceti tipul de vehicul:");
let capacitateaCilindrica = prompt("Introduceti capacitatea cilindrica a masinii:");
capacitateaCilindrica = parseInt(capacitateaCilindrica);
let impozit = 0;
let formulaPartiala = Math.ceil(capacitateaCilindrica / 200);
switch(tipVehicul){
    case "autoturism":
        if (capacitateaCilindrica <= 1600){
            impozit = formulaPartiala * 9;
        }else if(capacitateaCilindrica <= 2000){
            impozit = formulaPartiala * 24;
        }else if(capacitateaCilindrica <= 2600){
            impozit = formulaPartiala * 92;
        }else{
            impozit = formulaPartiala * 186;
        }
        break;
    case "motocicleta":
        if (capacitateaCilindrica <= 1600){
            impozit = formulaPartiala * 9;
        }else if(capacitateaCilindrica <= 2000){
            impozit = formulaPartiala * 24;
        }
        break;
    case "autobuz":
        if(capacitateaCilindrica >= 7000){
            impozit = formulaPartiala * 28;
        }
        break;
    default:
        alert("Tipul de vehicul sau capacitatea cilindrica introduse nu sunt corecte");
}
console.log("Impozitul anual pentru " + tipVehicul + " avand o capacitate cilindrica de " + capacitateaCilindrica + " cmc este: " + impozit + " lei.");