var rotateString = function(A, B) {
    return A.length==B.length&&(A+A).indexOf(B)!=-1
};
rotateString('abcde','cdeab')