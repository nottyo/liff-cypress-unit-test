<template>
  <div>
    <h2>Mobile Viewport</h2>
    <p>liff.isInClient: {{isInClient}}</p>
    <p>liff.getOS: {{ os }}</p>
  </div>
</template>

<script>
import liff from '@line/liff';

export default {
  name: 'Mobile',
  data: () => ({
    isInClient: false,
    os: '',
  }),
  created() {
    this.isInClient = liff.isInClient();
    this.os = liff.getOS();
  },
};
</script>
