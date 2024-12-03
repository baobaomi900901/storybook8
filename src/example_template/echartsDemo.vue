<!--
* @description  参数1
* @fileName  echartsdemo
* @author userName
* @date 2024-08-13 11:52:07
* @version V3.0.0
!-->
<template>
  <div id="echartsdemo" class="echartsdemo"></div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
// import * as echarts from 'echarts';

onMounted(() => {
  // var chartDom = document.getElementById('echartsdemo');
  // var myChart = echarts.init(chartDom);
  // var option;

  var vvn = 0;
  // setInterval(() => {
  //   option.series[0].data[0]++;
  //   option && myChart.setOption(option);
  //   console.log(vvn++);
  // }, 100);
});
</script>
<style scoped>
#echartsdemo {
  width: 100vw;
  height: 200px;
}
</style>
