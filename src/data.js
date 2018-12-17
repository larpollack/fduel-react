const data = {
  fetchData() {
    return fetch(
      "https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/db"
    ).then(response => response.json());
  }
};

export default data;
