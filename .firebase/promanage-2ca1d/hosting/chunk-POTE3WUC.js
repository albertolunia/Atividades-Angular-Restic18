import{a as P}from"./chunk-FBHGKCWK.js";import{Aa as A,Ba as T,Ca as q,Da as f,Fa as V,G as m,Ga as z,H as _,Ha as G,Ia as B,J as v,Ja as $,Ka as H,L as C,Ma as R,O as n,P as e,Q as l,S as E,T as w,V as N,W as o,X as p,a as h,b as y,ea as D,ia as j,ja as F,ka as I,n as S,r as M,v as d,va as b,w as O,ya as k,za as g}from"./chunk-2RZM3PCF.js";function Y(r,t){if(r&1&&(n(0,"div",5)(1,"span"),o(2),e(),n(3,"span"),o(4),e(),n(5,"span"),o(6),e(),n(7,"span"),o(8),e(),n(9,"span"),o(10),e(),n(11,"span"),o(12),e()()),r&2){let s=t.$implicit;m(2),p(s.projectName),m(2),p(s.description),m(2),p(s.startDate),m(2),p(s.endDate),m(2),p(s.status),m(2),p(s.responsible)}}function Z(r,t){if(r&1&&(n(0,"div"),v(1,Y,13,6,"div",4),e()),r&2){let s=w();m(),C("ngForOf",s.projetos)}}function tt(r,t){r&1&&(n(0,"p"),o(1,"Nenhum projeto encontrado."),e())}var U=(()=>{let t=class t{constructor(a){this.storageService=a,this.projetos=[]}ngOnInit(){let a=JSON.parse(localStorage.getItem("userData")||"{}");this.storageService.listarProjetos().pipe(S(i=>(this.projetos=Object.keys(i).map(c=>y(h({},i[c]),{id:c})),a&&a.id?this.projetos=this.projetos.filter(c=>c.userId===a.id):this.projetos=[],this.projetos))).subscribe()}};t.\u0275fac=function(i){return new(i||t)(_(P))},t.\u0275cmp=d({type:t,selectors:[["app-minha-producao"]],decls:17,vars:2,consts:[["noData",""],[1,"item"],[1,"filtros","cabecalho"],[4,"ngIf","ngIfElse"],["class","filtros",4,"ngFor","ngForOf"],[1,"filtros"]],template:function(i,c){if(i&1&&(n(0,"div",1)(1,"div",2)(2,"span"),o(3,"Nome do Projeto"),e(),n(4,"span"),o(5,"Descri\xE7\xE3o"),e(),n(6,"span"),o(7,"Data de In\xEDcio"),e(),n(8,"span"),o(9,"Data de T\xE9rmino"),e(),n(10,"span"),o(11,"Status"),e(),n(12,"span"),o(13,"Respons\xE1vel"),e()(),v(14,Z,2,1,"div",3)(15,tt,2,0,"ng-template",null,0,D),e()),i&2){let x=N(16);m(14),C("ngIf",c.projetos.length>0)("ngIfElse",x)}},dependencies:[j,F],styles:[".item[_ngcontent-%COMP%]{align-items:center}.filtros[_ngcontent-%COMP%]{display:flex;align-items:center;padding:5px 30px;background:var(--background-color);color:var(--primary-color)}.filtros[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;flex:1;text-align:center}.filtros.cabecalho[_ngcontent-%COMP%]{background:var(--primary-color);font-weight:600;color:#fff}"]});let r=t;return r})();var K=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=d({type:t,selectors:[["app-footer"]],decls:8,vars:0,consts:[["href","https://www.linkedin.com/in/beatriz-pereira-81467317b/"],["href","https://github.com/albertolunia"]],template:function(i,c){i&1&&(n(0,"footer")(1,"p"),o(2," Desenvolvido por: "),n(3,"a",0),o(4,"Beatriz"),e(),o(5," e "),n(6,"a",1),o(7,"Alberto"),e()()())},styles:["footer[_ngcontent-%COMP%]{background-color:var(--primary-color);color:#f0f0f0;text-align:center;padding:10px 0;font-size:.9rem;width:100%;font-style:italic}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}"]});let r=t;return r})();var L=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=d({type:t,selectors:[["app-header"]],decls:12,vars:0,consts:[[1,"menuContainer"],[1,"max-width","menu"],[1,"logo"],["href","/"],[1,"links"],["href","/dashboard#suino"],["href","/dashboard#minhaproducao"]],template:function(i,c){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),o(4,"ProManager"),n(5,"small"),o(6,"\xAE"),e()()(),n(7,"div",4)(8,"a",5),o(9,"Project+"),e(),n(10,"a",6),o(11,"Meus Projetos"),e()()()())},styles:[".menuContainer[_ngcontent-%COMP%]{display:flex;width:100%;background-color:var(--primary-color);padding:10px 30px;position:fixed;z-index:1000}.menu[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.menu[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.5rem;color:#f0f0f0;text-decoration:none;display:flex;margin:0;padding:0;padding-right:8rem}.menu[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:flex;align-items:flex-end;margin:0;padding:0}.menu[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{display:flex;gap:2rem}.menu[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f0f0f0;text-decoration:none;font-weight:500}.button[_ngcontent-%COMP%]{background-color:transparent;color:#f0f0f0;border:1px solid #f0f0f0;padding:10px 20px;border-radius:2px;cursor:pointer;text-decoration:none}.button[_ngcontent-%COMP%]:hover{background-color:var(--tertiary-color);border:1px solid var(--tertiary-color);color:var(--backound-color);transition:.3s}"]});let r=t;return r})();var Q=(()=>{let t=class t{constructor(a){this.storageService=a,this.cadastroForm=new q({nomeProjeto:new f("",g.required),descricaoProjeto:new f("",g.required),dataInicio:new f("",g.required),dataFim:new f("",g.required),statusProjeto:new f("",g.required),responsavel:new f("",g.required)})}ngOnInit(){}onSubmit(){let a=this.cadastroForm.value,i=localStorage.getItem("userData"),c={projectName:a.nomeProjeto||"",description:a.descricaoProjeto||"",startDate:a.dataInicio||"",endDate:a.dataFim||"",status:a.statusProjeto||"",responsible:a.responsavel||"",userId:i?JSON.parse(i).id:""};this.storageService.addProject(c)}};t.\u0275fac=function(i){return new(i||t)(_(P))},t.\u0275cmp=d({type:t,selectors:[["app-cadastro-projeto"]],decls:38,vars:1,consts:[[1,"containerCadastro"],[1,"formCadastro"],[3,"ngSubmit","formGroup"],[1,"group"],[1,"form-group"],["for","nomeProjeto"],["formControlName","nomeProjeto","placeholder","Nome do Projeto","id","nomeProjeto",1,"form-control"],["for","descricaoProjeto"],["formControlName","descricaoProjeto","placeholder","Descri\xE7\xE3o do Projeto","id","descricaoProjeto",1,"form-control"],["for","dataInicio"],["type","date","formControlName","dataInicio","id","dataInicio",1,"form-control"],["for","dataFim"],["type","date","formControlName","dataFim","id","dataFim",1,"form-control"],["for","statusProjeto"],["formControlName","statusProjeto","id","statusProjeto",1,"form-control"],["value","Em andamento"],["value","Conclu\xEDdo"],["value","Cancelado"],["for","responsavel"],["formControlName","responsavel","placeholder","Respons\xE1vel","id","responsavel",1,"form-control"],["type","submit",1,"btn","btn-primary"]],template:function(i,c){i&1&&(n(0,"div",0)(1,"div",1)(2,"form",2),E("ngSubmit",function(){return c.onSubmit()}),n(3,"div",3)(4,"div",4)(5,"label",5),o(6,"Nome do Projeto"),e(),l(7,"input",6),e(),n(8,"div",4)(9,"label",7),o(10,"Descri\xE7\xE3o do Projeto"),e(),l(11,"textarea",8),e()(),n(12,"div",3)(13,"div",4)(14,"label",9),o(15,"Data de In\xEDcio"),e(),l(16,"input",10),e(),n(17,"div",4)(18,"label",11),o(19,"Data de T\xE9rmino"),e(),l(20,"input",12),e()(),n(21,"div",3)(22,"div",4)(23,"label",13),o(24,"Status"),e(),n(25,"select",14)(26,"option",15),o(27,"Em andamento"),e(),n(28,"option",16),o(29,"Conclu\xEDdo"),e(),n(30,"option",17),o(31,"Cancelado"),e()()(),n(32,"div",4)(33,"label",18),o(34,"Respons\xE1vel"),e(),l(35,"input",19),e()(),n(36,"button",20),o(37,"Confirmar"),e()()()()),i&2&&(m(2),C("formGroup",c.cadastroForm))},dependencies:[V,$,H,k,B,A,T,z,G],styles:["form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.ng-invalid.ng-touched[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:red}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-valid.ng-touched[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.ng-valid.ng-touched[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.ng-valid.ng-touched[_ngcontent-%COMP%]{border-color:#2bbd2b}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.ng-valid.ng-touched[_ngcontent-%COMP%] + label[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.ng-valid.ng-touched[_ngcontent-%COMP%] + label[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.ng-valid.ng-touched[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{color:green}.containerCadastro[_ngcontent-%COMP%]{width:100%;height:100%}.containerCadastro[_ngcontent-%COMP%]   .formCadastro[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;width:100%}.containerCadastro[_ngcontent-%COMP%]   .formCadastro[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:2rem;width:100%}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1rem;color:var(--primary-color);font-family:Bebas Neue,sans-serif}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.8rem;color:red;font-style:italic}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:.5rem;border:none;border-bottom:2px solid var(--primary-color);background:transparent}form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{outline:none;border-bottom:2px solid var(--tertiary-color)}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.5rem;background:var(--tertiary-color);color:#fff;border:none;cursor:pointer;font-size:1rem;width:15rem}.formCadastro[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--tertiary-color)}.formCadastro[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1rem}.containerCadastro[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]{display:flex;width:100%;gap:2rem}.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none}"]});let r=t;return r})();var W=(()=>{let t=class t{constructor(){this.icone="home"}orderBy(a){switch(a){case 1:console.log("Ordenar por pai");break;case 2:console.log("Ordenar por mae");break;case 3:console.log("Ordenar por valor");break}}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=d({type:t,selectors:[["app-dashboard"]],decls:13,vars:0,consts:[[1,"containerDasboard"],["id","suino",1,"secao","suinoplus","max-width"],[1,"topico"],[1,"item"],[1,"secao","secaoProducao"],[1,"minhaProducao","max-width"],["id","minhaproducao",1,"topico"]],template:function(i,c){i&1&&(l(0,"app-header"),n(1,"div",0)(2,"div",1)(3,"p",2),o(4,"Project+"),e(),n(5,"div",3),l(6,"app-cadastro-projeto"),e()(),n(7,"div",4)(8,"div",5)(9,"p",6),o(10,"Minha produ\xE7\xE3o"),e(),l(11,"app-minha-producao"),e()()(),l(12,"app-footer"))},dependencies:[U,K,L,Q],styles:[".containerDasboard[_ngcontent-%COMP%]{background:#fff}.containerDasboard[_ngcontent-%COMP%]   .secao[_ngcontent-%COMP%]{min-height:300px;width:100%}.containerDasboard[_ngcontent-%COMP%]   .secaoProducao[_ngcontent-%COMP%]{background:var(--background2-color)}.suinoplus[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:70px 0 30px;justify-content:space-between;align-items:center;width:100%}.topico[_ngcontent-%COMP%]{font-size:1.4rem;border-radius:20px;color:var(--primary-color);text-align:center}.suinoplus[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:70%;border-radius:100px;padding:40px;background:#f0f0f0}.minhaProducao[_ngcontent-%COMP%]{padding:20px 0 30px;display:flex;flex-direction:column;gap:20px;color:var(--backound-color)}.minhaProducao[_ngcontent-%COMP%]   .topico[_ngcontent-%COMP%]{color:var(--backound-color9)}.acompanhamento[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.acompanhamento[_ngcontent-%COMP%]   .busca[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;padding:5px 30px;border:2px solid var(--primary-color);border-radius:20px}.acompanhamento[_ngcontent-%COMP%]   .busca[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.acompanhamento[_ngcontent-%COMP%]   .busca[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;width:100%;outline:none}.grafico[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]{display:flex;gap:20px}.grafico[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .desenho[_ngcontent-%COMP%]{background-color:var(--backound-color);border-top-left-radius:100px;border-bottom-right-radius:100px;padding:20px 0;width:60%}.grafico[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .peso[_ngcontent-%COMP%]{width:40%;display:flex;align-items:center;justify-content:center}"]});let r=t;return r})();var it=[{path:"",component:W}],X=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=O({type:t}),t.\u0275inj=M({imports:[b.forChild(it),b]});let r=t;return r})();var qt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=O({type:t}),t.\u0275inj=M({imports:[I,X,R]});let r=t;return r})();export{K as a,L as b,qt as c};
