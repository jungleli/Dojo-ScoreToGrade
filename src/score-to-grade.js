function scoreToGrade(score){
    if(isNaN(score)){
        throw new TypeError("Input error!");
    }else if(score > 100 || score <0){
        throw new Error("Not a correct score");
    }
    if(score >= 90&&score < 100){
        return 'S';
    }
    else if(score >= 80){
        return 'A';
    }
    else if(score >= 70){
        return 'B';
    }
    else if(score >=60 ){
        return 'C';
    }
    else
        return 'D';
}