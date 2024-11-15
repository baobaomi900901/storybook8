<!--
* @description  参数1
* @fileName  flowPage
* @author userName
* @date 2024-07-11 14:56:15
* @version V3.0.0
!-->
<template>
  <div id="flowPage" class="flowPage">
    <div class="node node-type-start is-finish node1">
      <div class="title">
        <!-- <span class="ksw-icon"></span> -->
        <IconFlowStart size="24px"></IconFlowStart>
        开始
      </div>
      <div class="content"></div>
    </div>

    <div class="node node-type-end node1-2">
      <div class="title">
        <!-- <span class="ksw-icon"></span> -->
        <IconFlowEnd size="24px"></IconFlowEnd>
        结束
      </div>
      <div class="content"></div>
    </div>

    <!-- is-finish -->
    <div class="node node-type-component is-finish node2">
      <div class="title">
        <!-- <span class="ksw-icon"></span> -->
        <IconFlowComponent size="24px"></IconFlowComponent>
        组件
      </div>
      <div class="content">
        <div class="content-name">
          <IconCTypeJSColor></IconCTypeJSColor>
          拨测 1
        </div>
        <div class="content-ip">
          <IconIP></IconIP>
          192.168.1.1
        </div>
        <div class="note">备注信息...</div>
      </div>
    </div>

    <!-- is-skip -->
    <div class="node node-type-component is-skip node3">
      <div class="title">
        <!-- <span class="ksw-icon"></span> -->
        <IconFlowComponent size="24px"></IconFlowComponent>
        组件
      </div>
      <div class="content">
        <div class="content-name">
          <IconCTypeJSColor></IconCTypeJSColor>
          拨测 1
        </div>
        <div class="content-ip">
          <IconIP></IconIP>
          192.168.1.1
        </div>
        <div class="note">备注信息...</div>
      </div>
    </div>

    <!-- is-skip -->
    <div class="node node-type-component is-error node3-2">
      <div class="title">
        <!-- <span class="ksw-icon"></span> -->
        <IconFlowComponent size="24px"></IconFlowComponent>
        组件
      </div>
      <div class="content">
        <div class="content-name">
          <IconCTypeJSColor></IconCTypeJSColor>
          拨测 1
        </div>
        <div class="content-ip">
          <IconIP></IconIP>
          192.168.1.1
        </div>
        <div class="note">备注信息... is-error</div>
      </div>
    </div>

    <!-- is-process -->
    <div class="node node-type-component is-process node4">
      <div class="title">
        <!-- <span class="ksw-icon"></span> -->
        <IconFlowComponent size="24px"></IconFlowComponent>
        组件
      </div>
      <div class="content">
        <div class="content-name">
          <IconCTypeJSColor></IconCTypeJSColor>
          拨测 1
        </div>
        <div class="content-ip">
          <IconIP></IconIP>
          192.168.1.1
        </div>
        <div class="note">备注信息...</div>
      </div>
    </div>

    <!-- is-process2 -->
    <div class="node node-type-component is-process2 node4-2">
      <div class="title">
        <!-- <span class="ksw-icon"></span> -->
        <IconFlowComponent size="24px"></IconFlowComponent>
        组件
      </div>
      <div class="content">
        <div class="content-name">
          <IconCTypeJSColor></IconCTypeJSColor>
          拨测 1
        </div>
        <div class="content-ip">
          <IconIP></IconIP>
          192.168.1.1
        </div>
        <div class="note">备注信息...</div>
      </div>
    </div>

    <!-- is-process3 -->
    <div class="node node-type-component is-process3 node4-3">
      <div class="title">
        <!-- <span class="ksw-icon"></span> -->
        <IconFlowComponent size="24px"></IconFlowComponent>
        组件
      </div>
      <div class="content">
        <div class="content-name">
          <IconCTypeJSColor></IconCTypeJSColor>
          拨测 1
        </div>
        <div class="content-ip">
          <IconIP></IconIP>
          192.168.1.1
        </div>
        <div class="note">备注信息...</div>
      </div>
    </div>

    <!-- is-process4 -->
    <div class="node node-type-component is-process4 node4-4">
      <div class="title">
        <!-- <span class="ksw-icon"></span> -->
        <IconFlowComponent size="24px"></IconFlowComponent>
        组件
      </div>
      <div class="content">
        <div class="content-name">
          <IconCTypeJSColor></IconCTypeJSColor>
          拨测 1
        </div>
        <div class="content-ip">
          <IconIP></IconIP>
          192.168.1.1
        </div>
        <div class="note">备注信息...</div>
      </div>
    </div>

    <!-- is-process5 -->
    <div class="node node-type-component is-process4 is-danger node4-5">
      <div class="title">
        <!-- <span class="ksw-icon"></span> -->
        <IconFlowComponent size="24px"></IconFlowComponent>
        组件
      </div>
      <div class="content">
        <div class="content-name">
          <IconCTypeJSColor></IconCTypeJSColor>
          拨测 1
        </div>
        <div class="content-ip">
          <IconIP></IconIP>
          192.168.1.1
        </div>
        <div class="note">备注信息: is-danger...</div>
      </div>
    </div>

    <!-- is-process5 -->
    <div class="node node-type-component is-process4 is-warning node4-6">
      <div class="title">
        <!-- <span class="ksw-icon"></span> -->
        <IconFlowComponent size="24px"></IconFlowComponent>
        组件
      </div>
      <div class="content">
        <div class="content-name">
          <IconCTypeJSColor></IconCTypeJSColor>
          拨测 1
        </div>
        <div class="content-ip">
          <IconIP></IconIP>
          192.168.1.1
        </div>
        <div class="note">备注信息: is-warning...</div>
      </div>
    </div>

    <!-- default : wait-->
    <div class="node node-type-component node5">
      <div class="title">
        <!-- <span class="ksw-icon"></span> -->
        <IconFlowComponent size="24px"></IconFlowComponent>
        组件
      </div>
      <div class="content">
        <div class="content-name">
          <IconCTypeJSColor></IconCTypeJSColor>
          拨测 1
        </div>
        <div class="content-ip">
          <IconIP></IconIP>
          192.168.1.1
        </div>
        <div class="note">备注信息...</div>
      </div>
    </div>
  </div>
</template>

<!-- wait, process, finish, error, skip -->

<script setup>
import { ref, reactive } from 'vue';
</script>
<style lang="less">
@import url('../../kswux/package/style/general.less');
@import url('../../kswux/package/style/variable.css');

@property --rotate {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.flowPage {
  background-image: url('./assets/bg@2x.png');
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;
  width: 1920px;
  height: 1080px;
}

.node {
  width: 200px;
  background-color: #fff;
  border-radius: 0.5rem;
  // overflow: hidden;
  /* 阴影 */
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.16);
  position: relative;
  z-index: 1;

  .title {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 650;
    color: #333;
    background: #fff;
    padding: 0.25rem 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    .ksw-icon.ksw-icon-FlowStart {
      svg {
        color: var(--k-status-success);
      }
    }
    .ksw-icon.ksw-icon-FlowComponent {
      svg {
        color: var(--k-status-primary);
      }
    }
    .ksw-icon.ksw-icon-FlowEnd {
      svg {
        color: var(--k-status-success);
      }
    }
  }

  .content {
    font-size: 1rem;
    border-top: 1px solid #eee;
    min-height: 1rem;
    background-color: #fafafa;
    color: var(--k-status-info);
    padding: 0.25rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-size: 0.75rem;

    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;

    .ksw-icon-IP {
      svg {
        color: var(--k-status-primary);
      }
    }

    .ksw-icon {
      svg {
        width: 1rem;
        height: 1rem;
      }
    }

    .content-ip,
    .content-name {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  &.is-finish {
    .title {
      background-color: var(--k-green-400);
      color: #fff;
      .ksw-icon {
        svg {
          color: #fff;
        }
      }
    }
    .content {
      background-color: var(--k-green-50);
    }
  }
  &.is-skip {
    .title {
      background-color: var(--k-orange-400);
      color: #fff;
      .ksw-icon {
        svg {
          color: #fff;
        }
      }
    }
    .content {
      background-color: var(--k-orange-50);
    }
  }
  &.is-error {
    .title {
      background-color: var(--k-red-400);
      color: #fff;
      .ksw-icon {
        svg {
          color: #fff;
        }
      }
    }
    .content {
      background-color: var(--k-red-50);
    }
  }

  &.is-process {
    .title {
      // background-color: var(--k-orange-400);
      // color: #fff;
      .ksw-icon {
        transform: rotate(var(--rotate));
        animation: spin 3s linear infinite;
      }
    }
    // 描边
    &::before {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      // width: 200px;
      // height: 200px;
      width: calc(100% + 6px);
      height: calc(100% + 6px);
      // background-color: red;
      border-radius: 0.625rem;
      z-index: -1;
      // 动画
      background-image: linear-gradient(var(--rotate), #5ddcff, #2882ff 25%, #5ddcff 75%, #0037db);
      animation: spin 5s linear infinite;
      will-change: background-image;
    }

    // 投影
    &::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      width: 100%;
      height: 100%;
      // background-color: blue;
      border-radius: 0.5rem;
      z-index: -1;

      // 动画
      background-image: linear-gradient(var(--rotate), #5ddcff, #2882ff 25%, #5ddcff 75%, #0037db);
      filter: blur(16px);
      transform: scale(1);
      animation: spin 5s linear infinite;
      will-change: background-image;
      opacity: 0.8;
    }
  }

  &.is-process2 {
    .title {
      background-color: transparent;
      color: #fff;
      .ksw-icon {
        transform: rotate(var(--rotate));
        animation: spin 3s linear infinite;
        svg {
          color: #fff;
        }
      }
    }
    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: linear-gradient(
        90deg,
        #a8dbff,
        #5ddcff,
        #2882ff,
        #002bff,
        #2882ff,
        #5ddcff,
        #a8dbff
      );
      border-radius: 0.5rem;
      background-size: 600%;
      will-change: background;
      animation: glowing 20s linear infinite;
    }
    &::after {
      transform: scale(1.1);
      filter: blur(16px);
      opacity: 0.3;
    }
  }

  &.is-process3 {
    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% + 6px);
      height: calc(100% + 6px);
      z-index: -1;
      background: conic-gradient(
        from var(--rotate) at 50% 50%,
        #2882ff 0deg,
        rgba(40, 130, 255, 0) 180deg,
        #2882ff 180deg,
        rgba(40, 130, 255, 0) 0deg,
        #2882ff 0deg,
        rgba(40, 130, 255, 0) 360deg
      );

      border-radius: 0.5rem;
      will-change: background;
      animation: spin 3s linear infinite;
    }
    &::after {
      transform: translate(-50%, -50%) scale(1.1);
      filter: blur(16px);
      opacity: 0.3;
    }
  }

  &.is-process4 {
    --color-1: var(--k-blue-500);
    --color-2: var(--k-blue-600);
    --color-3: rgba(40, 130, 255, 0);
    .title {
      background-color: transparent;
      background: linear-gradient(90deg, var(--color-1), var(--color-2), var(--color-1));
      background-size: 600%;
      will-change: background;
      animation: glowing 20s linear infinite;
      color: #fff;
      .ksw-icon {
        transform: rotate(var(--rotate));
        animation: spin 3s linear infinite;
        svg {
          color: #fff;
        }
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% + 6px);
      height: calc(100% + 6px);
      z-index: -1;
      background: conic-gradient(
        from var(--rotate) at 50% 50%,
        var(--color-3) 0deg,
        var(--color-1) 180deg,
        var(--color-3) 180deg,
        var(--color-1) 0deg,
        var(--color-3) 0deg,
        var(--color-1) 360deg
      );

      border-radius: 0.5rem;
      will-change: background;
      animation: spin 3s linear infinite;
      z-index: -2;
    }
  }
}
.is-process4.is-danger {
  --color-1: var(--k-red-500);
  --color-2: var(--k-red-600);
  --color-3: rgba(253, 90, 135, 0);
}

.is-process4.is-warning {
  --color-1: var(--k-orange-400);
  --color-2: var(--k-orange-500);
  --color-3: rgba(253, 90, 135, 0);
}

@keyframes glowing {
  0% {
    background-position: 600% 0;
  }
  100% {
    background-position: 0 0;
  }
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}

.node1 {
  position: absolute;
  top: 300px;
  left: 100px;
}

.node1-2 {
  position: absolute;
  top: 900px;
  left: 100px;
}

.node2 {
  position: absolute;
  top: 380px;
  left: 100px;
}

.node3 {
  position: absolute;
  top: 510px;
  left: 100px;
}

.node3-2 {
  position: absolute;
  top: 510px;
  left: 360px;
}

.node4 {
  position: absolute;
  top: 640px;
  left: 100px;
}

.node4-2 {
  position: absolute;
  top: 640px;
  left: 360px;
}

.node4-3 {
  position: absolute;
  top: 640px;
  left: 620px;
}

.node4-4 {
  position: absolute;
  top: 640px;
  left: 880px;
}

.node4-5 {
  position: absolute;
  top: 640px;
  left: 1140px;
}

.node4-6 {
  position: absolute;
  top: 770px;
  left: 1140px;
}

.node5 {
  position: absolute;
  top: 770px;
  left: 100px;
}
</style>
