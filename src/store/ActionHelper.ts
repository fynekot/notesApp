import DataHelper from "./DataHelper";
import ItemData from "../model/ItemData";
import Category from '@/model/CateEnums';

class ActionHelper {
  dataHelper: DataHelper = new DataHelper("memodata", "id");
  memoList: Array<ItemData>;

  constructor() {
    //读取本地数据，将笔记数据保存到this.memoList数组中
    this.memoList = this.readData();
  }

  readData() {
    let arrObj = this.dataHelper.readData();

    //将Object数组转成ItemData数组
    let arrItem = arrObj.map((ele: any) => {
      let item = new ItemData();
      item.id = ele.id;
      item.categoryId = ele.categoryId;
      item.title = ele.title;
      item.content = ele.content;
      item.createTime = ele.createTime;
      return item;
    });

    return arrItem;
  }

  // 分类
  getCategoryName(cateId: Category): string {
    const arrNames=['生活','工作','学习']
    return arrNames[cateId];
  }

  //-------------------------------------业务处理-------------------------------------------------------------
  //1.新增笔记
  add(item: ItemData): number {
    // 添加到localstorage中
    item.id = this.dataHelper.addData(item);

    // 添加到memoList数组中
    this.memoList.push(item);

    // 保存到本地
    this.dataHelper.saveData(this.memoList);
    // 返回id
    return item.id;
  }

  //2.修改笔记
  edit(item: ItemData): void {
    // 找到要修改的item的id
    let editItem: ItemData | undefined = this.memoList.find((ele) => {
      return item.id == ele.id;
    });

    // 修改属性
    if (editItem) {
      editItem.categoryId = item.categoryId;
      editItem.title = item.title;
      editItem.content = item.content;
    }

    // 保存memoList
    this.dataHelper.saveData(this.memoList);
  }

  //3.删除笔记
  remove(id: number): void {
    // 根据id找到数组下标
    let removeIndex: number = this.memoList.findIndex((ele) => {
      return ele.id == id;
    });

    // splice（）删除
    if (removeIndex > -1) {
      this.memoList.splice(removeIndex, 1);
    }

    // 保存数组
    this.dataHelper.saveData(this.memoList);
  }
}

export default ActionHelper;
