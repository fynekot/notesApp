import Category from './CateEnums'

//保存一篇笔记
class ItemData{
    id!:number;
    categoryId!:Category;
    title!:string;
    content!:string;
    createTime!:string;

    constructor(id:number=-1,categoryId:Category=-1,title:string='',content:string='',createTime:string=''){
        this.id=id;
        
        //在此需要用枚举类型 对笔记进行分类

        this.categoryId=categoryId;
        this.title=title;
        this.content=content;
        this.createTime=this.toSelfDataString();
    }

    //把毫秒数转为时间
    toSelfDataString():string{
        let date = new Date();
        let str = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()
        return str;
    }
}

export default ItemData;