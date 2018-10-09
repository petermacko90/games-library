(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(36)},19:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},35:function(e,t){String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!==typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)})},36:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),s=(a(19),a(1)),l=a(2),c=a(4),m=a(3),u=a(5),h=(a(21),function(e){var t=e.onInputChange,a=e.onButtonSubmit,n=e.onPressEnter;return o.a.createElement("div",{className:"mw6 center mt4"},o.a.createElement("div",{className:"form"},o.a.createElement("input",{className:"w-60-ns w-100 pa1 ba b--yellow yellow bg-dark-blue",type:"text",placeholder:"SteamID",name:"profile",onChange:t,onKeyPress:n,autoFocus:"autofocus","aria-label":"SteamID"}),o.a.createElement("button",{onClick:a,className:"games w-40-ns w-100 ba b--yellow yellow bg-dark-blue hover-dark-blue bg-animate hover-bg-yellow pa1 pointer"},o.a.createElement("i",{className:"fa fa-steam-square"})," Get games")))}),f=(a(23),function(e){var t=e.appid,a=e.time,n=e.time2W,r=e.name,i=e.logo,s=e.stats,l=e.profile,c="Playtime total: ".concat(a>=60?Math.floor(a/60)+" h":a+" m");return n>0&&(c+=", last 2 weeks: ".concat(n>=60?Math.floor(n/60)+" h":n+" m")),o.a.createElement("div",{className:"w-third-l w-50-m w-100 pa2 ba b--yellow"},o.a.createElement("img",{src:"http://media.steampowered.com/steamcommunity/public/images/apps/".concat(t,"/").concat(i,".jpg"),alt:r,className:"mw-100"}),o.a.createElement("h2",{className:"f3 yellow truncate",title:r},r),o.a.createElement("p",{className:"yellow truncate",title:c},c),s&&o.a.createElement("span",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"gold",href:"http://steamcommunity.com/profiles/".concat(l,"/stats/").concat(t)},"View stats"),o.a.createElement("span",{className:"yellow"}," | ")),o.a.createElement("a",{href:"http://store.steampowered.com/app/".concat(t),target:"_blank",rel:"noopener noreferrer",className:"gold"},"Open in Steam Store"))}),p=function(e){var t=e.orderChange,a=e.orderBy;return o.a.createElement("div",{className:"mw6 mb4 center"},o.a.createElement("label",{htmlFor:"order",className:"dib yellow w-30-ns w-100"},"Order by:"),o.a.createElement("select",{onChange:t,id:"order",value:a,className:"yellow bg-navy b--none w-70-ns w-100"},o.a.createElement("option",{value:"name"},"Name ascending"),o.a.createElement("option",{value:"nameDesc"},"Name descending"),o.a.createElement("option",{value:"playtimeDesc"},"Playtime descending"),o.a.createElement("option",{value:"playtime"},"Playtime ascending")))},d=function(e){var t=e.value,a=e.searchChange;return o.a.createElement("div",{className:"mb4 mw6 center"},o.a.createElement("input",{className:"w-100 pa1 ba b--yellow yellow bg-dark-blue",type:"search",placeholder:"Search games",onChange:a,value:t,"aria-label":"Search games"}))},g=function(e){var t=e.filterChange,a=e.filter;return o.a.createElement("div",{className:"mw6 mb4 center"},o.a.createElement("input",{id:"playedLastTwoWeeks",type:"checkbox",onChange:t,checked:a.playedLastTwoWeeks}),o.a.createElement("label",{htmlFor:"playedLastTwoWeeks",className:"yellow"}," Played last 2 weeks"))},w=(a(25),function(e){for(var t=e.pageCount,a=e.activePage,n=e.changePage,r=[],i=0;i<t;i++)r.push(o.a.createElement("option",{key:i,value:i},"Page "+(i+1)));return o.a.createElement("select",{id:"pagination",onChange:n,value:a,className:"yellow bg-navy b--none mt4 center db"},r)}),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).orderGamesByName=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return e.sort(function(e,a){var n=e.name.toUpperCase(),o=a.name.toUpperCase();if("asc"===t){if(n<o)return-1;if(n>o)return 1}else if("desc"===t){if(n>o)return-1;if(n<o)return 1}return 0}),e},a.orderGamesByPlaytime=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc";return e.sort(function(e,a){return"desc"===t?a.playtime_forever-e.playtime_forever:"asc"===t?e.playtime_forever-a.playtime_forever:0}),e},a.filterGames=function(e,t,a){return e=e.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}),a.playedLastTwoWeeks&&e.length&&(e=e.filter(function(e){return e.playtime_2weeks>0})),e},a.onOrderChange=function(e){a.setState({orderBy:e.target.value})},a.onSearchChange=function(e){a.setState({searchField:e.target.value}),a.props.resetPage()},a.onFilterChange=function(e){a.setState({filter:{playedLastTwoWeeks:e.target.checked}}),a.props.resetPage()},a.state={orderBy:"name",searchField:"",filter:{playedLastTwoWeeks:!1}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.orderBy,n=t.searchField,r=t.filter,i=this.props,s=i.games,l=i.page,c=this.filterGames(s,n,r),m=[];if(c.length)switch(a){case"name":m=this.orderGamesByName(c);break;case"nameDesc":m=this.orderGamesByName(c,"desc");break;case"playtimeDesc":m=this.orderGamesByPlaytime(c);break;case"playtime":m=this.orderGamesByPlaytime(c,"asc");break;default:m=this.orderGamesByName(c)}for(var u=[],h=Math.ceil(m.length/30),y=0;y<h;y++)u[y]=m.slice(30*y,30*y+30);return o.a.createElement("div",{className:"mh6-l mh4-m mh0 mb4"},o.a.createElement("p",{className:"tc yellow"},"Game count: ",m.length),o.a.createElement(d,{searchChange:this.onSearchChange,value:n}),o.a.createElement(p,{orderChange:this.onOrderChange,orderBy:a}),o.a.createElement(g,{filterChange:this.onFilterChange,filter:r}),o.a.createElement("div",{className:"flex flex-wrap justify-center"},u[l]?u[l].map(function(t){return o.a.createElement(f,{key:t.appid,appid:t.appid,time:t.playtime_forever,time2W:t.playtime_2weeks,name:t.name,logo:t.img_logo_url,stats:t.has_community_visible_stats,profile:e.props.profile})}):o.a.createElement("p",{className:"gold f3"},"No games found")),m.length>0&&o.a.createElement(w,{pageCount:h,activePage:l,changePage:this.props.changePage}))}}]),t}(n.Component),v=function(){return o.a.createElement("header",{className:"bg-navy gold"},o.a.createElement("h1",{className:"f1-l f2-m f3 tc ma0 pa3"},"Games Library"))},b=function(){return o.a.createElement("footer",{className:"yellow bg-navy tc pa3 f6"},"Icons made by ",o.a.createElement("a",{className:"gold",title:"Pixel Buddha",href:"https://www.flaticon.com/authors/pixel-buddha"},"Pixel Buddha")," from ",o.a.createElement("a",{className:"gold",href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",o.a.createElement("a",{className:"gold",rel:"noopener noreferrer",title:"Creative Commons BY 3.0",target:"_blank",href:"http://creativecommons.org/licenses/by/3.0/"},"CC 3.0 BY"))},E=(a(27),function(e){var t=e.onClick,a=e.text;return o.a.createElement("div",{className:"notification bg-red fixed pointer dim noselect",title:"Dismiss",onClick:t},a)}),N=(a(29),function(){return o.a.createElement("div",{className:"spinner"})}),k=(a(31),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).hideNotification=function(){e.setState({notification:{show:!1,text:""}})},e.showNotification=function(t){e.setState({notification:{show:!0,text:t}})},e.setSpinner=function(t){e.setState({showSpinner:t})},e.onInputChange=function(t){e.setState({profile:t.target.value})},e.onPressEnter=function(t){"Enter"===t.key&&e.state.profile&&e.onButtonSubmit()},e.onButtonSubmit=function(){var t=e.state.profile;t?(e.hideNotification(),e.setSpinner(!0),fetch("https://gamesuggest-api.herokuapp.com/getownedgames",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({profile:t})}).then(function(e){return e.json()}).then(function(t){if(0===Object.keys(t.response).length)throw new Error("SteamID does not exist!");e.setState({ownedGames:t.response}),e.setSpinner(!1),e.resetPage()}).catch(function(t){e.setState({ownedGames:{}}),e.setSpinner(!1),e.showNotification("SteamID does not exist!")})):e.showNotification("Empty SteamID!")},e.scrollToTop=function(){e.scrollTop.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})},e.onPageChange=function(t){e.setState({page:t.target.value})},e.resetPage=function(){e.setState({page:0})},e.state={profile:"",ownedGames:{},page:0,notification:{show:!1,text:""},showSpinner:!1},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.ownedGames.games,a=this.state,r=a.profile,i=a.showSpinner,s=a.page,l=this.state.notification,c=l.text,m=l.show;return o.a.createElement("div",{className:"helvetica"},o.a.createElement("div",{ref:function(t){return e.scrollTop=t}}),m&&o.a.createElement(E,{text:c,onClick:this.hideNotification}),i&&o.a.createElement(N,null),o.a.createElement(v,null),o.a.createElement("div",{className:"body"},o.a.createElement(h,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit,onPressEnter:this.onPressEnter}),t&&o.a.createElement(n.Fragment,null,o.a.createElement(y,{games:t,profile:r,page:s,changePage:this.onPageChange,resetPage:this.resetPage}),o.a.createElement("div",{onClick:this.scrollToTop,title:"To top",className:"fa fa-chevron-circle-up fa-5x scroll fixed z-1 bottom-2-l right-2-l bottom-1-m right-1-m bottom-0 right-0 gold pointer"}))),o.a.createElement(b,null))}}]),t}(n.Component)),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(33),a(35);i.a.render(o.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/games-library",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/games-library","/service-worker.js");C?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):S(e)})}}()}},[[10,2,1]]]);
//# sourceMappingURL=main.a92e461a.chunk.js.map