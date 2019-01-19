// export class Doctor {
//       findDoctor(input){
//
//         let request = new XMLHttpRequest();
//         let url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=${input}&location=45.5122,-122.6587,100&skip=2&limit=10&user_key='  + apiKey;
//
//         request.onreadystatechange = function() {
//           if (this.readyState === 4 && this.status === 200) {
//             const response = JSON.parse(this.responseText);
//             getElements(response);
//           }
//         }
//
//         request.open("GET", url, true);
//         request.send();
//       }
//
// }
