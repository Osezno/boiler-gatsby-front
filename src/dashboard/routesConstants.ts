

const routes = {
    dashboard:'/dashboard',
    get projects() { return this.dashboard + '/projects'},
    get song() { return this.projects +'/:id'},
    account:'account'
  }
  
  
  export { routes }