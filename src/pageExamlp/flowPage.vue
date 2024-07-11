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

    <!-- is-wait -->
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
  }

  &.is-process {
    .title {
      // background-color: var(--k-orange-400);
      // color: #fff;
      .ksw-icon {
        transform: rotate(var(--rotate));
        animation: spin 3s linear infinite;
        svg {
          // color: #fff;
        }
      }
    }
  }

  &.is-process::before {
    background-image: linear-gradient(var(--rotate), #5ddcff, #2882ff 25%, #5ddcff 50%, #0037db);
    animation: spin 5s linear infinite;
    will-change: background-image;
  }
  &.is-process::after {
    background-image: linear-gradient(var(--rotate), #5ddcff, #2882ff 25%, #5ddcff 50%, #0037db);
    filter: blur(16px);
    transform: scale(1);
    animation: spin 5s linear infinite;
    will-change: background-image;
    opacity: 0.8;
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

.node5 {
  position: absolute;
  top: 770px;
  left: 100px;
}
</style>
