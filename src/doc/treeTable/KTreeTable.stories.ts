import type { Meta, StoryObj } from '@storybook/vue3';
import { KTreeTable } from '@components';
import { ref, reactive } from 'vue';
import DocumentationTemplate from './DocumentationTemplate.mdx';

// export interface TreeTableProps {
//   /**
//    * 列配置
//    */
//   column: columnConfigType[];
//   /**
//    * 是否显示分页 默认值 true0
//    */
//   showPage?: boolean;
//   /**
//    * 是否使用树形结构 默认值 false
//    */
//   useTree?: boolean;
//   /**
//    * 是否远程查询 默认值 false
//    */
//   isRemoteQuery?: boolean;
//   isServerPaging?: boolean;
//   /**
//    * 分页配置
//    */
//   paginationConfig?: PaginationConfigType;
//   /**
//    * 是否显示描述 默认值 true
//    */
//   showDescription?: boolean;
//   /**
//    * 是否显示表头工具栏 默认值 true
//    */
//   showHeaderTools?: boolean;
//   /**
//    * 批量操作配置
//    */
//   batchOperations?: any[];
//   /**
//    * 是否显示批量操作 默认值
//    */
//   showBatchOperation?: boolean;
//   /**
//    * 是否显示列头菜单 默认值 false
//    */
//   showColumnMenu?: boolean;
//   /**
//    * 是否显示拖拽列 默认值 false
//    */
//   showDragColumn?: boolean;
//   /**
//    * 单元格点击是否切换高亮状态 默认值 true
//    */
//   cellClickToggleHighlight?: boolean;
//   /**
//    * 自定义表头菜单组件
//    */
//   widgets?: (string | widgetItemType)[];
//   /**
//    * 是否显示搜索框 默认值 true
//    */
//   showSearchInput?: boolean;
//   /**
//    * 是否显示筛选器 默认值 true
//    */
//   showFilter?: boolean;
//   /**
//    * 是否显示刷新按钮 默认值 false
//    */
//   showRefresh?: boolean;
//   /**
//    * 是否显示数据穿梭按钮 默认值 false
//    */
//   showTransfer?: boolean;
//   /**
//    * 高级筛选器配置
//    */
//   advancedFilterConfig?: {
//     /**
//      * 自定义筛选列配置
//      */
//     filterColumns?: FilterColumnType[];
//     /**
//      * 是否筛选全部 默认值 true，为false时只筛选可见数据
//      */
//     filterAll?: boolean;
//     /**
//      * 排除字段
//      */
//     exclude?: string[];
//     /**
//      * 默认条件，只在初始化时生效
//      */
//     defaultConditions?: any[];
//   };
//   /**
//    * 搜索配置
//    */
//   searchConfig?: {
//     /**
//      * 是否严格匹配 默认值 false
//      */
//     strict?: boolean;
//     /**
//      * 自定义搜索方法，返回匹配的数据
//      */
//     searchMethod?: (key, data: any[]) => any[];
//     /**
//      * 是否远程查询 默认值 false
//      */
//     isRemoteQuery?: boolean;
//   };
// }

const meta = {
  title: 'Data Display(DD)/KTreeTable',
  component: KTreeTable,
  argTypes: {
    column: {
      control: 'boolean',
      description: 'column 列配置:, 配置项如下👇🏻',
    },
    // start column
    visible: {
      description: 'column 列配置:',
      type: 'string | number',
    },
    key: {
      description: 'column 列配置:',
      type: 'boolean',
    },
    field: {
      description: 'column 列配置:',
      type: 'string',
    },
    title: {
      description: 'column 列配置:',
      type: 'string',
    },
    width: {
      description: 'column 列配置:',
      type: 'string | number',
    },
    filters: {
      description: 'column 列配置:',
      type: 'any',
    },
    treeNode: {
      description: 'column 列配置:',
      type: 'boolean',
    },
    cellRender: {
      description: 'column 列配置:',
      type: 'any',
    },
    editRender: {
      description: 'column 列配置:',
      type: 'any',
    },
    minWidth: {
      description: 'column 列配置:',
      type: 'string | number',
    },
    sortable: {
      description: 'column 列配置:',
      type: 'boolean',
    },
    showIcon: {
      description: 'column 列配置:',
      type: 'boolean',
    },
    'column-showColumnMenu': {
      description: 'column 列配置:',
      type: 'boolean',
    },
    group: {
      description: 'column 列配置:',
      type: 'VxeColgroupProps[]',
    },
    dataType: {
      description: 'column 列配置:',
      type: 'string',
    },
    render: {
      description: 'column 列配置:',
      type: '() => VNode',
      default: 'undefined',
    },
    // end column
    showPage: {
      description: '是否显示分页 默认值 true',
      type: 'boolean',
    },
    useTree: {
      description: '是否使用树形结构 默认值 false',
      type: 'boolean',
    },
    isRemoteQuery: {
      description: '是否远程查询 默认值 false',
      type: 'boolean',
    },
    isServerPaging: {
      description: '是否服务端分页',
      type: 'boolean',
    },
    paginationConfig: {
      description: '分页配置',
      type: 'PaginationConfigType',
    },
    showDescription: {
      description: '是否显示描述 默认值 true',
      type: 'boolean',
    },
    showHeaderTools: {
      description: '是否显示表头工具栏 默认值 true',
      type: 'boolean',
    },
    batchOperations: {
      description: '批量操作配置',
      type: 'any[]',
    },
    showBatchOperation: {
      description: '是否显示批量操作 默认值',
      type: 'boolean',
    },
    showColumnMenu: {
      description: '是否显示列头菜单 默认值 false',
      type: 'boolean',
    },
    showDragColumn: {
      description: '是否显示拖拽列 默认值 false',
      type: 'boolean',
    },
    cellClickToggleHighlight: {
      description: '单元格点击是否切换高亮状态 默认值 true',
      type: 'boolean',
    },
    showSearchInput: {
      description: '是否显示搜索框 默认值 true',
      type: 'boolean',
    },
    showFilter: {
      description: '是否显示筛选器 默认值 true',
      type: 'boolean',
    },
    showRefresh: {
      description: '是否显示刷新按钮 默认值 false',
      type: 'boolean',
    },
    showTransfer: {
      description: '是否显示数据穿梭按钮 默认值 false',
      type: 'boolean',
    },
    // start widgets
    widgets: {
      control: 'boolean',
      description: '自定义表头菜单组件, 配置项如下👇🏻:',
      type: '(string | widgetItemType)[]',
    },
    id: {
      description: 'widgets 列配置:',
      type: 'string',
    },
    widget: {
      description: 'widgets 列配置:',
      type: 'Component | (() => VNode | Component)',
    },
    // end widgets
    // start advancedFilterConfig
    advancedFilterConfig: {
      description: '高级筛选器配置',
    },
    filterColumns: {
      if: { arg: 'advancedFilterConfig', truthy: true },
      description: '自定义筛选列配置',
      type: 'FilterColumnType[]',
    },
    // end advancedFilterConfig
  },
  args: {
    column: false,
    widgets: false,
    advancedFilterConfig: false,
  },
  parameters: {
    controls: {
      //     // exclude: ['showPage', 'border'],
      //     // exclude: /.*/g, // 禁用全部控制
    },
    docs: {
      //     // page: DocumentationTemplate,
    },
  },
} satisfies Meta<typeof KTreeTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const def: Story = {
  name: '默认',
  args: {},
  render: (args: any) => {
    return {
      components: { KTreeTable },
      setup() {
        const column = ref([
          {
            type: 'checkbox',
            width: '50',
          },
          {
            title: 'Id',
            field: 'id',
            width: '50',
            dataType: 'number',
          },
          {
            title: 'Name',
            field: 'name',
            dataType: 'string',
          },
          {
            title: 'Role',
            field: 'role',
            dataType: 'string',
            align: 'center',
          },
          {
            title: 'Sex',
            field: 'sex',
            dataType: 'string',
            align: 'left',
          },
          {
            title: 'Age',
            field: 'age',
            dataType: 'number',
            align: 'right',
          },
          {
            title: 'Address',
            field: 'address',
            dataType: 'string',
          },
        ]);
        const tableData = reactive([
          {
            id: 1,
            name: 'Test1',
            role: 'Develop',
            sex: 'Man',
            age: 28,
            address: 'test abc',
            icon: 'IconFolderOpen',
            iconStyle: {
              empty: false,
              color: '#f60',
              size: 20,
            },
          },
          {
            id: 2,
            name: 'Test2',
            role: 'Test',
            sex: 'Women',
            age: 42,
            address: 'Guangzhou',
            icon: 'IconFolderOpen',
            iconStyle: {
              empty: false,
              color: '#f60',
              size: 16,
            },
          },
          {
            id: 3,
            name: 'Test3',
            role: 'PM',
            sex: 'Man',
            age: 32,
            address: 'Shanghai',
            icon: 'IconFolderOpen',
            iconStyle: {
              empty: false,
              color: '#f60',
              size: 16,
            },
          },
          { id: 4, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
          { id: 5, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
          { id: 6, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
          { id: 7, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
          { id: 8, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
          { id: 9, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
          { id: 10, name: 'Test2', role: 'Test', sex: 'Women', age: 42, address: 'Guangzhou' },
          { id: 11, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
          { id: 12, name: 'Test4', role: 'Designer', sex: 'Women', age: 18, address: 'Shanghai' },
          { id: 13, name: 'Test5', role: 'Develop', sex: 'Man', age: 39, address: 'test abc' },
          { id: 14, name: 'Test6', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
          { id: 15, name: 'Test7', role: 'PM', sex: 'Man', age: 9, address: 'Shanghai' },
          { id: 16, name: 'Test8', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
        ]);
        return { args, column, tableData };
      },
      template: `
           <div :style="{ height: '500px' }">
              <k-tree-table :data="tableData" :column="column"></k-tree-table>
          </div>`,
    };
  },
};

import { ATExample } from '../../hooks';

import base from './base.vue';
import baseDoc from './base.vue?raw';
const doc1 = ATExample(base, 'base: 自定义颜色1', baseDoc);
export const def1Example: Story = {
  name: 'base',
  ...doc1,
};
