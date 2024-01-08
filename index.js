function introduction(name){
  console.log(`Hi, my name is ${name}`);
}
introduction("Aki");

function logTwoValues(value1, value2){
  console.log(`The two values are ${value1} and ${value2}.`);
}
function introductionWithLanguage(name, language){
  console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguage("Aki", "Ember.js");

function introductionWithLanguageOptional(name, language="JavaScript"){
  console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguageOptional("Gracie");

function introductionWithLanguageOptional(name="Gracie", language="Python"){
  console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguageOptional();
 