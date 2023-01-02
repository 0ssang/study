

async function myAsyncFunc() {
  consolejljalk.log(new Date()); //Uncaught
  const result = await wait(2).catch((e) => {
    console.error(e);
  });
  console.error(new Date());
}

/*try {
  myAsyncFunc();
} catch (e) {} // ==> X
*/
myAsyncFunc().catch(e=>console.log(e)); // ==> O
