(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});a(148);var n=a(6),r=a.n(n),i=a(0),o=a.n(i),l=(a(140),a(146)),c=a(168),s=a.n(c),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(l.a,{title:"Tools"},o.a.createElement("ul",{className:s.a.toolsList},e.map(function(e){var t=e.node,a=t.id,n=t.html,r=t.frontmatter;return o.a.createElement("li",{key:a,className:s.a.tool},o.a.createElement("img",{className:s.a.toolImage,src:r.thumbnail.publicURL,alt:""}),o.a.createElement("div",{className:s.a.toolInfo},o.a.createElement("div",{className:s.a.toolTitle},r.title),o.a.createElement("div",{className:s.a.toolDescription,dangerouslySetInnerHTML:{__html:n}}),o.a.createElement("a",{className:s.a.toolLink,href:r.link,target:"_blank",alt:"Link to the Github Repository for this project."},"Repository")))})))},t}(i.PureComponent);t.default=u;var d="549528526"},140:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(139),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(141),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(28);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},141:function(e,t,a){var n;e.exports=(n=a(143))&&n.default||n},142:function(e){e.exports={data:{site:{siteMetadata:{title:"Sporadic Labs"}}}}},143:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(46),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},144:function(e,t,a){e.exports={unstyleLink:"index-module--unstyle-link--Wgh1L",logo:"index-module--logo--4HGY_",link:"index-module--link--1pHvq",nav:"index-module--nav--35ZVw",activeLink:"index-module--activeLink--21bEe"}},145:function(e,t,a){e.exports={container:"index-module--container--2F5kD"}},146:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(142),o=a(0),l=a.n(o),c=a(140),s=a(147),u=a.n(s),d=(a(148),a(144)),m=a.n(d),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:m.a.navContainer},l.a.createElement("nav",{className:m.a.nav},l.a.createElement("div",{className:m.a.logo},l.a.createElement(c.Link,{to:"/"},"Sporadic Labs")),l.a.createElement("div",null,l.a.createElement(c.Link,{className:m.a.link,activeClassName:m.a.activeLink,to:"/"},"Games"),l.a.createElement(c.Link,{className:m.a.link,activeClassName:m.a.activeLink,to:"/tools"},"Tools"),l.a.createElement(c.Link,{className:m.a.link,activeClassName:m.a.activeLink,to:"/about"},"About"),l.a.createElement(c.Link,{className:m.a.link,activeClassName:m.a.activeLink,to:"/contact"},"Contact"))))},t}(o.PureComponent),f=a(145),v=a.n(f),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return l.a.createElement(c.StaticQuery,{query:"1097489062",render:function(e){var n=e.site.siteMetadata.title,r=t?n+" | "+t:n;return l.a.createElement("div",null,l.a.createElement(u.a,{htmlAttributes:{lang:"en"},title:r}),l.a.createElement(p,null),l.a.createElement("div",{className:v.a.container},a))},data:i})},t}(o.PureComponent);t.a=h},168:function(e,t,a){e.exports={toolsList:"index-module--toolsList--1G5If",tool:"index-module--tool--3ZhZF",toolImage:"index-module--toolImage--HGn87",toolTitle:"index-module--toolTitle--3AWft",toolDescription:"index-module--toolDescription--170e9",toolLink:"index-module--toolLink--1_7w8"}}}]);
//# sourceMappingURL=component---src-pages-tools-index-js-db1d7c1777d7fce23571.js.map