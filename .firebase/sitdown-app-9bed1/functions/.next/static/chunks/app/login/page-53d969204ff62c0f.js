(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{8056:function(e,t,r){Promise.resolve().then(r.t.bind(r,3222,23)),Promise.resolve().then(r.t.bind(r,6685,23)),Promise.resolve().then(r.bind(r,7804)),Promise.resolve().then(r.bind(r,279)),Promise.resolve().then(r.bind(r,6605)),Promise.resolve().then(r.bind(r,2872))},2872:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var a=r(7437),n=r(2265),s=r(4033),i=r(8862),o=r(2731),l=r(8957),d=r(1361),u={email:{elementType:"input",config:{id:"email",type:"email",name:"email",placeholder:"Enter email"},value:"",validation:{},valid:!0},password:{elementType:"input",config:{id:"password",type:"password",name:"password",placeholder:"Enter password"},value:"",validation:{},valid:!0}};function A(){let e=(0,i.CG)(e=>e.auth.errors),t=(0,i.CG)(e=>e.auth.isAuth),r=(0,i.CG)(e=>e.auth.credentials.user.id),A=(0,i.TL)();(0,n.useEffect)(()=>{A((0,o.b9)())},[A]);let c=async e=>{let t=await A((0,o.x4)({userData:e}));t.payload.token&&A((0,o.nX)(t.payload.token))};return t&&r&&(0,s.redirect)("/dashboard"),(0,a.jsxs)(d.Z,{formFile:u,className:"flex flex-col min-w-full",onSubmit:c,errors:e,children:[(0,a.jsx)("p",{className:"self-end mb-4 mt-1 text-caption-2 underline",children:"Forgotten Password?"}),(0,a.jsx)(l.Z,{type:"submit",className:"text-xl",children:"Login"}),e.error&&(0,a.jsx)("p",{className:"self-center mt-2 text-sm text-error",children:e.error})]})}},2731:function(e,t,r){"use strict";r.d(t,{W$:function(){return g},b9:function(){return c},kS:function(){return h},nX:function(){return l},x4:function(){return o}});var a=r(4302),n=r(7713),s=r(4332);let i={isAuth:!1,credentials:{token:"",user:{id:"",email:"",firstname:"",lastname:"",createdAt:"",image:""}},status:"idle",errors:{}},o=(0,a.hg)("/login",async(e,t)=>{let{userData:r,isSignup:a}=e,{rejectWithValue:i}=t,o="".concat("https://us-central1-sitdown-834fc.cloudfunctions.net/api/","login");a&&(o="".concat("https://us-central1-sitdown-834fc.cloudfunctions.net/api/","signup"));let l=await s.h.post(o,r);return l.token?((0,n.setCookie)("authToken",l.token,{expires:new Date(Date.now()+36e5)}),l):i(l)}),l=(0,a.hg)("/getAuthUser",async(e,t)=>{let{rejectWithValue:r}=t,a=await s.h.get("".concat("https://us-central1-sitdown-834fc.cloudfunctions.net/api/","user"),void 0,e);return a.error?r(a.error):a}),d=(0,a.oM)({name:"auth",initialState:i,reducers:{setAuth:e=>{e.isAuth=!0},setProfileImage:(e,t)=>{e.credentials.user.image=t.payload},setCredentials:(e,t)=>{e.credentials.user=t.payload,e.isAuth=!0},clearErrors:e=>{e.errors={}},logout:e=>((0,n.deleteCookie)("authToken"),i)},extraReducers(e){e.addCase(o.pending,(e,t)=>{e.errors={},e.status="loading"}).addCase(o.fulfilled,(e,t)=>{e.status="succeeded",e.isAuth=!0,e.credentials.token=t.payload.token}).addCase(o.rejected,(e,t)=>{e.status="failed",e.errors=t.payload}).addCase(l.pending,(e,t)=>{e.errors={},e.status="loading"}).addCase(l.fulfilled,(e,t)=>{e.status="succeeded",e.credentials.user=t.payload,e.isAuth=!0}).addCase(l.rejected,(e,t)=>{e.status="failed",e.errors=t.error.message})}}),{setAuth:u,setCredentials:A,clearErrors:c,logout:h,setProfileImage:g}=d.actions;t.ZP=d.reducer},7804:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/google.433940d4.png",height:27,width:27,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA40lEQVR42mOAgZdOprGvnEx2v3Q2OQRkl75wMhdCSBqbzXjlYvL/pbPp3RcuNjeB+P9TD18XBhD4tkQ45E2q7v8XhhbVMA3/GRj4GWDg1z7mFb+3871jAIEF/1ndWz8v1W7/vsu59ct2p9bPhQz/9zCs+LJH4C0DELhH/2d3a/u02b3lyxmg5H+n1i9bGK7vUAirXO3+n2FZWDnMVOfOp9ZOzd+ACj7lMYDB8rA5ZiuC/hsvD71hvML7nNmiyv/2vTcOhkv8Z2OAAeMVwckmK4L3m6wIO2GyyqqW8yoDJwMDAwMAG4thENyUdaQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},6605:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/logo.3db8de2a.png",height:85,width:318,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQ0lEQVR4nGPkvX3hoOYbqTTJS6LCfzn//2X4x8DEwMDwCYj/AzEzo9OcD/NY/7If4eDmOPH3z38RkCAQ/wRiFiD+DgAeHxU53/1E3AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},279:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/small-logo.68fdcc73.png",height:85,width:58,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAlUlEQVR42mNgen+viOnD/b9MHx/8Z/p4/wnj18cCDMyPL38H4n8sjy7/Z310ueP///8MDKyXjv5gu3T0P+Plo78Ybu6SAgtyHN2dxHx05xexg/sXgQRAGEJsZ2D1nfT9uN+kH999J/2IAQt6Tf/p7DHj+38ofg0WdFrwdRcQ/4fi+ww2y77o2i778hqI3wPxK9ulX4IANSNmIQMKl4wAAAAASUVORK5CYII=",blurWidth:5,blurHeight:8}}},function(e){e.O(0,[676,572,902,222,336,385,41,971,596,744],function(){return e(e.s=8056)}),_N_E=e.O()}]);