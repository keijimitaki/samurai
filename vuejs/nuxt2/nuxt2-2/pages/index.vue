<template>
  
  <div>

    <div>count：{{ this.$store.state.count.count }}</div>
    <button style="border: solid 1px; width:80px" @click="addCount">Add</button>
    <div>count2：{{ this.$store.state.count2.count2nd }}</div>
    <button style="border: solid 1px; width:80px" @click="addCount2">Add</button>


    <hr style="margin-top: 1rem;"/>
    <h1>Pluginの動作確認</h1>
    <button v-tooltip="'TOPにメッセージが表示されます'">TOP</button>

    <Tutorial/>

  </div>

  
</template>

<script>
export default {
  name: 'IndexPage',
  
  methods: {
    addCount() {
      this.$store.dispatch("count/increment");
    },
    addCount2() {
      this.$store.dispatch("count2/increment");
    },
    mounted() {
      this.$hello("mounted");
    },

  },
  
}
</script>

<style>
  .tooltip {
    display: block !important;
    padding: 4px;
    z-index: 10000;
  }

  .tooltip .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip .tooltip-arrow {
    display: none;
  }

  .tooltip[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  .tooltip[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }

  .tooltip.danger .tooltip-inner {
    background: red;
  }

  .tooltip.caution .tooltip-inner {
    background: yellow;
    color: black;
  }
</style>