(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,n){e.exports=n.p+"static/media/logo.b7e46385.png"},169:function(e,t,n){e.exports=n(300)},174:function(e,t,n){},177:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(32),i=n.n(o),c=(n(174),n(89)),s=n.n(c),l=n(136),u=n(137),p=n(138),h=n(158),m=n(139),d=n(159),g=n(140),b=n.n(g),y=(n(177),n(44)),f=n(311),w=n(310),E=n(312),k=(n(178),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).updateInputLyrics=function(){n.setState({inputLyrics:document.getElementById("input-lyrics").value})},n.submit=Object(l.a)(s.a.mark(function e(){var t,a,o,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loadingAPI:!0}),t="http://ec2-34-245-176-135.eu-west-1.compute.amazonaws.com/to_chords","localhost"===window.location.hostname&&"localhost:3000"!==window.location.host&&(t="http://".concat(window.location.host,"/to_chords")),e.prev=3,e.next=6,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lyrics:n.state.inputLyrics})});case 6:a=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),n.setState({loadingAPI:!1}),e.abrupt("return");case 13:if(n.setState({loadingAPI:!1}),a.ok){e.next=16;break}return e.abrupt("return");case 16:return e.next=18,a.json();case 18:o=e.sent,i=n.state.inputLyrics.split("\n").map(function(e,t){return 0===e.trim().length?e:Array.isArray(o.chords[t])?"".concat(e," (").concat(o.chords[t].join(" "),")"):e}).map(function(e){return r.a.createElement("span",null,e,r.a.createElement("br",null))}),n.setState({answer:i});case 21:case"end":return e.stop()}},e,null,[[3,9]])})),n.getFooter=function(){return r.a.createElement("div",{style:{position:"fixed",left:0,bottom:0,width:"100%",backgroundColor:"#e7e7e7",color:"black",textAlign:"center"}},"Made with ",r.a.createElement("span",{style:{fontSize:"large",color:"red"}},"\u2665")," by Gefen Keinan"," ",r.a.createElement("a",{href:"https://github.com/gefenk9",target:"_blank",rel:"noopener noreferrer",style:{color:"black"}},r.a.createElement(y.a,{name:"github"})))},n.state={inputLyrics:"",loadingAPI:!1},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e;return e=this.state.answer?r.a.createElement("p",{style:{lineHeight:1.2}},this.state.answer):r.a.createElement(f.a,{autoComplete:"off"},r.a.createElement(w.a,{id:"input-lyrics",placeholder:"Lyrics...",style:{minHeight:200,minWidth:300},onChange:this.updateInputLyrics}),r.a.createElement("br",null),r.a.createElement(E.a,{loading:this.state.loadingAPI,onClick:this.submit,style:{marginTop:"10px"},disabled:0===this.state.inputLyrics.trim().length,color:"blue"},"Submit")),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:b.a,alt:"logo",style:{marginTop:"10px",height:"150px"}}),r.a.createElement("h1",null,"Lyrics to Chords"),e),this.getFooter())}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[169,1,2]]]);
//# sourceMappingURL=main.70d024a7.chunk.js.map