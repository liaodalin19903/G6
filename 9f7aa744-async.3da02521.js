(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["9f7aa744"],{b7514e8e:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return s;}});var o=t("29285da3"),r=t("78b3ac91"),a=t("aa40c330"),s=function(){var e=(0,o.useParams)().id,n=(0,o.useDemo)(e),t=(0,a.useRenderer)({id:e,component:n.component,renderOpts:n.renderOpts}).canvasRef,s=n||{},u=s.component,i=s.renderOpts,d=(0,o.useLiveDemo)(e),l=d.node,c=d.setSource,f=d.error,m=d.loading,v=l||(null!=i&&i.renderer?(0,r.createElement)("div",{ref:t}):u&&(0,r.createElement)(u));return(0,r.useEffect)(function(){var e=function(e){"dumi.liveDemo.setSource"===e.data.type&&c(e.data.value);};return window.addEventListener("message",e),function(){return window.removeEventListener("message",e);};},[c]),(0,r.useEffect)(function(){!m&&(f||l)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:f}});},[f,l,m]),v;};}}]);
//# sourceMappingURL=9f7aa744-async.3da02521.js.map