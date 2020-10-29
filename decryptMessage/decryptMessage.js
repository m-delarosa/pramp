/* Pseudo
    instantiate secondStep variable
    instantiate decryption string for return

    iterate over the word
        instantiate a variable that holds the strings charCode value - secondStep

        while the character codes value is less than than a in ascii decimal
            add 26 to the charcode

        grab the decrypted letter by converting the new code to char
        add that letter to the decryption return string
        add the value of that letter to secondStep
    
    return the decryption string
*/

function decrypt(word) {
    let secondStep = 1
    let decryption = ""

    for (let i = 0; i < word.length; i++) {
        newLetterAscii = word[i].charCodeAt() - secondStep

        while (newLetterAscii < 97) {
            newLetterAscii += 26
        }

        const newLetter = String.fromCharCode(newLetterAscii)
        decryption = decryption += newLetter
        secondStep += newLetterAscii
    }
    return decryption
}

//tests
console.log(decrypt("dnotq"), "should equal", "crime")
console.log(decrypt("flgxswdliefy"), "should equal", "encyclopedia")
console.log(decrypt("rajsb"), "should equal", "qqqqq")
console.log(decrypt("bvqmjhgghjmqvbiqzjugthwmdv"), "should equal", "
abcdefghijklmnopqrstuvwxyz")
console.log(decrypt("eobamwpnlmhklrq"), "should equal", "drugtrafficking")
console.log(decrypt(""), "should equal", "")