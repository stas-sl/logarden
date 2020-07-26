<template>
  <div>
    <ve-bar
      ref="chart"
      :data="chartData"
      :legend-visible="false"
      :title-visible="true"
      :brush="{
        xAxisIndex: 'all',
        throttleType: 'debounce',
        throttleDelay: 100,
        outOfBrush: {
          colorAlpha: 1
        },
        inBrush: {
          colorAlpha: .3
        }
      }"
      @ready="ready"
    />
  </div>
</template>

<script>
  import VeBar from 'v-charts/lib/histogram.common'
  import 'echarts/lib/component/brush'

  export default {
    components: { VeBar },
    props: ['data'],
    computed: {
      chartData () {
        return {
          columns: ['date', 'count'],
          rows: this.data
        }
      }
    },
    methods: {
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
      }
    }
  }
</script>
