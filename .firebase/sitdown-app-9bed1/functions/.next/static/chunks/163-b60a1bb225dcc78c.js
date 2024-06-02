(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{4001:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var s=a(7437),n=a(7713),r=a(4033),d=a(8862),i=a(3043),o=a(8762),l=a(8875);function u(e){var t;let{data:a,slice:u}=e,c=(0,n.getCookie)("authToken"),p=(0,r.useRouter)(),f=(0,d.TL)(),m=(0,d.CG)(e=>e.auth.credentials.user.id);if(m===(null==a?void 0:null===(t=a.user)||void 0===t?void 0:t.id))return(0,s.jsx)("div",{className:"ml-5 text-error cursor-pointer opacity-70 hover:opacity-90",children:(0,s.jsx)(l.Z,{name:"delete",onClick:()=>{"updates"===u&&f((0,i.ec)({id:a.id,token:c})),"projects"===u&&f((0,o.th)({id:a.id,token:c})),p.replace("/dashboard")}})})}},7473:function(e,t,a){"use strict";a.d(t,{Z:function(){return y}});var s=a(7437),n=a(2265),r=a(8862),d=a(8875),i=a(4033),o=a(7713),l=a(3043),u=a(8762),c=a(7507),p=a(8957),f=a(1361),m=a(2171),h={title:{label:"Headline*",elementType:"input",config:{id:"title",type:"text",name:"title"},value:"",validation:{isRequired:!0},valid:!0},body:{label:"Description*",elementType:"editor",config:{id:"body",type:"text",name:"body"},value:"",validation:{},valid:!0},projectId:{label:"Assign to a project",elementType:"projectMenu",config:{id:"projectId",type:"text",name:"projectId"},value:"",validation:{},valid:!0},tags:{elementType:"input",label:"Tags*",subLabel:"(Separate tags using space)",config:{id:"tags",type:"text",name:"tags"},value:"",validation:{},valid:!0}},g={title:{elementType:"input",label:"Project name*",config:{id:"title",type:"text",name:"title"},value:"",validation:{isRequired:!0},valid:!0},body:{elementType:"editor",label:"Description*",config:{id:"body",type:"text",name:"body"},value:"",validation:{},valid:!0},teamMembers:{elementType:"teamMenu",label:"Team members*",config:{id:"teamMembers",type:"text",name:"teamMembers"},value:"",validation:{},valid:!0}};function v(e){let{show:t,toggleModal:a,data:d,slice:v}=e,[y,x]=(0,n.useState)({}),b=(0,o.getCookie)("authToken"),j=(0,i.useRouter)(),w=(0,i.useParams)(),C=(0,r.TL)(),T=(0,r.CG)(e=>e.updates.errors),E=(0,r.CG)(e=>e.updates.status),k=(0,r.CG)(e=>e.projects.status),M=(0,r.CG)(e=>e.auth.credentials.user);return(0,n.useEffect)(()=>{let e;"projects"===v&&(e={...g}),"updates"===v&&(e={...h});let t=Object.keys(e);d&&t.forEach(t=>{if("projectId"===t&&"updates"===v){var a;e[t].value=null==d?void 0:null===(a=d.project)||void 0===a?void 0:a.id}else if("tags"===t){let a="";d.tags.forEach((e,t)=>{a=0===t?e:a+" "+e}),e[t].value=a}else e[t].value=d[t]}),x(e)},[v,d]),(0,n.useEffect)(()=>{("editSucceeded"===E||"editSucceeded"===k)&&("updates"===v&&C((0,l.Tf)("idle")),"projects"===v&&C((0,u.Tf)("idle")),a(),j.refresh(),j.push("/dashboard"))},[E,k,C,j,a,v]),(0,s.jsx)(m.Z,{title:"Edit update",isOpen:t,toggle:a,children:Object.keys(y).length>0&&t&&(0,s.jsx)(f.Z,{formFile:y,className:"flex flex-col min-w-full",onSubmit:e=>{if(e.tags&&"string"==typeof e.tags&&(e={...e,tags:(0,c.ny)(e.tags)}),e.teamMembers){let t=[];e.teamMembers.forEach(e=>t.push(e.id)),e={...e,teamMembers:t}}let{id:t,firstname:a,lastname:s,image:n}=M,r={body:{...e},token:b,userInfo:{id:t,firstname:a,lastname:s,image:n},id:w.id};"projects"===v&&C((0,u.NV)(r)),"updates"===v&&C((0,l.dw)(r))},errors:T,children:(0,s.jsx)(p.Z,{type:"submit",className:"text-xl p-10 mb-7 place-self-end",children:"Edit"})})})}function y(e){var t;let{data:a,slice:i}=e,o=(0,r.CG)(e=>e.auth.credentials.user.id),[l,u]=(0,n.useState)(!1);if(o===(null==a?void 0:null===(t=a.user)||void 0===t?void 0:t.id))return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{show:l,toggleModal:()=>{u(!l)},data:a,slice:i}),(0,s.jsx)("div",{className:"text-black cursor-pointer opacity-70 hover:opacity-90",children:(0,s.jsx)(d.Z,{name:"edit",onClick:()=>{u(!0)}})})]})}},1195:function(e,t,a){"use strict";var s=a(7437);t.Z=e=>{let{className:t,children:a}=e,n="border-[#E2E5E6] bg-white rounded shadow-md ";return t&&(n+=t),(0,s.jsx)("div",{className:n,children:a})}},2171:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var s=a(7437),n=a(2265),r=a(1195),d=a(8875);function i(e){let{title:t,isOpen:a,toggle:i,children:o}=e,l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{a?document.body.style.overflow="hidden":document.body.style.overflow="auto";let e=e=>{l&&l.current===e.target&&i()},t=l.current;return null==t||t.addEventListener("click",e),()=>null==t?void 0:t.removeEventListener("click",e)},[a,i]),(0,s.jsx)("div",{className:"".concat(a?"block":"hidden"," w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 py-10 overflow-hidden"),ref:l,children:(0,s.jsxs)(r.Z,{className:"bg-red-500 w-[600px] my-0 mx-auto",children:[(0,s.jsxs)("header",{className:"py-4 px-5 bg-[#F4F8F9] flex-between",children:[(0,s.jsx)("h3",{className:"text-title",children:t}),(0,s.jsx)("button",{className:"hover:opacity-80",onClick:i,children:(0,s.jsx)(d.Z,{name:"close",iconContainerStyle:"w-5 h-5 bg-body opacity-50 rounded-full text-white cursor-pointer",size:"xs"})})]}),(0,s.jsx)("div",{className:"px-5 pt-5 max-h-[80vh] overflow-scroll",children:o})]})})}},2482:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(7437),n=a(6932),r=a(848),d=a(6449),i=a.n(d),o=a(6565);function l(e){let{content:t,className:a}=e,d=(0,n.jE)({editorProps:{attributes:{class:"".concat(i().tiptapEditor," prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc")}},editable:!1,content:t,extensions:[r.Z,o.Z]});return d?(0,s.jsx)("div",{className:"pt-2.5 ".concat(a),children:(null==t?void 0:t.type)?(0,s.jsx)(n.kg,{editor:d}):(0,s.jsx)("p",{className:"text-body",children:t})}):null}},3043:function(e,t,a){"use strict";a.d(t,{$J:function(){return p},ER:function(){return d},Tf:function(){return u},Vx:function(){return f},b9:function(){return c},dw:function(){return i},ec:function(){return o},f9:function(){return r}});var s=a(4332),n=a(4302);let r=(0,n.hg)("/updates/fetchUpdates",async(e,t)=>{let{rejectWithValue:a}=t,n=await s.h.get("".concat("https://us-central1-sitdown-834fc.cloudfunctions.net/api/","updates"));return n.error?a(n):n}),d=(0,n.hg)("/updates/postUpdate",async(e,t)=>{let{body:a,token:n,userInfo:r}=e,{rejectWithValue:d}=t,i=await s.h.post("".concat("https://us-central1-sitdown-834fc.cloudfunctions.net/api/","updates"),a,n);if(!i.id)return d(i);let{userId:o,...l}=i;return{...l,user:r}}),i=(0,n.hg)("/updates/editUpdate",async(e,t)=>{let{body:a,token:n,userInfo:r,id:d}=e,{rejectWithValue:i}=t,o=await s.h.post("".concat("https://us-central1-sitdown-834fc.cloudfunctions.net/api/","updates/").concat(d),a,n);if(!o.id)return i(o);let{userId:l,...u}=o;return{...u,user:r}}),o=(0,n.hg)("/updates/deleteUpdate",async(e,t)=>{let{id:a,token:n}=e,{rejectWithValue:r}=t,d=await s.h.delete("".concat("https://us-central1-sitdown-834fc.cloudfunctions.net/api/","updates/").concat(a),null,n);return d.error?r(d):{id:a,message:d}}),l=(0,n.oM)({name:"updates",initialState:{updates:[],status:"idle",errors:{},isModalOpen:!1,updateId:""},reducers:{setStatus:(e,t)=>{e.status=t.payload},clearErrors:e=>{e.errors={}},toggleModal:e=>{e.isModalOpen=!e.isModalOpen},setUpdates:(e,t)=>{e.updates=t.payload}},extraReducers(e){e.addCase(r.pending,(e,t)=>{e.status="loading",e.errors={}}).addCase(r.fulfilled,(e,t)=>{e.status="fetchSucceeded",e.updates=e.updates.concat(t.payload)}).addCase(r.rejected,(e,t)=>{e.status="failed",e.errors=t.error.message}).addCase(d.pending,(e,t)=>{e.status="loading",e.errors={}}).addCase(d.fulfilled,(e,t)=>{e.status="postSucceeded",e.updates.unshift(t.payload),e.errors={}}).addCase(d.rejected,(e,t)=>{e.status="failed",e.errors=t.payload}).addCase(i.pending,(e,t)=>{e.status="loading",e.errors={}}).addCase(i.fulfilled,(e,t)=>{let a=e.updates.findIndex(e=>e.id===t.payload.id);e.status="editSucceeded",e.updates[a]=t.payload,e.errors={}}).addCase(i.rejected,(e,t)=>{e.status="failed",e.errors=t.payload}).addCase(o.pending,(e,t)=>{e.status="loading",e.errors={}}).addCase(o.fulfilled,(e,t)=>{let a=e.updates.findIndex(e=>e.id===t.payload.id);e.updates.splice(a,1),e.status="deleteSucceeded",e.errors={}}).addCase(o.rejected,(e,t)=>{e.status="failed",e.errors=t.payload})}}),{setStatus:u,clearErrors:c,toggleModal:p,setUpdates:f}=l.actions;t.ZP=l.reducer},7507:function(e,t,a){"use strict";a.d(t,{Yd:function(){return d},bT:function(){return r},jQ:function(){return o},ny:function(){return i},p6:function(){return s}});let s=e=>{let t,a;let s=2592e6,n=new Date,r=n.getTime()-new Date(e).getTime();r<6e4?(a=1e3,t="seconds"):r<36e5?(a=6e4,t="minutes"):r<864e5?(a=36e5,t="hours"):r<s?(a=864e5,t="days"):r<31536e6?(a=s,t="months"):(a=1e3,t="seconds");let d=Math.round(r/a);return 1===d&&(t=t.slice(0,-1)),"".concat(d," ").concat(t," ago")},n=e=>"0".concat(e),r=e=>{let t=new Date(e),a=t.getUTCHours().toLocaleString(),r=t.getUTCMinutes().toLocaleString(),d=new Date,i=d.getTime()-t.getTime();return i<216e5?s(e):"".concat(1===a.length?n(a):a,":").concat(1===r.length?n(r):r)},d=e=>{let t=new Date,a=t.getTime()-new Date(e).getTime();if(a<864e5)return"Today";if(a>864e5&&a<1728e5)return"Yesterday";let s=e.split(" ");return"".concat(s[0],", ").concat(s[2]," ").concat(s[1])},i=e=>{let t=e.replace(/[^a-zA-Z ]/g," ").replace(/\s+/g," ").split(" "),a=[];return t.forEach(e=>{a.includes(e.toLowerCase())||a.push(e.toLowerCase())}),a},o=e=>e.sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime())},6449:function(e){e.exports={tiptapEditor:"TiptapRender_tiptapEditor__zS_UV"}},1396:function(e,t,a){e.exports=a(6685)}}]);