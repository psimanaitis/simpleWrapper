describe("Word wrapper", function () {

    it("should add new lines symbols for each new line", function () {
        var testString = "A B C" ;
        var testingLenght = 2;
        var expectedString = 'A'+ '\n' + 'B' + '\n' + 'C';

        var updateString = wrapper(testString, testingLenght);

        expect(updateString).toBe(expectedString);
    });

    it("should combine several words in one line if possible", function () {
        var testString = "A B C" ;
        var testingLenght = 4;
        var expectedString = 'A B' + '\n' + 'C';

        var updateString = wrapper(testString, testingLenght);

        expect(updateString).toBe(expectedString);
    });

    it("should split too long words into multiple lines", function () {
        var testString = "WayTooLong" ;
        var testingLenght = 3;
        var expectedString = 'Way' + '\n' + 'Too' + '\n' + 'Lon' + '\n' +'g';

        var updateString = wrapper(testString, testingLenght);

        expect(updateString).toBe(expectedString);
    });
});
    