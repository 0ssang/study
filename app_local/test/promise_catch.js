function wait(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, sec * 1000);
  });
}

wait(3).catch((e) => {
  console.log("1st catch ", e);
});

/*chain은 같은 객체를 반환할 때만 가능함 */
wait(3)
  .catch((e) => {
    console.log("2nd catch ", e);
  }) //wait함수의 오류를 받음
  .catch((e) => {
    console.log("3rd catch ", e);
  }); //위 catch 구문의 상태를 받음. 오류를 잘 방았으므로 오류가 발생하지 않음

/* chain을 하고 싶을땐*/
wait(3)
  .catch((e) => {
    console.log("4th catch ", e);
    throw e;
  })
  .catch((e) => {
    console.log("5th catch ", e);
  });

wait(3).then(
  () => {
    console.log("Success");
  },
  (e) => {
    console.log("Catch in Then ", e);
  }
);
