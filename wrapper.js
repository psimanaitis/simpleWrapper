var wrapper = (function(){
    return function wrapper(text, lineLength) {
        var words = text.split(' ');

        var tooLongWords = words.filter(function (word) {
            return word.length > lineLength;
        });

        words = appendSplitedTooLongWords(words, tooLongWords, lineLength);
        words = appendNewLines(words, lineLength);

        return words.join('');
    };

    function splitWordIntoParts(word, lineLength) {
        var splittedWords = [];

        for (var i = 0; i < word.length; i = i + lineLength) {
            splittedWords.push(word.substring(i, i + lineLength));
        }
        return splittedWords;
    }

    function appendSplitedTooLongWords(words, tooLongWords, lineLength) {
        tooLongWords.forEach(function (word) {
            var generatedWords = splitWordIntoParts(word, lineLength);

            words.splice(words.indexOf(word), 1, generatedWords);
        });
        return [].concat.apply([], words);
    }

    function appendNewLines(oldWords, lineLength) {
        var words = oldWords.slice();
        var totalLineSum = 0;

        for (var i = 0; i < words.length; i++) {
            var word = words[i];

            if (!lastIndex(i, words)) {
                totalLineSum = word.length + (totalLineSum % lineLength) + words[i + 1].length + 1;
                if (totalLineSum >= lineLength) {
                    words[i] = word + '\n';
                    totalLineSum = 0;
                } else {
                    words[i] = words[i] + " ";
                }
            }
        }

        return words;
    }

    function lastIndex(indexNumber, arrayToCheck){
        return indexNumber + 1 === arrayToCheck.length;
    }
})();
