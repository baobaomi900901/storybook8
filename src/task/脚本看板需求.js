//#region
//#endregion
const task = {
  title: "脚本看板",
  subtask: {
    sk1: {
      title: "仓库数量",
      compute: "仓库数量",
    },
    sk2: {
      title: "项目数量",
      compute: "所有仓库的项目总和",
    },
    sk3: {
      title: "脚本数量",
      compute: "所有仓库的脚本总和",
    },
    sk4: {
      title: "非活跃脚本",
      compute: "开发仓, 7 天内未审核脚本数量",
    },
    sk5: {
      title: "脚本类型统计",
      compute: "脚本文件类型占比, top5, 其余的归为其他",
    },
    sk6: {
      title: "故障 top N",
      compute: {
        default: "统计: [本自然月], 脚本, 执行正常统计", // 计算, 默认值, 允许修改
        filter: [true, "ctrlBar-ctrl1"], // 支持过滤
      },
      ctrlBar: {
        // 卡片控制区
        ctrl1: {
          // 控件 1
          action: "浮窗: control", // 动作
          control: "高级筛选器", // 控件类型
          options: ["自定义时间区间", "脚本名称"], // 控件配置项
        },
        ctrl2: {
          action: "弹窗: 全部数据",
        },
      },
    },
    sk7: {
      title: "修改 top N",
      compute: {
        default: "统计: [本自然月], 脚本, 新增版本统计", // 计算, 默认值, 允许修改
        filter: [true, "ctrlBar-ctrl1"], // 支持过滤
      },
      ctrlBar: {
        // 卡片控制区
        ctrl1: {
          // 控件 1
          action: "浮窗: control", // 动作
          control: "高级筛选器", // 控件类型
          options: ["自定义时间区间", "脚本名称"], // 控件配置项
        },
        ctrl2: {
          action: "弹窗: 全部数据",
        },
      },
    },
    sk8: {
      title: "代码提交排行榜",
      compute: {
        default: "统计: [本自然月], 人, 提交新版本的代码行数 ", // 计算, 默认值, 允许修改
        filter: [true, "ctrlBar-ctrl1"], // 支持过滤
      },
      ctrlBar: {
        // 卡片控制区
        ctrl1: {
          // 控件 1
          action: "浮窗: control", // 动作
          control: "高级筛选器", // 控件类型
          options: ["自定义时间区间", "人"], // 控件配置项
        },
        ctrl2: {
          action: "弹窗: 全部数据",
        },
      },
    },
    sk9: {
      title: "脚本提交数量排行榜",
      compute: {
        default: "统计: [本自然月], 人, 提交新版本 ", // 计算, 默认值, 允许修改
        filter: [true, "ctrlBar-ctrl1"], // 支持过滤
      },
      ctrlBar: {
        // 卡片控制区
        ctrl1: {
          // 控件 1
          action: "浮窗: control", // 动作
          control: "高级筛选器", // 控件类型
          options: ["自定义时间区间", "人"], // 控件配置项
        },
        ctrl2: {
          action: "弹窗: 全部数据",
        },
      },
    },
    sk10: {
      title: " 代码质量之星 ",
      compute: {
        default: "统计: [本自然月], 人, 脚本执行成功率", // 计算, 默认值, 允许修改
        filter: [true, "ctrlBar-ctrl1"], // 支持过滤
      },
      ctrlBar: {
        // 卡片控制区
        ctrl1: {
          // 控件 1
          action: "浮窗: control", // 动作
          control: "高级筛选器", // 控件类型
          options: ["自定义时间区间", "人"], // 控件配置项
        },
        ctrl2: {
          action: "弹窗: 全部数据",
        },
      },
    },
    sk11: {
      title: "趋势统计",
      compute: {
        default: "统计: [本自然月], 新增脚本数量, 新增脚本版本数量", // 计算, 默认值, 允许修改
        filter: [true, "charts-ctrlBar"], // 支持过滤
      },
      ctrlBar: {
        ctrl1: "弹窗: 全部数据",
      },
      charts: {
        ctrlBar: {
          ctrl1: "checkbox: ['本月', '本季度', '本年']",
          ctrl2: "自定义时间区间",
        },
      },
    },
    sk12: {
      title: "热度统计",
      compute: {
        default: "统计: [本自然月], 脚本运行数量 top", // 计算, 默认值, 允许修改
        filter: [true, "charts-ctrlBar"], // 支持过滤
      },
      ctrlBar: {
        ctrl1: "弹窗: 全部数据",
      },
      charts: {
        ctrlBar: {
          ctrl1: "流程名称查询",
          ctrl2: "checkbox: ['近一小时', '近一天', '近七天', '本月']",
          ctrl3: "切换: 正序/逆序",
        },
      },
    },
    sk13: {
      title: "缺陷新增统计",
      compute: {
        default: "统计: [本自然月],扫描新增缺陷", // 计算, 默认值, 允许修改
        filter: [true, "charts-ctrlBar"], // 支持过滤
      },
      ctrlBar: {
        ctrl1: "弹窗: 全部数据",
      },
      charts: {
        ctrlBar: {
          ctrl1: "checkbox: ['本月', '本季度', '本年']",
          ctrl2: "自定义时间区间",
        },
      },
    },
    sk14: {
      title: "缺陷类型统计",
      compute: "总缺陷类型",
      ctrlBar: {
        ctrl1: "弹窗: 全部数据",
      },
    },
  },
};
