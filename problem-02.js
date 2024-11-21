{
    //
    var removeDuplicates = function (numbers) {
        var uniqueNumbers = [];
        for (var i = 0; i < numbers.length; i++) {
            if (uniqueNumbers.indexOf(numbers[i]) === -1) {
                uniqueNumbers.push(numbers[i]);
            }
        }
        return uniqueNumbers;
    };
    console.log(removeDuplicates([1, 1, 1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7, 8, 9]));
    //
}
