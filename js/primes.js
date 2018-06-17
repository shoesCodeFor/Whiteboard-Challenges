function primeOrNot(n){
    for(let i = 2; i < n; i++){
        if(n%i === 0){
            console.log(n + ': false');
            return false;
        }
    }
    console.log(n + ': true');
    return true;
    
}
for(let i = 1; i< 200; i++){
    primeOrNot(i);
}