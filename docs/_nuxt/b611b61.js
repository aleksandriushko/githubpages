(window.webpackJsonp=window.webpackJsonp||[]).push([[170,31],{253:function(e){e.exports=JSON.parse('{"teamMembers":[{"id":1,"image":"/img/team/team-1/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":2,"image":"/img/team/team-1/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":3,"image":"/img/team/team-1/team-3.jpg","name":"Kashara May","position":"Founder"},{"id":4,"image":"/img/team/team-1/team-4.jpg","name":"Peter Parker","position":"Marketing"},{"id":5,"image":"/img/team/team-3/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":6,"image":"/img/team/team-3/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":7,"image":"/img/team/team-3/team-3.jpg","name":"Kashara May","position":"Founder"},{"id":8,"image":"/img/team/team-2/team-1.jpg","name":"Caroline Roses","position":"Designer"},{"id":9,"image":"/img/team/team-2/team-2.jpg","name":"Blake Hamilton","position":"Engineer"},{"id":10,"image":"/img/team/team-2/team-3.jpg","name":"Kashara May","position":"Founder"}]}')},312:function(e,t,m){"use strict";m.r(t);var n={props:["teamMember"]},r=m(17),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,m=e._self._c||t;return m("div",{staticClass:"team team__style--3"},[m("div",{staticClass:"thumb"},[m("img",{attrs:{src:e.teamMember.image,alt:"team Images"}}),e._v(" "),m("div",{staticClass:"overlay",style:{backgroundImage:"url("+e.teamMember.image+")"}}),e._v(" "),e._m(0)]),e._v(" "),m("div",{staticClass:"team-info text-center"},[m("div",{staticClass:"info"},[m("h5",[e._v(e._s(e.teamMember.name))]),e._v(" "),m("span",[e._v(e._s(e.teamMember.position))])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"social-icon icon-solid-rounded icon-size-medium text-center"},[t("li",{staticClass:"facebook"},[t("a",{staticClass:"link",attrs:{href:"https://www.facebook.com/","aria-label":"Facebook"}},[t("i",{staticClass:"fab fa-facebook"})])]),this._v(" "),t("li",{staticClass:"twitter"},[t("a",{staticClass:"link",attrs:{href:"https://twitter.com/","aria-label":"Twitter"}},[t("i",{staticClass:"fab fa-twitter"})])]),this._v(" "),t("li",{staticClass:"instagram"},[t("a",{staticClass:"link",attrs:{href:"https://www.instagram.com/","aria-label":"Instagram"}},[t("i",{staticClass:"fab fa-instagram"})])])])}],!1,null,null,null);t.default=component.exports},579:function(e,t,m){"use strict";m.r(t);var n=m(312),r=m(253),o={components:{TeamMemberThree:n.default},data:function(){return{data:r}}},l=m(17),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"brook-team-area bg_color--5 ptb--100 ptb-sm--60 ptb-md--80"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row row--30"},this._l(this.data.teamMembers.slice(4,7),(function(e){return t("div",{key:e.id,staticClass:"col-lg-4 col-md-4 col-sm-6 col-12"},[t("TeamMemberThree",{attrs:{teamMember:e}})],1)})),0)])])}),[],!1,null,null,null);t.default=component.exports}}]);