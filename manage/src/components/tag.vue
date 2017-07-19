<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <h2 class="title">{{title}}</h2>
    </el-col>
    <el-col :span="20">
      <el-tag
        :key="item"
        v-for="item in items"
        :closable="true"
        :close-transition="false"
        @close="handleClose(item)"
      >
      {{item}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="mini"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name:'tag',
    props: ['title', 'dataList'],
    data() {
      return {
        items: this.dataList,
        inputVisible: false,
        inputValue: ''
      }
    },
    methods: {
      handleClose(item) {
        this.items.splice(this.items.indexOf(item), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick( _ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.items.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style scoped>
.title {
  font-size: 1.6rem;
  background-color: #4BCD61;
  color: #ffffff;
  width:  80px;
  text-align: center;
  padding:  8px 5px;
  border-radius: 10px;
}
.el-tag {
  background-color: #18bc9c;
  margin-right: 10px;
  margin-bottom: 10px;
}
.button-new-tag {
  padding: 0 5px;
  height: 24px;
  font-size: 12px;
  border-radius: 4px;
  margin-bottom: 10px;
}
.input-new-tag {
  width: 80px;
  padding: 0 5px;
  height: 22px;
  font-size: 12px;
  margin-bottom: 10px;
}
</style>