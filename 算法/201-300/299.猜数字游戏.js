/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let bulls = 0;
    let cows = 0;
    let map = new Map();
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            map.set(secret[i], (map.get(secret[i]) || 0) + 1)
        }
    }
    for (let i = 0; i < guess.length; i++) {
        if (secret[i] !== guess[i] && map.get(guess[i])) {
            map.set(guess[i], map.get(guess[i]) - 1)
            cows++;
        }
    }
    return `${bulls}A${cows}B`
};

//1122
//0111