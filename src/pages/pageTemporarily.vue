<!--
* @description  参数1
* @fileName  pageTemporarily
* @author userName
* @date 2024-11-21 11:52:01
* @version V3.0.0
!-->
<template>
  <div class="w-80 text-ellipsis">
    <div class="text-nowrap w-full overflow-hidden text-ellipsis">
      显示1行, 分类一,
      宝宝米,zzzz,xxx,ccc,222,333,444,555,11111,wwww,sssssss,qqq,222222222,wwwwwww,eeee,rrrrr,ttttt,yyyyyy,iiiiii,aaaaa,ddddd,fffff
    </div>
    <br />
    <div class="bbm2 w-full" style="-webkit-line-clamp: 2">
      显示2行, 分类一,
      宝宝米,zzzz,xxx,ccc,222,333,444,555,11111,wwww,sssssss,qqq,222222222,wwwwwww,eeee,rrrrr,ttttt,yyyyyy,iiiiii,aaaaa,ddddd,fffff
    </div>
  </div>
  <div ref="pageTemporarily" class="pageTemporarily p-4">
    <k-button main>123</k-button>
    <KButton color="#ff5500" main>按钮</KButton>
    <KButton color="#ff5500" main>按钮</KButton>
    <KButton color="#ff5500" main>按钮</KButton>
    <KButton color="#ff5500" main>按钮</KButton>
    <KButton color="#ff5500" main>按钮</KButton>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue';
import { GetColorLevelNew } from '@/utils/color';

console.log('1', GetColorLevelNew('#1890ff'));
</script>
<style scoped>
.bbm2 {
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
}
</style>
