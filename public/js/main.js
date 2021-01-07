// let monjour = ("lundi", "mardi",  "mercredi", "jeudi","vendredi")
// let question = prompt('Jour?')
// switch (question) {
//     case 'lundi':
//         console.log(`On est ${question}  Tu as cours a MG et en soirée tu as sport`);
//         break;
//     case 'Mardi':
//         console.log(`On est ${question} Tu as cours a MG et en soirée tu as sport`);
//         break;
//     case 'mercredi':
//         console.log(`On est ${question} Tu as cours a MG et en soirée tu as sport`);
//         break;
//     case 'jeudi':
//         console.log(`On est ${question} Tu as cours a MG et en soirée tu as sport`);
//         break;
//     case 'vendredi':
//         console.log(`On est ${question} Tu as cours a MG et en soirée tu as sport`);
//         break;
//     default:
//         console.log(`Désolé on est fermé le ${question}.`);
//         break;
// }

let age = parseInt(prompt('Quel âge as-tu ?'))
let prems = (age)
switch (age) {
    case age<=18:
        console.log(`Vous avez moins de 18 ans`);
        break;
    
    default:
        console.log(`Vous avez plus de 18 ans`);
        break;
}