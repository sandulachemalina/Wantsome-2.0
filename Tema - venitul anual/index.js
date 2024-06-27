function computeIncome1(sentence) {
    const splitFirstSentense = sentence.split(` `);
    const nume1 = splitFirstSentense[0];
    const salariuIon = parseInt(splitFirstSentense[2]);
    const bonusIon = parseInt(splitFirstSentense[6]);
    const freelancingIon = parseInt(splitFirstSentense[10]);
    const venitTotalIon = (salariuIon + freelancingIon) * 12 + bonusIon;
    return `Venitul total anual al lui ${nume1} este de ${venitTotalIon} lei`;
};
const firstSentence = "Ion castiga 5000 lei/luna din salariu, 1000 lei/an bonus si 1500 lei/luna din freelancing";
console.log(computeIncome1(firstSentence));

function computeIncome2(sentence) {
    const splitSecondSentence = sentence.split(` `);
    const nume2 = splitSecondSentence[0];
    const salariuAndrei = parseInt(splitSecondSentence[5]);
    const bonusAndrei = parseInt(splitSecondSentence[10]);
    const freelancingAndrei = parseInt(splitSecondSentence[17]);
    const venitTotalAndrei = ((salariuAndrei) * 4.98 + (freelancingAndrei) * 4.65) * 12 + bonusAndrei;
    return `Venitul total anual al lui ${nume2} este de ${venitTotalAndrei} lei`;
}

const secondSentance = "Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei/an si mai castiga suplimentar aproximativ 500 usd/luna din freelanging";
console.log(computeIncome2(secondSentance));

// asta e singura varianta care a putut sa imi ofere output-ul corect, 
// am mai incercat si alte variante, dar ma complicam si incurcam, iar valoarea finala a venitului nu era cea corecta
// nu cred ca e o varianta buna nici asta pentru ca m-am repetat si doar cateva lucruri au fost diferite, 
// singura chestie ok e ca imi ofera valorile bune
