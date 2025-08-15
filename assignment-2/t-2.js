function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    let onlyCharacters = str.split(" ").join("");
    return onlyCharacters.toUpperCase();
}

