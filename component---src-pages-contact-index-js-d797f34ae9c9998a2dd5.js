(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{135:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),r=n(47),o=n.n(r),l=n(0),c=n.n(l),s=n(149),u=n(169),m=n.n(u),d=function(e){return null!=e&&""!==e},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).validate=n.validate.bind(o()(o()(n))),n.contactName=c.a.createRef(),n.contactEmail=c.a.createRef(),n.contactMessage=c.a.createRef(),n}i()(t,e);var n=t.prototype;return n.validate=function(e){d(this.contactName.current.value)&&d(this.contactEmail.current.value)&&d(this.contactMessage.current.value)||(alert("Hey send a message or something!"),e.preventDefault())},n.render=function(){return c.a.createElement(s.a,{title:"Contact"},c.a.createElement("h1",null,"Get in Touch"),c.a.createElement("p",null,"Interested in our work? Or, maybe you just want to say hello? Drop us a line."),c.a.createElement("form",{name:"sl-contact-form",className:m.a.form,action:"https://formspree.io/sporadiclabs@gmail.com",onSubmit:this.validate,method:"POST"},c.a.createElement("div",{className:m.a.field},c.a.createElement("label",{className:m.a.label,htmlFor:"contact-name"},"Your Name"),c.a.createElement("input",{className:m.a.control,ref:this.contactName,type:"text",id:"contact-name",name:"name"})),c.a.createElement("div",{className:m.a.field},c.a.createElement("label",{className:m.a.label,htmlFor:"contact-email"},"Your Email"),c.a.createElement("input",{className:m.a.control,ref:this.contactEmail,type:"email",id:"contact-email",name:"email"})),c.a.createElement("div",{className:m.a.field},c.a.createElement("label",{className:m.a.label,htmlFor:"contact-message"},"Your Message"),c.a.createElement("textarea",{className:m.a.control,ref:this.contactMessage,name:"message",rows:"4",id:"contact-message"})),c.a.createElement("div",{className:m.a.field},c.a.createElement("input",{className:m.a.submitBtn,type:"submit",value:"Send →"})),c.a.createElement("input",{type:"text",name:"_gotcha",style:{display:"none"}}),c.a.createElement("input",{type:"hidden",name:"_subject",value:"Sporadic Labs Contact"})))},t}(l.PureComponent);t.default=y},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return M}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return y});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(139),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(141),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(29);n.d(t,"parsePath",function(){return m.a});var d=i.a.createContext({}),y=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function M(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}y.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},141:function(e,t,n){var a;e.exports=(a=n(144))&&a.default||a},142:function(e,t,n){"use strict";n(66);var a=n(153),i=n.n(a),r=new(function(){function e(){var e=this;this.listeners=[],this.listeningForResize=!1,this.emit=i()(function(){e.listeners.forEach(function(e){return e()})},100,{trailing:!0})}var t=e.prototype;return t.addListener=function(e){this.listeners.push(e),this.updateSubscription()},t.removeListener=function(e){this.listeners=this.listeners.filter(function(t){return t!==e}),this.updateSubscription()},t.updateSubscription=function(){this.listeningForResize&&0===this.listeners.length?(window.removeEventListener("resize",this.emit),this.listeningForResize=!1):!this.listeningForResize&&this.listeners.length>0&&(window.addEventListener("resize",this.emit),this.listeningForResize=!0)},e}());t.a=r},143:function(e){e.exports={data:{site:{siteMetadata:{title:"Sporadic Labs"}}}}},144:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(46),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},145:function(e,t,n){e.exports={unstyleLink:"index-module--unstyle-link--Wgh1L",logo:"index-module--logo--4HGY_",link:"index-module--link--1pHvq",nav:"index-module--nav--35ZVw",collapsedNav:"index-module--collapsedNav--1aBOj",activeLink:"index-module--activeLink--21bEe",collapsedOverlayMenu:"index-module--collapsedOverlayMenu--lw_wH",overlay:"index-module--overlay--20YwH",overlayLinks:"index-module--overlayLinks--284Tk",openButton:"index-module--openButton--3VB-y",closeButton:"index-module--closeButton--f09ju"}},146:function(e,t,n){e.exports={container:"index-module--container--JrChg"}},147:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJiYXJzIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtYmFycyBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2IDEzMmg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY3NmMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2QzcuMTYzIDYwIDAgNjcuMTYzIDAgNzZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnoiPjwvcGF0aD48L3N2Zz4="},148:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJ0aW1lcyIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzUyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6Ij48L3BhdGg+PC9zdmc+"},149:function(e,t,n){"use strict";var a=n(6),i=n.n(a),r=n(143),o=n(0),l=n.n(o),c=n(140),s=n(151),u=n.n(s),m=(n(152),n(145)),d=n.n(m),y=(n(28),n(150)),M=n.n(y),p=n(146),h=n.n(p),g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=M()(e,["children"]);return l.a.createElement("div",Object.assign({className:h.a.container},n),t)},t}(o.PureComponent),N=n(147),f=n.n(N),L=n(148),E=n.n(L),v=n(142),I=[l.a.createElement(c.Link,{key:"games",className:d.a.link,activeClassName:d.a.activeLink,to:"/"},"Games"),l.a.createElement(c.Link,{key:"tools",className:d.a.link,activeClassName:d.a.activeLink,to:"/tools"},"Tools"),l.a.createElement(c.Link,{key:"about",className:d.a.link,activeClassName:d.a.activeLink,to:"/about"},"About"),l.a.createElement(c.Link,{key:"contact",className:d.a.link,activeClassName:d.a.activeLink,to:"/contact"},"Contact")],x=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={isOpen:!1},t.openMenu=function(){return t.setState({isOpen:!0})},t.closeMenu=function(){return t.setState({isOpen:!1})},t}return i()(t,e),t.prototype.render=function(){var e=this.state.isOpen;return l.a.createElement(g,null,l.a.createElement("nav",{className:d.a.collapsedNav},l.a.createElement("div",{className:d.a.logo},l.a.createElement(c.Link,{to:"/"},"Sporadic Labs")),l.a.createElement("button",{disabled:e,className:d.a.openButton},l.a.createElement("img",{src:f.a,alt:"Open Menu",onClick:this.openMenu,role:"button"}))),e&&l.a.createElement("div",{className:d.a.collapsedOverlayMenu},l.a.createElement("button",{className:d.a.closeButton},l.a.createElement("img",{src:E.a,alt:"Close Menu",onClick:this.closeMenu,role:"button"})),l.a.createElement("div",{className:d.a.overlay}),l.a.createElement("div",{className:d.a.overlayLinks},I)))},t}(o.PureComponent),T=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return l.a.createElement(g,null,l.a.createElement("nav",{className:d.a.nav},l.a.createElement("div",{className:d.a.logo},l.a.createElement(c.Link,{to:"/"},"Sporadic Labs")),l.a.createElement("div",null,I)))},t}(o.PureComponent),j=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={width:400},t.onResize=function(){t.setState({width:window.innerWidth})},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){v.a.addListener(this.onResize),this.onResize()},n.componentWillUnmount=function(){v.a.removeListener(this.onResize)},n.render=function(){return this.state.width>700?l.a.createElement(T,null):l.a.createElement(x,null)},t}(o.PureComponent),b=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.children;return l.a.createElement(c.StaticQuery,{query:"1097489062",render:function(e){var a=e.site.siteMetadata.title,i=t?a+" | "+t:a;return l.a.createElement("div",null,l.a.createElement(u.a,{htmlAttributes:{lang:"en"},title:i}),l.a.createElement(j,null),l.a.createElement(g,null,n))},data:r})},t}(o.PureComponent);t.a=b},169:function(e,t,n){e.exports={form:"index-module--form--1UwrO",label:"index-module--label--3nAff",control:"index-module--control--2dn-4",field:"index-module--field--1Oorb",submitBtn:"index-module--submit-btn--39eHE"}}}]);
//# sourceMappingURL=component---src-pages-contact-index-js-d797f34ae9c9998a2dd5.js.map