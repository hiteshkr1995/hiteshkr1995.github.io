(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a.n(i),l=a(9),s=a.n(l),r=(a(18),a(3)),c=a(10),o=a(11),d=a(1),h=a(13),g=a(12),u=a(6),b=a.n(u),m=(a(29),a(0)),x={image:{original:[],compressed:[]},width:"",height:"",extention:"",quality:"",isFileLoaded:!1},p=[{lable:1,value:1},{lable:.9,value:.9},{lable:.8,value:.8},{lable:.7,value:.7},{lable:.6,value:.6},{lable:.5,value:.5},{lable:.4,value:.4},{lable:.3,value:.3},{lable:.2,value:.2},{lable:.1,value:.1},{lable:0,value:0}],j=[{lable:"JPG, JPEG",value:"image/jpeg"},{lable:"PNG",value:"image/png"},{lable:"SVG",value:"image/svg+xml"},{lable:"TIF, TIFF",value:"image/tiff"},{lable:"BMP",value:"image/bmp"},{lable:"GIF",value:"image/gif"},{lable:"ICO",value:"image/vnd.microsoft.icon"},{lable:"WEBP",value:"image/webp"}],f=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state=x,i.fileInput=n.a.createRef(),i.previewText=n.a.createRef(),i.previewImg=n.a.createRef(),i.handleDragEnter=i.handleDragEnter.bind(Object(d.a)(i)),i.handleDragLeave=i.handleDragLeave.bind(Object(d.a)(i)),i.handleDragOver=i.handleDragOver.bind(Object(d.a)(i)),i.handleDrop=i.handleDrop.bind(Object(d.a)(i)),i.handleClick=i.handleClick.bind(Object(d.a)(i)),i.handleFileChange=i.handleFileChange.bind(Object(d.a)(i)),i.handleWidthChange=i.handleWidthChange.bind(Object(d.a)(i)),i.handleHeightChange=i.handleHeightChange.bind(Object(d.a)(i)),i.handleApplyCick=i.handleApplyCick.bind(Object(d.a)(i)),i.handleExtentionChange=i.handleExtentionChange.bind(Object(d.a)(i)),i.handleQualityChange=i.handleQualityChange.bind(Object(d.a)(i)),i.handleDownloadClick=i.handleDownloadClick.bind(Object(d.a)(i)),i.handleResetCick=i.handleResetCick.bind(Object(d.a)(i)),i}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Free Image Commression Tool"}},{key:"handleDragEnter",value:function(e){return e.preventDefault(),e.stopPropagation(),e.target.style.opacity=.5,!1}},{key:"handleDragLeave",value:function(e){return e.preventDefault(),e.stopPropagation(),e.target.style.opacity="",!1}},{key:"handleDragOver",value:function(e){return e.preventDefault(),e.stopPropagation(),e.dataTransfer.items.length>1&&(e.dataTransfer.dropEffect="none"),!1}},{key:"handleDrop",value:function(e){return e.preventDefault(),e.stopPropagation(),e.target.style.opacity="",this.fileInput.current.files=e.dataTransfer.files,this.handleFileChange(),!1}},{key:"handleClick",value:function(e){this.fileInput.current.click()}},{key:"handleFileChange",value:function(){var e=this.fileInput.current.files[0];if(this.setState(x),e){if(e.type.match("image.*"))return this.compress(e),!0;var t=e.name.slice((Math.max(0,e.name.lastIndexOf("."))||1/0)+1);t=t||"Unknown",b.a.fire({position:"top-end",icon:"error",title:"".concat(t," not supported"),showConfirmButton:!1,timer:1500}),this.fileInput.current.value=null}return this.previewText.current.hidden=!1,this.previewImg.current.src="",this.previewImg.current.hidden=!0,!1}},{key:"compress",value:function(e){var t=URL.createObjectURL(e),a=this,i=new Image;i.src=t,i.onerror=function(){URL.revokeObjectURL(this.src),a.setState(x),b.a.fire({position:"top-end",icon:"error",title:"Cannot load image",showConfirmButton:!1,timer:1500})},i.onload=function(){a.setState((function(t,a){return{image:Object(r.a)(Object(r.a)({},t.image),{},{original:{file:e,width:i.naturalWidth,height:i.naturalHeight}}),width:""===t.width?i.naturalWidth:t.width,height:""===t.height?i.naturalHeight:t.height,extention:""===t.extention?e.type:t.extention,quality:""===t.quality?.3:t.quality,isFileLoaded:!0}}));var t=document.createElement("canvas");t.width=a.state.width,t.height=a.state.height,t.getContext("2d").drawImage(i,0,0,a.state.width,a.state.height),t.toBlob((function(t){t.size<e.size&&(e=a.blobToFile(t)),a.previewText.current.hidden=!0,a.previewImg.current.src=URL.createObjectURL(e),a.previewImg.current.hidden=!1,a.setState((function(t,i){return{image:Object(r.a)(Object(r.a)({},t.image),{},{compressed:{file:e,width:a.state.width,height:a.state.height}})}}))}),a.state.extention,a.state.quality)}}},{key:"formatBytes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=1e3,i=t<0?0:t,n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],l=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,l)).toFixed(i))+" "+n[l]}},{key:"blobToFile",value:function(e){return new File([e],this.state.image.original.file.name,{type:e.type})}},{key:"handleWidthChange",value:function(e){if(e.target.value>=1&&e.target.value<=9999){var t=this.ratio();this.setState({width:parseInt(e.target.value),height:Math.round(e.target.value/t)})}}},{key:"handleHeightChange",value:function(e){if(e.target.value>=1&&e.target.value<=9999){var t=this.ratio();this.setState({height:parseInt(e.target.value),width:Math.round(e.target.value*t)})}}},{key:"ratio",value:function(){return this.state.image.original.width/this.state.image.original.height}},{key:"handleApplyCick",value:function(){this.state.width&&this.state.height&&this.compress(this.fileInput.current.files[0])}},{key:"handleExtentionChange",value:function(e){this.setState({extention:e.target.value})}},{key:"handleQualityChange",value:function(e){this.setState({quality:parseFloat(e.target.value)})}},{key:"handleDownloadClick",value:function(){var e=document.createElement("a");e.href=URL.createObjectURL(this.state.image.compressed.file),e.download="",e.click()}},{key:"handleResetCick",value:function(){this.setState({width:this.state.image.original.width,height:this.state.image.original.height,extention:this.state.image.original.file.type,quality:.3})}},{key:"render",value:function(){var e,t,a,i,l;l=window.screen.width<768?"Tap to select Image":"Drag or Select image";var s=this.state.image.original.file,r=this.state.image.compressed.file,c="--";return s&&r&&(c=(r.size/s.size*100-100).toFixed(2)+"%"),Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsxs)("div",{className:"flex flex-col text-center w-full",children:[Object(m.jsx)("h1",{className:"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900",children:"Free Image Commression Tool"}),Object(m.jsx)("p",{className:"lg:w-2/3 mx-auto leading-relaxed text-base",children:"With the below compression tool you can compress any image at minimum size. Please prefer JPEG in customization for better result."}),Object(m.jsx)("h2",{class:"text-xs text-red-500 tracking-widest font-medium title-font mb-1",children:"The best part about the online compressor is that your image is compressed on your device, which means it is not stored on any server. Please feel free to use this tool."})]}),Object(m.jsx)("div",{className:"container px-5 pt-24 mx-auto",children:Object(m.jsxs)("div",{className:"grid md:grid-cols-3 gap-4 -mx-4 -mb-10 text-center",children:[Object(m.jsxs)("div",{className:"md:col-span-2 mb-10 px-4",children:[Object(m.jsxs)("div",{draggable:"true",onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop,onClick:this.handleClick,className:"drag-select cursor-pointer no-select-text h-96 flex flex-wrap content-center justify-center border-dashed border-4 rounded-2xl overflow-hidden",children:[Object(m.jsx)("input",{ref:this.fileInput,type:"file",name:"image",accept:"image/*",onChange:this.handleFileChange,hidden:!0}),Object(m.jsx)("span",{ref:this.previewText,className:"font-black text-2xl text-red-600",children:l}),Object(m.jsx)("img",{ref:this.previewImg,alt:"content",className:"object-contain object-center h-full w-full",hidden:!0})]}),Object(m.jsxs)("div",{className:"md:flex mt-5",children:[Object(m.jsxs)("span",{className:"title-font font-medium text-2xl text-gray-900",children:["(",s?this.formatBytes(s.size):"--","/",r?this.formatBytes(r.size):"--",") = ",c]}),Object(m.jsx)("button",{type:"button",disabled:!this.state.isFileLoaded,onClick:this.handleDownloadClick,className:"flex ml-auto text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded",children:"Download"})]})]}),Object(m.jsxs)("div",{className:"md:col-span-1 mb-10 px-4",children:[Object(m.jsx)("h2",{className:"title-font text-2xl font-medium text-gray-900 mt-6 mb-3",children:"Customization"}),Object(m.jsxs)("div",{className:"flex flex-wrap -m-2",children:[Object(m.jsx)("div",{className:"p-2 w-1/2",children:Object(m.jsxs)("div",{className:"relative",children:[Object(m.jsx)("label",{htmlFor:"width",className:"leading-7 float-left text-sm text-gray-600",children:"Width"}),Object(m.jsx)("input",{type:"number",id:"width",name:"width",value:this.state.width,onChange:this.handleWidthChange,disabled:!this.state.isFileLoaded,className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]})}),Object(m.jsx)("div",{className:"p-2 w-1/2",children:Object(m.jsxs)("div",{className:"relative",children:[Object(m.jsx)("label",{htmlFor:"height",className:"leading-7 float-left text-sm text-gray-600",children:"Height"}),Object(m.jsx)("input",{type:"number",id:"height",name:"height",value:this.state.height,onChange:this.handleHeightChange,disabled:!this.state.isFileLoaded,className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]})}),Object(m.jsx)("div",{className:"p-2 w-1/2",children:Object(m.jsxs)("div",{className:"relative",children:[Object(m.jsx)("label",{htmlFor:"extention",className:"leading-7 float-left text-sm text-gray-600",children:"Extentions"}),Object(m.jsxs)("select",{name:"extention",id:"extention",value:this.state.extention,onChange:this.handleExtentionChange,disabled:!this.state.isFileLoaded,className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",children:[Object(m.jsx)("option",{value:"",disabled:this.state.isFileLoaded,children:"Select"}),j.map((function(e,t){return Object(m.jsx)("option",{value:e.value,children:e.lable},t)})),";"]})]})}),Object(m.jsx)("div",{className:"p-2 w-1/2",children:Object(m.jsxs)("div",{className:"relative",children:[Object(m.jsx)("label",{htmlFor:"quality",className:"leading-7 float-left text-sm text-gray-600",children:"Quality"}),Object(m.jsxs)("select",{name:"quality",id:"quality",value:this.state.quality,onChange:this.handleQualityChange,disabled:!this.state.isFileLoaded,className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",children:[Object(m.jsx)("option",{value:"",disabled:this.state.isFileLoaded,children:"Select"}),p.map((function(e,t){return Object(m.jsx)("option",{value:e.value,children:e.lable},t)})),";"]})]})})]}),Object(m.jsx)("button",{disabled:!this.state.isFileLoaded,onClick:this.handleResetCick,className:"inline float-left mt-6 text-white bg-gray-500 border-0 py-2 px-5 focus:outline-none hover:bg-gray-600 rounded",children:"Reset"}),Object(m.jsx)("button",{disabled:!this.state.isFileLoaded,onClick:this.handleApplyCick,className:"inline float-right mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded",children:"Apply"})]})]})}),Object(m.jsx)("div",{className:"container px-5 pt-24 mx-auto",children:Object(m.jsxs)("div",{className:"md:flex md:flex-wrap -mx-4 -mb-12 text-center",children:[Object(m.jsxs)("div",{className:"md:w-1/2 mb-10 px-4",children:[Object(m.jsx)("span",{className:"title-font text-xl font-medium text-gray-900 mt-6 mb-3",children:"Original"}),Object(m.jsxs)("div",{className:"flex border-t border-gray-200 py-2",children:[Object(m.jsx)("span",{className:"text-gray-500",children:"Name"}),Object(m.jsx)("span",{className:"ml-auto text-gray-900",children:s?s.name:"--"})]}),Object(m.jsxs)("div",{className:"flex border-t border-gray-200 py-2",children:[Object(m.jsx)("span",{className:"text-gray-500",children:"Width * Height"}),Object(m.jsxs)("span",{className:"ml-auto text-gray-900",children:[null!==(e=this.state.image.original.width)&&void 0!==e?e:"--"," * ",null!==(t=this.state.image.original.height)&&void 0!==t?t:"--"]})]}),Object(m.jsxs)("div",{className:"flex border-t border-gray-200 py-2",children:[Object(m.jsx)("span",{className:"text-gray-500",children:"Size"}),Object(m.jsx)("span",{className:"ml-auto text-gray-900",children:s?this.formatBytes(s.size):"--"})]}),Object(m.jsxs)("div",{className:"flex border-t border-gray-200 py-2",children:[Object(m.jsx)("span",{className:"text-gray-500",children:"MIME Type"}),Object(m.jsx)("span",{className:"ml-auto text-gray-900",children:s?s.type:"--"})]}),Object(m.jsxs)("div",{className:"flex border-t border-b mb-6 border-gray-200 py-2",children:[Object(m.jsx)("span",{className:"text-gray-500",children:"Last Modified"}),Object(m.jsx)("span",{className:"ml-auto text-gray-900",children:s?s.lastModifiedDate.toLocaleString():"--"})]})]}),Object(m.jsxs)("div",{className:"md:w-1/2 mb-10 px-4",children:[Object(m.jsx)("span",{className:"title-font text-xl font-medium text-gray-900 mt-6 mb-3",children:"Compressed"}),Object(m.jsxs)("div",{className:"flex border-t border-gray-200 py-2",children:[Object(m.jsx)("span",{className:"text-gray-500",children:"Name"}),Object(m.jsx)("span",{className:"ml-auto text-gray-900",children:r?r.name:"--"})]}),Object(m.jsxs)("div",{className:"flex border-t border-gray-200 py-2",children:[Object(m.jsx)("span",{className:"text-gray-500",children:"Width * Height"}),Object(m.jsxs)("span",{className:"ml-auto text-gray-900",children:[null!==(a=this.state.image.compressed.width)&&void 0!==a?a:"--"," * ",null!==(i=this.state.image.compressed.height)&&void 0!==i?i:"--"]})]}),Object(m.jsxs)("div",{className:"flex border-t border-gray-200 py-2",children:[Object(m.jsx)("span",{className:"text-gray-500",children:"Size"}),Object(m.jsx)("span",{className:"ml-auto text-gray-900",children:r?this.formatBytes(r.size):"--"})]}),Object(m.jsxs)("div",{className:"flex border-t border-gray-200 py-2",children:[Object(m.jsx)("span",{className:"text-gray-500",children:"MIME Type"}),Object(m.jsx)("span",{className:"ml-auto text-gray-900",children:r?r.type:"--"})]}),Object(m.jsxs)("div",{className:"flex border-t border-b mb-6 border-gray-200 py-2",children:[Object(m.jsx)("span",{className:"text-gray-500",children:"Last Modified"}),Object(m.jsx)("span",{className:"ml-auto text-gray-900",children:r?r.lastModifiedDate.toLocaleString():"--"})]})]})]})})]})}}]),a}(n.a.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),l(e),s(e)}))};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),y()}},[[31,1,2]]]);
//# sourceMappingURL=main.aab4da99.chunk.js.map