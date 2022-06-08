/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let bulls = 0
    let cows = 0
    let map = new Map();
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls += 1;
        } else {
            if (!map.has(secret[i])) {
                map.set(secret[i], 1)
            } else {
                map.set(secret[i], map.get(secret[i]) + 1)
            }
        }
    }
    console.log(map)
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] !== secret[i] && map.get(guess[i])) {
            map.set(guess[i], map.get(guess[i]) - 1)
            cows++;
        }
    }
    console.log(`${bulls}A${cows}B`)
    return `${bulls}A${cows}B`
};

getHint("1122", "2211")