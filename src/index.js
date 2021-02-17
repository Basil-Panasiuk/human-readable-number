module.exports = function toReadable (number) {
    let arr = String(number).split('').map(item => Number(item));
    let od = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let d = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let d1 = ['zero','ten', 'twenty', 'thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let n = number;

    if ( arr.length == 1){
        return od[arr[0]];
    }

    if ( arr.length == 2) {
        if(n < 20){
          return d[arr[1]] ;
        }  else {
          let num = d1[arr[0]] + ' ' + od[arr[1]];
          num = num.replace(' zero', '');
          return num;
        }
    }

    if ( arr.length == 3) {
        if( n % 100 == 0){
          return od[arr[0]] + ' hundred';
        } else if(arr[1] == 0) {
          return od[arr[0]] + ' hundred ' + od[arr[2]];
        } else if (arr[1] == 1) {
          return od[arr[0]] + ' hundred ' + d[arr[2]];
        } else {
          let num = od[arr[0]] + ' hundred ' + d1[arr[1]] + " " + od[arr[2]];
          num = num.replace(' zero', '');
          return num;
        }
    }

}
