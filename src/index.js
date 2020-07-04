import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import feiyanChinaData from './data/china_feiyan_data.json'
import feiyanWorldData from './data/world_feiyan_data.json'


let yesterdaty ="7.2";

//世界疫情数据处理



    //世界疫情地区数据列表
let feiyanWorldlist = [];

    //世界疫情新增数据列表 

let newWorldlist = [];


let feiyanWorld_yesterdead = 0;
let feiyanWorld_yestercure = 0;



feiyanWorldData.data.forEach((item, key)=>{

    item.trend.updateDate.forEach((element, index) => {
      let newWorlditem ={
        value:0,
        date:"",
      }
      if(newWorldlist[element] === undefined){
        newWorlditem.date = element;
        newWorlditem.value = 0;
        newWorldlist[element] = newWorlditem
      }
      
    });

});

feiyanWorldData.data.forEach((item, key)=>{
    
  let feiyanWorlditem =  {
    name: "",
    confirm: 0,
    cure: 0,
    dead: 0,
    exist: 0,
    new: 0,
  }  
    feiyanWorlditem.name = item.name;
    
    item.trend.list.forEach((item_trend, key_trend)=>{
      let curr = item_trend.data.length;
      if(item_trend.name==="确诊") feiyanWorlditem.confirm = item_trend.data[curr-1];
      if(item_trend.name==="治愈"){
        feiyanWorlditem.cure = item_trend.data[curr-1];

        if(item.trend.updateDate[curr-1] === yesterdaty) {
          feiyanWorld_yestercure += (item_trend.data[curr-1]-item_trend.data[curr-2]);
        }
      }
      if(item_trend.name==="死亡"){
          feiyanWorlditem.dead = item_trend.data[curr-1];

          if(item.trend.updateDate[curr-1] === yesterdaty) {
            feiyanWorld_yesterdead += (item_trend.data[curr-1]-item_trend.data[curr-2]);
          }
      }
      if(item_trend.name==="新增确诊"){

        if(item.trend.updateDate[curr-1] === yesterdaty) feiyanWorlditem.new = item_trend.data[curr-1];
        else feiyanWorlditem.new=0;

        item_trend.data.forEach((item_data, key_data)=>{
          let item_date = item.trend.updateDate[key_data];
          newWorldlist[item_date].value += item_data;
        });
      }

    });

    feiyanWorlditem.exist = feiyanWorlditem.confirm - feiyanWorlditem.dead - feiyanWorlditem.cure;  //计算现有的

    feiyanWorldlist[key] =feiyanWorlditem;
   
});


//按照现有的病例 排序
feiyanWorldlist.sort((a, b)=>{
  if(a.exist<b.exist) {
    return 1;
  }
  else{
    return -1;
  }
});

let newWorlddata = [];
for(let key in newWorldlist) {

  let newWorlditem ={
    value: 0,
    date: ""
  };

  newWorlditem.value = newWorldlist[key].value;
  newWorlditem.date = newWorldlist[key].date;
  newWorlddata.push(newWorlditem);
}

newWorlddata.sort((a, b)=>{
    if(a.date>b.date) {
    return 1;
  }
  else{
    return -1;
  }
});

//中国疫情数据处理


    //中国疫情地区数据列表
let feiyanChinalist = [];

    //中国疫情新增数据列表 

let newChinalist = [];


let feiyanChina_yesterdead=0;
let feiyanChina_yestercure=0;

feiyanChinaData.data.forEach((item, key)=>{
    
  let feiyanChinaitem =  {
    name: "",
    confirm: 0,
    cure: 0,
    dead: 0,
    exist: 0,
    new: 0,
  }  
    feiyanChinaitem.name = item.name;
    
    item.trend.updateDate.forEach((element, index) => {

      if(item.name === "北京" ){

        let newChinaitem ={
          value:0,
          date:"",
        }

        newChinaitem.date = element;
        newChinaitem.value = 0;
        newChinalist[element] = newChinaitem
      }
    });


    item.trend.list.forEach((item_trend, key_trend)=>{
      let curr = item_trend.data.length;
      if(item_trend.name==="确诊") feiyanChinaitem.confirm = item_trend.data[curr-1];
      if(item_trend.name==="治愈"){

        feiyanChinaitem.cure = item_trend.data[curr-1];

        if(item.trend.updateDate[curr-1] === yesterdaty) {
          feiyanChina_yestercure += (item_trend.data[curr-1]-item_trend.data[curr-2]);
        }
      }
      if(item_trend.name==="死亡"){
          feiyanChinaitem.dead = item_trend.data[curr-1];

          if(item.trend.updateDate[curr-1] === yesterdaty) {
            feiyanChina_yesterdead += (item_trend.data[curr-1]-item_trend.data[curr-2]);
          }
      }
      if(item_trend.name==="新增确诊"){

        if(item.trend.updateDate[curr-1] === yesterdaty) feiyanChinaitem.new = item_trend.data[curr-1];
        else feiyanChinaitem.new=0;

        item_trend.data.forEach((item_data, key_data)=>{
          let item_date = item.trend.updateDate[key_data];
          newChinalist[item_date].value += item_data;
        });
      }

    });

    feiyanChinaitem.exist = feiyanChinaitem.confirm - feiyanChinaitem.dead - feiyanChinaitem.cure;  //计算现有的

    feiyanChinalist[key] =feiyanChinaitem;
   
});


//按照现有的病例 排序
feiyanChinalist.sort((a, b)=>{
    if(a.exist<b.exist) {
      return 1;
    }
    else{
      return -1;
    }
});

ReactDOM.render(
  <React.StrictMode>
    <App feiyanChinalist={feiyanChinalist} 
          newChinalist={newChinalist}  
          feiyanChina_yesterdead={feiyanChina_yesterdead} 
          feiyanChina_yestercure={feiyanChina_yestercure}

          feiyanWorldlist={feiyanWorldlist} 
          newWorldlist={newWorlddata}  
          feiyanWorld_yesterdead={feiyanWorld_yesterdead} 
          feiyanWorld_yestercure={feiyanWorld_yestercure}
      />
  </React.StrictMode>,
  document.getElementById('root')
);
