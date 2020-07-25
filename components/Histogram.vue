<template>
  <div>
    <ve-bar
      ref="chart"
      :data="chartData"
      :legend-visible="false"
      :title-visible="true"
      height1="300px"
      :brush="{
       xAxisIndex: 'all',
       // throttleType: 'debounce',
       // throttleDelay: 100,
       outOfBrush: {
               colorAlpha: 1
       },
       inBrush: {
               colorAlpha: .3
       }}"
      @ready="ready"
      :events="{
        rendered: rendered,
      }"
    />
    <v-btn @click="click">x</v-btn>
  </div>
</template>

<script>
  import VeBar from 'v-charts/lib/histogram.common'
  import 'echarts/lib/component/brush'

  export default {
    components: { VeBar },
    props: ['data'],
    mounted () {
      const e = this.$refs.chart.echarts
      e.dispatchAction({
        type: 'takeGlobalCursor',
        key: 'brush',
        brushOption: {
          brushType: 'lineX',
          brushMode: 'single'
        }
      })
    },
    computed: {
      chartData () {
        return {
          columns: ['date', 'count'],
          rows: this.data
        }
      }
    },
    // watch: {
    //   data () {
    //     setTimeout(() => {
    //       const e = this.$refs.chart.echarts
    //       e.dispatchAction({
    //         type: 'takeGlobalCursor',
    //         key: 'brush',
    //         brushOption: {
    //           brushType: 'lineX',
    //           brushMode: 'single'
    //         }
    //       })
    //     }, 1)
    //   }
    // },
    methods: {
      rendered () {
        console.log('rendered')
      },
      ready () {
        const e = this.$refs.chart.echarts
        e.dispatchAction({
          type: 'takeGlobalCursor',
          key: 'brush',
          brushOption: {
            brushType: 'lineX',
            brushMode: 'single'
          }
        })
      },
      click () {
        // console.log(this.$refs.echart)
        // e.on('brushEnd', function (param) {
        //   console.log(param)
        // })
        // e.dispatchAction({
        //   type: 'takeGlobalCursor',
        // key: 'dataZoomSelect',
        // dataZoomSelectActive: true
        // })
        // e.dispatchAction({
        //   type: 'takeGlobalCursor',
        //   key: 'brush',
        //   brushOption: {
        //     brushType: 'lineX',
        //     brushMode: 'single'
        //   }
        // })
      }
    }
  }
</script>
