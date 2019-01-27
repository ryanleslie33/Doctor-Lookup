export class Doctor {
      findDoctor(input){
return new Promise(function(resolve,reject){


        let request = new XMLHttpRequest();
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${input}&location=45.5122,-122.6587,100&skip=2&limit=10&user_key=96f18561aaa75db4fdd9ef618242d8ae`  ;

        request.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.responseText);
                  resolve(response);
          }
        }

        request.open("GET", url, true);
        request.send();
      });

}
}
