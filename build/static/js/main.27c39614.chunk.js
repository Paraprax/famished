(this.webpackJsonpfamished=this.webpackJsonpfamished||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(8),c=s.n(i),r=(s(13),s(3)),o=s(4),h=s(2),l=s(6),u=s(5),d=(s(14),s(15),s(16),s(0)),b=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Business",children:[Object(d.jsx)("div",{className:"image-container",children:Object(d.jsx)("a",{href:this.props.business.url,target:"blank",children:Object(d.jsx)("img",{src:this.props.business.imageSrc,alt:this.props.business.name})})}),Object(d.jsx)("a",{href:this.props.googleURL,target:"blank",children:Object(d.jsx)("h2",{className:"Business-name",children:this.props.business.name})}),Object(d.jsxs)("div",{className:"Business-information",children:[Object(d.jsxs)("div",{className:"Business-address",children:[Object(d.jsx)("a",{href:this.props.addressURL,target:"blank",children:Object(d.jsx)("p",{children:this.props.business.address})}),Object(d.jsx)("p",{children:this.props.business.city}),Object(d.jsx)("p",{children:this.props.business.state+this.props.business.zipCode})]}),Object(d.jsxs)("div",{className:"Business-reviews",children:[Object(d.jsx)("h3",{children:this.props.business.category}),Object(d.jsxs)("h3",{className:"rating",children:["Avg rating: ",this.props.business.rating]}),Object(d.jsxs)("p",{children:["from ",this.props.business.reviewCount," reviews"]})]})]})]})}}]),s}(a.a.Component),j=b,p=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"BusinessList",children:this.props.businesses.map((function(e){return Object(d.jsx)(j,{business:e,googleURL:"https://www.google.com/maps/search/?api=1&query=".concat(e.name,"+").concat(e.city),addressURL:"https://www.google.com/maps/search/?api=1&query=".concat(e.address,"+").concat(e.city)},e.id)}))})}}]),s}(a.a.Component),O=p,g=(s(18),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={term:"",location:"",sortBy:"best_match"},n.handleTermChange=n.handleTermChange.bind(Object(h.a)(n)),n.handleLocationChange=n.handleLocationChange.bind(Object(h.a)(n)),n.handleSearchButton=n.handleSearchButton.bind(Object(h.a)(n)),n.handleEnter=n.handleEnter.bind(Object(h.a)(n)),n.optionsForSortBy={"By Relevance":"best_match","By Rating":"rating","By Reviews":"review_count"},n}return Object(o.a)(s,[{key:"getSortClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"handleSortChange",value:function(e){this.setState({sortBy:e})}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearchButton",value:function(e){e.preventDefault(),this.state.term&&this.state.location&&this.state.sortBy?(console.log("Search running"),this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)):console.log("Search terms required")}},{key:"handleEnter",value:function(e){e&&"Enter"===e.key&&(e.preventDefault(),console.log("Enter pressed"),this.handleSearchButton(e))}},{key:"renderSortOptions",value:function(){var e=this;return Object.keys(this.optionsForSortBy).map((function(t){var s=e.optionsForSortBy[t];return Object(d.jsx)("li",{className:e.getSortClass(s),onClick:e.handleSortChange.bind(e,s),children:Object(d.jsx)("div",{children:t})},s)}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"SearchBar",children:[Object(d.jsx)("div",{className:"SearchBar-sort-options",children:Object(d.jsx)("ul",{children:this.renderSortOptions()})}),Object(d.jsxs)("div",{className:"SearchBar-fields",children:[Object(d.jsx)("input",{onChange:this.handleTermChange,onKeyPress:this.handleEnter,placeholder:"Enter food genres (eg. pizza, take-out, Japanese, gourmet..)"}),Object(d.jsx)("input",{onChange:this.handleLocationChange,onKeyPress:this.handleEnter,placeholder:"Which city?"})]}),Object(d.jsx)("div",{className:"SearchBar-submit",children:Object(d.jsx)("button",{onClick:this.handleSearchButton,children:"Search"})})]})}}]),s}(a.a.Component)),m=Object({NODE_ENV:"production",PUBLIC_URL:"/famished",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_YELP_KEY,f=function(e,t,s){var n="".concat("https://corsanywhere.herokuapp.com/","https://api.yelp.com/v3/businesses/search?term=").concat(e,"&location=").concat(t,"&sort_by=").concat(s),a={headers:{Authorization:"Bearer ".concat(m)}};return fetch(n,a).then((function(e){return e.json()})).then((function(e){if(e.businesses)return console.log(e),console.log("Yelp module triggered"),e.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count,url:e.url}}))}))},v=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={businesses:[]},n.searchYelp=n.searchYelp.bind(Object(h.a)(n)),n}return Object(o.a)(s,[{key:"searchYelp",value:function(e,t,s){var n=this;console.log("Hitting Yelp API with - ".concat(e,", ").concat(t,", ").concat(s)),f(e,t,s).then((function(e){n.setState({businesses:e})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{id:"header-bar",children:[Object(d.jsx)("span",{id:"famished",onClick:function(e){return document.location="/"},children:"Famished"}),Object(d.jsx)("span",{id:"tagline",children:"find the feast you're looking for"})]}),Object(d.jsx)(g,{searchYelp:this.searchYelp}),Object(d.jsx)(O,{businesses:this.state.businesses})]})}}]),s}(a.a.Component),y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),y()}],[[19,1,2]]]);
//# sourceMappingURL=main.27c39614.chunk.js.map