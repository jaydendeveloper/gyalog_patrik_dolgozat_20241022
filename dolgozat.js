function digitsAverage(number) {
    const szamStr = number.toString();
    let sum = 0;

    for(let i = 0; i < szamStr.length; i++){
        const int = Number(szamStr[i])
        sum+=int;
    }

    return sum / szamStr.length;
}

function seconds(time) {
    const timeSpl = time.split(":");
    const h = timeSpl[0];
    const m = timeSpl[1];
    const s = timeSpl[2];

    const date = new Date();
    date.setHours(h);
    date.setMinutes(m);
    date.setSeconds(s);

    const endDate = new Date()
    endDate.setHours(23);
    endDate.setMinutes(59);
    endDate.setSeconds(59);


    return Math.ceil((endDate - date) / 1000)
}

function gradeCalculator(score, maximum) {
    const percentage = (score / maximum) * 100

    if(percentage >= 90){
        return "A";
    } else if(percentage < 90 && percentage >= 80){
        return "B";
    } else  if(percentage < 80 && percentage >= 70){
        return "C";
    } else if(percentage < 70 && percentage >= 60){
        return "D";
    } else return "F";
}

function factorial(number) {
    let factorial = 0;

    for(let i = 1; i <= number; i++){
        if(factorial == 0){
            factorial = i;
        } else {
            factorial = factorial * i;
        }
    }

    return factorial;
}