import{j as e}from"./jsx-runtime-BYYWji4R.js";function y({task:{id:a,title:n,state:i},onPinTask:T,onArchiveTask:v}){return e.jsxs("div",{className:`list-item ${i}`,children:[e.jsxs("label",{htmlFor:"checked",className:"checkbox",children:[e.jsx("input",{type:"checkbox",name:"checked",id:`archiveTask-${a}`}),e.jsx("span",{className:"checkbox-custom",onClick:()=>v({id:a,title:n,state:i}),"aria-label":`archiveTask-${a}`})]}),e.jsx("label",{htmlFor:"title",className:"title","aria-label":n,children:e.jsx("input",{type:"text",value:n,readOnly:!0,name:"title",placeholder:"タスク名"})}),i!=="TASK_ARHCIVED"&&e.jsx("button",{className:"pin-button",id:`pinTask-${a}`,"aria-label":`pinTask-${a}`,onClick:()=>T({id:a,title:n,state:i}),children:e.jsx("span",{className:"icon-star"})})]})}y.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    id: string;
    title: string;
    state: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"string",required:!0}}]}},description:""},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(task: TaskType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    id: string;
    title: string;
    state: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"string",required:!0}}]}},name:"task"}],return:{name:"void"}}},description:""},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(task: TaskType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    id: string;
    title: string;
    state: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"string",required:!0}}]}},name:"task"}],return:{name:"void"}}},description:""}}};const h={component:y,title:"Task",tags:["autodocs"]},t={args:{task:{id:"1",title:"タスク名",state:"TASK_INBOX"}}},r={args:{task:{...t.args.task,state:"TASK_PINNED"}}},s={args:{task:{...t.args.task,state:"TASK_ARCHIVED"}}};var o,u,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "タスク名",
      state: "TASK_INBOX"
    }
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var l,d,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,k;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const _=["Default","Pinned","Archived"],x=Object.freeze(Object.defineProperty({__proto__:null,Archived:s,Default:t,Pinned:r,__namedExportsOrder:_,default:h},Symbol.toStringTag,{value:"Module"}));export{t as D,y as T,x as a};
