export default class PromiseService {

  getDataAsPromise(data, errMessage) {

    return new Promise((resolve, reject) => {

      setTimeout(() => {

        if (data.length > 0) {

          resolve(data);

        } else {

          reject(errMessage);

        }

      }, 1000);


    });

  }

}