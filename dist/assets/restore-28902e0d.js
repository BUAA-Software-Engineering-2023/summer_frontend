import{C as s,aj as m,ak as d,al as a,am as i,an as p,ao as E,ap as t,e as _,r as f,o as u,z as R}from"./index-d420b9fe.js";const Y=s({__name:"restore",setup(D){let l=0;const n=()=>({id:`random-id-${++l}`,name:"Tom",date:"2020-10-1"}),r=[{key:"date",title:"Date",dataKey:"date",width:150,fixed:m.LEFT,cellRenderer:({cellData:e})=>React.createElement(d,{content:a(e).format("YYYY/MM/DD")},React.createElement("span",{class:"flex items-center"},React.createElement(i,{class:"mr-3"},React.createElement(p,null)),a(e).format("YYYY/MM/DD")))},{key:"name",title:"Name",dataKey:"name",width:150,align:"center",cellRenderer:({cellData:e})=>React.createElement(E,null,e)},{key:"operations",title:"Operations",cellRenderer:()=>React.createElement(React.Fragment,null,React.createElement(t,{size:"small"},"Edit"),React.createElement(t,{size:"small",type:"danger"},"Delete")),width:150,align:"center"}],c=_(Array.from({length:200}).map(n));return(e,h)=>{const o=f("el-table-v2");return u(),R(o,{columns:r,data:c.value,width:700,height:400,fixed:""},null,8,["data"])}}});export{Y as default};
