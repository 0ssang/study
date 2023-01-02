function workP(sec){
    return new Promise((resolve, reject) => {    //promise의 인스턴스를 반환하고 then에서 반환한 것을 받는다.
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

workP(1).then((result) => {
    console.log('첫 번쪠 작업', result);
    return workP(1);
}).then((result) => {
    console.log('두 번째 작업', result);
});

