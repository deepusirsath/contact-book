(this["webpackJsonpcontact-book"]=this["webpackJsonpcontact-book"]||[]).push([[0],{137:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a.n(n),r=a(57),o=a.n(r),i=(a(137),a(14)),l=a(19),d=a(5),b=a(24),u=a(86),m=a.n(u),j="CREATE_CONTACT",h="GET_CONTACT",p="UPDATE_CONTACT",O="DELETE_CONTACT",x="SELECT_CONTACT",g="CLEAR_CONTACT",y="DELETE_SELECTED_CONTACT",f=function(){var e=Object(d.f)(),t=Object(i.b)(),a=Object(n.useState)(""),s=Object(b.a)(a,2),r=s[0],o=s[1],l=Object(n.useState)(""),u=Object(b.a)(l,2),h=u[0],p=u[1],O=Object(n.useState)(""),x=Object(b.a)(O,2),g=x[0],y=x[1],f=function(a){a.preventDefault();var c={id:m.a.generate(),name:r,phone:h,email:g};t({type:j,payload:c}),e.push("/")};return Object(c.jsxs)("div",{className:"card border-0 shadow",children:[Object(c.jsx)("div",{className:"card-header",children:"Add a Contacts"}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Your Name",value:r,onChange:function(e){return o(e.target.value)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"number",className:"form-control",placeholder:"Enter Your Phone Number",value:h,onChange:function(e){return p(e.target.value)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter Your Email Address",value:g,onChange:function(e){return y(e.target.value)}})}),Object(c.jsx)("button",{className:"btn btn-primary",children:"Create contact"})]})})]})},v=function(){var e=Object(d.g)().id,t=Object(d.f)(),a=Object(i.b)(),s=Object(i.c)((function(e){return e.contacts.contact})),r=Object(n.useState)(""),o=Object(b.a)(r,2),l=o[0],u=o[1],m=Object(n.useState)(""),j=Object(b.a)(m,2),O=j[0],x=j[1],g=Object(n.useState)(""),y=Object(b.a)(g,2),f=y[0],v=y[1];Object(n.useEffect)((function(){null!=s&&(u(s.name),x(s.phone),v(s.email)),a(function(e){return{type:h,payload:e}}(e))}),[s]);var C=function(e){e.preventDefault();var c=Object.assign(s,{name:l,phone:O,email:f});console.log(c),a(function(e){return{type:p,payload:e}}(c)),t.push("/")};return Object(c.jsxs)("div",{className:"card border-0 shadow",children:[Object(c.jsx)("div",{className:"card-header",children:"Edit a Contact"}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("form",{onSubmit:function(e){return C(e)},children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Your Name",value:l,onChange:function(e){return u(e.target.value)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"number",className:"form-control",placeholder:"Enter Your Phone Number",value:O,onChange:function(e){return x(e.target.value)}})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter Your Email Address",value:f,onChange:function(e){return v(e.target.value)}})}),Object(c.jsx)("button",{className:"btn btn-warning",children:"Update Contact"})]})})]})},C=a(130),N=function(e){var t=e.contact,a=e.selectAll,n=Object(i.b)(),s=t.name,r=t.phone,o=t.email,d=t.id;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(c.jsx)("input",{checked:a,type:"checkbox",className:"custom-control-input"}),Object(c.jsx)("label",{className:"custom-control-label"})]})}),Object(c.jsxs)("td",{children:[Object(c.jsx)(C.a,{className:"mr-2",name:s,size:"45",round:!0}),s]}),Object(c.jsx)("td",{children:r}),Object(c.jsx)("td",{children:o}),Object(c.jsxs)("td",{className:"actions",children:[Object(c.jsx)(l.b,{to:"/contacts/edit/".concat(d),children:Object(c.jsx)("span",{className:"material-icons mr-2 ",children:"edit"})}),Object(c.jsx)("span",{className:"material-icons text-danger",onClick:function(){return n(function(e){return{type:O,payload:e}}(d))},children:"remove_circle"})]})]})},S=function(){var e=Object(i.b)(),t=Object(n.useState)(!1),a=Object(b.a)(t,2),s=a[0],r=a[1],o=Object(i.c)((function(e){return e.contacts.contacts})),l=Object(i.c)((function(e){return e.contacts.selectedContacts}));return console.log(o),Object(n.useEffect)((function(){var t;e(s?(t=o.map((function(e){return e.id})),{type:x,payload:t}):{type:g})}),[s]),Object(c.jsxs)("div",{children:[l.length>0?Object(c.jsx)("button",{className:"btn btn-danger mb-3",onClick:function(){return e({type:y})},children:"Delete All"}):null,Object(c.jsx)("div",{children:Object(c.jsxs)("table",{className:"table shawdow",children:[Object(c.jsx)("thead",{className:" text-black",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:Object(c.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(c.jsx)("input",{id:"selectAll",type:"checkbox",className:"custom-control-input",value:s,onClick:function(){return r(!s)}}),Object(c.jsx)("label",{htmlFor:"selectAll",className:"custom-control-label"})]})}),Object(c.jsx)("th",{scope:"col",children:"Name"}),Object(c.jsx)("th",{scope:"col",children:"Phone"}),Object(c.jsx)("th",{scope:"col",children:"E-mail"}),Object(c.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(c.jsx)("tbody",{children:o.map((function(e){return Object(c.jsx)(N,{contact:e,selectAll:s},e.id)}))})]})})]})},E=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("nav",{className:"navbar shawdow fixed-top navbar-expand-sm navbar-dark bg-primary",children:[Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(l.b,{to:"/",className:"navbar-brand",children:"Contact Book"})}),Object(c.jsx)("div",{children:Object(c.jsx)(l.b,{to:"/contacts/add",className:"btn btn-light ml-auto",children:"Create Contact"})})]})})},k=a(27),w=a(128),T=a(129),A=a(131),P=a(9),z={contacts:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],contact:null,selectedContacts:[]},D=Object(k.combineReducers)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(P.a)(Object(P.a)({},e),{},{contacts:[t.payload].concat(Object(A.a)(e.contacts))});case h:var a=e.contacts.filter((function(e){return e.id==t.payload}));a=a.values();var c,n=Object(T.a)(a);try{for(n.s();!(c=n.n()).done;){var s=c.value;a=s}}catch(r){n.e(r)}finally{n.f()}return Object(P.a)(Object(P.a)({},e),{},{contact:a});case p:return Object(P.a)(Object(P.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id==t.payload.id?t.payload:e}))});case O:return Object(P.a)(Object(P.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!=t.payload}))});case x:return Object(P.a)(Object(P.a)({},e),{},{selectedContacts:t.payload});case g:return Object(P.a)(Object(P.a)({},e),{},{selectedContacts:[]});case y:return Object(P.a)(Object(P.a)({},e),{},{contacts:[]});default:return e}}}),L=Object(k.createStore)(D,Object(w.composeWithDevTools)());a(185);var _=function(){return Object(c.jsx)(l.a,{children:Object(c.jsx)(i.a,{store:L,children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(E,{}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"py-3",children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",component:S}),Object(c.jsx)(d.a,{exact:!0,path:"/contacts/add",component:f}),Object(c.jsx)(d.a,{exact:!0,path:"/contacts/edit/:id",component:v})]})})})]})})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,187)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root")),R()}},[[186,1,2]]]);
//# sourceMappingURL=main.7537095e.chunk.js.map