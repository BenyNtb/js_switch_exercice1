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


/ let age = parseInt(prompt('Entrez votre âge?'));

// switch (isNaN(age)) {
//     case true:
//         console.log(`Error n'est pas un nombre`);
//         break;
//     case false:
//         switch (age >=18 ) {
//             case true:
//                 console.log("Il a plus de 18ans");
//                 break;
//             case false:
//                 console.log("ll a moins de 18ans");
//         }
//         break;
// }