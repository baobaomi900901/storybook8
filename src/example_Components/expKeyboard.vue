<!--
* @description  参数1
* @fileName  expKeyboard
* @author userName
* @date 2025-01-08 18:00:40
* @version V3.0.0
!-->
<template>
  <div class="p-4">
    <div ref="expKeyboard" class="expKeyboard flex flex-col rounded-md shadow-lg">
      <div class="col-1 flex">
        <button>ESC</button>
        <button>F1</button>
        <button>F2</button>
        <button>F3</button>
        <button>F4</button>
        <button>F5</button>
        <button>F6</button>
        <button>F7</button>
        <button>F8</button>
        <button>F9</button>
        <button>F10</button>
        <button>F11</button>
        <button>F12</button>
        <button>PrtScn</button>
        <button>Insert</button>
        <button>Del</button>
      </div>
      <div class="w-full flex col-1">
        <div class="flex-1">
          <div class="col-1 flex">
            <button>~</button>
            <button>!</button>
            <button>@</button>
            <button>#</button>
            <button>$</button>
            <button>%</button>
            <button>^</button>
            <button>&</button>
            <button>*</button>
            <button>(</button>
            <button>)</button>
            <button>_</button>
            <button>+</button>
          </div>
          <div class="col-1 flex mt-2">
            <button>`</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>-</button>
            <button>=</button>
          </div>
        </div>
        <button class="" style="flex: unset; width: 8em">Backspace ⌫</button>
      </div>
      <div class="w-full flex col-1">
        <div class="col-1 w-full flex">
          <button>Tab ⇥</button>
          <button>Q</button>
          <button>W</button>
          <button>E</button>
          <button>R</button>
          <button>T</button>
          <button>Y</button>
          <button>U</button>
          <button>I</button>
          <button>O</button>
          <button>P</button>
        </div>
        <div class="col-1 flex flex-col">
          <div class="col-1 flex">
            <button>{</button>
            <button>}</button>
            <button>|</button>
          </div>
          <div class="col-1 flex">
            <button>[</button>
            <button>]</button>
            <button>\</button>
          </div>
        </div>
        <div class="col-1 flex">
          <button class="" style="flex: unset; width: 5em">Home</button>
        </div>
      </div>
      <div class="w-full flex col-1">
        <div class="col-1 w-full flex">
          <button>CapsLock ⇪</button>
          <button>A</button>
          <button>S</button>
          <button>D</button>
          <button>F</button>
          <button>G</button>
          <button>H</button>
          <button>J</button>
          <button>K</button>
          <button>L</button>
        </div>
        <div class="flex col-1">
          <div class="flex flex-col col-1">
            <div class="col-1 flex">
              <button>:</button>
              <button>"</button>
            </div>
            <div class="col-1 flex">
              <button>;</button>
              <button>'</button>
            </div>
          </div>
          <div class="col-1 flex">
            <button class="" style="flex: unset; width: 8em">Enter ↵</button>
            <button class="" style="flex: unset; width: 5em">
              Page
              <br />
              Up
            </button>
          </div>
        </div>
      </div>

      <div class="w-full flex col-1">
        <div class="col-1 w-full flex">
          <button>Shift ⇧</button>
          <button>Z</button>
          <button>X</button>
          <button>C</button>
          <button>V</button>
          <button>B</button>
          <button>N</button>
          <button>M</button>
          <button>Shift ⇧</button>
        </div>
        <div class="flex col-1">
          <div class="flex flex-col col-1">
            <div class="col-1 flex">
              <button><</button>
              <button>></button>
              <button>?</button>
            </div>
            <div class="col-1 flex">
              <button>,</button>
              <button>.</button>
              <button>/</button>
            </div>
          </div>
        </div>
        <div class="col-1 flex">
          <button class="" style="flex: unset; width: 5em">
            Page
            <br />
            Down
          </button>
        </div>
      </div>

      <div class="w-full flex col-1">
        <div class="col-1 w-full flex">
          <button class="" style="flex: unset; width: 5em">Ctrl ⌃</button>
          <button class="" style="flex: unset; width: 5em">Win</button>
          <button class="" style="flex: unset; width: 5em">Alt ⌥</button>
          <button>Space</button>
          <button class="" style="flex: unset; width: 5em">Alt ⌥</button>
          <button class="" style="flex: unset; width: 5em">Fn</button>
        </div>
        <div class="flex col-1">
          <button class="" style="flex: unset; width: 5em">←</button>
          <div class="flex flex-col col-1">
            <div class="col-1 flex">
              <button>↑</button>
            </div>
            <div class="col-1 flex">
              <button>↓</button>
            </div>
          </div>
          <button class="" style="flex: unset; width: 5em">→</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue';
</script>
<style scoped>
.expKeyboard {
  font-size: calc(100vw / 240 * 2);
  gap: 0.5em;

  padding: 1.75em;
  background: #eee;

  border-bottom: 0.25em solid #ccc;

  box-shadow:
    -0.5em -0.5em 1em -0.75em rgba(255, 255, 255, 1),
    0em 0.5em 1em -0.75em rgba(0, 0, 0, 0.3),
    inset -0.5em -0.5em 1em -0.75em rgba(255, 255, 255, 0),
    inset 0.5em 0.5em 1em -0.75em rgba(0, 0, 0, 0);
}
.col-1 {
  display: flex;
  gap: 0.5em;
}
button {
  min-width: 4em;
  min-height: 2em;
  flex: 1 1 0;
  border: none;
  display: block;
  outline: none;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: normal;
  color: #999;
  font-family: Helvetica;
  background: linear-gradient(145deg, #f5f5f5 0%, #fff 100%);
  box-shadow:
    -0.5em -0.5em 1em -0.75em rgba(255, 255, 255, 1),
    0em 0.5em 1em -0.75em rgba(0, 0, 0, 0.3),
    inset -0.5em -0.5em 1em -0.75em rgba(255, 255, 255, 0),
    inset 0.5em 0.5em 1em -0.75em rgba(0, 0, 0, 0);
  border-bottom: 0.125em solid #ccc;
  transition: all 0.15s ease-in-out;
}
button:active {
  color: var(--k-theme-primary);
  box-shadow:
    -0.5em -0.5em 1em -0.75em rgba(255, 255, 255, 0),
    0em 0.5em 1em -0.75em rgba(0, 0, 0, 0),
    inset -0.5em -0.5em 1em -0.75em #ffffff,
    inset 0.5em 0.5em 1em -0.75em rgba(0, 0, 0, 0.3);
  border-bottom-width: 0;
  transition: all 0.15s ease-in-out;
}
</style>
