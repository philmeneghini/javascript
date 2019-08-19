// CONFIGURANDO AXIOS

import axios from "axios";

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );

      console.log(response);
    } catch (err) {
      console.warn("Erro na Api.");
    }
  }
}

Api.getUserInfo("philmeneghini");
Api.getUserInfo("philmeneghini5252");

// ASYNC/AWAIT

/*
const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });


// async function executaPromise() {
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// }
// 
// executaPromise();


const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
};

executaPromise();
*/
