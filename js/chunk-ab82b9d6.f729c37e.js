(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab82b9d6"],{"093b":function(t,e,n){},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)}))}}},"35bb":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"myNote"},[n("NoteBar",{attrs:{currentList:t.current}},[n("div",{staticClass:"tag"},[n("el-dropdown",{attrs:{trigger:"click"},on:{command:t.currentTitle}},[n("span",{staticClass:"el-dropdown-link"},[t._v(" "+t._s(void 0===t.current.title?"选择标题":t.current.title)+" "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.noteList,(function(e){return n("el-dropdown-item",{key:e.id,attrs:{command:e.id}},[t._v(" "+t._s(e.title)+" ")])})),1)],1),n("el-button",{staticClass:"addNewBtn",attrs:{type:"text"},on:{click:function(e){return t.changeDialogVisible(!0)}}},[t._v("添加笔记")]),n("el-dialog",{attrs:{title:"添加笔记",visible:t.addNoteVisible},on:{"update:visible":function(e){t.addNoteVisible=e}}},[n("el-form",{attrs:{model:t.addNote}},[n("el-form-item",{attrs:{label:"添加标题"}},[n("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.addNote.title,callback:function(e){t.$set(t.addNote,"title",e)},expression:"addNote.title"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){return t.changeDialogVisible(!1)}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.submitNote}},[t._v("确 定")])],1)],1)],1)]),n("Note",{attrs:{current:t.current}})],1)},i=[],o=(n("4de4"),n("96cf"),n("1da1")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"myNotes"},[t._t("default"),n("div",{staticClass:"titleBar"},[n("div",{staticClass:"updateDate"},[t._m(0),n("ul",t._l(t.dateList,(function(e,r){return n("li",{key:e.id,staticClass:"dataMessage",class:{active:r===t.current},on:{click:function(n){return t.currentId(e.id,r)}}},[n("span",{staticClass:"title"},[t._v(" "+t._s(t._f("formateData")(void 0===e.updatedAt?"":e.updatedAt,e.updatedAt))+" ")]),n("span",{staticClass:"title"},[t._v(" "+t._s(void 0===e.title?"":e.title))])])})),0)])])],2)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("更新时间")]),n("span",[t._v("标题")])])}],c=n("7145"),u={name:"NoteBar",props:["currentList"],data:function(){return{currentNote:[],current:0}},computed:{notesList:function(){return this.$store.state.notesList},dateList:{get:function(){return this.notesList},set:function(t){return t}}},methods:{currentId:function(t,e){this.current=e,this.currentNote=this.dateList.filter((function(e){return e.id===t})),c["a"].$emit("currentNote",this.currentNote)},getCurrentNote:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.getNotes(t);case 2:r=n.sent,i=r.data,e.$store.commit("getNotesList",i.data),e.dateList=e.notesList;case 6:case"end":return n.stop()}}),n)})))()}},mounted:function(){c["a"].$on("update",function(t){"update"===t&&(this.current=0),c["a"].$forceUpdate()}.bind(this))},beforeDestroy:function(){c["a"].$off("update")},watch:{currentList:function(){this.getCurrentNote(this.currentList.id)}},created:function(){this.currentList.id&&this.getCurrentNote(this.currentList.id)}},l=u,d=(n("a6c6"),n("2877")),f=Object(d["a"])(l,a,s,!1,null,"4a0d8b84",null),h=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note"},[n("div",{staticClass:"header"},[n("div",{staticClass:"date"},[n("span",[t._v("创建时间:"+t._s(t._f("formateData")(void 0===t.message?"":t.message.createdAt,t.message.createdAt)))]),n("span",[t._v("更新时间:"+t._s(t._f("formateData")(void 0===t.message?"":t.message.updatedAt,t.message.updatedAt)))]),n("i",{staticClass:"el-icon-delete-solid delete",on:{click:t.deleteNote}})])]),n("div",{staticClass:"main"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.message.title,expression:"message.title"}],staticClass:"title",attrs:{type:"text",placeholder:"选择标题"},domProps:{value:t.message.title},on:{input:[function(e){e.target.composing||t.$set(t.message,"title",e.target.value)},t.submitInput]}})]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message.content,expression:"message.content"}],staticClass:"content",attrs:{maxlength:"8000",placeholder:"输入内容"},domProps:{value:t.message.content},on:{input:[function(e){e.target.composing||t.$set(t.message,"content",e.target.value)},t.submitInput]}})])])},m=[];function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=null;return function(){var r=this;n&&window.clearTimeout(n),n=setTimeout((function(){r[t]()}),e)}}var g=v,y={name:"Note",props:["current"],data:function(){return{message:"",changeMessage:{title:"",content:""}}},computed:{notesList:{get:function(){return this.$store.state.notesList},set:function(t){return t}}},methods:{deleteNote:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.deleteNotes(t.message.id);case 2:return n=e.sent,200===n.status&&window.alert("删除成功"),e.next=6,t.$api.getNotes(t.message.notebookId);case 6:r=e.sent,i=r.data,t.notesList=i.data,t.$store.commit("getNotesList",i.data),t.message=t.notesList[0];case 11:case"end":return e.stop()}}),e)})))()},submitUpdate:function(t,e){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.$api.updateNotes(t,e);case 2:if(i=r.sent,200===i.status){r.next=5;break}return r.abrupt("return",window.alert("输入信息失败"));case 5:case"end":return r.stop()}}),r)})))()},changeInput:function(){this.changeMessage.title=this.message.title,this.changeMessage.content=this.message.content,this.submitUpdate(this.message.id,this.changeMessage,1e3)},submitInput:g("changeInput",2e3),getCurrentNote:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.getNotes(t);case 2:r=n.sent,i=r.data,0!==i.data.length?e.message=i.data[0]:e.message="";case 5:case"end":return n.stop()}}),n)})))()}},mounted:function(){c["a"].$on("currentNote",function(t){this.message=t[0],c["a"].$forceUpdate()}.bind(this))},beforeDestroy:function(){c["a"].$off("currentNote")},watch:{current:function(){this.getCurrentNote(this.current.id)},notesList:function(){0!==this.notesList.length&&(this.message=this.notesList[0])}}},w=y,b=(n("f3ed"),Object(d["a"])(w,p,m,!1,null,"8fbefe72",null)),N=b.exports,L={name:"MyNotes",components:{Note:N,NoteBar:h},data:function(){return{current:"",addNoteVisible:!1,addNote:{title:"",content:""}}},computed:{noteList:{get:function(){return this.$store.state.noteList},set:function(t){this.$store.commit("getNoteList",t)}}},watch:{current:function(){return this.current}},created:function(){0!==this.noteList.length&&(this.current=this.noteList[0])},methods:{currentTitle:function(t){c["a"].$emit("update","update"),this.current=this.noteList.filter((function(e){return e.id===t}))[0]},changeDialogVisible:function(t){this.addNoteVisible=t},submitNote:function(){this.addNoteVisible=!1,this.createdNewNote()},createdNewNote:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.addNote(t.current.id,{title:t.addNote.title,content:t.content});case 2:if(n=e.sent,200===n.status){e.next=5;break}return e.abrupt("return",window.alert("添加笔记失败"));case 5:return e.next=7,t.$api.getNotes(t.current.id);case 7:r=e.sent,i=r.data,t.$store.commit("getNotesList",i.data);case 10:case"end":return e.stop()}}),e)})))()}},mounted:function(){if(this.$route.query.id){var t=parseInt(this.$route.query.id);this.current=this.noteList.filter((function(e){return e.id===t}))[0]}}},x=L,_=(n("8097"),Object(d["a"])(x,r,i,!1,null,"cfc0536e",null));e["default"]=_.exports},6331:function(t,e,n){},7145:function(t,e,n){"use strict";var r=n("2b0e");e["a"]=new r["default"]},8097:function(t,e,n){"use strict";var r=n("093b"),i=n.n(r);i.a},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(R){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=$(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(R){return{type:"throw",arg:R}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",m={};function v(){}function g(){}function y(){}var w={};w[o]=function(){return this};var b=Object.getPrototypeOf,N=b&&b(b(j([])));N&&N!==n&&r.call(N,o)&&(w=N);var L=y.prototype=v.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function $(t,e,n){var r=d;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return I()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return g.prototype=L.constructor=y,y.constructor=g,g.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new _(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),c(L,s,"Generator"),L[o]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},a6c6:function(t,e,n){"use strict";var r=n("abb3"),i=n.n(r);i.a},abb3:function(t,e,n){},f3ed:function(t,e,n){"use strict";var r=n("6331"),i=n.n(r);i.a}}]);
//# sourceMappingURL=chunk-ab82b9d6.f729c37e.js.map