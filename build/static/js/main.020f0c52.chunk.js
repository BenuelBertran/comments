(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(16),a(6)),s=a(1),i=a(2),m=a(4),u=a(3),d=a(5),h=a(9),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",text:"",fullText:"",agree:!1,className:"add hide",hide:!0},a.onBtnClickHandler=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.text,c=t.fullText;a.props.onAddComments({id:+new Date,author:n,text:r,fullText:c}),a.setState({className:"add hide",hide:!0})},a.handleChange=function(e){var t=e.currentTarget,n=t.id,r=t.value;a.setState(Object(h.a)({},n,r))},a.handleCheckboxChange=function(e){a.setState({agree:e.currentTarget.checked})},a.validate=function(){var e=a.state,t=e.name,n=e.text,r=e.agree;return!!(t.trim()&&n.trim()&&r)},a.newCommentHandler=function(){return a.state.hide?a.setState({className:"add",hide:!1}):a.setState({className:"add hide",hide:!0})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.text,n=e.fullText,c=e.className;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn__addComment",onClick:this.newCommentHandler},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"),r.a.createElement("form",{className:c},r.a.createElement("h3",{className:"newComment__title"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"),r.a.createElement("input",{id:"name",type:"text",onChange:this.handleChange,className:"add__author",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",value:t}),r.a.createElement("textarea",{id:"text",onChange:this.handleChange,className:"add__text",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",value:a}),r.a.createElement("textarea",{id:"fullText",onChange:this.handleChange,className:"add__text",placeholder:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",value:n}),r.a.createElement("label",{className:"add__checkrule"},r.a.createElement("input",{type:"checkbox",onChange:this.handleCheckboxChange})," \u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438"),r.a.createElement("button",{className:"add__btn",onClick:this.onBtnClickHandler,disabled:!this.validate()},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))}}]),t}(r.a.Component),p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1},a.handleShowMoreClick=function(e){e.preventDefault(),a.setState({visible:!0})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.author,a=e.text,n=e.fullText,c=this.state.visible;return r.a.createElement("article",{className:"comments__new"},r.a.createElement("p",{className:"comments__author"},t,":"),r.a.createElement("p",{className:"comments__text"},a),!c&&r.a.createElement("a",{onClick:this.handleShowMoreClick,href:"#showmore",className:"comments__showmore"},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"),c&&r.a.createElement("p",{className:"comments__fulltext"},n))}}]),t}(r.a.Component),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderComments=function(){var e=a.props.data;return e.length?e.map(function(e){return r.a.createElement(p,{key:e.id,data:e})}):r.a.createElement("p",null,"\u0415\u0449\u0451 \u043d\u0438\u043a\u0442\u043e \u043d\u0435 \u043e\u0441\u0442\u0430\u0432\u0438\u043b \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.renderComments()}}]),t}(r.a.Component),b=(a(18),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={comments:null,isLoading:!1},a.handleAddComments=function(e){var t=[e].concat(Object(o.a)(a.state.comments));a.setState({comments:t})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("https://benuelbertran.github.io/comments/data/commentsData.json").then(function(e){return e.json()}).then(function(t){setTimeout(function(){e.setState({isLoading:!1,comments:t})},1500)})}},{key:"render",value:function(){var e=this.state,t=e.comments,a=e.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"comments__wrapper"},r.a.createElement("h2",{className:"comments__title"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"),r.a.createElement("p",{className:"comments__subtitle"},"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u043e\u0432\u044b\u0435:"),a&&r.a.createElement("p",null,"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."),Array.isArray(t)&&r.a.createElement(v,{data:t}),r.a.createElement(f,{onAddComments:this.handleAddComments})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a;return Array.isArray(t.comments)?((a=Object(o.a)(t.comments)).forEach(function(e,t){-1!==e.fullText.toLowerCase().indexOf("\u043c\u0438\u0445\u0430\u043b\u043a\u043e\u0432")&&(e.fullText="\u0421\u041f\u0410\u041c")}),{filteredComments:a}):null}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.020f0c52.chunk.js.map