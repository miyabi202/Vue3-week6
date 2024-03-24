import{_ as x,r as h,o as r,c as d,b as a,a as e,F as V,i as y,f as m,t as c,w as k,d as p,j as f,h as C,v as L}from"./index-122ce74c.js";const S={data(){return{loadingStatus:{loadingItem:""},isLoading:!1,cart:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon_code:""}},mounted(){this.getCart()},methods:{getCart(){this.isLoading=!0;const i="https://vue3-course-api.hexschool.io/v2/api/yana/cart";this.$http.get(i).then(t=>{t.data.success?(this.cart=t.data.data,this.isLoading=!1):alert(t.data.message)})},removeCartItem(i){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/v2/api/yana/cart/${i}`;this.loadingStatus.loadingItem=i,this.$http.delete(t).then(n=>{alert(n.data.message),this.getCart()}).catch(n=>{alert(n.response.data.message)}),this.loadingStatus.loadingItem="",this.isLoading=!1},createOrder(){this.isLoading=!0;const i="https://vue3-course-api.hexschool.io/v2/api/yana/order",t=this.form;this.$http.post(i,{data:t}).then(n=>{alert(n.data.message),this.$refs.form.resetForm(),this.isLoading=!1}).catch(n=>{alert(n.response.data.message)})}}},w={class:"about"},F=e("h1",null,"This is 購物車頁面",-1),I={class:"container"},U={class:"row justify-content-center"},q={class:"col-md-6"},E={class:"table align-middle"},N=e("thead",null,[e("tr",null,[e("th"),e("th",null,"品名"),e("th",{style:{width:"110px"}},"數量"),e("th",null,"單價")])],-1),j=["onClick","disabled"],B={key:0,class:"fas fa-spinner fa-pulse"},M={key:0,class:"text-success"},T={class:"input-group input-group-sm"},D={class:"text-end"},O={key:0,class:"text-success"},z=e("td",{colspan:"3",class:"text-end"},"總計",-1),A={class:"text-end"},G={key:0},H=e("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),J={class:"text-end text-success"},K={class:"my-5 row justify-content-center"},P={class:"mb-3"},Q=e("label",{for:"email",class:"form-label"},"Email",-1),R={class:"mb-3"},W=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),X={class:"mb-3"},Y=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),Z={class:"mb-3"},$=e("label",{for:"address",class:"form-label"},"收件人地址",-1),ee={class:"mb-3"},se=e("label",{for:"message",class:"form-label"},"留言",-1),te=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function oe(i,t,n,le,s,g){const b=h("VueLoading"),u=h("VeeField"),_=h("ErrorMessage"),v=h("VeeForm");return r(),d("div",w,[a(b,{active:s.isLoading},null,8,["active"]),F,e("div",I,[e("div",U,[e("div",q,[e("table",E,[N,e("tbody",null,[s.cart.carts?(r(!0),d(V,{key:0},y(s.cart.carts,o=>(r(),d("tr",{key:o.id},[e("td",null,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:l=>g.removeCartItem(o.id),disabled:s.loadingStatus.loadingItem===o.id},[s.loadingStatus.loadingItem===o.id?(r(),d("i",B)):m("",!0),p(" 移除購物車 ")],8,j)]),e("td",null,[p(c(o.product.title)+" ",1),o.coupon?(r(),d("div",M," 已套用優惠券 ")):m("",!0)]),e("td",null,[e("div",T,c(o.qty)+" / "+c(o.product.unit),1)]),e("td",D,[s.cart.final_total!==s.cart.total?(r(),d("small",O,"折扣價：")):m("",!0),p(c(o.final_total),1)])]))),128)):m("",!0)]),e("tfoot",null,[e("tr",null,[z,e("td",A,c(s.cart.total),1)]),s.cart.final_total!==s.cart.total?(r(),d("tr",G,[H,e("td",J,c(s.cart.final_total),1)])):m("",!0)])])])]),e("div",K,[a(v,{ref:"form",class:"col-md-6",onSubmit:g.createOrder},{default:k(({errors:o})=>[e("div",P,[Q,a(u,{id:"email",name:"email",type:"email",class:f(["form-control",{"is-invalid":o.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:s.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=l=>s.form.user.email=l)},null,8,["class","modelValue"]),a(_,{name:"email",class:"invalid-feedback"})]),e("div",R,[W,a(u,{id:"name",name:"姓名",type:"text",class:f(["form-control",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:s.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=l=>s.form.user.name=l)},null,8,["class","modelValue"]),a(_,{name:"姓名",class:"invalid-feedback"})]),e("div",X,[Y,a(u,{id:"tel",name:"電話",type:"text",class:f(["form-control",{"is-invalid":o.電話}]),placeholder:"請輸入電話",rules:"required",modelValue:s.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=l=>s.form.user.tel=l)},null,8,["class","modelValue"]),a(_,{name:"電話",class:"invalid-feedback"})]),e("div",Z,[$,a(u,{id:"address",name:"地址",type:"text",class:f(["form-control",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:s.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=l=>s.form.user.address=l)},null,8,["class","modelValue"]),a(_,{name:"地址",class:"invalid-feedback"})]),e("div",ee,[se,C(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=l=>s.form.message=l)},null,512),[[L,s.form.message]])]),te]),_:1},8,["onSubmit"])])])])}const ne=x(S,[["render",oe]]);export{ne as default};
