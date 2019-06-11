'use strict';

const Controller = require('egg').Controller;
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://eggadmin:123456@localhost:27017/huchun')
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('链接成功')
// });
// var Schema = mongoose.Schema;

// var OrderItemSchema = new Schema({
//   order_id:String,
//   title:String,
//   price:Number,   
//   num:Number
// });

// var OrderItemModel = mongoose.model('OrderItem', OrderItemSchema, 'order_item');

class TestController extends Controller {
  async index() {
    const {ctx} = this;
    
    // OrderItemModel.aggregate(
    //   [
    //     {
    //       $lookup: {
    //         from: "order",
    //         localField: "order_id",
    //         foreignField: "order_id",
    //         as: "order_info"
    //       }
    //     }
    //   ],
    //   function (err, res) {
    //     if (err) {
    //       return 
    //     }
    //     console.log(JSON.stringify(res), "查询成功")
    //   }
    // )

    ctx.body = '保存成功'
  }
}

module.exports = TestController;
