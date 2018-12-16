(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{134:function(A,e,t){"use strict";t.r(e);var n=t(0),a=t.n(n),i=t(149),r=t(166),o=t.n(r),s=t(167),u=t.n(s),l=t(168),c=t.n(l);e.default=function(){return a.a.createElement(i.a,{title:"About"},a.a.createElement("h1",null,"About Sporadic Labs"),a.a.createElement("p",null,"Mike and Rex were mild mannered researchers, working hard to solve the problems of the world using the power of SCIENCE!"),a.a.createElement("p",null,"Soon, they grew disillusioned with the limitations of society, and decided to take things into their own hands through more nefarious means."),a.a.createElement("p",null,"In a freak lab accident, the pair gained inhuman powers and vowed to take over the world."),a.a.createElement("p",null,"Oh and in their free time, they make games. You can play some here!"),a.a.createElement("div",{className:o.a.authors},a.a.createElement("div",{className:o.a.authorCard},a.a.createElement("h3",null,"Mike Hadley"),a.a.createElement("div",null,"Mike is a developer, educator and artist who translates creative ideas into code and teaches others how to do the same."),a.a.createElement("a",{className:o.a.authorLinks,href:"https://www.mikewesthad.com/",target:"_blank",alt:"Mike's website!"},a.a.createElement("img",{className:o.a.websiteLogo,src:c.a,alt:"Website Logo"})),a.a.createElement("a",{className:o.a.authorLinks,href:"https://github.com/mikewesthad",target:"_blank",alt:"Mike's Github!"},a.a.createElement("img",{className:o.a.githubLogo,src:u.a,alt:"Github Logo"}))),a.a.createElement("div",{className:o.a.authorCard},a.a.createElement("h3",null,"Rex Twedt"),a.a.createElement("div",null,"Rex is an artist and developer with an interest in science, and making science accessible to everybody."),a.a.createElement("a",{className:o.a.authorLinks,href:"https://rextwedt.com/",target:"_blank",alt:"Rex's website!"},a.a.createElement("img",{className:o.a.websiteLogo,src:c.a,alt:"Website Logo"})),a.a.createElement("a",{className:o.a.authorLinks,href:"https://github.com/retwedt",target:"_blank",alt:"Rex's Github!"},a.a.createElement("img",{className:o.a.githubLogo,src:u.a,alt:"Github Logo"})))))}},140:function(A,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return d}),t.d(e,"StaticQueryContext",function(){return M}),t.d(e,"StaticQuery",function(){return E});var n=t(0),a=t.n(n),i=t(4),r=t.n(i),o=t(139),s=t.n(o);t.d(e,"Link",function(){return s.a}),t.d(e,"withPrefix",function(){return o.withPrefix}),t.d(e,"navigate",function(){return o.navigate}),t.d(e,"push",function(){return o.push}),t.d(e,"replace",function(){return o.replace}),t.d(e,"navigateTo",function(){return o.navigateTo});var u=t(141),l=t.n(u);t.d(e,"PageRenderer",function(){return l.a});var c=t(29);t.d(e,"parsePath",function(){return c.a});var M=a.a.createContext({}),E=function(A){return a.a.createElement(M.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}E.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},141:function(A,e,t){var n;A.exports=(n=t(144))&&n.default||n},142:function(A,e,t){"use strict";t(66);var n=t(153),a=t.n(n),i=new(function(){function A(){var A=this;this.listeners=[],this.listeningForResize=!1,this.emit=a()(function(){A.listeners.forEach(function(A){return A()})},100,{trailing:!0})}var e=A.prototype;return e.addListener=function(A){this.listeners.push(A),this.updateSubscription()},e.removeListener=function(A){this.listeners=this.listeners.filter(function(e){return e!==A}),this.updateSubscription()},e.updateSubscription=function(){this.listeningForResize&&0===this.listeners.length?(window.removeEventListener("resize",this.emit),this.listeningForResize=!1):!this.listeningForResize&&this.listeners.length>0&&(window.addEventListener("resize",this.emit),this.listeningForResize=!0)},A}());e.a=i},143:function(A){A.exports={data:{site:{siteMetadata:{title:"Sporadic Labs"}}}}},144:function(A,e,t){"use strict";t.r(e);t(28);var n=t(0),a=t.n(n),i=t(4),r=t.n(i),o=t(46),s=t(2),u=function(A){var e=A.location,t=s.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(o.a,Object.assign({location:e,pageResources:t},t.json))};u.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=u},145:function(A,e,t){A.exports={unstyleLink:"index-module--unstyle-link--Wgh1L",logo:"index-module--logo--4HGY_",link:"index-module--link--1pHvq",nav:"index-module--nav--35ZVw",collapsedNav:"index-module--collapsedNav--1aBOj",activeLink:"index-module--activeLink--21bEe",collapsedOverlayMenu:"index-module--collapsedOverlayMenu--lw_wH",overlay:"index-module--overlay--20YwH",overlayLinks:"index-module--overlayLinks--284Tk",openButton:"index-module--openButton--3VB-y",closeButton:"index-module--closeButton--f09ju"}},146:function(A,e,t){A.exports={container:"index-module--container--JrChg"}},147:function(A,e){A.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJiYXJzIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtYmFycyBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE2IDEzMmg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNlY3NmMwLTguODM3LTcuMTYzLTE2LTE2LTE2SDE2QzcuMTYzIDYwIDAgNjcuMTYzIDAgNzZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnptMCAxNjBoNDE2YzguODM3IDAgMTYtNy4xNjMgMTYtMTZ2LTQwYzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZjLTguODM3IDAtMTYgNy4xNjMtMTYgMTZ2NDBjMCA4LjgzNyA3LjE2MyAxNiAxNiAxNnoiPjwvcGF0aD48L3N2Zz4="},148:function(A,e){A.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJ0aW1lcyIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXRpbWVzIGZhLXctMTEiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzUyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjQyLjcyIDI1NmwxMDAuMDctMTAwLjA3YzEyLjI4LTEyLjI4IDEyLjI4LTMyLjE5IDAtNDQuNDhsLTIyLjI0LTIyLjI0Yy0xMi4yOC0xMi4yOC0zMi4xOS0xMi4yOC00NC40OCAwTDE3NiAxODkuMjggNzUuOTMgODkuMjFjLTEyLjI4LTEyLjI4LTMyLjE5LTEyLjI4LTQ0LjQ4IDBMOS4yMSAxMTEuNDVjLTEyLjI4IDEyLjI4LTEyLjI4IDMyLjE5IDAgNDQuNDhMMTA5LjI4IDI1NiA5LjIxIDM1Ni4wN2MtMTIuMjggMTIuMjgtMTIuMjggMzIuMTkgMCA0NC40OGwyMi4yNCAyMi4yNGMxMi4yOCAxMi4yOCAzMi4yIDEyLjI4IDQ0LjQ4IDBMMTc2IDMyMi43MmwxMDAuMDcgMTAwLjA3YzEyLjI4IDEyLjI4IDMyLjIgMTIuMjggNDQuNDggMGwyMi4yNC0yMi4yNGMxMi4yOC0xMi4yOCAxMi4yOC0zMi4xOSAwLTQ0LjQ4TDI0Mi43MiAyNTZ6Ij48L3BhdGg+PC9zdmc+"},149:function(A,e,t){"use strict";var n=t(6),a=t.n(n),i=t(143),r=t(0),o=t.n(r),s=t(140),u=t(151),l=t.n(u),c=(t(152),t(145)),M=t.n(c),E=(t(28),t(150)),d=t.n(E),L=t(146),m=t.n(L),B=function(A){function e(){return A.apply(this,arguments)||this}return a()(e,A),e.prototype.render=function(){var A=this.props,e=A.children,t=d()(A,["children"]);return o.a.createElement("div",Object.assign({className:m.a.container},t),e)},e}(r.PureComponent),y=t(147),g=t.n(y),Q=t(148),h=t.n(Q),I=t(142),N=[o.a.createElement(s.Link,{key:"games",className:M.a.link,activeClassName:M.a.activeLink,to:"/"},"Games"),o.a.createElement(s.Link,{key:"tools",className:M.a.link,activeClassName:M.a.activeLink,to:"/tools"},"Tools"),o.a.createElement(s.Link,{key:"about",className:M.a.link,activeClassName:M.a.activeLink,to:"/about"},"About"),o.a.createElement(s.Link,{key:"contact",className:M.a.link,activeClassName:M.a.activeLink,to:"/contact"},"Contact")],j=function(A){function e(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=A.call.apply(A,[this].concat(n))||this).state={isOpen:!1},e.openMenu=function(){return e.setState({isOpen:!0})},e.closeMenu=function(){return e.setState({isOpen:!1})},e}return a()(e,A),e.prototype.render=function(){var A=this.state.isOpen;return o.a.createElement(B,null,o.a.createElement("nav",{className:M.a.collapsedNav},o.a.createElement("div",{className:M.a.logo},o.a.createElement(s.Link,{to:"/"},"Sporadic Labs")),o.a.createElement("button",{disabled:A,className:M.a.openButton},o.a.createElement("img",{src:g.a,alt:"Open Menu",onClick:this.openMenu,role:"button"}))),A&&o.a.createElement("div",{className:M.a.collapsedOverlayMenu},o.a.createElement("button",{className:M.a.closeButton},o.a.createElement("img",{src:h.a,alt:"Close Menu",onClick:this.closeMenu,role:"button"})),o.a.createElement("div",{className:M.a.overlay}),o.a.createElement("div",{className:M.a.overlayLinks},N)))},e}(r.PureComponent),p=function(A){function e(){return A.apply(this,arguments)||this}return a()(e,A),e.prototype.render=function(){return o.a.createElement(B,null,o.a.createElement("nav",{className:M.a.nav},o.a.createElement("div",{className:M.a.logo},o.a.createElement(s.Link,{to:"/"},"Sporadic Labs")),o.a.createElement("div",null,N)))},e}(r.PureComponent),D=function(A){function e(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=A.call.apply(A,[this].concat(n))||this).state={width:800},e.onResize=function(){e.setState({width:window.innerWidth})},e}a()(e,A);var t=e.prototype;return t.componentDidMount=function(){I.a.addListener(this.onResize)},t.componentWillUnmount=function(){I.a.removeListener(this.onResize)},t.render=function(){return this.state.width>700?o.a.createElement(p,null):o.a.createElement(j,null)},e}(r.PureComponent),x=function(A){function e(){return A.apply(this,arguments)||this}return a()(e,A),e.prototype.render=function(){var A=this.props,e=A.title,t=A.children;return o.a.createElement(s.StaticQuery,{query:"1097489062",render:function(A){var n=A.site.siteMetadata.title,a=e?n+" | "+e:n;return o.a.createElement("div",null,o.a.createElement(l.a,{htmlAttributes:{lang:"en"},title:a}),o.a.createElement(D,null),o.a.createElement(B,null,t))},data:i})},e}(r.PureComponent);e.a=x},166:function(A,e,t){A.exports={authors:"index-module--authors--16J-z",authorCard:"index-module--author-card--1R9Q-",authorLinks:"index-module--author-links--1sPLZ",githubLogo:"index-module--github-logo--8_2dh",websiteLogo:"index-module--website-logo--39Fry"}},167:function(A,e){A.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InNpbXBsZWljb25zLWdpdGh1Yi1pY29uIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGUgaWQ9InNpbXBsZWljb25zLWdpdGh1Yi1pY29uIj5HaXRIdWIgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIvPjwvc3ZnPg=="},168:function(A,e){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-about-index-js-ff8ba46555d8f47a3e13.js.map