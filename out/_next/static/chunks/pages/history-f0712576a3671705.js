(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{3639:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/history",function(){return r(6819)}])},6541:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let i=r(8754),o=r(1757),s=r(5893),n=o._(r(7294)),a=i._(r(3935)),A=i._(r(7828)),l=r(7367),c=r(7903),d=r(4938);r(1997);let h=r(9953),u=i._(r(6663)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e,t,r,i,o,s,n){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function m(e){let[t,r]=n.version.split(".",2),i=parseInt(t,10),o=parseInt(r,10);return i>18||18===i&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,n.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:o,height:a,width:A,decoding:l,className:c,style:d,fetchPriority:h,placeholder:u,loading:g,unoptimized:p,fill:x,onLoadRef:w,onLoadingCompleteRef:j,setBlurComplete:b,setShowAltText:y,sizesInput:v,onLoad:C,onError:B,...E}=e;return(0,s.jsx)("img",{...E,...m(h),loading:g,width:A,height:a,decoding:l,"data-nimg":x?"fill":"1",className:c,style:d,sizes:o,srcSet:i,src:r,ref:(0,n.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(B&&(e.src=e.src),e.complete&&f(e,u,w,j,b,p,v))},[r,u,w,j,b,B,p,v,t]),onLoad:e=>{f(e.currentTarget,u,w,j,b,p,v)},onError:e=>{y(!0),"empty"!==u&&b(!0),B&&B(e)}})});function x(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,i),null):(0,s.jsx)(A.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,n.forwardRef)((e,t)=>{let r=(0,n.useContext)(h.RouterContext),i=(0,n.useContext)(d.ImageConfigContext),o=(0,n.useMemo)(()=>{let e=g||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:a,onLoadingComplete:A}=e,f=(0,n.useRef)(a);(0,n.useEffect)(()=>{f.current=a},[a]);let m=(0,n.useRef)(A);(0,n.useEffect)(()=>{m.current=A},[A]);let[w,j]=(0,n.useState)(!1),[b,y]=(0,n.useState)(!1),{props:v,meta:C}=(0,l.getImgProps)(e,{defaultLoader:u.default,imgConf:o,blurComplete:w,showAltText:b});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{...v,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:f,onLoadingCompleteRef:m,setBlurComplete:j,setShowAltText:y,sizesInput:e.sizes,ref:t}),C.priority?(0,s.jsx)(x,{isAppRouter:!r,imgAttributes:v}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(1997);let i=r(9919),o=r(7903);function s(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,A,l,{src:c,sizes:d,unoptimized:h=!1,priority:u=!1,loading:g,className:f,quality:m,width:p,height:x,fill:w=!1,style:j,overrideSrc:b,onLoad:y,onLoadingComplete:v,placeholder:C="empty",blurDataURL:B,fetchPriority:E,layout:S,objectFit:k,objectPosition:Q,lazyBoundary:I,lazyRoot:P,...N}=e,{imgConf:M,showAltText:D,blurComplete:R,defaultLoader:_}=t,U=M||o.imageConfigDefault;if("allSizes"in U)a=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t);a={...U,allSizes:e,deviceSizes:t}}if(void 0===_)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let z=N.loader||_;delete N.loader,delete N.srcSet;let T="__next_img_default"in z;if(T){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=z;z=t=>{let{config:r,...i}=t;return e(i)}}if(S){"fill"===S&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!d&&(d=t)}let F="",L=n(p),G=n(x);if("object"==typeof(r=c)&&(s(r)||void 0!==r.src)){let e=s(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(A=e.blurWidth,l=e.blurHeight,B=B||e.blurDataURL,F=e.src,!w){if(L||G){if(L&&!G){let t=L/e.width;G=Math.round(e.height*t)}else if(!L&&G){let t=G/e.height;L=Math.round(e.width*t)}}else L=e.width,G=e.height}}let O=!u&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:F)||c.startsWith("data:")||c.startsWith("blob:"))&&(h=!0,O=!1),a.unoptimized&&(h=!0),T&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(h=!0),u&&(E="high");let W=n(m),Y=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:Q}:{},D?{}:{color:"transparent"},j),J=R||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:L,heightInt:G,blurWidth:A,blurHeight:l,blurDataURL:B||"",objectFit:Y.objectFit})+'")':'url("'+C+'")',K=J?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},H=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:s,sizes:n,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:A,kind:l}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,n),c=A.length-1;return{sizes:n||"w"!==l?n:"100vw",srcSet:A.map((e,i)=>a({config:t,src:r,quality:s,width:e})+" "+("w"===l?e:i+1)+l).join(", "),src:a({config:t,src:r,quality:s,width:A[c]})}}({config:a,src:c,unoptimized:h,width:L,quality:W,sizes:d,loader:z});return{props:{...N,loading:O?"lazy":g,fetchPriority:E,width:L,height:G,decoding:"async",className:f,style:{...Y,...K},sizes:H.sizes,srcSet:H.srcSet,src:b||H.src},meta:{unoptimized:h,priority:u,placeholder:C,fill:w}}}},9919:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:s,objectFit:n}=e,a=i?40*i:t,A=o?40*o:r,l=a&&A?"viewBox='0 0 "+a+" "+A+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5666:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return A},getImageProps:function(){return a}});let i=r(8754),o=r(7367),s=r(6541),n=i._(r(6663));function a(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let A=s.Image},6663:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},9070:function(e,t,r){"use strict";r.d(t,{Ey:function(){return A},Oq:function(){return o},Qq:function(){return n},Tw:function(){return s},W5:function(){return a},m9:function(){return l}});var i=r(5893);let o=()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 cursor-pointer drop-shadow-md hover:stroke-[#ff2828]",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})}),s=()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"black",className:"size-6 cursor-pointer drop-shadow-md hover:stroke-[#ff2828]",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})}),n=()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})}),a=()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"})}),A=()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"})}),l=()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})})},6592:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var i=r(5893),o=r(9008),s=r.n(o),n=r(1664),a=r.n(n),A=r(7294),l=r(9070),c=()=>{let[e,t]=(0,A.useState)(!1),r=()=>{t(!e)},o=[{id:1,text:"Homepage",path:"/"},{id:2,text:"About Us",path:"/aboutus"},{id:3,text:"History",path:"/history"},{id:4,text:"Prospective Members",path:"/prospectiverowers"}];return(0,i.jsxs)("nav",{className:"absolute flex justify-center items-center h-[4rem] w-full my-3 text-white z-50",children:[(0,i.jsx)(a(),{href:"/",className:"absolute left-3",children:(0,i.jsx)("img",{src:"/assets/SBU Crew Logo Transparent.png",className:"h-[3.6rem]",alt:"SBUCrew"})}),(0,i.jsx)(()=>(0,i.jsx)("ul",{className:"hidden md:flex justify-center",children:o.map(e=>(0,i.jsx)(a(),{href:e.path,className:"p-5 text-[#fffbfb] font-light hover:underline underline-offset-4 hover:text-[#ff2828]",children:e.text},e.id))}),{}),(0,i.jsx)(()=>(0,i.jsx)("div",{onClick:r,className:"block mr-10 ml-auto md:hidden z-50",children:e?(0,i.jsx)(l.Tw,{}):(0,i.jsx)(l.Oq,{})}),{}),(0,i.jsx)(()=>(0,i.jsx)("div",{children:(0,i.jsx)("ul",{className:e?"flex flex-col fixed md:hidden right-0 top-0 w-[40%] h-full bg-white transition ease-in-out duration-500":"flex flex-col w-[40%] left-[100%] transition ease-in-out duration-500 fixed top-0 bottom-0",children:o.map(e=>(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)(a(),{href:e.path,className:"p-8 text-black hover:underline underline-offset-4 hover:text-[#ff2828]",children:e.text}),(0,i.jsx)("hr",{})]},e.id))})}),{})]})};function d(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("title",{children:"Stony Brook Rowing"})]}),(0,i.jsx)(c,{}),e.children]})}},6819:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var i=r(5893),o=r(6592),s=r(2121),n=r.n(s),a=r(5675),A=r.n(a),l={src:"/_next/static/media/historypic1.c61229a9.jpg",height:400,width:599,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAnA//xAAbEAACAwADAAAAAAAAAAAAAAABAwIEEQAFE//aAAgBAQABPwCp3DGVjb8FBqmrEcGDGsEZc//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:5},c={src:"/_next/static/media/SBU Crew 1967.c48be9f9.jpeg",height:492,width:868,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAArAf/xAAcEAABAwUAAAAAAAAAAAAAAAABAAIRAwUhNOH/2gAIAQEAAT8AFjqBm8/AmC3q/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:5},d={src:"/_next/static/media/NYStatesRegatta2023Boats.546937f1.jpg",height:3045,width:4752,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKYUv//EABwQAAICAgMAAAAAAAAAAAAAAAECAxIRIQAEFP/aAAgBAQABPwBWlvH7GTtPgrdgVbQtnR5//8QAGREBAAIDAAAAAAAAAAAAAAAAAgABAyGR/9oACAECAQE/AKyM6prs/8QAFxEBAQEBAAAAAAAAAAAAAAAAAgEAkf/aAAgBAwEBPwBgJW0Hm//Z",blurWidth:8,blurHeight:5},h={src:"/_next/static/media/BraxtonRegatta2023.9bb5234c.jpg",height:3308,width:5330,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAggr/xAAcEAABBAMBAAAAAAAAAAAAAAAEAQIDEQASEyP/2gAIAQEAAT8AgLJaESIkicCGejaq9c//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQJCYf/aAAgBAgEBPwCNlp//xAAYEQEAAwEAAAAAAAAAAAAAAAABAAISUf/aAAgBAwEBPwCyuV5P/9k=",blurWidth:8,blurHeight:5},u=r(7294);function g(){let[e,t]=(0,u.useState)("bg-white"),r=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let e=300;document.addEventListener("scroll",function(){r.current&&(e=r.current.getBoundingClientRect().y),e<350?t("bg-[#c84444]"):t("bg-white")})},[]),(0,i.jsxs)(o.Z,{children:[(0,i.jsx)("header",{className:"".concat(n().landing," h-[75vh] lg:h-[93vh]")}),(0,i.jsx)("main",{className:"flex min-h-screen flex-col text-lg 2xl:text-xl font-lora fade-in-element transition-colors ease-out duration-[1000ms] ".concat(e),children:(0,i.jsxs)("div",{className:"w-[85%] xl:w-[68%] mx-auto my-5 ",children:[(0,i.jsx)(()=>(0,i.jsxs)("div",{className:"transition-opacity ease-in-linear duration-[1000ms] ".concat("bg-white"===e?"opacity-100":"opacity-0"),children:[(0,i.jsx)("h2",{className:"font-medium text-4xl italic",children:"The Varsity Years"}),(0,i.jsxs)("div",{className:"flex flex-row flex-wrap lg:gap-10 mb-3",children:[(0,i.jsxs)("div",{className:"xl:flex flex-col lg:w-[45%]",children:[(0,i.jsx)("hr",{className:"border-black mb-3"}),(0,i.jsx)("p",{children:"The beginnings of Stony Brook University's Crew program pre-date the creation of the Stony Brook Campus. The inception of Crew at what was then the State University of New York, Long Island Center took place while the campus was still located in Oyster Bay."}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:'According to alumni Pat Crean (1961), the team was founded as a result of a simple letter from Mr. Allan Borghard. Written on July 9th, 1958, the letter suggested the formation of a crew program at what was then simply called "State University", and Borghard offered himself as the team\'s first coach [1].'})]}),(0,i.jsx)("div",{className:"flex-1 self-center flex justify-center",children:(0,i.jsx)(A(),{src:l,alt:"Black and White Photo of a SBU Crew member holding an oar.",className:"object-cover rounded-sm my-3 transition-opacity ease-in-linear duration-[1000ms]"})})]}),(0,i.jsxs)("p",{children:["And from such humble origins came humble beginnings. The team at the time only had one shell, donated by Non-Pariel Rowing on the Harlem River. To complicate things further, the shell was damaged during transport, forcing the team's very first act to be the repair of its only boat [1].",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"By spring 1959 the program at Oyster Bay had two crews and one shell. Thanks to a timely donation by Rutgers University Crew, a second shell was added, only to become the only shell after the demise of the team's first. Regardless, the team persevered and on April 4th competed for the first time, a landslide defeat at the hands of St. John's University. Despite the loss, State University approved further collegiate competition and competed yet again, dropping a decision against Iona College. A third match showed the team's potential, as the team finished in a \"dead heat\" against Clark University. To cap the season, the campus at Oyster Bay began the first annual North Shore Invitational Regatta [1].",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Crew continued to develop as the campus was relocated to Stony Brook. According to archived articles from the New York Times the team consistently placed in the top 3 at the Metropolitan Championships, often coming as close as a half a length from the win, as it did in 1968 against Iona College [2]. The team peaked in the late 1970's, earning the Metropolitan Championship win in 1976. While the varsity program disbanded by the end of the 1970's due to inadequate means to support, the program raised three to the Stony Brook Athletic Hall of Fame: John Brisson Jr. (1976), Jonathan Cayle (1976), and Denise Logan-Heuser (1977)."]}),(0,i.jsxs)("div",{className:" bg-[#f5f5f57d] rounded-b-sm w-[85%] mx-auto my-3",children:[(0,i.jsx)(A(),{src:c,alt:"Group Photo of the 1967 SBU Rowing team.",className:"w-full transition-opacity ease-in-linear duration-[1000ms]"}),(0,i.jsx)("figcaption",{className:"text-center italic text-base text-gray-900",children:"The 1967 Stony Brook Crew"})]})]}),{}),(0,i.jsx)(()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{ref:r,className:"font-lato font-light text-white transition-opacity ease-in-out duration-[1000ms] ".concat("bg-[#c84444]"===e?"opacity-100":"opacity-0"),children:[(0,i.jsx)("h2",{className:"font-medium text-4xl font-lora italic text-white",children:"The Club Years"}),(0,i.jsxs)("div",{className:"lg:flex flex-row flex-wrap gap-5 mb-3",children:[(0,i.jsxs)("div",{className:"flex-1",children:[(0,i.jsx)("hr",{className:"border-white mb-3"}),(0,i.jsxs)("p",{children:["While the tenure of crew as an official varsity program at Stony Brook ended in the 1970's, the team did not cease to exist for long. Thanks to the efforts of such alumni as Michael Chang (2002), crew re-emerged at Stony Brook in the late 1990's.",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),"The Stony Brook Crew program has certainly seen it's share of ups and downs. Maintaining adequate numbers of rowers to remain competitive, hiring and retaining coaches and even such basic things as finding places to row became uncertain. After the 2009-2010 season, the Stony Brook team lost the majority of it's rowers as well as it's e-board."]})]}),(0,i.jsx)("div",{className:"flex-1 self-center ",children:(0,i.jsx)(A(),{src:d,alt:"The sterns of 3 racing shells with a blue sky behind them.",className:"object-cover rounded-lg drop-shadow-element"})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:["Still, the Seawolves refused to go quietly into the night. A new board of inexperienced yet determined rowers banded together and fought to keep the team alive. They sought out and hired three amazing new coaches, they managed to recruit a large number of enthusiastic novice men and women and are currently rowing every morning at 5:15am on the beautiful water of Stony Brook Harbor.",(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),"In 2015, the team moved from Stony Brook Harbor to the Port Jefferson Yacht Club where they currently reside."]}),(0,i.jsxs)("div",{className:"my-5",children:[(0,i.jsx)(A(),{src:h,alt:"Stony Brook Crew members walking away, surrounded by fall-colored leaves and other regatta goers.",className:"w-full xl:w-[97%] mx-auto rounded-2xl drop-shadow-element"}),(0,i.jsx)("figcaption",{className:"text-center text-lg font-lato font-light text-[#dedede] italic",children:"Bill Braxton Memorial Regatta, Fall 2023"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-2xl font-lora",children:"References"}),(0,i.jsxs)("ol",{className:"text-lg",children:[(0,i.jsx)("li",{children:'[1] "The History of Stony Brook Crew" The Founders Group, Stony Brook Alumni Association.'}),(0,i.jsxs)("li",{children:["[2] ",(0,i.jsx)("a",{href:"https://www.nytimes.com/1968/05/05/archives/iona-eight-keeps-met-rowing-title-scores-by-halflength-over-stony.html",target:"blank",className:"underline hover:text-[#5eb7ff]",children:'"Iona Eight Keeps MET Rowing Title; Scores Half-Length Win Over Stony Brook in Race Here"'})," The New York Times."]})]})]})]})}),{})]})})]})}},2121:function(e){e.exports={landing:"history_landing__b2XoS"}},5675:function(e,t,r){e.exports=r(5666)}},function(e){e.O(0,[996,888,774,179],function(){return e(e.s=3639)}),_N_E=e.O()}]);