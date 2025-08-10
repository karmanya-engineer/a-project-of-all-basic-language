export const apiService = {
  async fetchData() {
    return Promise.resolve([{id:1, title:'Sample', description:'Sample description'}]);
  }
};