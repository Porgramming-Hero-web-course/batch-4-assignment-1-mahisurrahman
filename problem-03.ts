{
    //

    const countWordOccurrences = (stringA:string, stringB:string): number =>{
        stringA = stringA.toLowerCase();
        stringB = stringB.toLowerCase();
        
        
        let sentence = stringA.split(" ");
        
        let wordCount = 0;
        for (let word of sentence){
            if(word === stringB){
                wordCount++
            }
        }
        return wordCount;

    }

    console.log(countWordOccurrences("I Love Typescript and Typescript is Insanely Hard", "Typescript"))


    //
}