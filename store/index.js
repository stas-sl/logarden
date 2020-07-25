import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      connection: {
        host: 'localhost',
        port: 8123,
        database: 'events',
        user: 'default',
        password: ''
      },
      logs: {
        data: [],
        meta: []
      },
      queryString: ''
    },
    mutations: {
      setLogs (state, logs) {
        state.logs = logs
      },
      setQueryString (state, queryString) {
        state.queryString = queryString
      }
    },
    actions: {
      async query ({ state, commit }, query) {
        const url = `http://${state.connection.host}:${state.connection.port}?database=${state.connection.database}&add_http_cors_header=1&log_queries=1&output_format_json_quote_64bit_integers=1&output_format_json_quote_denormals=1&user=${state.connection.user}`
        query = query + ' format JSON'
        const logs = await this.$axios.$post(url, query)
        commit('setLogs', logs)
      }
    },
    modules: {}
  })
}

export default createStore
