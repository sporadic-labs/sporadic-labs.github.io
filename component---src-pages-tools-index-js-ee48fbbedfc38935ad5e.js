(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});n(152);var a=n(6),i=n.n(a),o=n(0),r=n.n(o),l=(n(140),n(149)),s=n(171),c=n.n(s),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return r.a.createElement(l.a,{title:"Tools"},r.a.createElement("ul",{className:c.a.toolsList},e.map(function(e){var t=e.node,n=t.id,a=t.html,i=t.frontmatter;return r.a.createElement("li",{key:n,className:c.a.tool},r.a.createElement("div",{className:c.a.toolImage},r.a.createElement("img",{src:i.thumbnail.publicURL,alt:""})),r.a.createElement("div",{className:c.a.toolInfo},r.a.createElement("div",{className:c.a.toolTitle},i.title),r.a.createElement("div",{className:c.a.toolDescription,dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("a",{className:c.a.toolLink,href:i.link,target:"_blank",alt:"Link to the Github Repository for this project."},"Repository")))})))},t}(o.PureComponent);t.default=u;var d="549528526"},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return y}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return M});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(139),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(141),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var d=n(29);n.d(t,"parsePath",function(){return d.a});var m=i.a.createContext({}),M=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}M.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},141:function(e,t,n){var a;e.exports=(a=n(144))&&a.default||a},142:function(e,t,n){"use strict";n(66);var a=n(153),i=n.n(a),o=new(function(){function e(){var e=this;this.listeners=[],this.listeningForResize=!1,this.emit=i()(function(){e.listeners.forEach(function(e){return e()})},100,{trailing:!0})}var t=e.prototype;return t.addListener=function(e){this.listeners.push(e),this.updateSubscription()},t.removeListener=function(e){this.listeners=this.listeners.filter(function(t){return t!==e}),this.updateSubscription()},t.updateSubscription=function(){this.listeningForResize&&0===this.listeners.length?(window.removeEventListener("resize",this.emit),this.listeningForResize=!1):!this.listeningForResize&&this.listeners.length>0&&(window.addEventListener("resize",this.emit),this.listeningForResize=!0)},e}());t.a=o},143:function(e){e.exports={data:{site:{siteMetadata:{title:"Sporadic Labs"}}}}},144:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(46),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},145:function(e,t,n){e.exports={unstyleLink:"index-module--unstyle-link--Wgh1L",logo:"index-module--logo--4HGY_",link:"index-module--link--1pHvq",nav:"index-module--nav--35ZVw",collapsedNav:"index-module--collapsedNav--1aBOj",activeLink:"index-module--activeLink--21bEe",collapsedOverlayMenu:"index-module--collapsedOverlayMenu--lw_wH",overlay:"index-module--overlay--20YwH",overlayLinks:"index-module--overlayLinks--284Tk",openButton:"index-module--openButton--3VB-y",closeButton:"index-module--closeButton--f09ju"}},146:function(e,t,n){e.exports={container:"index-module--container--JrChg"}},147:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJiYXJzIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtYmFycyBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2IDEzMmg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY3NmMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2QzcuMTYzIDYwIDAgNjcuMTYzIDAgNzZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnoiPjwvcGF0aD48L3N2Zz4="},148:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJ0aW1lcyIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzUyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6Ij48L3BhdGg+PC9zdmc+"},149:function(e,t,n){"use strict";var a=n(6),i=n.n(a),o=n(143),r=n(0),l=n.n(r),s=n(140),c=n(151),u=n.n(c),d=(n(152),n(145)),m=n.n(d),M=(n(28),n(150)),y=n.n(M),p=n(146),L=n.n(p),g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=y()(e,["children"]);return l.a.createElement("div",Object.assign({className:L.a.container},n),t)},t}(r.PureComponent),h=n(147),N=n.n(h),I=n(148),f=n.n(I),v=n(142),E=[l.a.createElement(s.Link,{key:"games",className:m.a.link,activeClassName:m.a.activeLink,to:"/"},"Games"),l.a.createElement(s.Link,{key:"tools",className:m.a.link,activeClassName:m.a.activeLink,to:"/tools"},"Tools"),l.a.createElement(s.Link,{key:"about",className:m.a.link,activeClassName:m.a.activeLink,to:"/about"},"About"),l.a.createElement(s.Link,{key:"contact",className:m.a.link,activeClassName:m.a.activeLink,to:"/contact"},"Contact")],T=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={isOpen:!1},t.openMenu=function(){return t.setState({isOpen:!0})},t.closeMenu=function(){return t.setState({isOpen:!1})},t}return i()(t,e),t.prototype.render=function(){var e=this.state.isOpen;return l.a.createElement(g,null,l.a.createElement("nav",{className:m.a.collapsedNav},l.a.createElement("div",{className:m.a.logo},l.a.createElement(s.Link,{to:"/"},"Sporadic Labs")),l.a.createElement("button",{disabled:e,className:m.a.openButton},l.a.createElement("img",{src:N.a,alt:"Open Menu",onClick:this.openMenu,role:"button"}))),e&&l.a.createElement("div",{className:m.a.collapsedOverlayMenu},l.a.createElement("button",{className:m.a.closeButton},l.a.createElement("img",{src:f.a,alt:"Close Menu",onClick:this.closeMenu,role:"button"})),l.a.createElement("div",{className:m.a.overlay}),l.a.createElement("div",{className:m.a.overlayLinks},E)))},t}(r.PureComponent),x=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return l.a.createElement(g,null,l.a.createElement("nav",{className:m.a.nav},l.a.createElement("div",{className:m.a.logo},l.a.createElement(s.Link,{to:"/"},"Sporadic Labs")),l.a.createElement("div",null,E)))},t}(r.PureComponent),j=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={width:window.innerWidth},t.onResize=function(){t.setState({width:window.innerWidth})},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){v.a.addListener(this.onResize)},n.componentWillUnmount=function(){v.a.removeListener(this.onResize)},n.render=function(){return this.state.width>700?l.a.createElement(x,null):l.a.createElement(T,null)},t}(r.PureComponent),D=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.children;return l.a.createElement(s.StaticQuery,{query:"1097489062",render:function(e){var a=e.site.siteMetadata.title,i=t?a+" | "+t:a;return l.a.createElement("div",null,l.a.createElement(u.a,{htmlAttributes:{lang:"en"},title:i}),l.a.createElement(j,null),l.a.createElement(g,null,n))},data:o})},t}(r.PureComponent);t.a=D},171:function(e,t,n){e.exports={toolsList:"index-module--toolsList--1G5If",tool:"index-module--tool--3ZhZF",toolImage:"index-module--toolImage--HGn87",toolTitle:"index-module--toolTitle--3AWft",toolDescription:"index-module--toolDescription--170e9",toolLink:"index-module--toolLink--1_7w8"}}}]);
//# sourceMappingURL=component---src-pages-tools-index-js-ee48fbbedfc38935ad5e.js.map