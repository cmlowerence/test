function removeExtraSpaces(string){
    return string.trim().split(/[ ]+/).join(" ");
}
console.log(removeExtraSpaces('   To the     Principle                Godekldjfa        '));
