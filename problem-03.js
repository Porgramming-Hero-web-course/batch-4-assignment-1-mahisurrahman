{
    //
    var countWordOccurrences = function (stringA, stringB) {
        stringA = stringA.toLowerCase();
        stringB = stringB.toLowerCase();
        var sentence = stringA.split(" ");
        var wordCount = 0;
        for (var _i = 0, sentence_1 = sentence; _i < sentence_1.length; _i++) {
            var word = sentence_1[_i];
            if (word === stringB) {
                wordCount++;
            }
        }
        return wordCount;
    };
    console.log(countWordOccurrences("I Love Typescript and Typescript is Insanely Hard", "Typescript"));
    //
}
