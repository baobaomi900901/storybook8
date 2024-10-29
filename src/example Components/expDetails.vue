<!--
* @description  参数1
* @fileName  expDetails
* @author userName
* @date 2024-10-25 09:51:33
* @version V3.0.0
!-->
<template>
  <div class="epx-container w-full gap-4">
    <div class="epx-title col-span-2">组件</div>
    <SBExamplePanel open>
      <KDetails :abstract="abstract" showLine direction="horizontal"></KDetails>
    </SBExamplePanel>
  </div>
</template>

<script lang="tsx" setup>
const abstract = [
  {
    label: '姓名',
    value: '张三',
  },
  {
    label: '性别',
    value: '男',
  },
  {
    label: '职业',
    render: () => {
      return <KTag>设计师</KTag>;
    },
  },
  {
    label: '年龄',
    value: '25',
  },
  {
    label: '职业(2)',
    render: () => {
      return <KTag>开发</KTag>;
    },
  },
  {
    label: '详情',
    column: 10, // 占几行, 会计算最大行数
    value:
      '这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容, 这里是详情内容',
  },
  {
    label: '年龄',
    value: '25',
  },
];
</script>
<style scoped></style>
