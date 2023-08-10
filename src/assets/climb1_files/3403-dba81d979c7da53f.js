"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3403],{33403:function(e,t,o){o.d(t,{mh:function(){return D},D5:function(){return C},Jx:function(){return R},jf:function(){return I},Hw:function(){return U}});var n=o(67294);const r=n.createContext(null);function s(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function a(e,t){const o=t.viewState||t;let n=!1;if("longitude"in o&&"latitude"in o){const t=e.center;e.center=new t.constructor(o.longitude,o.latitude),n=n||t!==e.center}if("zoom"in o){const t=e.zoom;e.zoom=o.zoom,n=n||t!==e.zoom}if("bearing"in o){const t=e.bearing;e.bearing=o.bearing,n=n||t!==e.bearing}if("pitch"in o){const t=e.pitch;e.pitch=o.pitch,n=n||t!==e.pitch}return o.padding&&!e.isPaddingEqual(o.padding)&&(n=!0,e.padding=o.padding),n}const i=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function l(e){if(!e)return null;if("string"===typeof e)return e;if("toJS"in e&&(e=e.toJS()),!e.layers)return e;const t={};for(const n of e.layers)t[n.id]=n;const o=e.layers.map((e=>{const o=t[e.ref];let n=null;if("interactive"in e&&(n={...e},delete n.interactive),o){n=n||{...e},delete n.ref;for(const e of i)e in o&&(n[e]=o[e])}return n||e}));return{...e,layers:o}}function c(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let o=0;o<e.length;o++)if(!c(e[o],t[o]))return!1;return!0}if(Array.isArray(t))return!1;if("object"===typeof e&&"object"===typeof t){const o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;for(const r of o){if(!t.hasOwnProperty(r))return!1;if(!c(e[r],t[r]))return!1}return!0}return!1}var u=o(83454);const d={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},p={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},f={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},m=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],h=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class g{constructor(e,t,o){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=e=>{const t=this.props[f[e.type]];t&&t(e)},this._onPointerEvent=e=>{"mousemove"!==e.type&&"mouseout"!==e.type||this._updateHover(e);const t=this.props[d[e.type]];if(t){if(this.props.interactiveLayerIds&&"mouseover"!==e.type&&"mouseout"!==e.type){const t=this._hoveredFeatures||this._map.queryRenderedFeatures(e.point,{layers:this.props.interactiveLayerIds});e.features=t}t(e),delete e.features}},this._onCameraEvent=e=>{if(!this._internalUpdate){const t=this.props[p[e.type]];t&&t(e)}e.type in this._deferredEvents&&(this._deferredEvents[e.type]=!1)},this._MapClass=e,this.props=t,this._initialize(o)}get map(){return this._map}get transform(){return this._renderTransform}setProps(e){const t=this.props;this.props=e;const o=this._updateSettings(e,t);o&&this._createShadowTransform(this._map);const n=this._updateSize(e),r=this._updateViewState(e,!0);this._updateStyle(e,t),this._updateStyleComponents(e,t),this._updateHandlers(e,t),(o||n||r&&!this._map.isMoving())&&this.redraw()}static reuse(e,t){const o=g.savedMaps.pop();if(!o)return null;const n=o.map,r=n.getContainer();for(t.className=r.className;r.childNodes.length>0;)t.appendChild(r.childNodes[0]);n._container=t,o.setProps({...e,styleDiffing:!1}),n.resize();const{initialViewState:s}=e;return s&&(s.bounds?n.fitBounds(s.bounds,{...s.fitBoundsOptions,duration:0}):o._updateViewState(s,!1)),n.isStyleLoaded()?n.fire("load"):n.once("styledata",(()=>n.fire("load"))),o}_initialize(e){const{props:t}=this,o={...t,...t.initialViewState,accessToken:t.mapboxAccessToken||y()||null,container:e,style:l(t.mapStyle)},n=o.initialViewState||o.viewState||o;if(Object.assign(o,{center:[n.longitude||0,n.latitude||0],zoom:n.zoom||0,pitch:n.pitch||0,bearing:n.bearing||0}),t.gl){const e=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=e,t.gl)}const r=new this._MapClass(o);n.padding&&r.setPadding(n.padding),t.cursor&&(r.getCanvas().style.cursor=t.cursor),this._createShadowTransform(r);const s=r._render;r._render=e=>{this._inRender=!0,s.call(r,e),this._inRender=!1};const a=r._renderTaskQueue.run;r._renderTaskQueue.run=e=>{a.call(r._renderTaskQueue,e),this._onBeforeRepaint()},r.on("render",(()=>this._onAfterRepaint()));const i=r.fire;r.fire=this._fireEvent.bind(this,i),r.on("resize",(()=>{this._renderTransform.resize(r.transform.width,r.transform.height)})),r.on("styledata",(()=>this._updateStyleComponents(this.props,{}))),r.on("sourcedata",(()=>this._updateStyleComponents(this.props,{})));for(const l in d)r.on(l,this._onPointerEvent);for(const l in p)r.on(l,this._onCameraEvent);for(const l in f)r.on(l,this._onEvent);this._map=r}recycle(){g.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_createShadowTransform(e){const t=function(e){const t=e.clone();return t.pixelsToGLUnits=e.pixelsToGLUnits,t}(e.transform);e.painter.transform=t,this._renderTransform=t}_updateSize(e){const{viewState:t}=e;if(t){const e=this._map;if(t.width!==e.transform.width||t.height!==e.transform.height)return e.resize(),!0}return!1}_updateViewState(e,t){if(this._internalUpdate)return!1;const o=this._map,n=this._renderTransform,{zoom:r,pitch:i,bearing:l}=n,c=o.isMoving();c&&(n.cameraElevationReference="sea");const u=a(n,{...s(o.transform),...e});if(c&&(n.cameraElevationReference="ground"),u&&t){const e=this._deferredEvents;e.move=!0,e.zoom||(e.zoom=r!==n.zoom),e.rotate||(e.rotate=l!==n.bearing),e.pitch||(e.pitch=i!==n.pitch)}return c||a(o.transform,e),u}_updateSettings(e,t){const o=this._map;let n=!1;for(const r of m)r in e&&!c(e[r],t[r])&&(n=!0,o[`set${r[0].toUpperCase()}${r.slice(1)}`](e[r]));return n}_updateStyle(e,t){if(e.cursor!==t.cursor&&(this._map.getCanvas().style.cursor=e.cursor),e.mapStyle!==t.mapStyle){const t={diff:e.styleDiffing};return"localIdeographFontFamily"in e&&(t.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(l(e.mapStyle),t),!0}return!1}_updateStyleComponents(e,t){const o=this._map;let n=!1;return o.style.loaded()&&("light"in e&&!c(e.light,t.light)&&(n=!0,o.setLight(e.light)),"fog"in e&&!c(e.fog,t.fog)&&(n=!0,o.setFog(e.fog)),"terrain"in e&&!c(e.terrain,t.terrain)&&(e.terrain&&!o.getSource(e.terrain.source)||(n=!0,o.setTerrain(e.terrain)))),n}_updateHandlers(e,t){const o=this._map;let n=!1;for(const r of h){const s=e[r];c(s,t[r])||(n=!0,s?o[r].enable(s):o[r].disable())}return n}_updateHover(e){var t;const{props:o}=this;if(o.interactiveLayerIds&&(o.onMouseMove||o.onMouseEnter||o.onMouseLeave)){const r=e.type,s=(null===(t=this._hoveredFeatures)||void 0===t?void 0:t.length)>0;let a;if("mousemove"===r)try{a=this._map.queryRenderedFeatures(e.point,{layers:o.interactiveLayerIds})}catch(n){a=[]}else a=[];const i=a.length>0;!i&&s&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=a,i&&!s&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=r}else this._hoveredFeatures=null}_fireEvent(e,t,o){const n=this._map,r=n.transform,a="string"===typeof t?t:t.type;return"move"===a&&this._updateViewState(this.props,!1),a in p&&("object"===typeof t&&(t.viewState=s(r)),this._map.isMoving())?(n.transform=this._renderTransform,e.call(n,t,o),n.transform=r,n):(e.call(n,t,o),n)}_onBeforeRepaint(){const e=this._map;this._internalUpdate=!0;for(const o in this._deferredEvents)this._deferredEvents[o]&&e.fire(o);this._internalUpdate=!1;const t=this._map.transform;this._map.transform=this._renderTransform,this._onAfterRepaint=()=>{this._map.transform=t}}}function y(){let e=null;if("undefined"!==typeof location){const t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||u.env.MapboxAccessToken}catch(t){}try{e=e||u.env.REACT_APP_MAPBOX_ACCESS_TOKEN}catch(o){}return e}g.savedMaps=[];const v=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function _(e,t){if(!e)return null;const o=e.map,n={getMap:()=>o,getCenter:()=>e.transform.center,getZoom:()=>e.transform.zoom,getBearing:()=>e.transform.bearing,getPitch:()=>e.transform.pitch,getPadding:()=>e.transform.padding,getBounds:()=>e.transform.getBounds(),project:o=>e.transform.locationPoint(t.LngLat.convert(o)),unproject:o=>e.transform.pointLocation(t.Point.convert(o)),queryTerrainElevation:(t,n)=>{const r=o.transform;o.transform=e.transform;const s=o.queryTerrainElevation(t,n);return o.transform=r,s}};for(const r of function(e){const t=new Set;let o=e;for(;o;){for(const n of Object.getOwnPropertyNames(o))"_"!==n[0]&&"function"===typeof e[n]&&"fire"!==n&&"setEventedParent"!==n&&t.add(n);o=Object.getPrototypeOf(o)}return Array.from(t)}(o))r in n||v.includes(r)||(n[r]=o[r].bind(o));return n}var b="undefined"!==typeof document?n.useLayoutEffect:n.useEffect;const E=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];const L=n.createContext(null),x={minZoom:0,maxZoom:22,minPitch:0,maxPitch:60,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,mapStyle:{version:8,sources:{},layers:[]},styleDiffing:!0,projection:"mercator",renderWorldCopies:!0,onError:e=>console.error(e.error),RTLTextPlugin:"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"},S=(0,n.forwardRef)(((e,t)=>{const s=(0,n.useContext)(r),[a,i]=(0,n.useState)(null),l=(0,n.useRef)(),{current:c}=(0,n.useRef)({mapLib:null,map:null});(0,n.useEffect)((()=>{const t=e.mapLib;let n,r=!0;return Promise.resolve(t||o.e(2634).then(o.t.bind(o,6158,23))).then((t=>{if(r){if(t.Map||(t=t.default),!t||!t.Map)throw new Error("Invalid mapLib");if(!t.supported(e))throw new Error("Map is not supported by this browser");!function(e,t){for(const o of E)o in t&&(e[o]=t[o]);t.RTLTextPlugin&&e.getRTLTextPluginStatus&&"unavailable"===e.getRTLTextPluginStatus()&&e.setRTLTextPlugin(t.RTLTextPlugin,(e=>{e&&console.error(e)}),!1)}(t,e),e.reuseMaps&&(n=g.reuse(e,l.current)),n||(n=new g(t.Map,e,l.current)),c.map=_(n,t),c.mapLib=t,i(n),null===s||void 0===s||s.onMapMount(c.map,e.id)}})).catch((t=>{e.onError({type:"error",target:null,originalEvent:null,error:t})})),()=>{r=!1,n&&(null===s||void 0===s||s.onMapUnmount(e.id),e.reuseMaps?n.recycle():n.destroy())}}),[]),b((()=>{a&&a.setProps(e)})),(0,n.useImperativeHandle)(t,(()=>c.map),[a]);const u=(0,n.useMemo)((()=>({position:"relative",width:"100%",height:"100%",...e.style})),[e.style]);return n.createElement("div",{id:e.id,ref:l,style:u},a&&n.createElement(L.Provider,{value:c},e.children))}));S.displayName="Map",S.defaultProps=x;var C=S,P=o(73935);const M=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function w(e,t){if(!e||!t)return;const o=e.style;for(const n in t){const e=t[n];Number.isFinite(e)&&!M.test(n)?o[n]=`${e}px`:o[n]=e}}function T(e){const{map:t,mapLib:o}=(0,n.useContext)(L),r=(0,n.useRef)({props:e});r.current.props=e;const s=(0,n.useMemo)((()=>{let t=!1;n.Children.forEach(e.children,(e=>{e&&(t=!0)}));const a={...e,element:t?document.createElement("div"):null},i=new o.Marker(a).setLngLat([e.longitude,e.latitude]);return i.getElement().addEventListener("click",(e=>{var t,o;null===(o=(t=r.current.props).onClick)||void 0===o||o.call(t,{type:"click",target:i,originalEvent:e})})),i.on("dragstart",(e=>{var t,o;const n=e;n.lngLat=s.getLngLat(),null===(o=(t=r.current.props).onDragStart)||void 0===o||o.call(t,n)})),i.on("drag",(e=>{var t,o;const n=e;n.lngLat=s.getLngLat(),null===(o=(t=r.current.props).onDrag)||void 0===o||o.call(t,n)})),i.on("dragend",(e=>{var t,o;const n=e;n.lngLat=s.getLngLat(),null===(o=(t=r.current.props).onDragEnd)||void 0===o||o.call(t,n)})),i}),[]);return(0,n.useEffect)((()=>(s.addTo(t.getMap()),()=>{s.remove()})),[]),(0,n.useEffect)((()=>{w(s.getElement(),e.style)}),[e.style]),s.getLngLat().lng===e.longitude&&s.getLngLat().lat===e.latitude||s.setLngLat([e.longitude,e.latitude]),e.offset&&!function(e,t){const o=Array.isArray(e)?e[0]:e?e.x:0,n=Array.isArray(e)?e[1]:e?e.y:0,r=Array.isArray(t)?t[0]:t?t.x:0,s=Array.isArray(t)?t[1]:t?t.y:0;return o===r&&n===s}(s.getOffset(),e.offset)&&s.setOffset(e.offset),s.isDraggable()!==e.draggable&&s.setDraggable(e.draggable),s.getRotation()!==e.rotation&&s.setRotation(e.rotation),s.getRotationAlignment()!==e.rotationAlignment&&s.setRotationAlignment(e.rotationAlignment),s.getPitchAlignment()!==e.pitchAlignment&&s.setPitchAlignment(e.pitchAlignment),s.getPopup()!==e.popup&&s.setPopup(e.popup),(0,P.createPortal)(e.children,s.getElement())}T.defaultProps={draggable:!1,popup:null,rotation:0,rotationAlignment:"auto",pitchAlignment:"auto"};var R=n.memo(T);function z(e){return new Set(e?e.trim().split(/\s+/):[])}n.memo((function(e){const{map:t,mapLib:o}=(0,n.useContext)(L),r=(0,n.useMemo)((()=>document.createElement("div")),[]),s=(0,n.useRef)({props:e});s.current.props=e;const a=(0,n.useMemo)((()=>{const t={...e},n=new o.Popup(t).setLngLat([e.longitude,e.latitude]);return n.once("open",(e=>{var t,o;null===(o=(t=s.current.props).onOpen)||void 0===o||o.call(t,e)})),n}),[]);if((0,n.useEffect)((()=>{const e=e=>{var t,o;null===(o=(t=s.current.props).onClose)||void 0===o||o.call(t,e)};return a.on("close",e),a.setDOMContent(r).addTo(t.getMap()),()=>{a.off("close",e),a.isOpen()&&a.remove()}}),[]),(0,n.useEffect)((()=>{w(a.getElement(),e.style)}),[e.style]),a.isOpen()&&(a.getLngLat().lng===e.longitude&&a.getLngLat().lat===e.latitude||a.setLngLat([e.longitude,e.latitude]),e.offset&&!c(a.options.offset,e.offset)&&a.setOffset(e.offset),a.options.anchor===e.anchor&&a.options.maxWidth===e.maxWidth||(a.options.anchor=e.anchor,a.setMaxWidth(e.maxWidth)),a.options.className!==e.className)){const t=z(a.options.className),o=z(e.className);for(const e of t)o.has(e)||a.removeClassName(e);for(const e of o)t.has(e)||a.addClassName(e);a.options.className=e.className}return(0,P.createPortal)(e.children,r)}));var A=function(e,t,o,r){const s=(0,n.useContext)(L),a=(0,n.useMemo)((()=>e(s)),[]);return(0,n.useEffect)((()=>{const e=r||o||t,n="function"===typeof t&&"function"===typeof o?t:null,i="function"===typeof o?o:"function"===typeof t?t:null,{map:l}=s;return l.hasControl(a)||(l.addControl(a,null===e||void 0===e?void 0:e.position),n&&n(s)),()=>{i&&i(s),l.hasControl(a)&&l.removeControl(a)}}),[]),a};n.memo((function(e){const t=A((({mapLib:t})=>new t.AttributionControl(e)),{position:e.position});return(0,n.useEffect)((()=>{w(t._container,e.style)}),[e.style]),null}));n.memo((function(e){const t=A((({mapLib:t})=>new t.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)})),{position:e.position});return(0,n.useEffect)((()=>{w(t._controlContainer,e.style)}),[e.style]),null}));const k=(0,n.forwardRef)(((e,t)=>{const o=(0,n.useRef)({props:e}),r=A((({mapLib:t})=>{const n=new t.GeolocateControl(e),r=n._setupUI;return n._setupUI=e=>{n._container.hasChildNodes()||r(e)},n.on("geolocate",(e=>{var t,n;null===(n=(t=o.current.props).onGeolocate)||void 0===n||n.call(t,e)})),n.on("error",(e=>{var t,n;null===(n=(t=o.current.props).onError)||void 0===n||n.call(t,e)})),n.on("outofmaxbounds",(e=>{var t,n;null===(n=(t=o.current.props).onOutOfMaxBounds)||void 0===n||n.call(t,e)})),n.on("trackuserlocationstart",(e=>{var t,n;null===(n=(t=o.current.props).onTrackUserLocationStart)||void 0===n||n.call(t,e)})),n.on("trackuserlocationend",(e=>{var t,n;null===(n=(t=o.current.props).onTrackUserLocationEnd)||void 0===n||n.call(t,e)})),n}),{position:e.position});return o.current.props=e,(0,n.useImperativeHandle)(t,(()=>({trigger:()=>r.trigger()})),[]),(0,n.useEffect)((()=>{w(r._container,e.style)}),[e.style]),null}));k.displayName="GeolocateControl";n.memo(k);n.memo((function(e){const t=A((({mapLib:t})=>new t.NavigationControl(e)),{position:e.position});return(0,n.useEffect)((()=>{w(t._container,e.style)}),[e.style]),null}));function O(e){const t=A((({mapLib:t})=>new t.ScaleControl(e)),{position:e.position});return t.options.unit===e.unit&&t.options.maxWidth===e.maxWidth||(t.options.maxWidth=e.maxWidth,t.setUnit(e.unit)),(0,n.useEffect)((()=>{w(t._container,e.style)}),[e.style]),null}O.defaultProps={unit:"metric",maxWidth:100};var I=n.memo(O);function Z(e,t){if(!e)throw new Error(t)}let N=0;var U=function(e){const t=(0,n.useContext)(L).map.getMap(),o=(0,n.useRef)(e),[,r]=(0,n.useState)(0),s=(0,n.useMemo)((()=>e.id||"jsx-source-"+N++),[]);(0,n.useEffect)((()=>{if(t){const e=()=>r((e=>e+1));return t.on("styledata",e),e(),()=>{var o;if(t.off("styledata",e),t.style&&t.style._loaded&&t.getSource(s)){const e=null===(o=t.getStyle())||void 0===o?void 0:o.layers;if(e)for(const o of e)o.source===s&&t.removeLayer(o.id);t.removeSource(s)}}}}),[t]);let a=t&&t.style&&t.getSource(s);return a?function(e,t,o){Z(t.id===o.id,"source id changed"),Z(t.type===o.type,"source type changed");let n="",r=0;for(const a in t)"children"===a||"id"===a||c(o[a],t[a])||(n=a,r++);if(!r)return;const s=t.type;if("geojson"===s)e.setData(t.data);else if("image"===s)e.updateImage({url:t.url,coordinates:t.coordinates});else if("canvas"!==s&&"video"!==s||1!==r||"coordinates"!==n)if("vector"===s&&"setUrl"in e)switch(n){case"url":e.setUrl(t.url);break;case"tiles":e.setTiles(t.tiles)}else console.warn(`Unable to update <Source> prop: ${n}`);else e.setCoordinates(t.coordinates)}(a,e,o.current):a=function(e,t,o){if(e.style&&e.style._loaded){const n={...o};return delete n.id,delete n.children,e.addSource(t,n),e.getSource(t)}return null}(t,s,e),o.current=e,a&&n.Children.map(e.children,(e=>e&&(0,n.cloneElement)(e,{source:s})))||null};let j=0;var D=function(e){const t=(0,n.useContext)(L).map.getMap(),o=(0,n.useRef)(e),[,r]=(0,n.useState)(0),s=(0,n.useMemo)((()=>e.id||"jsx-layer-"+j++),[]);if((0,n.useEffect)((()=>{if(t){const e=()=>r((e=>e+1));return t.on("styledata",e),e(),()=>{t.off("styledata",e),t.style&&t.style._loaded&&t.getLayer(s)&&t.removeLayer(s)}}}),[t]),t&&t.style&&t.getLayer(s))try{!function(e,t,o,n){if(Z(o.id===n.id,"layer id changed"),Z(o.type===n.type,"layer type changed"),"custom"===o.type||"custom"===n.type)return;const{layout:r={},paint:s={},filter:a,minzoom:i,maxzoom:l,beforeId:u}=o;if(u!==n.beforeId&&e.moveLayer(t,u),r!==n.layout){const o=n.layout||{};for(const n in r)c(r[n],o[n])||e.setLayoutProperty(t,n,r[n]);for(const n in o)r.hasOwnProperty(n)||e.setLayoutProperty(t,n,void 0)}if(s!==n.paint){const o=n.paint||{};for(const n in s)c(s[n],o[n])||e.setPaintProperty(t,n,s[n]);for(const n in o)s.hasOwnProperty(n)||e.setPaintProperty(t,n,void 0)}c(a,n.filter)||e.setFilter(t,a),i===n.minzoom&&l===n.maxzoom||e.setLayerZoomRange(t,i,l)}(t,s,e,o.current)}catch(a){console.warn(a)}else!function(e,t,o){if(e.style&&e.style._loaded&&(!("source"in o)||e.getSource(o.source))){const n={...o,id:t};delete n.beforeId,e.addLayer(n,o.beforeId)}}(t,s,e);return o.current=e,null}}}]);