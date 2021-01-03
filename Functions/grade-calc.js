// students score, total possible score
// 15/20 -> Yout got a C(75%)!
// A -> 90-100
// B -> 80-89
// C -> 70-79
// D -> 60-69

let getScore = function (studentScore = 0, maxScore = 10) {
    let score = studentScore / maxScore;
    switch (true) {
        case score >= 0.9:
            // return result = 'A';
            return { grade: 'A', percent: score * 100 };
            break;
        case score >= 0.8:
            return { grade: 'B', percent: score * 100 };
            break;
        case score >= 0.7:
            return { grade: 'C', percent: score * 100 };
            break;
        case score >= 0.6:
            return { grade: 'D', percent: score * 100 };
            break;
        default:
            return { grade: 'F', percent: score * 100 };
            break;
    }
}

score1 = getScore(95, 100);

console.log(`You got a ${score1.grade} (${score1.percent}%)!`);

// Andrew option

let gradeCalc = function (score, totalScore) {
    let percent = (score / totalScore) * 100;
    let letterGrade = '';

    if (percent >= 90) {
        letterGrade = 'A';
    } else if (percent >= 80) {
        letterGrade = 'B';
    } else if (percent >= 70) {
        letterGrade = 'C';
    } else if (percent >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    return `You got a ${letterGrade} (${percent}%)!`;
}

score2 = gradeCalc(50, 100);
console.log(score2);

