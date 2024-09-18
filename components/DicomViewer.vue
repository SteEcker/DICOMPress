<template>
  <canvas :id="canvasId" :height="canvasHeight" :width="canvasWidth"></canvas>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue';
import { Niivue } from '@niivue/niivue';

const props = defineProps({
  primaryVolumeUrl: {
    type: String,
    required: true,
  },
  overlayVolumeUrl: {
    type: String,
    required: true,
  },
  sliceOrientation: {
    type: String,
    default: 'axial'
  },
  height: {
    type: Number,
    default: 1000, // Default canvas height
  },
  width: {
    type: Number,
    default: 1000, // Default canvas width
  },
});

const canvasId = ref(`gl-${Math.random().toString(36).substr(2, 9)}`);
const canvasHeight = ref(props.height);
const canvasWidth = ref(props.width);
let nv: Niivue | null = null;

onMounted(() => {
  if (!window.WebGL2RenderingContext) {
    console.error('WebGL2 is not supported in this browser.');
    return;
  }

  nextTick(() => {
    nv = new Niivue({
      crosshairColor: [0, 1, 0, 1],
      show3Dcrosshair: false,
      crosshairWidth: 0,
    });

    const sliceTypeMap = {
      axial: nv.sliceTypeAxial,
      coronal: nv.sliceTypeCoronal,
      sagittal: nv.sliceTypeSagittal,
      multiplanar: nv.sliceTypeMultiplanar,
    };

    const volumeList = [
      {
        url: props.primaryVolumeUrl,
      },
      {
        url: props.overlayVolumeUrl,
        colormap: 'red',
        opacity: 0.3,
      },
    ];

    nv.attachTo(canvasId.value);
    nv.loadVolumes(volumeList).then(() => {
      nv?.setSliceType(sliceTypeMap[props.sliceOrientation]);
    });
  });
});
</script>
