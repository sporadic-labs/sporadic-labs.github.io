(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return f});var a=n(2),r=n.n(a),i=n(0),o=n.n(i),m=n(159),c=n(171),u=n.n(c),s=n(52),l=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).iframeRef=o.a.createRef(),t.onResize=function(){var e=t.props.data.markdownRemark.frontmatter,n=e.maxGameWidth,a=e.maxGameHeight,r=e.gameAspectRatio,i=Math.min(n,innerWidth)/r,o=Math.min(a,innerHeight),m=r*Math.min(i,o),c=m/r;t.iframeRef.current.width=m,t.iframeRef.current.height=c},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.onResize(),s.a.addListener(this.onResize)},n.componentWillUnmount=function(){s.a.removeListener(this.onResize)},n.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter,n=t.gameSource,a=t.title,r=t.date;return o.a.createElement(m.a,{title:a},o.a.createElement("iframe",{className:u.a.iframe,ref:this.iframeRef,src:n,frameBorder:"0"}),o.a.createElement("h1",null,a),o.a.createElement("p",null,r),o.a.createElement("div",{className:u.a.markdownContent,dangerouslySetInnerHTML:{__html:e.html}}))},t}(i.PureComponent);t.default=l;var f="1089400367"},159:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(160),o=n(0),m=n.n(o),c=n(17),u=n(162),s=n.n(u),l=n(34),f=n(161),d=n.n(f),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.children;return m.a.createElement(c.StaticQuery,{query:"1097489062",render:function(e){var a=e.site.siteMetadata.title,r=t?a+" | "+t:a;return m.a.createElement("div",null,m.a.createElement(s.a,{htmlAttributes:{lang:"en"},title:r}),m.a.createElement(l.a,{className:d.a.page},n))},data:i})},t}(o.PureComponent);t.a=p},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Sporadic Labs"}}}}},161:function(e,t,n){e.exports={page:"index-module--page--2SnEF"}},171:function(e,t,n){e.exports={iframe:"index-module--iframe--1ItP5"}}}]);
//# sourceMappingURL=component---src-templates-game-index-js-57cdceaecc4094685fe7.js.map