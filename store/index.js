import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      // connection: {
      //   host: 'localhost',
      //   port: 8123,
      //   database: 'events',
      //   user: 'default',
      //   password: '',
      //   table: 'events'
      // },
      connection: {
        url: 'https://play.clickhouse.tech/api/v20.3/?database=datasets&user=playground&password=clickhouse',
        table: 'visits_v1',
        timestampField: 'UTCStartTime'
      },
      logs: {
        data: [],
        meta: {
          count: 0,
          columns: [],
          histogram: []
        }
      },
      queryWhere: '',
      startTimestamp: null,
      endTimestamp: null
    },
    mutations: {
      setLogs (state, logs) {
        state.logs = logs
      },
      setQueryWhere (state, queryWhere) {
        state.queryWhere = queryWhere
      },
      setStartTimestamp (state, startTimestamp) {
        state.startTimestamp = startTimestamp
      },
      setEndTimestamp (state, endTimestamp) {
        state.endTimestamp = endTimestamp
      }
    },
    actions: {
      async query ({ state, commit, dispatch },
        { queryWhere, limit, startTimestamp, endTimestamp }) {
        queryWhere = queryWhere || '1'
        if (startTimestamp) {
          queryWhere = `(${queryWhere}) and toDateTime(${state.connection.timestampField}) >= ${startTimestamp}`
        }
        if (endTimestamp) {
          queryWhere = `(${queryWhere}) and toDateTime(${state.connection.timestampField}) <= ${endTimestamp}`
        }
        queryWhere = ' prewhere ' + queryWhere
        limit = ` limit ${limit || 100} `
        const queryFull = `select * from ${state.connection.table}` +
          `${queryWhere} order by ${state.connection.timestampField} desc ${limit}`
        const queryHistogram = `select toStartOfInterval((${state.connection.timestampField}), interval 3 hour) as date, count(*) as count from ${state.connection.table}` +
          `${queryWhere} group by date with totals order by date`
        const [respHistogram, respData] = await Promise.all([
          dispatch('queryInner', queryHistogram),
          dispatch('queryInner', queryFull)
        ])
        commit('setLogs', {
          data: respData.data,
          meta: {
            count: respHistogram.totals.count,
            columns: respData.meta,
            histogram: respHistogram.data.map(x => ({
              date: new Date(Date.parse(x.date)),
              count: parseInt(x.count)
            }))
          }
        })
      },
      async queryInner ({ state }, queryFull) {
        const query = queryFull + ' format JSON'
        const url = `${state.connection.url}` +
          `&query=${query.replace('+', '%2B')}`
        // const url = `http://${state.connection.host}:${state.connection.port}` +
        //   `?user=${state.connection.user}&database=${state.connection.database}` +
        //   `&log_queries=1&output_format_json_quote_64bit_integers=1` +
        //   `&output_format_json_quote_denormals=1&&add_http_cors_header=1` +
        //   `&enable_http_compression=1&http_zlib_compression_level=9` +
        //   `&cancel_http_readonly_queries_on_client_close=1` +
        //   `&send_progress_in_http_headers=1` +
        //   `&query=${query}`
        // const resp = await this.$axios.$post(url, query)
        const resp = await this.$axios.$get(url)
        return resp
      }
    },
    modules: {}
  })
}

export default createStore
