import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    reducer: state => ({
      queryString: state.queryString,
      connection: state.connection
    })
    // storage: window.localStorage
  }).plugin(store)
}
