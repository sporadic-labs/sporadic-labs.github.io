(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{138:function(e,t,n){"use strict";n.r(t);var i=n(6),a=n.n(i),r=n(0),o=n.n(r),u=n(146),s=n(161),c=n.n(s),l=(n(66),n(162)),f=n.n(l),d=new(function(){function e(){var e=this;this.listeners=[],this.listeningForResize=!1,this.emit=f()(function(){e.listeners.forEach(function(e){return e()})},100,{trailing:!0})}var t=e.prototype;return t.addListener=function(e){this.listeners.push(e),this.updateSubscription()},t.removeListener=function(e){this.listeners=this.listeners.filter(function(t){return t!==e}),this.updateSubscription()},t.updateSubscription=function(){this.listeningForResize&&0===this.listeners.length?(window.removeEventListener("resize",this.emit),this.listeningForResize=!1):!this.listeningForResize&&this.listeners.length>0&&(window.addEventListener("resize",this.emit),this.listeningForResize=!0)},e}());n.d(t,"pageQuery",function(){return p});var m=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).iframeRef=o.a.createRef(),t.onResize=function(){var e=t.props.data.markdownRemark.frontmatter,n=e.maxGameWidth,i=e.maxGameHeight,a=e.gameAspectRatio,r=Math.min(n,innerWidth)/a,o=Math.min(i,innerHeight),u=a*Math.min(r,o),s=u/a;t.iframeRef.current.width=u,t.iframeRef.current.height=s},t}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.onResize(),d.addListener(this.onResize)},n.componentWillUnmount=function(){d.removeListener(this.onResize)},n.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter,n=t.gameSource,i=t.title,a=t.date;return o.a.createElement(u.a,{title:i},o.a.createElement("iframe",{className:c.a.iframe,ref:this.iframeRef,src:n,frameBorder:"0"}),o.a.createElement("h1",null,i),o.a.createElement("p",null,a),o.a.createElement("div",{className:c.a.markdownContent,dangerouslySetInnerHTML:{__html:e.html}}))},t}(r.PureComponent),p=(t.default=m,"1089400367")},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var i=n(0),a=n.n(i),r=n(4),o=n.n(r),u=n(139),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(141),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var f=n(28);n.d(t,"parsePath",function(){return f.a});var d=a.a.createContext({}),m=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},141:function(e,t,n){var i;e.exports=(i=n(143))&&i.default||i},142:function(e){e.exports={data:{site:{siteMetadata:{title:"Sporadic Labs"}}}}},143:function(e,t,n){"use strict";n.r(t);n(29);var i=n(0),a=n.n(i),r=n(4),o=n.n(r),u=n(46),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},144:function(e,t,n){e.exports={unstyleLink:"index-module--unstyle-link--Wgh1L",logo:"index-module--logo--4HGY_",link:"index-module--link--1pHvq",nav:"index-module--nav--35ZVw",activeLink:"index-module--activeLink--21bEe"}},145:function(e,t,n){e.exports={container:"index-module--container--2F5kD"}},146:function(e,t,n){"use strict";var i=n(6),a=n.n(i),r=n(142),o=n(0),u=n.n(o),s=n(140),c=n(147),l=n.n(c),f=(n(148),n(144)),d=n.n(f),m=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return u.a.createElement("div",{className:d.a.navContainer},u.a.createElement("nav",{className:d.a.nav},u.a.createElement("div",{className:d.a.logo},u.a.createElement(s.Link,{to:"/"},"Sporadic Labs")),u.a.createElement("div",null,u.a.createElement(s.Link,{className:d.a.link,activeClassName:d.a.activeLink,to:"/"},"Games"),u.a.createElement(s.Link,{className:d.a.link,activeClassName:d.a.activeLink,to:"/tools"},"Tools"),u.a.createElement(s.Link,{className:d.a.link,activeClassName:d.a.activeLink,to:"/about"},"About"),u.a.createElement(s.Link,{className:d.a.link,activeClassName:d.a.activeLink,to:"/contact"},"Contact"))))},t}(o.PureComponent),p=n(145),h=n.n(p),v=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.children;return u.a.createElement(s.StaticQuery,{query:"1097489062",render:function(e){var i=e.site.siteMetadata.title,a=t?i+" | "+t:i;return u.a.createElement("div",null,u.a.createElement(l.a,{htmlAttributes:{lang:"en"},title:a}),u.a.createElement(m,null),u.a.createElement("div",{className:h.a.container},n))},data:r})},t}(o.PureComponent);t.a=v},161:function(e,t,n){e.exports={iframe:"index-module--iframe--1ItP5"}},162:function(e,t,n){(function(t){var n="Expected a function",i=NaN,a="[object Symbol]",r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,d=l||f||Function("return this")(),m=Object.prototype.toString,p=Math.max,h=Math.min,v=function(){return d.Date.now()};function g(e,t,i){var a,r,o,u,s,c,l=0,f=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(n);function g(t){var n=a,i=r;return a=r=void 0,l=t,u=e.apply(i,n)}function k(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=o}function w(){var e=v();if(k(e))return E(e);s=setTimeout(w,function(e){var n=t-(e-c);return d?h(n,o-(e-l)):n}(e))}function E(e){return s=void 0,m&&a?g(e):(a=r=void 0,u)}function x(){var e=v(),n=k(e);if(a=arguments,r=this,c=e,n){if(void 0===s)return function(e){return l=e,s=setTimeout(w,t),f?g(e):u}(c);if(d)return s=setTimeout(w,t),g(c)}return void 0===s&&(s=setTimeout(w,t)),u}return t=b(t)||0,y(i)&&(f=!!i.leading,o=(d="maxWait"in i)?p(b(i.maxWait)||0,t):o,m="trailing"in i?!!i.trailing:m),x.cancel=function(){void 0!==s&&clearTimeout(s),l=0,a=c=r=s=void 0},x.flush=function(){return void 0===s?u:E(v())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==a}(e))return i;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):o.test(e)?i:+e}e.exports=function(e,t,i){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(n);return y(i)&&(a="leading"in i?!!i.leading:a,r="trailing"in i?!!i.trailing:r),g(e,t,{leading:a,maxWait:t,trailing:r})}}).call(this,n(149))}}]);
//# sourceMappingURL=component---src-templates-game-index-js-51df4b702fca91c3053d.js.map