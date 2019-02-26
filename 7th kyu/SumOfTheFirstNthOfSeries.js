function SeriesSum(n)
{
    let m = 0;
    result = 0;
    if (n===1){
        result = 1;
    } else {
        for (let i=1; m < n; i+=3){
            result += 1 / i;
            m++;
        }
    }
    return result.toFixed(2).toString();
}
