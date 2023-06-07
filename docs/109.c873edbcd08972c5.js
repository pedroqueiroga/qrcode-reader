"use strict";(self.webpackChunkqr_code_reader=self.webpackChunkqr_code_reader||[]).push([[109],{109:(be,G,g)=>{g.r(G),g.d(G,{ReaderComponent:()=>Ee});var q=g(755);function j(i,o,e,t,n,a,s){try{var d=i[a](s),c=d.value}catch(S){return void e(S)}d.done?o(c):Promise.resolve(c).then(t,n)}function N(i){return function(){var o=this,e=arguments;return new Promise(function(t,n){var a=i.apply(o,e);function s(c){j(a,t,n,s,d,"next",c)}function d(c){j(a,t,n,s,d,"throw",c)}s(void 0)})}}var r=g(902),te=g(579);class f extends te.x{constructor(){super(...arguments),this._value=null,this._hasValue=!1,this._isComplete=!1}_checkFinalizedStatuses(o){const{hasError:e,_hasValue:t,_value:n,thrownError:a,isStopped:s,_isComplete:d}=this;e?o.error(a):(s||d)&&(t&&o.next(n),o.complete())}next(o){this.isStopped||(this._value=o,this._hasValue=!0)}complete(){const{_hasValue:o,_value:e,_isComplete:t}=this;t||(this._isComplete=!0,o&&super.next(e),super.complete())}}var B=g(135);const ne=["video"],oe=["canvas"],ie=["resultsPanel"],z="assets/wasm/index.js",V={audio:!1,video:!0},y={src:"",fps:30,vibrate:300,decode:"utf-8",isBeep:!0,constraints:V,canvasStyles:{font:"15px serif",lineWidth:1,strokeStyle:"green",fillStyle:"#55f02880"}},l=(i,o,e)=>{e?i.error(e):i.next(o),i.complete()},U=(i=!1)=>{if(!1===i)return;const o=new Audio("data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU"+Array(300).join("101"));o.oncanplaythrough=()=>{const e=o.play();e&&e.catch(t=>{})}},Y=(i,o,e,t)=>{let n,a,s=o.width,d=o.height,c=s/d,S=parseInt(getComputedStyle(o).width),h=parseInt(getComputedStyle(o).height),u=S/h;e.innerHTML="",c>u?(n=S/s,a=S/c/d):(a=h/d,n=h*c/s);for(let T=0;T<i.length;T++){const C=i[T];let p=document.createElement("canvas"),v=p.getContext("2d",{willReadFrequently:!0}),Q={},R=[],w=[],b=0,O=0,K=t?.font?.replace(/[^0-9]/g,"");/[0-9]/g.test(K)&&(b=parseFloat(K),O=(n||1)*b,Number.isNaN(O)&&(O=b));const k=C.points;for(let m=0;m<k.length;m++){const D=k?.[m]?.x??0,I=k?.[m]?.y??0;Q[`x${m+1}`]=D,Q[`y${m+1}`]=I,R.push(D),w.push(I)}let M=Math.max(...R),_=Math.min(...R),L=Math.max(...w),A=Math.min(...w);p.setAttribute("class","qrcode-polygon"),c>u?(p.style.top=A*a+.5*(h-S/c)+"px",p.style.left=_*n+"px",p.width=(M-_)*n,p.height=(L-A)*n):(p.style.top=A*a+"px",p.style.left=_*n+.5*(S-h*c)+"px",p.width=(M-_)*a,p.height=(L-A)*a);for(const m in t)v[m]=t[m];const H=[];for(let m=0;m<R.length;m++)H.push((Q[`x${m+1}`]-_)*a),H.push((Q[`y${m+1}`]-A)*n);const x=H.slice(0);for(v.beginPath(),v.moveTo(x.shift(),x.shift());x.length;)v.lineTo(x.shift(),x.shift());if(v.closePath(),v.fill(),v.stroke(),b){const m=document.createElement("div");m.setAttribute("class","qrcode-tooltip-temp"),m.innerText=C.value;const D=`<?xml version="1.0" encoding="utf-8"?><svg version="1.1" class="qrcode-tooltip-clipboard" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${O}" height="${O}" x="0px" y="0px" viewBox="0 0 115.77 122.88" xml:space="preserve"><g><path d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"></path></g></svg> `,I=(new DOMParser).parseFromString(D,"application/xml"),ee=m.ownerDocument.importNode(I.documentElement,!0);m.appendChild(ee),ee.addEventListener("click",()=>window.navigator.clipboard.writeText(C.value));const E=document.createElement("div");E.setAttribute("class","qrcode-tooltip"),E.appendChild(m),a=h/d,n=h*c/s,E.style.fontSize=n*b+"px",E.style.top=A*a+"px",E.style.left=_*n+.5*(S-h*c)+"px",E.style.width=(M-_)*a+"px",E.style.height=(L-A)*a+"px";const F=document.createElement("span");F.innerText=C.value,F.style.fontSize=n*b+"px",F.style.top=A*a+-20*a+"px",F.style.left=_*n+.5*(S-h*c)+"px",e?.appendChild(E),e?.appendChild(F)}e?.appendChild(p)}},W=(i,o)=>new Promise((e,t)=>i.toBlob(n=>e(n),o)),X=(i=[],o,e=new f)=>(Promise.all(Object.assign([],i).map(t=>((i,o)=>{let e=o?.decode??y.decode,t=o?.canvasStyles??y.canvasStyles,n=o?.isBeep??y.isBeep;return new Promise((a,s)=>{const d=new FileReader;d.onload=()=>{const c={name:i.name,file:i,url:URL.createObjectURL(i)},S=new Image;S.setAttribute("crossOrigin","anonymous"),S.onload=N(function*(){const h=document.createElement("canvas");h.width=S.naturalWidth||S.width,h.height=S.naturalHeight||S.height;const u=h.getContext("2d");u.drawImage(S,0,0,h.width,h.height);const T=u.getImageData(0,0,h.width,h.height),C=yield zbarWasm.scanImageData(T);if(C?.length){C.forEach(R=>R.value=R.decode(e?.toLocaleLowerCase())),((i,o,e)=>{let t=o.getContext("2d",{willReadFrequently:!0});for(let n=0;n<i.length;n++){const a=i[n];let s={},d=[],c=[];const S=a.points;for(let p=0;p<S.length;p++){const v=S?.[p]?.x??0,Q=S?.[p]?.y??0;s[`x${p+1}`]=v,s[`y${p+1}`]=Q,d.push(v),c.push(Q)}let h=Math.min(...d),u=Math.min(...c);for(const p in e)t[p]=e[p];t.font=e?.font??"15px serif",he(t,a.value,h,u-5);const T=[];for(let p=0;p<d.length;p++)T.push(s[`x${p+1}`]),T.push(s[`y${p+1}`]);const C=T.slice(0);for(t.beginPath(),t.moveTo(C.shift(),C.shift());C.length;)t.lineTo(C.shift(),C.shift());t.closePath(),t.fill(),t.stroke()}})(C,h,t);const p=yield W(h),v=URL.createObjectURL(p);a(Object.assign({},c,{data:C,url:v,canvas:h,file:(R=p,w=c.name,new File([R],w,{lastModified:(new Date).getTime(),type:R.type}))})),U(n)}else a(Object.assign({},c,{data:C,canvas:h}));var R,w}),S.src=c.url},d.onerror=c=>s(c),d.readAsDataURL(i)})})(t,o))).then(t=>{l(e,t)}).catch(t=>l(e,null,t)),e),he=(i,o,e,t)=>{let n=1.2*i.measureText("M").width,a=o.split("\n");for(var s=0;s<a.length;++s)i.fillText(a[s],e,t),i.strokeText(a[s],e,t),t+=n},$=i=>{Object.assign([],i.childNodes).forEach(o=>i.removeChild(o))},Z=(i=300)=>{i&&Se()&&window?.navigator?.vibrate(i)},Se=()=>{const i=navigator.userAgent||navigator.vendor||window.opera;return!(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(i)&&!/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(i.substr(0,4))||/^((?!chrome|android).)*safari/i.test(i))};let me=(()=>{class i{loadFiles(e=[]){const t=new f;return Promise.all(Object.assign([],e).map(n=>this.readAsDataURL(n))).then(n=>l(t,n)).catch(n=>l(t,null,n)),t}loadFilesToScan(e=[],t){return X(e,t)}readAsDataURL(e){return new Promise((t,n)=>{const a=new FileReader;a.onload=()=>{const s={name:e.name,file:e,url:URL.createObjectURL(e)};t(s)},a.onerror=s=>n(s),a.readAsDataURL(e)})}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Ce=(()=>{class i{constructor(e){this.renderer=e,this.event=new r.vpe,this.src=y.src,this.fps=y.fps,this.vibrate=y.vibrate,this.decode=y.decode,this.isBeep=y.isBeep,this.config=y,this.constraints=y.constraints,this.canvasStyles=y.canvasStyles,this.isStart=!1,this.isPause=!1,this.isLoading=!1,this.isTorch=!1,this.data=new B.X([]),this.devices=new B.X([]),this.deviceIndexActive=0,this.dataForResize=[],this.ready=new f,this.STATUS={startON:()=>this.isStart=!0,pauseON:()=>this.isPause=!0,loadingON:()=>this.isLoading=!0,startOFF:()=>this.isStart=!1,pauseOFF:()=>this.isPause=!1,loadingOFF:()=>this.isLoading=!1,torchOFF:()=>this.isTorch=!1}}ngOnInit(){this.overrideConfig(),((i,o)=>{const e=document.querySelectorAll('script[src="https://cdn.jsdelivr.net/npm/ngx-scanner-qrcode@1.4.2/wasm/index.js"]'),t=document.querySelectorAll('script[src="https://cdn.jsdelivr.net/npm/ngx-scanner-qrcode@latest/wasm/index.js"]');if(e.length||t.length)setTimeout(()=>l(i,!0),200);else{const n=document.querySelectorAll(`script[src="${z}"]`);if(1===n.length)setTimeout(()=>l(i,!0),200);else{n.forEach(s=>s.remove());const a=o.createElement("script");o.setAttribute(a,"type","text/javascript"),o.setAttribute(a,"src",z),o.appendChild(document.body,a),a.onload=()=>setTimeout(()=>l(i,!0),200),a.onerror=()=>setTimeout(()=>l(i,!1,!0),200)}}return i})(this.ready,this.renderer).subscribe(()=>{this.src&&this.loadImage(this.src),this.resize()})}start(e){const t=new f;return this.isStart?l(t,!1):this.safariWebRTC(t,e),t}stop(){this.STATUS.pauseOFF(),this.STATUS.startOFF(),this.STATUS.torchOFF(),this.STATUS.loadingOFF();const e=new f;try{clearInterval(this.rAF_ID),this.video.nativeElement.srcObject.getTracks().forEach(t=>{t.stop(),l(e,!0)}),$(this.resultsPanel.nativeElement)}catch(t){l(e,!1,t)}return e}play(){const e=new f;return this.isPause?(this.video.nativeElement.play(),this.STATUS.pauseOFF(),this.requestAnimationFrame(90),l(e,!0)):l(e,!1),e}pause(){const e=new f;return this.isStart?(clearInterval(this.rAF_ID),this.video.nativeElement.pause(),this.STATUS.pauseON(),l(e,!0)):l(e,!1),e}playDevice(e,t=new f){const n=!this.isStart||this.getConstraints().deviceId!==e;switch(!0){case"null"===e||"undefined"===e||!e:stop(),this.stop(),l(t,!1);break;case e&&n:stop(),this.stop(),this.STATUS.loadingON(),this.deviceIndexActive=this.devices.value.findIndex(s=>s.deviceId===e);const a={...this.constraints,audio:!1,video:{deviceId:e,...this.constraints.video}};navigator.mediaDevices.getUserMedia(a).then(s=>{this.video.nativeElement.srcObject=s,this.video.nativeElement.onloadedmetadata=()=>{this.video.nativeElement.play(),this.requestAnimationFrame(),l(t,!0),this.STATUS.startON(),this.STATUS.loadingOFF()}}).catch(s=>{this.eventEmit(!1),l(t,!1,s),this.STATUS.startOFF(),this.STATUS.loadingOFF()});break;default:l(t,!1),this.STATUS.loadingOFF()}return t}loadImage(e){const t=new f;this.STATUS.startOFF(),this.STATUS.loadingON();const n=new Image;return n.setAttribute("crossOrigin","anonymous"),n.onload=()=>{this.drawImage(n,a=>{l(t,a),this.STATUS.startOFF(),this.STATUS.loadingOFF()})},n.src=e,t}torcher(){const e=this.applyConstraints({advanced:[{torch:this.isTorch}]});return e.subscribe(()=>!1,()=>this.isTorch=!this.isTorch),e}applyConstraints(e){const t=new f,a=this.video.nativeElement.srcObject.getVideoTracks()[0];return new window.ImageCapture(a).getPhotoCapabilities().then(N(function*(){yield a.applyConstraints(e),l(t,!0)})).catch(d=>{switch(d?.name){case"NotFoundError":case"DevicesNotFoundError":l(t,!1,"Required track is missing");break;case"NotReadableError":case"TrackStartError":l(t,!1,"Webcam or mic are already in use");break;case"OverconstrainedError":case"ConstraintNotSatisfiedError":l(t,!1,"Constraints can not be satisfied by avb. devices");break;case"NotAllowedError":case"PermissionDeniedError":l(t,!1,"Permission denied in browser");break;case"TypeError":l(t,!1,"Empty constraints object");break;default:l(t,!1,d)}}),t}getConstraints(){return this.video.nativeElement.srcObject?.getVideoTracks()[0]?.getConstraints()}download(e=`ngx-scanner-qrcode-${Date.now()}.png`){var t=this;const n=new f;return function(){var s=N(function*(){const c=((i,o)=>new File([i],o,{lastModified:(new Date).getTime(),type:i.type}))(yield W(t.canvas.nativeElement),e);X([c],t.config,n).subscribe(S=>{S.forEach(h=>{const u=document.createElement("a");u.href=h.url,u.download=h.name,u.click(),u.remove()})})});return function(){return s.apply(this,arguments)}}()(),n}resize(){window.addEventListener("resize",()=>{this.dataForResize?.length&&Y(this.dataForResize,this.canvas.nativeElement,this.resultsPanel.nativeElement,this.canvasStyles)})}overrideConfig(){this.config?.src&&(this.src=this.config.src),this.config?.fps&&(this.fps=this.config.fps),this.config?.vibrate&&(this.vibrate=this.config.vibrate),this.config?.decode&&(this.decode=this.config.decode),this.config?.isBeep&&(this.isBeep=this.config.isBeep),this.config?.constraints&&(this.constraints=((i,o,e)=>{if(o&&Object.keys(o[i]).length){for(const t in e){const n=JSON.parse(JSON.stringify({...o[i],[t]:e[t]}));o[i]=o[i].hasOwnProperty(t)?o[i]:n}return o[i]}return e})("constraints",this.config,V)),this.config?.canvasStyles&&(this.canvasStyles=this.config.canvasStyles)}safariWebRTC(e,t){this.STATUS.startOFF(),this.STATUS.loadingON(),navigator.mediaDevices.getUserMedia(this.constraints).then(n=>{n.getTracks().forEach(a=>a.stop()),this.loadAllDevices(e,t)}).catch(n=>{l(e,!1,n),this.STATUS.startOFF(),this.STATUS.loadingOFF()})}loadAllDevices(e,t){navigator.mediaDevices.enumerateDevices().then(n=>{let a=n.filter(s=>"videoinput"==s.kind);this.devices.next(a),a.length>0?(l(e,a),t?t(a):this.playDevice(a[0].deviceId)):(l(e,!1,"No camera detected."),this.STATUS.startOFF(),this.STATUS.loadingOFF())}).catch(n=>{l(e,!1,n),this.STATUS.startOFF(),this.STATUS.loadingOFF()})}drawImage(e,t=(()=>{})){var n=this;return N(function*(){const a=n.canvas.nativeElement,s=a.getContext("2d",{willReadFrequently:!0});e instanceof HTMLImageElement&&(a.width=e.naturalWidth,a.height=e.naturalHeight,e.style.visibility="",n.video.nativeElement.style.visibility="hidden",n.video.nativeElement.style.height=a.offsetHeight+"px"),e instanceof HTMLVideoElement&&(a.width=e.videoWidth,a.height=e.videoHeight,e.style.visibility="",n.canvas.nativeElement.style.visibility="hidden"),s.clearRect(0,0,a.width,a.height),s.drawImage(e,0,0,a.width,a.height);const d=s.getImageData(0,0,a.width,a.height);if(zbarWasm){const c=yield zbarWasm.scanImageData(d);if(c?.length){c.forEach(h=>h.value=h.decode(n.decode?.toLocaleLowerCase())),Y(c,Object.freeze(n.canvas.nativeElement),n.resultsPanel.nativeElement,n.canvasStyles);const S=()=>{n.eventEmit(c),n.dataForResize=c};e instanceof HTMLImageElement&&(t(!0),S(),Z(n.vibrate),U(n.isBeep)),e instanceof HTMLVideoElement&&(S(),Z(n.vibrate),U(n.isBeep))}else t(!1),$(n.resultsPanel.nativeElement),n.dataForResize=c}else console.error("ngx-scanner-qrcode wasm is not found!"),t(!1)})()}eventEmit(e=!1){!1!==e&&this.data.next(e||{data:null}),!1!==e&&this.event.emit(e||{data:null})}requestAnimationFrame(e=0){this.rAF_ID=setInterval(()=>{this.video.nativeElement.readyState===this.video.nativeElement.HAVE_ENOUGH_DATA&&(e=0,this.drawImage(this.video.nativeElement))},e||this.fps)}get isReady(){return this.ready}ngOnDestroy(){this.pause()}}return i.\u0275fac=function(e){return new(e||i)(r.Y36(r.Qsj))},i.\u0275cmp=r.Xpm({type:i,selectors:[["ngx-scanner-qrcode"]],viewQuery:function(e,t){if(1&e&&(r.Gf(ne,5),r.Gf(oe,5),r.Gf(ie,5)),2&e){let n;r.iGM(n=r.CRH())&&(t.video=n.first),r.iGM(n=r.CRH())&&(t.canvas=n.first),r.iGM(n=r.CRH())&&(t.resultsPanel=n.first)}},hostAttrs:[1,"ngx-scanner-qrcode"],inputs:{src:"src",fps:"fps",vibrate:"vibrate",decode:"decode",isBeep:"isBeep",config:"config",constraints:"constraints",canvasStyles:"canvasStyles"},outputs:{event:"event"},exportAs:["scanner"],decls:6,vars:0,consts:[[1,"origin-overlay"],["resultsPanel",""],[1,"origin-canvas"],["canvas",""],["playsinline","",1,"origin-video"],["video",""]],template:function(e,t){1&e&&r._UZ(0,"div",0,1)(2,"canvas",2,3)(4,"video",4,5)},styles:[".ngx-scanner-qrcode{display:block;position:relative}.origin-overlay{width:100%;position:absolute}.origin-overlay span{z-index:2;color:red;text-align:left;position:absolute}.origin-overlay .qrcode-polygon{z-index:1;position:absolute}.origin-canvas{width:100%;position:absolute}.origin-video{width:100%;background-color:#262626}.qrcode-tooltip{z-index:3;position:absolute}.qrcode-tooltip:hover .qrcode-tooltip-temp{display:block;position:absolute}.qrcode-tooltip-temp{bottom:0;left:50%;padding:5px;color:#fff;text-align:left;display:none;max-width:450px;border-radius:5px;width:max-content;word-wrap:break-word;transform:translate(-50%);transform-style:preserve-3d;background-color:#000000d0;box-shadow:1px 1px 20px #000000e0}.qrcode-tooltip-temp .qrcode-tooltip-clipboard{cursor:pointer;margin-left:5px;fill:#fff}.qrcode-tooltip-temp .qrcode-tooltip-clipboard:active{fill:#afafaf}\n"],encapsulation:2}),i})(),fe=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({providers:[me]}),i})();var ye=g(300),ge=g(698),Re=g(884),Te=g(729);const Qe=["action"],_e=["selectDevice"];function Ae(i,o){if(1&i&&(r.TgZ(0,"option",6),r._uU(1),r.qZA()),2&i){const e=o.$implicit;r.Q6J("value",e.deviceId),r.xp6(1),r.Oqu(e.label)}}let Ee=(()=>{class i{constructor(e,t){this.router=e,this.textService=t,this.title="qr-code-reader"}ngAfterViewInit(){this.qrcodeComponent?.devices.pipe((0,ye.h)(e=>e.length>0),(0,ge.q)(1)).subscribe(e=>{const t=e.find(n=>n.label.includes("back"));t&&this.selectDevice&&(this.selectDevice.nativeElement.value=t.deviceId,this.selectDevice.nativeElement.dispatchEvent(new Event("change")))}),this.qrcodeComponent?.start()}onDetectQRCodeEvent(e,t){const n=e[0].value;n&&(t.pause(),this.textService.text=n,this.router.navigateByUrl("only-text"))}}return i.\u0275fac=function(e){return new(e||i)(r.Y36(Re.F0),r.Y36(Te.N))},i.\u0275cmp=r.Xpm({type:i,selectors:[["app-root"]],viewQuery:function(e,t){if(1&e&&(r.Gf(Qe,5),r.Gf(_e,5)),2&e){let n;r.iGM(n=r.CRH())&&(t.qrcodeComponent=n.first),r.iGM(n=r.CRH())&&(t.selectDevice=n.first)}},standalone:!0,features:[r.jDz],decls:7,vars:1,consts:[["for","select-device"],["id","select-device","autofocus","","tabindex","1","name","Selecionar c\xe2mera",3,"change"],["selectDevice",""],[3,"value",4,"ngFor","ngForOf"],[3,"event"],["action","scanner"],[3,"value"]],template:function(e,t){if(1&e){const n=r.EpF();r.TgZ(0,"label",0),r._uU(1,"Selecionar c\xe2mera:"),r.qZA(),r.TgZ(2,"select",1,2),r.NdJ("change",function(){r.CHM(n);const s=r.MAs(3),d=r.MAs(6);return r.KtG(d.playDevice(s.value))}),r.YNc(4,Ae,2,2,"option",3),r.qZA(),r.TgZ(5,"ngx-scanner-qrcode",4,5),r.NdJ("event",function(s){r.CHM(n);const d=r.MAs(6);return r.KtG(t.onDetectQRCodeEvent(s,d))}),r.qZA()}if(2&e){const n=r.MAs(6);r.xp6(4),r.Q6J("ngForOf",n.devices.value)}},dependencies:[q.ez,q.sg,fe,Ce]}),i})()}}]);