import type { Meta, StoryObj } from '@storybook/vue3';
import { KTreeTable, KTag } from '@components';
import { ref, reactive } from 'vue';
import DocumentationTemplate from '../../../.storybook/DocTemplate.mdx';

const meta = {
  title: 'Data Display(DD)/KTreeTable',
  component: KTreeTable,
  argTypes: {
    column: {
      description: '继承 VxeColumnProps:, 常用配置项如下👇🏻',
      control: 'boolean',
      type: 'columnConfigType | VxeColumnProps',
    },
    visible: {
      description: '是否可见',

      type: 'boolean',
    },
    key: {},
    field: {
      description: '是否可见',
      type: 'string',
    },
    title: {
      description: '列名',
      type: 'string',
    },
    width: {
      description: '列宽',
      type: ' string | number',
    },
    filters: {
      description: '筛选配置，参考vxe-table',
      type: 'any[]',
    },
    treeNode: {
      description: '该列是否为树节点，只在useTree为true时有效',
      type: 'boolean',
    },
    cellRender: {
      description: '自定义渲染列，参考vxe-table',
      type: 'any',
    },
    editRender: {
      description: '自定义渲染列，参考vxe-table',
      type: 'any',
    },
    minWidth: {
      description: '最小宽度',
      type: 'string | number',
    },
    sortable: {
      description: '参考vxe-table',
      type: 'boolean',
    },
    showColumnMenu: {
      description: '是否显示列头菜单',
      type: 'boolean',
    },
    group: {
      description: '多级列头配置，数组结构与列配置一致',
      type: 'VxeColgroupProps[]',
    },
    dataType: {
      description: '该列数据类型，默认string，用于表格高级筛选',
      type: 'string',
    },
    render: {
      description: '自定义渲染该列单元格内容',
      type: 'render?: () => VNode',
    },
    showPage: {
      description: '是否显示分页',
      type: 'boolean',
    },
    useTree: {
      description: '是否显示分页',
      type: 'boolean',
    },
    isRemoteQuery: {
      description: '是否显示分页',
      type: 'boolean',
    },
    isServerPaging: {
      description: '是否服务器分页',
      type: 'boolean',
    },
    paginationConfig: {
      description: '分页配置',
      type: 'PaginationConfigType',
    },
    showDescription: {
      description: '是否显示秒数',
      type: 'boolean',
    },
    showHeaderTools: {
      description: '是否显示表头工具栏',
      type: 'boolean',
    },
    batchOperations: {
      description: '批量操作配置',
      type: 'any[]',
    },
    showBatchOperation: {
      description: '是否显示批量操作',
      type: 'boolean',
    },
    showColumnMenu2: {
      description: '是否显示列头菜单',
      type: 'boolean',
    },
    showDragColumn: {
      description: '是否显示拖拽列',
      type: 'boolean',
    },
    cellClickToggleHighlight: {
      description: '单元格点击是否切换高亮状态',
      type: 'boolean',
    },
    widgets: {
      description: '自定义表头菜单组件',
      type: '(string | widgetItemType)[]',
    },
    showSearchInput: {
      description: '是否显示搜索框',
      type: 'boolean',
    },
    showFilter: {
      description: '是否显示筛选器',
      type: 'boolean',
    },
    showRefresh: {
      description: '是否显示刷新按钮',
      type: 'boolean',
    },
    showTransfer: {
      description: '是否显示数据穿梭按钮',
      type: 'boolean',
    },
    advancedFilterConfig: {
      description: '高级筛选器配置: 如下👇🏻',
      type: 'boolean',
    },
    filterColumns: {
      description: '自定义筛选列配置',
      type: 'FilterColumnType[]',
    },
    filterAll: {
      description: '是否筛选全部 默认值 true，为false时只筛选可见数据',
      type: 'boolean',
    },
    exclude: {
      description: '排除字段',
      type: 'string[]',
    },
    defaultConditions: {
      description: '默认条件，只在初始化时生效',
      type: 'any[]',
    },
    searchConfig: {
      description: '搜索配置',
      type: 'boolean',
    },
    strict: {
      description: '是否严格匹配 默认值 false',
      type: 'boolean',
    },
    searchMethod: {
      description: '自定义搜索方法，返回匹配的数据',
      type: '(key, data: any[]) => any[]',
    },
    'searchConfig--isRemoteQuery': {
      description: '是否远程查询 默认值 false',
      type: 'boolean',
    },
  },
  args: {},
  parameters: {
    controls: {
      //     // exclude: ['showPage', 'border'],
      //     // exclude: /.*/g, // 禁用全部控制
    },
    docs: {
      page: DocumentationTemplate,
    },
  },
} satisfies Meta<typeof KTreeTable>;

export default meta;

type Story = StoryObj<typeof meta>;

// export const def: Story = {
//   name: '默认',
//   args: {},
//   render: (args: any) => {
//     return {
//       components: { KTreeTable },
//       setup() {
//         const column = ref([
//           {
//             type: 'checkbox',
//             width: '50',
//           },
//           {
//             title: 'Id',
//             field: 'id',
//             width: '50',
//             dataType: 'number',
//           },
//           {
//             title: 'Name',
//             field: 'name',
//             dataType: 'string',
//           },
//           {
//             title: 'Role',
//             field: 'role',
//             dataType: 'string',
//             align: 'center',
//           },
//           {
//             title: 'Sex',
//             field: 'sex',
//             dataType: 'string',
//             align: 'left',
//           },
//           {
//             title: 'Age',
//             field: 'age',
//             dataType: 'number',
//             align: 'right',
//           },
//           {
//             title: 'Address',
//             field: 'address',
//             dataType: 'string',
//           },
//         ]);
//         const tableData = reactive([
//           {
//             id: 1,
//             name: 'Test1',
//             role: 'Develop',
//             sex: 'Man',
//             age: 28,
//             address: 'test abc',
//             icon: 'IconFolderOpen',
//             iconStyle: {
//               empty: false,
//               color: '#f60',
//               size: 20,
//             },
//           },
//           {
//             id: 2,
//             name: 'Test2',
//             role: 'Test',
//             sex: 'Women',
//             age: 42,
//             address: 'Guangzhou',
//             icon: 'IconFolderOpen',
//             iconStyle: {
//               empty: false,
//               color: '#f60',
//               size: 16,
//             },
//           },
//           {
//             id: 3,
//             name: 'Test3',
//             role: 'PM',
//             sex: 'Man',
//             age: 32,
//             address: 'Shanghai',
//             icon: 'IconFolderOpen',
//             iconStyle: {
//               empty: false,
//               color: '#f60',
//               size: 16,
//             },
//           },
//           { id: 4, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
//           { id: 5, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
//           { id: 6, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
//           { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
//           { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
//           { id: 9, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
//           { id: 10, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
//           { id: 11, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
//           { id: 12, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
//           { id: 13, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
//           { id: 14, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
//           { id: 15, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
//           { id: 16, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
//         ]);
//         return { args, column, tableData };
//       },
//       template: `
//            <div :style="{ height: '500px' }">
//               <k-tree-table :data="tableData" :column="column"></k-tree-table>
//           </div>`,
//     };
//   },
// };

import { ATExample } from '../../hooks';

// base
import base from './base.vue';
import baseDoc from './base.vue?raw';
const doc1 = ATExample(base, '基础使用', baseDoc);
export const def1Example: Story = {
  name: '基础使用',
  ...doc1,
};

// CellLayout
import cellLayout from './cellLayout.vue';
import cellLayoutDoc from './cellLayout.vue?raw';
const doc2 = ATExample(cellLayout, 'cellLayout: 单元格布局', cellLayoutDoc);
export const def2Example: Story = {
  name: '单元格布局',
  ...doc2,
};

// EditableCells
import editableCells from './editableCells.vue';
import editableCellsDoc from './editableCells.vue?raw';
const doc3 = ATExample(
  editableCells,
  'editableCells: 可编辑单元格, 示例中双击 Name 列的单元格文字,即可编辑',
  editableCellsDoc,
);
export const def3Example: Story = {
  name: '可编辑单元格',
  ...doc3,
};

// searchFunction
import searchFunction from './searchFunction.vue';
import searchFunctionDoc from './searchFunction.vue?raw';
const doc4 = ATExample(searchFunction, 'searchFunction: 搜索功能', searchFunctionDoc);
export const def4Example: Story = {
  name: '自定义搜索方法',
  ...doc4,
};

// advancedScreening
import advancedScreening from './advancedScreening.vue';
import advancedScreeningDoc from './advancedScreening.vue?raw';
const doc5 = ATExample(advancedScreening, 'advancedScreening: 高级筛选器', advancedScreeningDoc);
export const def5Example: Story = {
  name: '高级筛选器',
  ...doc5,
};

// formToolbar
import formToolbar from './formToolbar.vue';
import formToolbarDoc from './formToolbar.vue?raw';
const doc6 = ATExample(formToolbar, 'formToolbar: 表单工具栏', formToolbarDoc);
export const def6Example: Story = {
  name: '表单工具栏',
  ...doc6,
};

// customRender
import customRender from './customRender.vue';
import customRenderDoc from './customRender.vue?raw';
const doc7 = ATExample(customRender, 'customRender: 自定义渲染', customRenderDoc);
export const def7Example: Story = {
  name: '自定义渲染',
  ...doc7,
};

// customCellIcon
import customCellIcon from './customCellIcon.vue';
import customCellIconDoc from './customCellIcon.vue?raw';
const doc8 = ATExample(customCellIcon, 'customCellIcon: 自定义单元格图标', customCellIconDoc);
export const def8Example: Story = {
  name: '自定义单元格图标',
  ...doc8,
};

// useTreeTable
import useTreeTable from './useTreeTable.vue';
import useTreeTableDoc from './useTreeTable.vue?raw';
const doc9 = ATExample(useTreeTable, 'useTreeTable: 树形表格', useTreeTableDoc);
export const def9Example: Story = {
  name: '树形表格',
  ...doc9,
};

// useTableSort
import useTableSort from './useTableSort.vue';
import useTableSortDoc from './useTableSort.vue?raw';
const doc10 = ATExample(useTableSort, 'useTableSort: 表格排序', useTableSortDoc);
export const def10Example: Story = {
  name: '表格排序',
  ...doc10,
};

// useTableFilter
import useTableFilter from './useTableFilter.vue';
import useTableFilterDoc from './useTableFilter.vue?raw';
const doc11 = ATExample(useTableFilter, 'useTableFilter: 表格筛选', useTableFilterDoc);
export const def11Example: Story = {
  name: '表格筛选',
  ...doc11,
};

// 自动生成序号
import autoGenerateIndex from './autoGenerateIndex.vue';
import autoGenerateIndexDoc from './autoGenerateIndex.vue?raw';
const doc12 = ATExample(autoGenerateIndex, 'autoGenerateIndex: 自动生成序号', autoGenerateIndexDoc);
export const def12Example: Story = {
  name: '自动生成序号',
  ...doc12,
};
