<!--
* @description  参数1
* @fileName  Stash
* @author userName
* @date 2024-07-22 20:43:09
* @version V3.0.0
!-->
<template>
  <div id="stashLayout" class="stashLayout flex flex-col h-full">
    <div class="aom-head">
      <div
        class="aom-head-content bg-white w-full h-12 flex justify-between items-center pl-6 border-b"
      >
        <span class="left"><img src="./assets/ksw-logo.svg" alt="" /></span>
        <span class="right flex justify-between items-center">
          <span class="KButtonGroup">
            <KButton size="sm" icon>
              <IconMenuCollect></IconMenuCollect>
            </KButton>
            <KButton size="sm" icon>
              <IconArrowBottom />
            </KButton>
          </span>
          <span
            ref="KAvatar"
            class="k-avatar rounded-full uppercase inline-block mx-4 w-8 h-8 flex justify-center items-center text-base font-bold"
          >
            <span>{{ avatarName }}</span>
          </span>
        </span>
      </div>
      <div class="aom-head-tabs border-b h-10 flex justify-between items-center">
        <div class="menu-slot pl-6 pr-3 h-full border-r flex justify-center items-center">
          <div ref="menu" class="menu" />
        </div>
        <div class="tabs h-10 w-full flex-1">
          <KMenu :menuItem="MenuData" />
        </div>
        <div class="edit w-10 h-10 flex justify-center items-center border-l">
          <IconTriangleBottom size="24" />
        </div>
      </div>
    </div>
    <div class="aom-body p-2 flex-1">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { KButton, KDropdown, KDropdownItem } from '@components';
import KMenu from '../components/KMenu.vue';
const menu = ref();

const MenuData = [
  { name: '首页', path: '/template/stash-layout/exp-page-table2', close: false },
  {
    name: 'tabletabletable',
    path: '/template/stash-layout/exp-page-table',
    close: true,
    // icon: 'IconAdd',
  },
];

const avatarData = {
  name: '欧阳',
  id: '123456',
};
// const avatarData = {
//   name: '欧阳修',
//   id: '123456',
// };

const KAvatar = ref('');
const avatarName = ref('');

const bgColor = [
  'oklch(66.3% 0.2 0)',
  'oklch(66.3% 0.2 15)',
  'oklch(66.3% 0.2 30)',
  'oklch(66.3% 0.2 45)',
  'oklch(66.3% 0.2 135)',
  'oklch(66.3% 0.2 150)',
  'oklch(66.3% 0.2 165)',
  'oklch(66.3% 0.2 180)',
  'oklch(66.3% 0.2 195)',
  'oklch(66.3% 0.2 210)',
  'oklch(66.3% 0.2 225)',
  'oklch(66.3% 0.2 240)',
  'oklch(66.3% 0.2 255)',
  'oklch(66.3% 0.2 270)',
  'oklch(66.3% 0.2 285)',
  'oklch(66.3% 0.2 300)',
  'oklch(66.3% 0.2 345)',
  'oklch(66.3% 0.2 360)',
];
// 穷举复姓
// 欧阳、太史、端木、上官、司马、东方、独孤、南宫、万俟、闻人、夏侯、诸葛、尉迟、公羊、赫连、澹台、皇甫、宗政、濮阳、公冶、太叔、申屠、公孙、慕容、仲孙、钟离、长孙、宇文、司徒、鲜于、司空、闾丘、子车、亓官、司寇、巫马、公西、颛孙、壤驷、公良、漆雕、乐正、宰父、谷梁、拓跋、夹谷、轩辕、令狐、段干、百里、呼延、东郭、南门、羊舌、微生
const compoundSurname = [
  '欧阳',
  '太史',
  '端木',
  '上官',
  '司马',
  '东方',
  '独孤',
  '南宫',
  '万俟',
  '闻人',
  '夏侯',
  '诸葛',
  '尉迟',
  '公羊',
  '赫连',
  '澹台',
  '皇甫',
  '宗政',
  '濮阳',
  '公冶',
  '太叔',
  '申屠',
  '公孙',
  '慕容',
  '仲孙',
  '钟离',
  '长孙',
  '宇文',
  '司徒',
  '鲜于',
  '司空',
  '闾丘',
  '子车',
  '亓官',
  '司寇',
  '巫马',
  '公西',
  '颛孙',
  '壤驷',
  '公良',
  '漆雕',
  '乐正',
  '宰父',
  '谷梁',
  '拓跋',
  '夹谷',
  '轩辕',
  '令狐',
  '段干',
  '百里',
  '呼延',
  '东郭',
  '南门',
  '羊舌',
  '微生',
];

function isChinese(str) {
  // 使用正则表达式检查是否包含中文字符
  const chineseRegex = /[\u4e00-\u9fa5]/;
  return chineseRegex.test(str);
}

function getInitials(name, initials) {
  for (const surname of initials) {
    if (name.startsWith(surname)) {
      if (name.length > 2) {
        return name.slice(surname.length);
      }
      return name;
    } else if (name.length > 2) {
      name = name.slice(-2);
      return name;
    } else if (name.length == 2) {
      name = name.slice(-1);
      return name;
    }
  }
  return name;
}

onMounted(() => {
  if (isChinese(avatarData.name)) {
    // console.log('名字包含中文字符');
    avatarName.value = getInitials(avatarData.name, compoundSurname);
  } else {
    // console.log('名字不包含中文字符');
    const initials = avatarData.name.split(' ');
    const res = initials[0][0] + initials[initials.length - 1][0];
    avatarName.value = res;
    const idNum = parseInt(avatarData.id.match(/\d+/));
  }
  KAvatar.value.style.backgroundColor = bgColor[avatarData.id % bgColor.length];
  // menu.value hover的时候添加一个类名active
  menu.value.addEventListener('mouseenter', () => {
    menuSlot.classList.add('menu--active');
  });
});
</script>
<style lang="less" scoped>
@import url('../../kswux/package/style/general.less');
.aom-head-content {
}
.k-avatar {
  .text-sm();
  color: #fff;
}
.KButtonGroup {
  .k-button {
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
  }
  .k-button + .k-button {
    border-top-left-radius: unset;
    border-bottom-left-radius: unset;
    border-left-width: 0;
  }
  .el-button--sm:nth-last-child(1) {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
}
:root {
  --ppi: calc(100vw / 240 * 2);
  font-size: var(--ppi);
}
.menu {
  --size: 1.5rem;
  display: block;
  width: var(--size);
  height: var(--size);
}
.menu::before {
  --shadow-color-init: #cdcacf;
  --shadow-color-1: #99c4ff;
  --shadow-color-2: #80b5ff;
  --shadow-color-3: #68a7ff;
  --shadow-color-4: #68a8ff;
  --shadow-color-5: #519aff;
  --shadow-color-6: #378bff;

  --shadow-size: calc(var(--size) / 4);
  --shadow-gap: calc(var(--size) / 8);
  --shadow-col: calc(var(--shadow-size) + var(--shadow-gap));
  --shadow-col-1: calc(var(--shadow-size) * 2 + var(--shadow-gap) * 2);
  --shadow-row: calc(var(--shadow-size) + var(--shadow-gap));
  --shadow-row-1: calc(var(--shadow-size) * 2 + var(--shadow-gap) * 2);

  content: '';
  position: relative;
  display: block;
  top: 0;
  left: 0;
  width: var(--shadow-size);
  height: var(--shadow-size);
  background: #cdcacf;
  z-index: 10;
  border-radius: 50%;

  /* 设置阴影 */
  box-shadow:
    0 0 0 var(--shadow-color-init),
    var(--shadow-col) 0 0 var(--shadow-color-init),
    var(--shadow-col-1) 0 0 var(--shadow-color-init),
    0 var(--shadow-row) 0 var(--shadow-color-init),
    var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
    var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
    0 var(--shadow-row-1) 0 var(--shadow-color-init),
    var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
    var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  animation: menuShadowReverse 0.2s ease-out forwards;
}

.menu:hover::before {
  /* 动画保持最后䘝状态 */
  animation: menuShadow 0.2s ease-out forwards;
}

@keyframes menuShadow {
  0% {
    box-shadow:
      0 0 0 var(--shadow-color-init),
      var(--shadow-col) 0 0 var(--shadow-color-init),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  20% {
    background: var(--shadow-color-1);
    box-shadow:
      0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-init),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  40% {
    background: var(--shadow-color-1);
    box-shadow:
      0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  50% {
    background: var(--shadow-color-1);
    box-shadow:
      0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  60% {
    background: var(--shadow-color-1);
    box-shadow:
      0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-4),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-4),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  80% {
    background: var(--shadow-color-1);
    box-shadow:
      0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-4),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-5),
      0 var(--shadow-row-1) 0 var(--shadow-color-4),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-5),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  100% {
    background: var(--shadow-color-1);
    box-shadow:
      0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-4),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-5),
      0 var(--shadow-row-1) 0 var(--shadow-color-4),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-5),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-6);
  }
}

@keyframes menuShadowReverse {
  100% {
    box-shadow:
      0 0 0 var(--shadow-color-init),
      var(--shadow-col) 0 0 var(--shadow-color-init),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  80% {
    background: var(--shadow-color-1);
    box-shadow:
      0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-init),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  60% {
    background: var(--shadow-color-1);
    box-shadow:
      0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  50% {
    background: var(--shadow-color-1);
    box-shadow:
      0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-init),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  40% {
    background: var(--shadow-color-1);
    box-shadow:
      0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-4),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-init),
      0 var(--shadow-row-1) 0 var(--shadow-color-4),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-init),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  20% {
    background: var(--shadow-color-1);
    box-shadow:
      0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-4),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-5),
      0 var(--shadow-row-1) 0 var(--shadow-color-4),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-5),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-init);
  }
  0% {
    background: var(--shadow-color-1);
    box-shadow:
      0 0 0 var(--shadow-color-1),
      var(--shadow-col) 0 0 var(--shadow-color-2),
      var(--shadow-col-1) 0 0 var(--shadow-color-4),
      0 var(--shadow-row) 0 var(--shadow-color-2),
      var(--shadow-col) var(--shadow-row) 0 var(--shadow-color-3),
      var(--shadow-col-1) var(--shadow-row) 0 var(--shadow-color-5),
      0 var(--shadow-row-1) 0 var(--shadow-color-4),
      var(--shadow-col) var(--shadow-row-1) 0 var(--shadow-color-5),
      var(--shadow-col-1) var(--shadow-row-1) 0 var(--shadow-color-6);
  }
}

.menu--active.menu::before {
  animation: menuShadow 0.2s ease-out forwards;
}

.aom-body {
  background: linear-gradient(180deg, #69b4ff 0%, #b1d2ff 16%, #b1d2ff 27%);
}
</style>
