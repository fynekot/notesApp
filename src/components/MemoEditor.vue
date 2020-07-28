<template>
  <!-- 便签新增编辑区 -->
  <div>
    <div class="cover-layer"></div>
    <div id="new-markdown" class="editor-layer">
      <div class="editor-top">
        <input class="editor-title form-control" type="text" placeholder="标题" v-model="memo.title" />
        <div class="dropdown select-category">
          <button class="btn btn -default dropdown-toggle" data-toggle="dropdown">
            <span class="category">{{this.$store.state.aHelper.getCategoryName(memo.categoryId)}}</span>
            <span class="caret"></span>
          </button>
          <!-- <select class='dropdown-menu'>
            <option value="this.memo.categoryId=0">生活</option>
            <option value="this.memo.categoryId=0">工作</option>
            <option value="this.memo.categoryId=0">学习</option>
          </select>-->
          <ul class="dropdown-menu">
            <li @click="memo.categoryId=0">
              <a>生活</a>
            </li>
            <li @click="memo.categoryId=1">
              <a>工作</a>
            </li>
            <li @click="memo.categoryId=2">
              <a>学习</a>
            </li>
          </ul>
        </div>
        <ul class="tools">
          <li class="save">
            <span class="iconfont icon-baocun_mian" @click="saveNew"></span>
          </li>
          <li class="cancel" @click="closeWin">
            <span class="iconfont icon-quxiao"></span>
          </li>
        </ul>
      </div>
      <textarea class="text-content form-control" placeholder="内容" v-model="memo.content"></textarea>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";

@Component
export default class MemoEditor extends Vue {
  //用来保存编辑框数据
  memo: ItemData = new ItemData(-1, 0);

  // 当组件每次创建显示时，都会被执行
  create(): void {
    // 接收store中的数据桥梁
    this.memo = this.$store.state.transMemo;
  }

  //   关闭编辑窗口
  closeWin() {
    this.$store.state.isShow = false;
  }

  // 保存新标签
  saveNew() {
    // 判断数据是否合格
    if (
      this.memo &&
      this.memo.title.length > 0 &&
      this.memo.content.length > 0
    ) {
      // 操作业务判断
      if (this.memo.id <= -1) {
        // 添加新标签，并关闭编辑窗口
        this.$store.state.aHelper.add(this.memo);
      } else {
        this.$store.state.aHelper.edit(this.memo);
      }
      this.$store.state.isShow = false;
    } else {
      alert(`对不起输入错误`);
    }
  }
}
</script>