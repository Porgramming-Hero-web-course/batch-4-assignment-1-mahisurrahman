{
    //
    var sumArray = function (numbers) {
        var total = 0;
        for (var i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        return total;
    };
    console.log(sumArray([5, 5, 5]));
    //
}
