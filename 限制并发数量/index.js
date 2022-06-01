function limitRequest1(url, limit) {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    let index = limit;
    let next = function () {
      if (index >= url.length) return;
      wait(url[index++]).then((res) => {
        result.push(res);
        count++;
        if (count == url.length) {
          resolve(result);
        }
        next();
      });
    };
    for (let i = 0; i < limit; i++) {
      wait(url[i]).then((res) => {
        result.push(res);
        count++;
        if (count == url.length) resolve(result);
        next();
      });
    }
  });
}

help([1000, 2000, 3000, 4000], 2).then((res) => {
  console.log(res);
});

function limitRequest2(url, limit) {
  let index = 0;
  return new Promise((resolve, reject) => {
    let result = [];
    for (let i = 0; i < limit; i++) {
      async function next() {
        while (index < url.length) {
          let res = await wait(url[index++]);
          result.push(res);
          if (result.length == url.length) resolve(result);
        }
      }
      next();
    }
  });
}

help([1000, 1000, 1000, 1000], 4).then((res) => {
  console.log(res);
});

function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
