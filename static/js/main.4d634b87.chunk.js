(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),i=(a(56),a(48)),o=a(23),s=(a(57),a(11)),m=a(117),u=a(50),d=a(12),E=a(13),h=a(15),p=a(14),g=a(16),f=a(24),b=a.n(f),v=a(116),w=a(38),L=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={renderMsg:!1,redirect:!1},a.onHeaderTyped=function(){a.setState({renderMsg:!0})},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.id=setTimeout(function(){return e.setState({redirect:!0})},12e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.id)}},{key:"render",value:function(){return this.state.redirect?l.a.createElement(v.a,{to:"/about"}):l.a.createElement("div",{style:{width:"100%",margin:"auto"}},l.a.createElement("div",{className:"homepage"},l.a.createElement("div",{className:"homepage-banner"},l.a.createElement(w.a,{to:"/about",onClick:function(){}},l.a.createElement("h1",{className:"homepage-title"},l.a.createElement(b.a,{avgTypingDelay:150,startDelay:1e3,onTypingDone:this.onHeaderTyped,cursor:{hideWhenDone:!0}},"jodigunawan",l.a.createElement(b.a.Backspace,{count:7,delay:1700}),"go;",l.a.createElement(b.a.Delay,{delay:800}),")",l.a.createElement(b.a.Backspace,{count:1,delay:1700})))))))}}]),t}(n.Component),k=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.descriptions.map(function(e,t){return l.a.createElement("p",null,e)});return l.a.createElement(s.Grid,{className:"about-grid-careers fix-margin"},l.a.createElement(s.Cell,{col:3},l.a.createElement("p",null,this.props.start," - ",this.props.end)),l.a.createElement(s.Cell,{col:9},l.a.createElement("p",null,l.a.createElement("strong",null,this.props.title)," at ",l.a.createElement("a",{href:this.props.link},this.props.location)),l.a.createElement("ul",null,e),l.a.createElement("p",null,"[",this.props.techs,"]")))}}]),t}(n.Component),y=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"page-container"},l.a.createElement("div",null,l.a.createElement("div",{className:"about-grid-info"},l.a.createElement("img",{className:"pp"}),l.a.createElement("div",null,l.a.createElement("h1",null,"about;"),l.a.createElement("div",{className:"contact-icons"},l.a.createElement("div",null,l.a.createElement("p",null,"Vancouver, Canada")),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:jgunawan.1098@gmail.com"},"jgunawan.1098@gmail.com"))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.instagram.com/jodigunawan/",target:"_blank",rel:"noopener noreferrer"},"Instagram"),"/",l.a.createElement("a",{href:"https://www.linkedin.com/in/jodi-gunawan/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),"/",l.a.createElement("a",{href:"https://github.com/jodigo",target:"_blank",rel:"noopener noreferrer"},"Github")))),l.a.createElement("a",{href:"https://docs.google.com/document/d/1zOlTHWt7R2cu_RT23C19l43VKWKZgfR-AOsio7vGjIQ/edit?usp=sharing",download:!0,className:"download-resume"},"Resume")))),l.a.createElement("br",null),l.a.createElement("h5",null,"Experiences"),l.a.createElement("hr",null),l.a.createElement(k,{start:"May 2019",end:"August 2019",title:"Junior Full Stack Developer",location:"UBC (Health Research Pavilion)",descriptions:["Implemented Natural Language Processing model for short text message analytic tools using predefined label and topic modelling with UBC Data Science Research Experts","Developed data visualization features to provide interactive informative display of processed data using D3.js, Plotly and Angular 6","Redesigned the API and application architecture using Python, AWS, MS Azure and Docker, to create partial-serverless microservice architecture which increases modularity and reduces costs"],link:"https://www.msfhr.org/smart-text-analytic-tools-stat-analysis-patient-centred-communications-strengthen-health-systems-bc",techs:"Angular 6, React, AWS(S3, Blob, Lambda, Elastic BeanStalk, ECR), Microsoft Azure, Docker, Flask, PostgreSQL, Scikit Learn, Tensorflow"}),l.a.createElement(k,{start:"January 2018",end:"August 2018",title:"Software Developer",location:"Glacier Media Inc - Real Estate Wire",descriptions:["Integrated an Event Tracking system to track the user activity using Google Bigquery for data analytics","Migrated database from third party CMS Polopoly to the local PostgreSQL database","Developed real estate news site using Coffeescript and AWS and search results localization which increased page traffic by 20%","Participated in bi-weekly sprints and kanban flow in agile culture with JIRA ticketing system"],link:"https://www.rew.ca/news",techs:"AWS, Coffeescript, Google Bigquery, JIRA, PostgreSQL, Redis, Ruby on Rails 5, Sass"}),l.a.createElement(k,{start:"September 2017",end:"December 2017",title:"Learning Technology Rover",location:"UBC Applied Science",descriptions:["Utilized Blackboard - Connect to managing students\u2019 grades database and ensuring bugless course content by testing","Provided initial face-to-face and remote learning technology support for instructors and faculty members","Teaching assistant for the first year courses: APSC100 and APSC101"],techs:"HTML5, CSS, WordPress, Connect, Python"}),l.a.createElement("div",{className:"about-skills container"},l.a.createElement("h5",null,"Skills"),l.a.createElement("hr",null),l.a.createElement("div",{className:"about-skills-container row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement("h6",{className:"about-skills-subtitle"},"Languages"),l.a.createElement("p",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"HTML5 + CSS")),l.a.createElement("li",null,l.a.createElement("p",null,"Javascript")),l.a.createElement("li",null,l.a.createElement("p",null,"Python")),l.a.createElement("li",null,l.a.createElement("p",null,"Ruby on Rails")),l.a.createElement("li",null,l.a.createElement("p",null,"C/C++")),l.a.createElement("li",null,l.a.createElement("p",null,"XML")),l.a.createElement("li",null,l.a.createElement("p",null,"SQL")),l.a.createElement("li",null,l.a.createElement("p",null,"Git")),l.a.createElement("li",null,l.a.createElement("p",null,"System Verilog")),l.a.createElement("li",null,l.a.createElement("p",null,"Assembly"))))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("h6",{className:"about-skills-subtitle"},"Frameworks + Libraries"),l.a.createElement("p",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"React")),l.a.createElement("li",null,l.a.createElement("p",null,"Angular")),l.a.createElement("li",null,l.a.createElement("p",null,"Flask")),l.a.createElement("li",null,l.a.createElement("p",null,"Amazon Web Services (AWS)")),l.a.createElement("li",null,l.a.createElement("p",null,"Microsoft Azure")),l.a.createElement("li",null,l.a.createElement("p",null,"PostgreSQL")),l.a.createElement("li",null,l.a.createElement("p",null,"NoSQL")),l.a.createElement("li",null,l.a.createElement("p",null,"Docker")),l.a.createElement("li",null,l.a.createElement("p",null,"Redis")),l.a.createElement("li",null,l.a.createElement("p",null,"ROS")),l.a.createElement("li",null,l.a.createElement("p",null,"Sass")),l.a.createElement("li",null,l.a.createElement("p",null,"Tensorflow"))))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("h6",{className:"about-skills-subtitle"},"Others"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"Agile Methodology")),l.a.createElement("li",null,l.a.createElement("p",null,"Kanban")),l.a.createElement("li",null,l.a.createElement("p",null,"Scrum")),l.a.createElement("li",null,l.a.createElement("p",null,"UI Design")),l.a.createElement("li",null,l.a.createElement("p",null,"Machine Learning")))))),l.a.createElement("br",null),l.a.createElement("div",{className:"about-skills container"},l.a.createElement("h5",null,"Interests"),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-sm"},l.a.createElement("h6",{className:"about-skills-subtitle"},"Basketball"),l.a.createElement("h6",{className:"about-skills-subtitle"},"Classical Guitar"),l.a.createElement("h6",{className:"about-skills-subtitle"},"Food"),l.a.createElement("h6",{className:"about-skills-subtitle"},"Streetwear"))))}}]),t}(n.Component),S=a(33),j=[{id:"ubc",title:"The University of British Columbia",address:"2075 Lower Mall, Vancouver, BC V6T 1Z2",heading:"I decided to make a simple-ish website to practice React's Hook and how to use `useState`, which releases after the new 16.8 React version. I thought might as well make this my portfolio/personal website since I need one :) also, semicolon looks like letter j.",other:"",coordinates:[49.26161773,-123.24955847]},{id:"rew",title:"Real Estate Wire (REW)",address:"110 W 2nd Ave, Vancouver, BC V5Y 1C2",heading:"I learned a lot from my experience here as a full stack developer. My 8 months here allowed to create customer facing features and learn how to write beautiful codes.",other:["Link","http://www.rew.ca/"],coordinates:[49.26896,-123.10684]},{id:"vgh",title:"VGH Research Pavilion",address:"828 W 10th Ave, Vancouver, BC V5Z 1M9",heading:"My experience here allowed me to integrate my interest in machine learning and web development by creating a data visualization app to provide NLP analysis result of conversation data between doctors and patients.",other:"",coordinates:[49.26253,-123.1314]},{id:"trafiq",title:"Trafiq",address:"4216 Main St, Vancouver, BC V5V 3P9",heading:"My favourite breakfast spot. Relaxed, elegant European cafe with items ranging from cakes & croissants to soups & sandwiches.",other:"",coordinates:[49.24733,-123.10078]}],N=function(){var e=j.reduce(function(e,t){return e[t.id]=Object(n.createRef)(),e},{}),t=Object(n.useState)({latitude:49.21920015,longitude:-123.13836515,zoom:10.5,width:"50vw",height:"100vh"}),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(null),s=Object(o.a)(i,2),m=s[0],u=s[1];return Object(n.useEffect)(function(){var e=function(e){"Escape"===e.key&&u(null)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}},[]),l.a.createElement("div",{id:"feed-container"},l.a.createElement("div",{className:"map-container"},l.a.createElement("div",null,l.a.createElement(S.c,Object.assign({},r,{mapboxApiAccessToken:"pk.eyJ1Ijoiam9kaWdvIiwiYSI6ImNqeWZhMXpkczA5Y2ozaG52Z2l0Y29qa3IifQ.zglTcX0xV8BW_o1Umfx6Hg",onViewportChange:function(e){c(e)}}),j.map(function(t){return l.a.createElement(S.a,{key:t.id,latitude:t.coordinates[0],longitude:t.coordinates[1]},l.a.createElement("i",{className:"fa fa-thumb-tack map-marker",id:t.id,onClick:function(a){var n;n=a.target.id,e[n].current.scrollIntoView({behavior:"smooth",block:"start"}),a.preventDefault(),u(t)}}))}),";",m&&l.a.createElement(S.b,{latitude:m.coordinates[0],longitude:m.coordinates[1],onClose:function(){u(null)},onClick:function(){}},l.a.createElement("div",null,l.a.createElement("h5",null,m.title)))))),l.a.createElement("div",{className:"post-container"},l.a.createElement("h1",null,"feed;"),j.map(function(t){return l.a.createElement("section",{id:t.id,key:t.id,ref:e[t.id],className:"post-card"},l.a.createElement("h4",null,t.title),l.a.createElement("p",null,t.heading),""!=t.other&&l.a.createElement("a",{id:"citation",href:t.other[1]},l.a.createElement("small",null,t.other[0]),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",null,l.a.createElement("a",{className:"continue-button"},"Continue reading")))})))},C=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"page-container"},l.a.createElement("h1",null,"contact;"),l.a.createElement("div",{className:"contact-icons"},l.a.createElement("div",null,l.a.createElement("p",null,"Vancouver, Canada")),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:jgunawan.1098@gmail.com"},"jgunawan.1098@gmail.com"))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.instagram.com/jodigunawan/",target:"_blank",rel:"noopener noreferrer"},"Instagram"),"/",l.a.createElement("a",{href:"https://www.linkedin.com/in/jodi-gunawan/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),"/",l.a.createElement("a",{href:"https://github.com/jodigo",target:"_blank",rel:"noopener noreferrer"},"Github")))))}}]),t}(n.Component),M=function(){return l.a.createElement(m.a,null,l.a.createElement(u.a,{exact:!0,path:"/",component:L}),l.a.createElement(u.a,{path:"/about",component:y}),l.a.createElement(u.a,{path:"/feed",component:N}),l.a.createElement(u.a,{path:"/contact",component:C}))},O=a(114);var A=a(115);a(110),a(111);c.a.render(l.a.createElement(A.a,null,l.a.createElement(function(){var e=Object(n.useState)(function(){var e="dark"in localStorage,t=JSON.parse(localStorage.getItem("dark")),a=function(){if(window.matchMedia)return window.matchMedia("(prefers-color-scheme: dark)").matches}();return e?t:!!a}()),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.useEffect(function(){localStorage.setItem("dark",JSON.stringify(a))},[a]),l.a.createElement("div",Object(i.a)({className:"App"},"className",a?"dark-mode":"light-mode"),l.a.createElement(s.Layout,{className:a?"dark-mode":"light-mode"},l.a.createElement(s.Header,{id:"header-bar",className:a?"dark-mode":"light-mode",title:" ",scroll:!0},l.a.createElement(s.Navigation,{className:a?"dark-mode":"light-mode"},l.a.createElement(O.a,{to:"/",activeStyle:{fontWeight:"bold",textDecoration:"line-through"}},l.a.createElement("p",null,"Home")),l.a.createElement(O.a,{to:"/about",activeStyle:{fontWeight:"bold",textDecoration:"line-through"}},l.a.createElement("p",null,"About")),l.a.createElement(O.a,{to:"/feed",activeStyle:{fontWeight:"bold",textDecoration:"line-through"}},l.a.createElement("p",null,"Feed")),l.a.createElement(O.a,{to:"/",activeStyle:{fontWeight:"bold",textDecoration:"line-through"}})),l.a.createElement("button",{id:"toggle-light",className:a?"dark-mode big":"light-mode big",onClick:function(){return r(function(e){return!e})}},l.a.createElement("svg",{width:"100px",height:"100px",viewBox:"0 0 100 100"},l.a.createElement("g",{id:"orb"},l.a.createElement("circle",{id:"disc",cx:"20",cy:"20",r:"20"}),l.a.createElement("circle",{id:"cut",cx:"20",cy:"20",r:"20"})),l.a.createElement("path",{d:"M51,21 L48,21 L48,4 L51,4 L51,21 Z M51.75,96 L48.75,96 L48.75,79 L51.75,79 L51.75,96 Z M4.5,51.5 L4.5,48.5 L21.5,48.5 L21.5,51.5 L4.5,51.5 Z M78.5,51.5 L78.5,48.5 L95.5,48.5 L95.5,51.5 L78.5,51.5 Z M17.0841793,19.0191036 L19.2054997,16.8977832 L31.226315,28.9185985 L29.1049946,31.0399189 L17.0841793,19.0191036 Z M69.4100811,71.3450054 L71.5314015,69.223685 L83.5522168,81.2445003 L81.4308964,83.3658207 L69.4100811,71.3450054 Z M18.5691036,83.3658207 L16.4477832,81.2445003 L28.4685985,69.223685 L30.5899189,71.3450054 L18.5691036,83.3658207 Z M70.8950054,31.0399189 L68.773685,28.9185985 L80.7945003,16.8977832 L82.9158207,19.0191036 L70.8950054,31.0399189 Z",id:"rays",fill:"rgb(var(--fg))"})))),l.a.createElement("button",{id:"toggle-light",className:a?"dark-mode small":"light-mode small",onClick:function(){return r(function(e){return!e})}},l.a.createElement("svg",{width:"100px",height:"100px",viewBox:"0 0 100 100"},l.a.createElement("g",{id:"orb"},l.a.createElement("circle",{id:"disc",cx:"20",cy:"20",r:"20"}),l.a.createElement("circle",{id:"cut",cx:"20",cy:"20",r:"20"})),l.a.createElement("path",{d:"M51,21 L48,21 L48,4 L51,4 L51,21 Z M51.75,96 L48.75,96 L48.75,79 L51.75,79 L51.75,96 Z M4.5,51.5 L4.5,48.5 L21.5,48.5 L21.5,51.5 L4.5,51.5 Z M78.5,51.5 L78.5,48.5 L95.5,48.5 L95.5,51.5 L78.5,51.5 Z M17.0841793,19.0191036 L19.2054997,16.8977832 L31.226315,28.9185985 L29.1049946,31.0399189 L17.0841793,19.0191036 Z M69.4100811,71.3450054 L71.5314015,69.223685 L83.5522168,81.2445003 L81.4308964,83.3658207 L69.4100811,71.3450054 Z M18.5691036,83.3658207 L16.4477832,81.2445003 L28.4685985,69.223685 L30.5899189,71.3450054 L18.5691036,83.3658207 Z M70.8950054,31.0399189 L68.773685,28.9185985 L80.7945003,16.8977832 L82.9158207,19.0191036 L70.8950054,31.0399189 Z",id:"rays",fill:"rgb(var(--fg))"}))),l.a.createElement(s.Drawer,{title:"j o d i g o ;",id:"header-bar"},l.a.createElement(s.Navigation,null,l.a.createElement(w.a,{to:"/"},"Home"),l.a.createElement(w.a,{to:"/about"},"About"),l.a.createElement(w.a,{to:"/feed"},"Feed"))),l.a.createElement(s.Content,null,l.a.createElement("div",{className:"page-content"}),l.a.createElement(M,null))))},null)),document.getElementById("root"))},51:function(e,t,a){e.exports=a(112)},56:function(e,t,a){},57:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.4d634b87.chunk.js.map