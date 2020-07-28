<template>
  <div id="memos" class="container">
    <MemoItem v-for="item in filterMemo()" :key="item.id" :memo="item"></MemoItem>
  </div>
</template>



<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ItemData from "../model/ItemData";
import MemoItem from "./MemoItem.vue";

@Component({
  components: {
    MemoItem
  }
})
export default class ItemList extends Vue {
  // a.声明笔记数组
  memoArr: Array<ItemData> = this.$store.state.aHelper.memoList;
  constructor() {
    super();
  }

  // 筛选类别方法
  filterMemo(): any {
    if (this.$store.state.filterCateId == -1) {
      return this.memoArr;
    } else {
      return this.memoArr.filter(ele => {
        return ele.categoryId == this.$store.state.filterCateId;
      });
    }
  }
}
</script>