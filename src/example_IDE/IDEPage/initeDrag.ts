import { ref } from 'vue';

const width = ref<number>(288);
const height = ref<number>(288);

function initDrag(
  side: string,
  event: MouseEvent,
  changeTarget: HTMLElement,
  minSize = 288,
  maxSize = 600,
) {
  console.log('initDrag', minSize, maxSize);

  const startX = event.clientX;
  const startY = event.clientY;
  const startWidth = changeTarget ? changeTarget.offsetWidth : 0;
  const startHeight = changeTarget ? changeTarget.offsetHeight : 0;

  const doDrag = (e: MouseEvent) => {
    let dx = e.clientX - startX;
    let dy = e.clientY - startY;

    if (side === 'left') {
      width.value = startWidth - dx;
      changeTarget.style.setProperty(
        '--transition',
        'width 0 ease ,  box-shadow 0.2s ease-in-out;',
      );
      changeTarget.style.setProperty('--bgc', `var(--k-blue-300)`);
      if (width.value > 600) {
        width.value = 600;
        changeTarget.style.setProperty('--bgc', `var(--k-red-300)`);
      } else if (width.value < 288) {
        width.value = 288;
        changeTarget.style.setProperty('--bgc', `var(--k-red-300)`);
      }
      changeTarget.style.setProperty('--width', `${width.value}px`);
    }

    if (side === 'right') {
      width.value = startWidth + dx;
      changeTarget.style.setProperty('--bgc', `var(--k-blue-300)`);
      if (width.value > 600) {
        width.value = 600;
        changeTarget.style.setProperty('--bgc', `var(--k-red-300)`);
      } else if (width.value < 288) {
        width.value = 288;
        changeTarget.style.setProperty('--bgc', `var(--k-red-300)`);
      }
      changeTarget.style.setProperty('--width', `${width.value}px`);
    }

    if (side === 'top') {
      height.value = startHeight - dy;
      changeTarget.style.setProperty(
        '--transition',
        'height 0 ease 0 ,  box-shadow 0.2s ease-in-out;',
      );
      changeTarget.style.setProperty('--bgc', `var(--k-blue-300)`);
      if (height.value > maxSize) {
        height.value = maxSize;
        changeTarget.style.setProperty('--bgc', `var(--k-red-300)`);
      } else if (height.value < minSize) {
        height.value = minSize;
        changeTarget.style.setProperty('--bgc', `var(--k-red-300)`);
      }
      changeTarget.style.setProperty('--height', `${height.value}px`);
    }
  };

  const stopDrag = () => {
    changeTarget.style.setProperty('--bgc', `#fff`);
    document.removeEventListener('mousemove', doDrag);
    document.removeEventListener('mouseup', stopDrag);
  };

  document.addEventListener('mousemove', doDrag);
  document.addEventListener('mouseup', stopDrag);
}

function bbm(params: type) {
  console.log('bbm');
}

export { width, height, initDrag, bbm };
