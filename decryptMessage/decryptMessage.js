

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
console.log(decrypt("dnotq"), "should equal", "crime")
console.log(decrypt("dnotq"), "should equal", "crime")
console.log(decrypt("dnotq"), "should equal", "crime")