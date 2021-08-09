function getScore(score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;


    if (scoreA){
        scoreFinal = "Nota A"

    } else if (scoreB) {
        scoreFinal = "Nota B"

    } else if (scoreC) {
        scoreFinal = "Nota C"

    } else if (scoreD) {
        scoreFinal = "Nota D"

    } else if (scoreF) {
        scoreFinal = "Nota F"

    } else {
        scoreFinal = "Invalido"
    }   
    
    return scoreFinal
}

// Print your results
console.log(getScore(90))
