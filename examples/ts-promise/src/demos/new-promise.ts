import CPromise from '../Promise';

const cp = new CPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 5);
  // resolve('success');
})
  .then(
    () => {
      console.log('then status -> ', cp.status);
      console.log('first then');
      return new CPromise((resolve, reject) => {
        setTimeout(() => {
          resolve('second async resolve');
        });
      });
    },
    () => {
      console.log('first reject');
    }
  )
  .then((data) => {
    console.log('second then');
    console.log('second then: ' + data);

    return 'two';
  })
  .then((data) => {
    console.log('third then');
    console.log('third then: ' + data);

    return 'three';
  });
