//#region
//#endregion
const task = {
  title: "流程看板",
  subtask: {
    sk1: {
      title: "流程总数", // 卡片名称
      compute: "查询流程总量", // 计算方式
    },
    sk2: {
      title: "被引用流程数",
      compute: "流程总量中被任务引用的数量",
    },
    sk3: {
      title: "已审核流程数",
      compute: "流程视图总数",
      ctrlBar: {
        // 卡片右上方按钮组
        ctrl1: "新增页签 [流程视图], 并跳转", // 按钮动作描述
      },
    },
    sk4: {
      title: "未审核流程数",
      compute: "流程审核",
      ctrlBar: {
        ctrl1: "新增页签 [流程审核], 并跳转",
      },
    },
    sk5: {
      title: "流程提交排行榜",
      compute: {
        default:
          "统计: [本自然月], 员工, 新增 + 提交新版本(仅审核流程的最后保存人) 流程数量, 显示 top5", // 计算, 默认值, 允许修改
        filter: [true, "ctrlBar-ctrl1"], // 支持过滤
      },
      ctrlBar: { // 卡片控制区
        ctrl1: { // 控件 1
          action: "浮窗: control", // 动作
          control: "高级筛选器", // 控件类型
          options: ["自定义时间区间", "人名"], // 控件配置项
        },
        ctrl2: {
          action: "弹窗: 全部数据",
        },
      },
    },
    sk6: {
      title: "流程运行质量排行榜",
      compute: {
        default: "统计: [本自然月], 流程最后保存人的执行成功率, 显示 top5",
        filter: [true, "ctrlBar-ctrl1"],
      },
      ctrlBar: {
        ctrl1: {
          action: "浮窗显示控件",
          control: "高级筛选器",
          options: ["自定义时间区间","人名"],
        },
        ctrl2: {
          action: "弹窗: 全部数据",
        },
      },
    },
    sk7: {
      title: "流程分布统计",
      compute: "统计: 全部流程top5 的所属部门, top5 除外归于其他 ",
    },
    sk8: {
      title: "流程分布统计",
      compute: "统计: 显示流程top5 的所属部门, 其余部门数据归于[其他]",
      ctrlBar: {
        ctrl1: "弹窗: 全部数据",
      },
    },
    sk9: {
      title: "趋势统计",
      compute: {
        default:
          "统计: [本自然月], 新增流程(流程视图中增加的流程总数, 每个流程仅计数 1 次), 流程优化(流程视图中, 版本更新的流程总数, 每个版本计数 1 次) ",
        filter: [true, "charts-ctrlBar"],
      },
      ctrlBar: {
        ctrl1: "弹窗: 全部数据",
      },
      charts: { // 图表
        ctrlBar: { // 图标控制器
          ctrl1: "checkbox: ['本月', '本季度', '本年']",
          ctrl2: "自定义时间区间",
        },
      },
    },
    sk10: {
      title: "流程热度 top",
      compute: {
        default: "统计: [本自然月], 流程运行总数",
        filter: [true, "charts-ctrlBar"],
      },
      ctrlBar: {
        ctrl1: "弹窗: 全部数据",
      },
      charts: {
        ctrl: {
          ctrl1: "流程名称查询",
          ctrl2: "checkbox: ['近一小时(上一个整点区间)', '近一天(上一个整点倒推 24 小时)', '近七天(含今天, 七个自然日)', '本月(本自然月)']",
          ctrl3: "自定义时间区间",
          ctrl4: "切换: 正序/逆序",
        },
      },
    },
    sk11: {
      title: " 流程故障 top",
      compute: {
        default: "统计: [本自然月], 流程运行总数失败次数",
        filter: [true, "charts-ctrlBar"],
      },
      ctrlBar: {
        ctrl1: "弹窗: 全部数据",
      },
      charts: {
        ctrlBar: {
          ctrl1: "流程名称查询",
          ctrl2: "checkbox: ['近一小时(上一个整点区间)', '近一天(上一个整点倒推 24 小时)', '近七天(含今天, 七个自然日)', '本月(本自然月)']",
          ctrl3: "自定义时间区间",
          ctrl4: "切换: 正序/逆序",
        },
      },
    },
  },
};
