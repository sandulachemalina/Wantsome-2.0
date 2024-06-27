let initialValues = [1, "string", "Wantsome", "Front-End", [1, 2, false], true, undefined, null];
let otherValues = [6, "Malina", false, null]
initialValues.push(...otherValues);

initialValues = initialValues.map(value => {
    if(typeof value === "number"){
        return value + 2;
    } else{
        return value;
    }
})

for (let i = 0; i < initialValues.length; i++) {
    const element = initialValues[i];
    if (typeof element === "string") {
        const concatenatedValues = element + "happy coding";
        console.log(concatenatedValues);
    } else {
        console.log(element);
    }
};

initialValues = initialValues.map(value => {
    if(typeof value === "boolean"){
        return !value;
    } else{
        return value;
    }
});
console.log(initialValues);