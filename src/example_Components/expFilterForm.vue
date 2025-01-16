<template>
  <!--     @change="(a) => console.log(a)"
    @reset="(a) => console.log(a)"
    @search="(a) => console.log(a)" -->
  <!-- :columns="4" -->
  <!--   visible -->
  <div class="bg-gray-100 p-10">
    <div class="bg-white rounded-lg shadow-lg p-10">
      <k-filter-form
        ref="filterForm"
        :items="items"
        @change="(data) => console.log('change =>>', data)"
        @reset="(data) => console.log('reset =>>', data)"
        @search="(data) => console.log('search =>>', data)"
        showColon
      >
        <!-- 自定义按钮 -->
        <!-- <template #action>
          <KButton
            @click="
              () => {
                filterForm.reset();
              }
            "
          >
            reset
          </KButton>
          <KButton main @click="() => console.log(filterForm.getFormData())">search</KButton>
        </template> -->
      </k-filter-form>
    </div>
  </div>
  <k-button @click="getformdate">getFormData</k-button>
</template>

<script lang="tsx" setup>
import { ref, nextTick } from 'vue';

const filterForm = ref<any>();
const bbm = ref<any>();

nextTick(() => {
  // console.log(filterForm.value);
});

const items = ref([
  // {
  //   label: '姓名123456789012345678901234567890',
  //   type: 'input',
  //   prop: 'name',
  //   value: '张三',
  //   'label-width': '100px',
  // },
  // {
  //   label: '性别',
  //   type: 'radio',
  //   prop: 'gender',
  //   // 作用与控件本身
  //   attrs: {
  //     size: 'lg',
  //     button: true,
  //   },
  //   value: '男', // 默认值
  //   options: [
  //     { label: '男', value: '男', color: 'red' }, // 兼容子控件属性
  //     { label: '女', value: '女' },
  //   ],
  // },
  {
    label: '吃点啥JJ',
    type: 'select',
    prop: 'foodJJ',
    value: '0',
    render: (formData) => {
      return (
        <KSelectV2
          multiple={true}
          clearable={true}
          collapseTags={true}
          maxCollapseTags={1}
          teleported={true}
          v-model={formData.foodJJ}
          options={[
            { label: '鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋鸡蛋', value: '0' },
            { label: '馒头', value: '1' },
            { label: '面包', value: '2' },
            { label: '烧麦', value: '3' },
            { label: '花卷', value: '4' },
            { label: '小笼包', value: '5' },
            { label: '大肉包', value: '6' },
            { label: '蛋挞', value: '7' },
            { label: '油条', value: '8' },
          ]}></KSelectV2>
      );
    },
  },
  // {
  //   label: '吃点啥',
  //   type: 'select',
  //   prop: 'food',
  //   value: '0',
  //   options: [
  //     { label: '鸡蛋', value: '0' },
  //     { label: '馒头', value: '1' },
  //     { label: '面包', value: '2' },
  //     { label: '烧麦', value: '3' },
  //     { label: '花卷', value: '4' },
  //     { label: '小笼包', value: '5' },
  //     { label: '大肉包', value: '6' },
  //     { label: '蛋挞', value: '7' },
  //     { label: '油条', value: '8' },
  //   ],
  //   attrs: {
  //     multiple: true,
  //     clearable: true,
  //     collapseTags: true,
  //     maxCollapseTags: 6,
  //     onChange: (value: any) => {
  //       console.log('onChange =>>', value);
  //     },
  //   },
  // },
  {
    label: '职业',
    type: 'select',
    prop: 'career',
    value: '0',
    options: [
      { label: '政府机构/国有企业员工', value: '0' },
      { label: '下一级', value: '1' },
    ],
    attrs: {
      onChange: (value: any) => {
        console.log('onChange =>>', value);
      },
    },
  },
  {
    label: '职业二级分类',
    type: 'select',
    prop: 'career2',
    value: '',
    visible: (formData: any) => {
      return formData.career === '1';
    },
    options: [
      { label: '政委', value: '0' },
      { label: '下一级', value: '1' },
    ],
  },
  {
    label: '职业三级级分类',
    type: 'select',
    prop: 'career3',
    value: '',
    visible: (formData: any) => {
      return formData.career2 === '1';
    },
    column: 2,
    options: [
      { label: '政委', value: '0' },
      { label: '下一级', value: '1' },
    ],
  },
  {
    label: '职业四级级分类',
    type: 'select',
    prop: 'career4',
    value: '',
    visible: (formData: any) => {
      return formData.career3 === '1';
    },
    options: [
      { label: '政委', value: '0' },
      { label: '下一级', value: '1' },
    ],
  },
  {
    label: '职业五级级分类',
    type: 'select',
    prop: 'career5',
    value: '',
    visible: (formData: any) => {
      return formData.career4 === '1';
    },
    column: 2,
    options: [
      { label: '政委', value: '0' },
      { label: '下一级', value: '1' },
    ],
  },
  {
    label: '兴趣爱好',
    type: 'checkbox',
    prop: 'interests',
    value: ['0', '2', '4'],
    column: 1,
    options: [
      { label: '体育运动', value: '0', size: 'sm' },
      { label: '音乐', value: '1' },
      { label: '绘画', value: '2' },
      { label: '美食', value: '3' },
      { label: '电子竞技', value: '4' },
      { label: '其他', value: '5' },
    ],
  },
  {
    label: '生日',
    type: 'date',
    prop: 'birthday',
    value: '2000-01-01',
  },
  {
    label: '生日',
    type: 'date',
    prop: 'birthday2',
    value: '2000-01-01',
  },
  {
    label: '生日',
    type: 'date',
    prop: 'birthday3',
    value: '2000-01-01',
  },
  {
    label: '自我评价',
    prop: 'comment',
    // 自定义渲染
    render: (item: any) => <KInput type={'textarea'} v-model={item['comment']} />,
    value: '这是一个示例评论',
  },
]);

function getformdate(params: type) {
  console.log(filterForm.value.getFormData());
}
</script>
