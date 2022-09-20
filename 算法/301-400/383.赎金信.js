/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function (ransomNote, magazine) {
    let m1 = {};
    for (let i = 0; i < ransomNote.length; i++) {
      const index = ransomNote[i].charCodeAt() - "a".charCodeAt();
      m1[index] = (m1[index] || 0) + 1;
    }
    let count = 0;
    for (let i = 0; i < magazine.length; i++) {
      const index = magazine[i].charCodeAt() - "a".charCodeAt();
      if (m1[index] != undefined && m1[index]>0) {
        count++;
        m1[index]--;
      }
    }
    return count === ransomNote.length;
  };