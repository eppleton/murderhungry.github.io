(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17725551"],{"41a4":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return h}));var r=n("1e35"),i=n("9755"),o=function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):i(e.value).then(a,c)}u((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},c=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),u=function(e,t){var n=e.name,r=e.size,i=e.type,o=encodeURI(n);return t&&(o="string"===typeof t?t:"function"===typeof t?t({name:n,size:r,type:i}):encodeURI(JSON.stringify(t)),o||(o="empty_key")),o.replace(/\s/g,"_")},l=function(e,t,n,c,u){return o(void 0,void 0,void 0,(function(){var o,l;return a(this,(function(a){switch(a.label){case 0:if(!i["a"]||"function"!==typeof i["a"].get)throw new Error(r["k"]);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i["a"].get(e,{level:t,track:n,identityId:c})];case 2:return o=a.sent(),u.debug("Storage image get",o),[2,o];case 3:throw l=a.sent(),new Error(l);case 4:return[2]}}))}))},s=function(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=function(){n("Failed to read file!"),r.abort()},r.readAsText(e)}))},f=function(e,t,n,c,u){return o(void 0,void 0,void 0,(function(){var o,l,f;return a(this,(function(a){switch(a.label){case 0:if(!i["a"]||"function"!==typeof i["a"].get)throw new Error(r["k"]);a.label=1;case 1:return a.trys.push([1,4,,5]),[4,i["a"].get(e,{download:!0,level:t,track:n,identityId:c})];case 2:return o=a.sent(),u.debug(o),[4,s(o["Body"])];case 3:return l=a.sent(),[2,l];case 4:throw f=a.sent(),new Error(f);case 5:return[2]}}))}))},h=function(e,t,n,c,u,l){return o(void 0,void 0,void 0,(function(){var o,s;return a(this,(function(a){switch(a.label){case 0:if(!i["a"]||"function"!==typeof i["a"].put)throw new Error(r["k"]);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i["a"].put(e,t,{contentType:u,level:n,track:c})];case 2:return o=a.sent(),l.debug("Upload data",o),[3,4];case 3:throw s=a.sent(),new Error(s);case 4:return[2]}}))}))}},b90a:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_image_picker",(function(){return h}));var r=n("6260"),i=n("36de"),o=n("2482"),a=n("f036"),c=n("71b8"),u=(n("1e35"),n("9755"),n("41a4")),l=function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):i(e.value).then(a,c)}u((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},f=new i["a"]("S3ImagePicker"),h=function(){function e(e){var t=this;Object(r["k"])(this,e),this.contentType="binary/octet-stream",this.level=a["a"].Public,this.headerTitle=c["a"].IMAGE_PICKER_TITLE,this.headerHint=c["a"].IMAGE_PICKER_HINT,this.placeholderHint=c["a"].IMAGE_PICKER_PLACEHOLDER_HINT,this.buttonText=c["a"].IMAGE_PICKER_BUTTON_TEXT,this.handlePick=function(e){return l(t,void 0,void 0,(function(){var t,n,r,i,o,a,c,l,h,p;return s(this,(function(s){switch(s.label){case 0:t=this,n=t.path,r=void 0===n?"":n,i=t.level,o=t.track,a=t.identityId,c=t.fileToKey,l=r+Object(u["b"])(e,c),s.label=1;case 1:return s.trys.push([1,4,,5]),[4,Object(u["e"])(l,e,i,o,e["type"],f)];case 2:return s.sent(),h=this,[4,Object(u["c"])(l,i,o,a,f)];case 3:return h.src=s.sent(),[3,5];case 4:throw p=s.sent(),f.error(p),new Error(p);case 5:return[2]}}))}))}}return e.prototype.render=function(){return Object(r["i"])(r["b"],null,Object(r["i"])("slot",{name:"photo-picker"},Object(r["i"])("amplify-photo-picker",{previewSrc:this.src,handleClick:this.handlePick,headerTitle:o["a"].get(this.headerTitle),headerHint:o["a"].get(this.headerHint),placeholderHint:o["a"].get(this.placeholderHint),buttonText:o["a"].get(this.buttonText)})))},e}()}}]);
//# sourceMappingURL=chunk-17725551.387b4ab9.js.map