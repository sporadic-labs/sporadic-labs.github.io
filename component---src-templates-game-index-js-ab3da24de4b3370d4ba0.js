(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});var a=n(6),i=n.n(a),r=n(0),o=n.n(r),s=n(149),c=n(165),u=n.n(c),l=n(142),m=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).iframeRef=o.a.createRef(),t.onResize=function(){var e=t.props.data.markdownRemark.frontmatter,n=e.maxGameWidth,a=e.maxGameHeight,i=e.gameAspectRatio,r=Math.min(n,innerWidth)/i,o=Math.min(a,innerHeight),s=i*Math.min(r,o),c=s/i;t.iframeRef.current.width=s,t.iframeRef.current.height=c},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.onResize(),l.a.addListener(this.onResize)},n.componentWillUnmount=function(){l.a.removeListener(this.onResize)},n.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter,n=t.gameSource,a=t.title,i=t.date;return o.a.createElement(s.a,{title:a},o.a.createElement("iframe",{className:u.a.iframe,ref:this.iframeRef,src:n,frameBorder:"0"}),o.a.createElement("h1",null,a),o.a.createElement("p",null,i),o.a.createElement("div",{className:u.a.markdownContent,dangerouslySetInnerHTML:{__html:e.html}}))},t}(r.PureComponent);t.default=m;var d="1089400367"},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return y}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return M});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(139),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(141),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var m=n(29);n.d(t,"parsePath",function(){return m.a});var d=i.a.createContext({}),M=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}M.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},141:function(e,t,n){var a;e.exports=(a=n(144))&&a.default||a},142:function(e,t,n){"use strict";n(66);var a=n(153),i=n.n(a),r=new(function(){function e(){var e=this;this.listeners=[],this.listeningForResize=!1,this.emit=i()(function(){e.listeners.forEach(function(e){return e()})},100,{trailing:!0})}var t=e.prototype;return t.addListener=function(e){this.listeners.push(e),this.updateSubscription()},t.removeListener=function(e){this.listeners=this.listeners.filter(function(t){return t!==e}),this.updateSubscription()},t.updateSubscription=function(){this.listeningForResize&&0===this.listeners.length?(window.removeEventListener("resize",this.emit),this.listeningForResize=!1):!this.listeningForResize&&this.listeners.length>0&&(window.addEventListener("resize",this.emit),this.listeningForResize=!0)},e}());t.a=r},143:function(e){e.exports={data:{site:{siteMetadata:{title:"Sporadic Labs"}}}}},144:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(46),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},145:function(e,t,n){e.exports={unstyleLink:"index-module--unstyle-link--Wgh1L",logo:"index-module--logo--4HGY_",link:"index-module--link--1pHvq",nav:"index-module--nav--35ZVw",collapsedNav:"index-module--collapsedNav--1aBOj",activeLink:"index-module--activeLink--21bEe",collapsedOverlayMenu:"index-module--collapsedOverlayMenu--lw_wH",overlay:"index-module--overlay--20YwH",overlayLinks:"index-module--overlayLinks--284Tk",openButton:"index-module--openButton--3VB-y",closeButton:"index-module--closeButton--f09ju"}},146:function(e,t,n){e.exports={container:"index-module--container--JrChg"}},147:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJiYXJzIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtYmFycyBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2IDEzMmg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY3NmMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2QzcuMTYzIDYwIDAgNjcuMTYzIDAgNzZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnoiPjwvcGF0aD48L3N2Zz4="},148:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJ0aW1lcyIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzUyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6Ij48L3BhdGg+PC9zdmc+"},149:function(e,t,n){"use strict";var a=n(6),i=n.n(a),r=n(143),o=n(0),s=n.n(o),c=n(140),u=n(151),l=n.n(u),m=(n(152),n(145)),d=n.n(m),M=(n(28),n(150)),y=n.n(M),p=n(146),h=n.n(p),g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=y()(e,["children"]);return s.a.createElement("div",Object.assign({className:h.a.container},n),t)},t}(o.PureComponent),L=n(147),f=n.n(L),N=n(148),I=n.n(N),v=n(142),E=[s.a.createElement(c.Link,{key:"games",className:d.a.link,activeClassName:d.a.activeLink,to:"/"},"Games"),s.a.createElement(c.Link,{key:"tools",className:d.a.link,activeClassName:d.a.activeLink,to:"/tools"},"Tools"),s.a.createElement(c.Link,{key:"about",className:d.a.link,activeClassName:d.a.activeLink,to:"/about"},"About"),s.a.createElement(c.Link,{key:"contact",className:d.a.link,activeClassName:d.a.activeLink,to:"/contact"},"Contact")],T=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={isOpen:!1},t.openMenu=function(){return t.setState({isOpen:!0})},t.closeMenu=function(){return t.setState({isOpen:!1})},t}return i()(t,e),t.prototype.render=function(){var e=this.state.isOpen;return s.a.createElement(g,null,s.a.createElement("nav",{className:d.a.collapsedNav},s.a.createElement("div",{className:d.a.logo},s.a.createElement(c.Link,{to:"/"},"Sporadic Labs")),s.a.createElement("button",{disabled:e,className:d.a.openButton},s.a.createElement("img",{src:f.a,alt:"Open Menu",onClick:this.openMenu,role:"button"}))),e&&s.a.createElement("div",{className:d.a.collapsedOverlayMenu},s.a.createElement("button",{className:d.a.closeButton},s.a.createElement("img",{src:I.a,alt:"Close Menu",onClick:this.closeMenu,role:"button"})),s.a.createElement("div",{className:d.a.overlay}),s.a.createElement("div",{className:d.a.overlayLinks},E)))},t}(o.PureComponent),x=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return s.a.createElement(g,null,s.a.createElement("nav",{className:d.a.nav},s.a.createElement("div",{className:d.a.logo},s.a.createElement(c.Link,{to:"/"},"Sporadic Labs")),s.a.createElement("div",null,E)))},t}(o.PureComponent),j=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={width:window.innerWidth},t.onResize=function(){t.setState({width:window.innerWidth})},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){v.a.addListener(this.onResize)},n.componentWillUnmount=function(){v.a.removeListener(this.onResize)},n.render=function(){return this.state.width>700?s.a.createElement(x,null):s.a.createElement(T,null)},t}(o.PureComponent),D=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.children;return s.a.createElement(c.StaticQuery,{query:"1097489062",render:function(e){var a=e.site.siteMetadata.title,i=t?a+" | "+t:a;return s.a.createElement("div",null,s.a.createElement(l.a,{htmlAttributes:{lang:"en"},title:i}),s.a.createElement(j,null),s.a.createElement(g,null,n))},data:r})},t}(o.PureComponent);t.a=D},165:function(e,t,n){e.exports={iframe:"index-module--iframe--1ItP5"}}}]);
//# sourceMappingURL=component---src-templates-game-index-js-ab3da24de4b3370d4ba0.js.map