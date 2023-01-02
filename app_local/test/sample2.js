function workP(sec){
    return new Promise((resolve, reject) => {    //promise의 인스턴스를 반환하고 then에서 반환한 것을 받는다.
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

function justFunc(){
    return 'just Function';
}

async function asyncFunction(){
    return 'async Function';
}

console.log(justFunc());
console.log(asyncFunction());
console.log(workP());