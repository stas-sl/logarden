import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      connection: {
        host: 'localhost',
        port: 8123,
        database: 'events',
        user: 'default',
        password: '',
        table: 'events'
      },
      logs: {
        data: [],
        meta: {
          count: 0,
          columns: [],
          histogram: []
        }
      },
      queryWhere: ''
    },
    mutations: {
      setLogs (state, logs) {
        state.logs = logs
      },
      setQueryWhere (state, queryWhere) {
        state.queryWhere = queryWhere
      }
    },
    actions: {
      async query ({ state, commit, dispatch }, queryWhere, limit = 1000) {
        const queryFull = `select * from ${state.connection.table} where ` +
          `${queryWhere || 1} limit ${limit}`
        const queryCount = `select count(*) as count from ${state.connection.table} where ` +
          `${queryWhere || 1}`
        const queryHistogram = `select toMonday(timestamp) as date, count(*) as count from ${state.connection.table} where ` +
          `${queryWhere || 1} group by date order by date`
        const respCount = await dispatch('queryInner', queryCount)
        const respData = await dispatch('queryInner', queryFull)
        const respHistogram = await dispatch('queryInner', queryHistogram)
        commit('setLogs', {
          data: respData.data,
          meta: {
            count: respCount.data[0].count,
            columns: respData.meta,
            histogram: respHistogram.data.map(x => ({
              date: new Date(Date.parse(x.date)),
              count: parseInt(x.count)
            }))
          }
        })
      },
      async queryInner ({ state }, queryFull) {
        const url = `http://${state.connection.host}:${state.connection.port}` +
          `?user=${state.connection.user}&database=${state.connection.database}` +
          `&log_queries=1&output_format_json_quote_64bit_integers=1` +
          `&output_format_json_quote_denormals=1&&add_http_cors_header=1`
        const query = queryFull + ' format JSON'
        const resp = await this.$axios.$post(url, query)
        return resp
      }
    },
    modules: {}
  })
}

export default createStore
