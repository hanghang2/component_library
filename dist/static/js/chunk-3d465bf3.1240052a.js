(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d465bf3"],{3583:function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{staticClass:"Tree"},[a("h3",[e._v("基础用法")]),a("div",{staticClass:"Tree-item1"},[a("zz-tree",{attrs:{data:e.data,props:e.defaultProps},on:{"node-click":e.handleNodeClick}})],1),a("h3",[e._v("可选择")]),a("div",{staticClass:"Tree-item2"},[a("zz-tree",{ref:"zztree",attrs:{data:e.data,props:e.defaultProps,"show-checkbox":""},on:{"node-click":e.handleNodeClick}}),a("zz-button",{nativeOn:{click:function(l){return e.getZztreeVal(l)}}},[e._v("获取选中节点值")])],1)])},n=[],c={name:"Tree",data:function(){return{data:r,defaultProps:{children:"children",label:"label"}}},methods:{handleNodeClick:function(e){console.log(e)},getZztreeVal:function(){console.log(this.$refs.zztree.getChecked())}}},r=[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],i=c,d=(a("3fa8"),a("4023")),o=Object(d["a"])(i,t,n,!1,null,"1668af87",null);l["default"]=o.exports},"397b":function(e,l,a){},"3fa8":function(e,l,a){"use strict";var t=a("397b"),n=a.n(t);n.a}}]);