(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="149",Ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nu=0,wo=1,Uu=2,lc=1,ku=2,br=3,qn=0,Gt=1,kn=2,Hn=0,ji=1,xs=2,To=3,Eo=4,Bu=5,Wi=100,Gu=101,Vu=102,Ao=103,Co=104,Hu=200,Wu=201,Xu=202,qu=203,cc=204,uc=205,Yu=206,ju=207,Zu=208,$u=209,Ku=210,Ju=0,Qu=1,eh=2,Pa=3,th=4,nh=5,ih=6,rh=7,hc=0,sh=1,ah=2,Ln=0,oh=1,lh=2,ch=3,uh=4,hh=5,fc=300,Qi=301,er=302,La=303,Da=304,Ls=306,Ra=1e3,on=1001,Ia=1002,tt=1003,Po=1004,Gs=1005,$t=1006,fh=1007,Rr=1008,yi=1009,dh=1010,ph=1011,dc=1012,mh=1013,hi=1014,An=1015,Ir=1016,gh=1017,_h=1018,Zi=1020,xh=1021,Ut=1023,vh=1024,yh=1025,pi=1026,tr=1027,Mh=1028,bh=1029,Sh=1030,wh=1031,Th=1033,Vs=33776,Hs=33777,Ws=33778,Xs=33779,Lo=35840,Do=35841,Ro=35842,Io=35843,Eh=36196,Fo=37492,Oo=37496,zo=37808,No=37809,Uo=37810,ko=37811,Bo=37812,Go=37813,Vo=37814,Ho=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,jo=37820,Zo=37821,qs=36492,Ah=36283,$o=36284,Ko=36285,Jo=36286,Mi=3e3,Ge=3001,Ch=3200,Ph=3201,Lh=0,Dh=1,cn="srgb",Fr="srgb-linear",Ys=7680,Rh=519,Qo=35044,el="300 es",Fa=1035;class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tl=1234567;const Ar=Math.PI/180,vs=180/Math.PI;function ur(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[o&255]+mt[o>>8&255]+mt[o>>16&255]+mt[o>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function St(o,e,t){return Math.max(e,Math.min(t,o))}function eo(o,e){return(o%e+e)%e}function Ih(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function Fh(o,e,t){return o!==e?(t-o)/(e-o):0}function Cr(o,e,t){return(1-t)*o+t*e}function Oh(o,e,t,n){return Cr(o,e,1-Math.exp(-t*n))}function zh(o,e=1){return e-Math.abs(eo(o,e*2)-e)}function Nh(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Uh(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function kh(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Bh(o,e){return o+Math.random()*(e-o)}function Gh(o){return o*(.5-Math.random())}function Vh(o){o!==void 0&&(tl=o);let e=tl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hh(o){return o*Ar}function Wh(o){return o*vs}function Oa(o){return(o&o-1)===0&&o!==0}function Xh(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function ys(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function qh(o,e,t,n,i){const r=Math.cos,s=Math.sin,a=r(t/2),l=s(t/2),c=r((e+n)/2),u=s((e+n)/2),f=r((e-n)/2),h=s((e-n)/2),m=r((n-e)/2),g=s((n-e)/2);switch(i){case"XYX":o.set(a*u,l*f,l*h,a*c);break;case"YZY":o.set(l*h,a*u,l*f,a*c);break;case"ZXZ":o.set(l*f,l*h,a*u,a*c);break;case"XZX":o.set(a*u,l*g,l*m,a*c);break;case"YXY":o.set(l*m,a*u,l*g,a*c);break;case"ZYZ":o.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Sr(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function At(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var nl=Object.freeze({__proto__:null,DEG2RAD:Ar,RAD2DEG:vs,ceilPowerOfTwo:Xh,clamp:St,damp:Oh,degToRad:Hh,denormalize:Sr,euclideanModulo:eo,floorPowerOfTwo:ys,generateUUID:ur,inverseLerp:Fh,isPowerOfTwo:Oa,lerp:Cr,mapLinear:Ih,normalize:At,pingpong:zh,radToDeg:Wh,randFloat:Bh,randFloatSpread:Gh,randInt:kh,seededRandom:Vh,setQuaternionFromProperEuler:qh,smootherstep:Uh,smoothstep:Nh});class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],M=i[1],y=i[4],S=i[7],v=i[2],C=i[5],L=i[8];return r[0]=s*d+a*M+l*v,r[3]=s*p+a*y+l*C,r[6]=s*_+a*S+l*L,r[1]=c*d+u*M+f*v,r[4]=c*p+u*y+f*C,r[7]=c*_+u*S+f*L,r[2]=h*d+m*M+g*v,r[5]=h*p+m*y+g*C,r[8]=h*_+m*S+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-n*r*u+n*a*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*s-a*c,h=a*l-u*r,m=c*r-s*l,g=t*f+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(i*c-u*n)*d,e[2]=(a*n-i*s)*d,e[3]=h*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-a*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(s*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(js.makeScale(e,t)),this}rotate(e){return this.premultiply(js.makeRotation(-e)),this}translate(e,t){return this.premultiply(js.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const js=new Bt;function pc(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ms(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function mi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ds(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Zs={[cn]:{[Fr]:mi},[Fr]:{[cn]:ds}},Mt={legacyMode:!0,get workingColorSpace(){return Fr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Zs[e]&&Zs[e][t]!==void 0){const n=Zs[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={r:0,g:0,b:0},nn={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function $s(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function qr(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=eo(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=$s(s,r,e+1/3),this.g=$s(s,r,e),this.b=$s(s,r,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Mt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Mt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Mt.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Mt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=cn){const n=mc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return Mt.fromWorkingColorSpace(qr(this,Qe),e),St(Qe.r*255,0,255)<<16^St(Qe.g*255,0,255)<<8^St(Qe.b*255,0,255)<<0}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(qr(this,Qe),t);const n=Qe.r,i=Qe.g,r=Qe.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const f=s-a;switch(c=u<=.5?f/(s+a):f/(2-s-a),s){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(qr(this,Qe),t),e.r=Qe.r,e.g=Qe.g,e.b=Qe.b,e}getStyle(e=cn){return Mt.fromWorkingColorSpace(qr(this,Qe),e),e!==cn?`color(${e} ${Qe.r} ${Qe.g} ${Qe.b})`:`rgb(${Qe.r*255|0},${Qe.g*255|0},${Qe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(nn),nn.h+=e,nn.s+=t,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nn),e.getHSL(Xr);const n=Cr(nn.h,Xr.h,t),i=Cr(nn.s,Xr.s,t),r=Cr(nn.l,Xr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Be.NAMES=mc;let Pi;class gc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pi===void 0&&(Pi=Ms("canvas")),Pi.width=e.width,Pi.height=e.height;const n=Pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=mi(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class _c{constructor(e=null){this.isSource=!0,this.uuid=ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Ks(i[s].image)):r.push(Ks(i[s]))}else r=Ks(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ks(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?gc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yh=0;class Pt extends Ti{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=on,i=on,r=$t,s=Rr,a=Ut,l=yi,c=Pt.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=ur(),this.name="",this.source=new _c(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ra:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ra:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=fc;Pt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(m+1)/2,v=(_+1)/2,C=(u+h)/4,L=(f+d)/4,x=(g+p)/4;return y>S&&y>v?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=C/n,r=L/n):S>v?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=C/i,r=x/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=L/r,i=x/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-d)/M,this.z=(h-u)/M,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bi extends Ti{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$t,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _c(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xc extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jh extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=r[s+0],m=r[s+1],g=r[s+2],d=r[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==m||u!==g){let p=1-a;const _=l*h+c*m+u*g+f*d,M=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const v=Math.sqrt(y),C=Math.atan2(v,_*M);p=Math.sin(p*C)/v,a=Math.sin(a*C)/v}const S=a*M;if(l=l*p+h*S,c=c*p+m*S,u=u*p+g*S,f=f*p+d*S,p===1-a){const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[s],h=r[s+1],m=r[s+2],g=r[s+3];return e[t]=a*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-a*m,e[t+2]=c*g+u*m+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(r/2),h=l(n/2),m=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(s-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+s)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(i+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(s-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*a+i*c-r*l,this._y=i*u+s*l+r*a-n*c,this._z=r*u+s*c+n*l-i*a,this._w=s*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*i-a*n,u=l*n+a*t-r*i,f=l*i+r*n-s*t,h=-r*t-s*n-a*i;return this.x=c*l+h*-r+u*-a-f*-s,this.y=u*l+h*-s+f*-r-c*-a,this.z=f*l+h*-a+c*-s-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Js.copy(this).projectOnVector(e),this.sub(Js)}reflect(e){return this.sub(Js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Js=new U,il=new Si;class Gr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>s&&(s=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>s&&(s=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let s=0,a=r.count;s<a;s++)ei.fromBufferAttribute(r,s).applyMatrix4(e.matrixWorld),this.expandByPoint(ei)}else n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox),Qs.applyMatrix4(e.matrixWorld),this.union(Qs);const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),Yr.subVectors(this.max,dr),Li.subVectors(e.a,dr),Di.subVectors(e.b,dr),Ri.subVectors(e.c,dr),Fn.subVectors(Di,Li),On.subVectors(Ri,Di),ti.subVectors(Li,Ri);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-ti.z,ti.y,Fn.z,0,-Fn.x,On.z,0,-On.x,ti.z,0,-ti.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-ti.y,ti.x,0];return!ea(t,Li,Di,Ri,Yr)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,Li,Di,Ri,Yr))?!1:(jr.crossVectors(Fn,On),t=[jr.x,jr.y,jr.z],ea(t,Li,Di,Ri,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ei.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new U,new U,new U,new U,new U,new U,new U,new U],ei=new U,Qs=new Gr,Li=new U,Di=new U,Ri=new U,Fn=new U,On=new U,ti=new U,dr=new U,Yr=new U,jr=new U,ni=new U;function ea(o,e,t,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){ni.fromArray(o,r);const a=i.x*Math.abs(ni.x)+i.y*Math.abs(ni.y)+i.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Zh=new Gr,pr=new U,ta=new U;class Ds{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(pr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(ta)),this.expandByPoint(pr.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new U,na=new U,Zr=new U,zn=new U,ia=new U,$r=new U,ra=new U;class vc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.direction).multiplyScalar(t).add(this.origin),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){na.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(na);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Zr),a=zn.dot(this.direction),l=-zn.dot(Zr),c=zn.lengthSq(),u=Math.abs(1-s*s);let f,h,m,g;if(u>0)if(f=s*l-a,h=s*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,m=f*(f+s*h+2*a)+h*(s*f+h+2*l)+c}else h=r,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-s*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(s*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=s>0?-r:r,f=Math.max(0,-(s*h+a)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Zr).multiplyScalar(h).add(na),m}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),i=vn.dot(vn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,i,r){ia.subVectors(t,e),$r.subVectors(n,e),ra.crossVectors(ia,$r);let s=this.direction.dot(ra),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;zn.subVectors(this.origin,e);const l=a*this.direction.dot($r.crossVectors(zn,$r));if(l<0)return null;const c=a*this.direction.dot(ia.cross(zn));if(c<0||l+c>s)return null;const u=-a*zn.dot(ra);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,s,a,l,c,u,f,h,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ii.setFromMatrixColumn(e,0).length(),r=1/Ii.setFromMatrixColumn(e,1).length(),s=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=s*u,m=s*f,g=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,d=c*f;t[0]=h+d*a,t[4]=g*a-m,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-a,t[2]=m*a-g,t[6]=d+h*a,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,d=c*f;t[0]=h-d*a,t[4]=-s*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=s*u,t[9]=d-h*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,m=s*f,g=a*u,d=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+m,t[1]=f,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=s*l,m=s*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=s*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($h,e,Kh)}lookAt(e,t,n){const i=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Nn.crossVectors(n,Ot),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Nn.crossVectors(n,Ot)),Nn.normalize(),Kr.crossVectors(Ot,Nn),i[0]=Nn.x,i[4]=Kr.x,i[8]=Ot.x,i[1]=Nn.y,i[5]=Kr.y,i[9]=Ot.y,i[2]=Nn.z,i[6]=Kr.z,i[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],M=n[3],y=n[7],S=n[11],v=n[15],C=i[0],L=i[4],x=i[8],b=i[12],E=i[1],N=i[5],H=i[9],I=i[13],D=i[2],V=i[6],j=i[10],Z=i[14],z=i[3],K=i[7],J=i[11],le=i[15];return r[0]=s*C+a*E+l*D+c*z,r[4]=s*L+a*N+l*V+c*K,r[8]=s*x+a*H+l*j+c*J,r[12]=s*b+a*I+l*Z+c*le,r[1]=u*C+f*E+h*D+m*z,r[5]=u*L+f*N+h*V+m*K,r[9]=u*x+f*H+h*j+m*J,r[13]=u*b+f*I+h*Z+m*le,r[2]=g*C+d*E+p*D+_*z,r[6]=g*L+d*N+p*V+_*K,r[10]=g*x+d*H+p*j+_*J,r[14]=g*b+d*I+p*Z+_*le,r[3]=M*C+y*E+S*D+v*z,r[7]=M*L+y*N+S*V+v*K,r[11]=M*x+y*H+S*j+v*J,r[15]=M*b+y*I+S*Z+v*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+r*l*f-i*c*f-r*a*h+n*c*h+i*a*m-n*l*m)+d*(+t*l*m-t*c*h+r*s*h-i*s*m+i*c*u-r*l*u)+p*(+t*c*f-t*a*m-r*s*f+n*s*m+r*a*u-n*c*u)+_*(-i*a*u-t*l*f+t*a*h+i*s*f-n*s*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],M=f*p*c-d*h*c+d*l*m-a*p*m-f*l*_+a*h*_,y=g*h*c-u*p*c-g*l*m+s*p*m+u*l*_-s*h*_,S=u*d*c-g*f*c+g*a*m-s*d*m-u*a*_+s*f*_,v=g*f*l-u*d*l-g*a*h+s*d*h+u*a*p-s*f*p,C=t*M+n*y+i*S+r*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=M*L,e[1]=(d*h*r-f*p*r-d*i*m+n*p*m+f*i*_-n*h*_)*L,e[2]=(a*p*r-d*l*r+d*i*c-n*p*c-a*i*_+n*l*_)*L,e[3]=(f*l*r-a*h*r-f*i*c+n*h*c+a*i*m-n*l*m)*L,e[4]=y*L,e[5]=(u*p*r-g*h*r+g*i*m-t*p*m-u*i*_+t*h*_)*L,e[6]=(g*l*r-s*p*r-g*i*c+t*p*c+s*i*_-t*l*_)*L,e[7]=(s*h*r-u*l*r+u*i*c-t*h*c-s*i*m+t*l*m)*L,e[8]=S*L,e[9]=(g*f*r-u*d*r-g*n*m+t*d*m+u*n*_-t*f*_)*L,e[10]=(s*d*r-g*a*r+g*n*c-t*d*c-s*n*_+t*a*_)*L,e[11]=(u*a*r-s*f*r-u*n*c+t*f*c+s*n*m-t*a*m)*L,e[12]=v*L,e[13]=(u*d*i-g*f*i+g*n*h-t*d*h-u*n*p+t*f*p)*L,e[14]=(g*a*i-s*d*i-g*n*l+t*d*l+s*n*p-t*a*p)*L,e[15]=(s*f*i-u*a*i+u*n*l-t*f*l-s*n*h+t*a*h)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,l=e.z,c=r*s,u=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*s,0,c*l-i*a,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,a=t._z,l=t._w,c=r+r,u=s+s,f=a+a,h=r*c,m=r*u,g=r*f,d=s*u,p=s*f,_=a*f,M=l*c,y=l*u,S=l*f,v=n.x,C=n.y,L=n.z;return i[0]=(1-(d+_))*v,i[1]=(m+S)*v,i[2]=(g-y)*v,i[3]=0,i[4]=(m-S)*C,i[5]=(1-(h+_))*C,i[6]=(p+M)*C,i[7]=0,i[8]=(g+y)*L,i[9]=(p-M)*L,i[10]=(1-(h+d))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ii.set(i[0],i[1],i[2]).length();const s=Ii.set(i[4],i[5],i[6]).length(),a=Ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);const c=1/r,u=1/s,f=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=f,rn.elements[9]*=f,rn.elements[10]*=f,t.setFromRotationMatrix(rn),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,i,r,s){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(s+r)/(s-r),m=-2*s*r/(s-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,s){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(s-r),f=(t+e)*l,h=(n+i)*c,m=(s+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ii=new U,rn=new lt,$h=new U(0,0,0),Kh=new U(1,1,1),Nn=new U,Kr=new U,Ot=new U,rl=new lt,sl=new Si;class Rs{constructor(e=0,t=0,n=0,i=Rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-St(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sl.setFromEuler(this),this.setFromQuaternion(sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rs.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jh=0;const al=new U,Fi=new Si,yn=new lt,Jr=new U,mr=new U,Qh=new U,ef=new Si,ol=new U(1,0,0),ll=new U(0,1,0),cl=new U(0,0,1),tf={type:"added"},ul={type:"removed"};class wt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new U,t=new Rs,n=new Si,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new Bt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(ll,e)}rotateZ(e){return this.rotateOnAxis(cl,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(ll,e)}translateZ(e){return this.translateOnAxis(cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jr.copy(e):Jr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(mr,Jr,this.up):yn.lookAt(Jr,mr,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(yn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ul)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ul)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Qh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),m=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}wt.DEFAULT_UP=new U(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new U,Mn=new U,sa=new U,bn=new U,Oi=new U,zi=new U,hl=new U,aa=new U,oa=new U,la=new U;class hn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),sn.subVectors(e,t),i.cross(sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){sn.subVectors(i,t),Mn.subVectors(n,t),sa.subVectors(e,t);const s=sn.dot(sn),a=sn.dot(Mn),l=sn.dot(sa),c=Mn.dot(Mn),u=Mn.dot(sa),f=s*c-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,m=(c*l-a*u)*h,g=(s*u-a*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,n,i,r,s,a,l){return this.getBarycoord(e,t,n,i,bn),l.set(0,0),l.addScaledVector(r,bn.x),l.addScaledVector(s,bn.y),l.addScaledVector(a,bn.z),l}static isFrontFacing(e,t,n,i){return sn.subVectors(n,t),Mn.subVectors(e,t),sn.cross(Mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),sn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return hn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,a;Oi.subVectors(i,n),zi.subVectors(r,n),aa.subVectors(e,n);const l=Oi.dot(aa),c=zi.dot(aa);if(l<=0&&c<=0)return t.copy(n);oa.subVectors(e,i);const u=Oi.dot(oa),f=zi.dot(oa);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(Oi,s);la.subVectors(e,r);const m=Oi.dot(la),g=zi.dot(la);if(g>=0&&m<=g)return t.copy(r);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(zi,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return hl.subVectors(r,i),a=(f-u)/(f-u+(m-g)),t.copy(i).addScaledVector(hl,a);const _=1/(p+d+h);return s=d*_,a=h*_,t.copy(n).addScaledVector(Oi,s).addScaledVector(zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let nf=0;class Vr extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=ji,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=cc,this.blendDst=uc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class to extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new U,Qr=new Ee;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Mc extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bc extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gi extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rf=0;const Yt=new lt,ca=new wt,Ni=new U,zt=new Gr,gr=new Gr,ot=new U;class mn extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pc(e)?bc:Mc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return ca.lookAt(e),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(zt.min,gr.min),zt.expandByPoint(ot),ot.addVectors(zt.max,gr.max),zt.expandByPoint(ot)):(zt.expandByPoint(gr.min),zt.expandByPoint(gr.max))}zt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ot));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ot.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(e,c),ot.add(Ni)),i=Math.max(i,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new U,u[E]=new U;const f=new U,h=new U,m=new U,g=new Ee,d=new Ee,p=new Ee,_=new U,M=new U;function y(E,N,H){f.fromArray(i,E*3),h.fromArray(i,N*3),m.fromArray(i,H*3),g.fromArray(s,E*2),d.fromArray(s,N*2),p.fromArray(s,H*2),h.sub(f),m.sub(f),d.sub(g),p.sub(g);const I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(I),M.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(I),c[E].add(_),c[N].add(_),c[H].add(_),u[E].add(M),u[N].add(M),u[H].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,N=S.length;E<N;++E){const H=S[E],I=H.start,D=H.count;for(let V=I,j=I+D;V<j;V+=3)y(n[V+0],n[V+1],n[V+2])}const v=new U,C=new U,L=new U,x=new U;function b(E){L.fromArray(r,E*3),x.copy(L);const N=c[E];v.copy(N),v.sub(L.multiplyScalar(L.dot(N))).normalize(),C.crossVectors(x,N);const I=C.dot(u[E])<0?-1:1;l[E*4]=v.x,l[E*4+1]=v.y,l[E*4+2]=v.z,l[E*4+3]=I}for(let E=0,N=S.length;E<N;++E){const H=S[E],I=H.start,D=H.count;for(let V=I,j=I+D;V<j;V+=3)b(n[V+0]),b(n[V+1]),b(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new U,r=new U,s=new U,a=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),s.fromBufferAttribute(t,p),u.subVectors(s,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new Tt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const fl=new lt,Ui=new vc,ua=new Ds,_r=new U,xr=new U,vr=new U,ha=new U,es=new U,ts=new Ee,ns=new Ee,is=new Ee,fa=new U,rs=new U;class Cn extends wt{constructor(e=new mn,t=new to){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){es.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ha.fromBufferAttribute(f,e),s?es.addScaledVector(ha,u):es.addScaledVector(ha.sub(t),u))}t.add(es)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),e.ray.intersectsSphere(ua)===!1)||(fl.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(fl),n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1))return;let s;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const d=f[m],p=i[d.materialIndex],_=Math.max(d.start,h.start),M=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let y=_,S=M;y<S;y+=3){const v=a.getX(y),C=a.getX(y+1),L=a.getX(y+2);s=ss(this,p,e,Ui,c,u,v,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const m=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let d=m,p=g;d<p;d+=3){const _=a.getX(d),M=a.getX(d+1),y=a.getX(d+2);s=ss(this,i,e,Ui,c,u,_,M,y),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const d=f[m],p=i[d.materialIndex],_=Math.max(d.start,h.start),M=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let y=_,S=M;y<S;y+=3){const v=y,C=y+1,L=y+2;s=ss(this,p,e,Ui,c,u,v,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const m=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let d=m,p=g;d<p;d+=3){const _=d,M=d+1,y=d+2;s=ss(this,i,e,Ui,c,u,_,M,y),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function sf(o,e,t,n,i,r,s,a){let l;if(e.side===Gt?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,e.side===qn,a),l===null)return null;rs.copy(a),rs.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(rs);return c<t.near||c>t.far?null:{distance:c,point:rs.clone(),object:o}}function ss(o,e,t,n,i,r,s,a,l){o.getVertexPosition(s,_r),o.getVertexPosition(a,xr),o.getVertexPosition(l,vr);const c=sf(o,e,t,n,_r,xr,vr,fa);if(c){i&&(ts.fromBufferAttribute(i,s),ns.fromBufferAttribute(i,a),is.fromBufferAttribute(i,l),c.uv=hn.getUV(fa,_r,xr,vr,ts,ns,is,new Ee)),r&&(ts.fromBufferAttribute(r,s),ns.fromBufferAttribute(r,a),is.fromBufferAttribute(r,l),c.uv2=hn.getUV(fa,_r,xr,vr,ts,ns,is,new Ee));const u={a:s,b:a,c:l,normal:new U,materialIndex:0};hn.getNormal(_r,xr,vr,u.normal),c.face=u}return c}class Hr extends mn{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(f,2));function g(d,p,_,M,y,S,v,C,L,x,b){const E=S/L,N=v/x,H=S/2,I=v/2,D=C/2,V=L+1,j=x+1;let Z=0,z=0;const K=new U;for(let J=0;J<j;J++){const le=J*N-I;for(let k=0;k<V;k++){const $=k*E-H;K[d]=$*M,K[p]=le*y,K[_]=D,c.push(K.x,K.y,K.z),K[d]=0,K[p]=0,K[_]=C>0?1:-1,u.push(K.x,K.y,K.z),f.push(k/L),f.push(1-J/x),Z+=1}}for(let J=0;J<x;J++)for(let le=0;le<L;le++){const k=h+le+V*J,$=h+le+V*(J+1),ee=h+(le+1)+V*(J+1),Q=h+(le+1)+V*J;l.push(k,$,Q),l.push($,ee,Q),z+=6}a.addGroup(m,z,b),m+=z,h+=Z}}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(o){const e={};for(let t=0;t<o.length;t++){const n=nr(o[t]);for(const i in n)e[i]=n[i]}return e}function af(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Sc(o){return o.getRenderTarget()===null&&o.outputEncoding===Ge?cn:Fr}const of={clone:nr,merge:bt};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wc extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kt extends wc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Bi=1;class uf extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Kt(ki,Bi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Kt(ki,Bi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new Kt(ki,Bi,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new Kt(ki,Bi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Kt(ki,Bi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Kt(ki,Bi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Ln,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Tc extends Pt{constructor(e,t,n,i,r,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,n,i,r,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hf extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Tc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Hr(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Hn});r.uniforms.tEquirect.value=t;const s=new Cn(i,r),a=t.minFilter;return t.minFilter===Rr&&(t.minFilter=$t),new uf(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const da=new U,ff=new U,df=new Bt;class si{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=da.subVectors(n,t).cross(ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(da),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||df.getNormalMatrix(e),i=this.coplanarPoint(da).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Ds,as=new U;class Ec{constructor(e=new si,t=new si,n=new si,i=new si,r=new si,s=new si){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],M=n[14],y=n[15];return t[0].setComponents(a-i,f-l,d-h,y-p).normalize(),t[1].setComponents(a+i,f+l,d+h,y+p).normalize(),t[2].setComponents(a+r,f+c,d+m,y+_).normalize(),t[3].setComponents(a-r,f-c,d-m,y-_).normalize(),t[4].setComponents(a-s,f-u,d-g,y-M).normalize(),t[5].setComponents(a+s,f+u,d+g,y+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(as.x=i.normal.x>0?e.max.x:e.min.x,as.y=i.normal.y>0?e.max.y:e.min.y,as.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ac(){let o=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function pf(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,m=u.updateRange;o.bindBuffer(f,c),m.count===-1?o.bufferSubData(f,0,h):(t?o.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):o.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:s,remove:a,update:l}}class no extends mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const M=_*h-s;for(let y=0;y<c;y++){const S=y*f-r;g.push(S,-M,0),d.push(0,0,1),p.push(y/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<a;M++){const y=M+c*_,S=M+c*(_+1),v=M+1+c*(_+1),C=M+1+c*_;m.push(y,S,C),m.push(S,v,C)}this.setIndex(m),this.setAttribute("position",new gi(g,3)),this.setAttribute("normal",new gi(d,3)),this.setAttribute("uv",new gi(p,2))}static fromJSON(e){return new no(e.width,e.height,e.widthSegments,e.heightSegments)}}var mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf="vec3 transformed = vec3( position );",bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,wf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ff=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Of=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,id=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ad=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_d=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Pd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Nd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ip=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,sp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ap=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,op=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,lp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,cp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,up=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,hp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Mp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ap=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Op=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Up=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Se={alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:_f,alphatest_pars_fragment:xf,aomap_fragment:vf,aomap_pars_fragment:yf,begin_vertex:Mf,beginnormal_vertex:bf,bsdfs:Sf,iridescence_fragment:wf,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:Lf,color_pars_fragment:Df,color_pars_vertex:Rf,color_vertex:If,common:Ff,cube_uv_reflection_fragment:Of,defaultnormal_vertex:zf,displacementmap_pars_vertex:Nf,displacementmap_vertex:Uf,emissivemap_fragment:kf,emissivemap_pars_fragment:Bf,encodings_fragment:Gf,encodings_pars_fragment:Vf,envmap_fragment:Hf,envmap_common_pars_fragment:Wf,envmap_pars_fragment:Xf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:rd,envmap_vertex:Yf,fog_vertex:jf,fog_pars_vertex:Zf,fog_fragment:$f,fog_pars_fragment:Kf,gradientmap_pars_fragment:Jf,lightmap_fragment:Qf,lightmap_pars_fragment:ed,lights_lambert_fragment:td,lights_lambert_pars_fragment:nd,lights_pars_begin:id,lights_toon_fragment:sd,lights_toon_pars_fragment:ad,lights_phong_fragment:od,lights_phong_pars_fragment:ld,lights_physical_fragment:cd,lights_physical_pars_fragment:ud,lights_fragment_begin:hd,lights_fragment_maps:fd,lights_fragment_end:dd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:gd,logdepthbuf_vertex:_d,map_fragment:xd,map_pars_fragment:vd,map_particle_fragment:yd,map_particle_pars_fragment:Md,metalnessmap_fragment:bd,metalnessmap_pars_fragment:Sd,morphcolor_vertex:wd,morphnormal_vertex:Td,morphtarget_pars_vertex:Ed,morphtarget_vertex:Ad,normal_fragment_begin:Cd,normal_fragment_maps:Pd,normal_pars_fragment:Ld,normal_pars_vertex:Dd,normal_vertex:Rd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Od,clearcoat_pars_fragment:zd,iridescence_pars_fragment:Nd,output_fragment:Ud,packing:kd,premultiplied_alpha_fragment:Bd,project_vertex:Gd,dithering_fragment:Vd,dithering_pars_fragment:Hd,roughnessmap_fragment:Wd,roughnessmap_pars_fragment:Xd,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:Yd,shadowmap_vertex:jd,shadowmask_pars_fragment:Zd,skinbase_vertex:$d,skinning_pars_vertex:Kd,skinning_vertex:Jd,skinnormal_vertex:Qd,specularmap_fragment:ep,specularmap_pars_fragment:tp,tonemapping_fragment:np,tonemapping_pars_fragment:ip,transmission_fragment:rp,transmission_pars_fragment:sp,uv_pars_fragment:ap,uv_pars_vertex:op,uv_vertex:lp,uv2_pars_fragment:cp,uv2_pars_vertex:up,uv2_vertex:hp,worldpos_vertex:fp,background_vert:dp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:_p,cube_frag:xp,depth_vert:vp,depth_frag:yp,distanceRGBA_vert:Mp,distanceRGBA_frag:bp,equirect_vert:Sp,equirect_frag:wp,linedashed_vert:Tp,linedashed_frag:Ep,meshbasic_vert:Ap,meshbasic_frag:Cp,meshlambert_vert:Pp,meshlambert_frag:Lp,meshmatcap_vert:Dp,meshmatcap_frag:Rp,meshnormal_vert:Ip,meshnormal_frag:Fp,meshphong_vert:Op,meshphong_frag:zp,meshphysical_vert:Np,meshphysical_frag:Up,meshtoon_vert:kp,meshtoon_frag:Bp,points_vert:Gp,points_frag:Vp,shadow_vert:Hp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:qp},re={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Bt},uv2Transform:{value:new Bt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bt}}},un={basic:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:bt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:bt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:bt([re.points,re.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:bt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:bt([re.common,re.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:bt([re.sprite,re.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:bt([re.common,re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:bt([re.lights,re.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};un.physical={uniforms:bt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const os={r:0,b:0,g:0};function Yp(o,e,t,n,i,r,s){const a=new Be(0);let l=r===!0?0:1,c,u,f=null,h=0,m=null;function g(p,_){let M=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y));const S=o.xr,v=S.getSession&&S.getSession();v&&v.environmentBlendMode==="additive"&&(y=null),y===null?d(a,l):y&&y.isColor&&(d(y,1),M=!0),(o.autoClear||M)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ls)?(u===void 0&&(u=new Cn(new Hr(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:nr(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=y.encoding!==Ge,(f!==y||h!==y.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Cn(new no(2,2),new Dn({name:"BackgroundMaterial",uniforms:nr(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=y.encoding!==Ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,_){p.getRGB(os,Sc(o)),n.buffers.color.setClear(os.r,os.g,os.b,_,s)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(a,l)},render:g}}function jp(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function f(D,V,j,Z,z){let K=!1;if(s){const J=d(Z,j,V);c!==J&&(c=J,m(c.object)),K=_(D,Z,j,z),K&&M(D,Z,j,z)}else{const J=V.wireframe===!0;(c.geometry!==Z.id||c.program!==j.id||c.wireframe!==J)&&(c.geometry=Z.id,c.program=j.id,c.wireframe=J,K=!0)}z!==null&&t.update(z,34963),(K||u)&&(u=!1,x(D,V,j,Z),z!==null&&o.bindBuffer(34963,t.get(z).buffer))}function h(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?o.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?o.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function d(D,V,j){const Z=j.wireframe===!0;let z=a[D.id];z===void 0&&(z={},a[D.id]=z);let K=z[V.id];K===void 0&&(K={},z[V.id]=K);let J=K[Z];return J===void 0&&(J=p(h()),K[Z]=J),J}function p(D){const V=[],j=[],Z=[];for(let z=0;z<i;z++)V[z]=0,j[z]=0,Z[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:Z,object:D,attributes:{},index:null}}function _(D,V,j,Z){const z=c.attributes,K=V.attributes;let J=0;const le=j.getAttributes();for(const k in le)if(le[k].location>=0){const ee=z[k];let Q=K[k];if(Q===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),ee===void 0||ee.attribute!==Q||Q&&ee.data!==Q.data)return!0;J++}return c.attributesNum!==J||c.index!==Z}function M(D,V,j,Z){const z={},K=V.attributes;let J=0;const le=j.getAttributes();for(const k in le)if(le[k].location>=0){let ee=K[k];ee===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const Q={};Q.attribute=ee,ee&&ee.data&&(Q.data=ee.data),z[k]=Q,J++}c.attributes=z,c.attributesNum=J,c.index=Z}function y(){const D=c.newAttributes;for(let V=0,j=D.length;V<j;V++)D[V]=0}function S(D){v(D,0)}function v(D,V){const j=c.newAttributes,Z=c.enabledAttributes,z=c.attributeDivisors;j[D]=1,Z[D]===0&&(o.enableVertexAttribArray(D),Z[D]=1),z[D]!==V&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,V),z[D]=V)}function C(){const D=c.newAttributes,V=c.enabledAttributes;for(let j=0,Z=V.length;j<Z;j++)V[j]!==D[j]&&(o.disableVertexAttribArray(j),V[j]=0)}function L(D,V,j,Z,z,K){n.isWebGL2===!0&&(j===5124||j===5125)?o.vertexAttribIPointer(D,V,j,z,K):o.vertexAttribPointer(D,V,j,Z,z,K)}function x(D,V,j,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const z=Z.attributes,K=j.getAttributes(),J=V.defaultAttributeValues;for(const le in K){const k=K[le];if(k.location>=0){let $=z[le];if($===void 0&&(le==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),le==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const ee=$.normalized,Q=$.itemSize,G=t.get($);if(G===void 0)continue;const _e=G.buffer,me=G.type,de=G.bytesPerElement;if($.isInterleavedBufferAttribute){const ce=$.data,ze=ce.stride,be=$.offset;if(ce.isInstancedInterleavedBuffer){for(let ve=0;ve<k.locationSize;ve++)v(k.location+ve,ce.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ve=0;ve<k.locationSize;ve++)S(k.location+ve);o.bindBuffer(34962,_e);for(let ve=0;ve<k.locationSize;ve++)L(k.location+ve,Q/k.locationSize,me,ee,ze*de,(be+Q/k.locationSize*ve)*de)}else{if($.isInstancedBufferAttribute){for(let ce=0;ce<k.locationSize;ce++)v(k.location+ce,$.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ce=0;ce<k.locationSize;ce++)S(k.location+ce);o.bindBuffer(34962,_e);for(let ce=0;ce<k.locationSize;ce++)L(k.location+ce,Q/k.locationSize,me,ee,Q*de,Q/k.locationSize*ce*de)}}else if(J!==void 0){const ee=J[le];if(ee!==void 0)switch(ee.length){case 2:o.vertexAttrib2fv(k.location,ee);break;case 3:o.vertexAttrib3fv(k.location,ee);break;case 4:o.vertexAttrib4fv(k.location,ee);break;default:o.vertexAttrib1fv(k.location,ee)}}}}C()}function b(){H();for(const D in a){const V=a[D];for(const j in V){const Z=V[j];for(const z in Z)g(Z[z].object),delete Z[z];delete V[j]}delete a[D]}}function E(D){if(a[D.id]===void 0)return;const V=a[D.id];for(const j in V){const Z=V[j];for(const z in Z)g(Z[z].object),delete Z[z];delete V[j]}delete a[D.id]}function N(D){for(const V in a){const j=a[V];if(j[D.id]===void 0)continue;const Z=j[D.id];for(const z in Z)g(Z[z].object),delete Z[z];delete j[D.id]}}function H(){I(),u=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:H,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:S,disableUnusedAttributes:C}}function Zp(o,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,m;if(i)h=o,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,c,u,f),t.update(u,r,f)}this.setMode=s,this.render=a,this.renderInstances=l}function $p(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=o.getParameter(34930),h=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),M=o.getParameter(36349),y=h>0,S=s||e.has("OES_texture_float"),v=y&&S,C=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:v,maxSamples:C}}function Kp(o){const e=this;let t=null,n=0,i=!1,r=!1;const s=new si,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||i;return i=h,n=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const g=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,_=o.get(f);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,y=M*4;let S=_.clippingState||null;l.value=S,S=u(g,h,y,m);for(let v=0;v!==y;++v)S[v]=t[v];_.clippingState=S,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,S=m;y!==d;++y,S+=4)s.copy(f[y]).applyMatrix4(M,a),s.normal.toArray(p,S),p[S+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function Jp(o){let e=new WeakMap;function t(s,a){return a===La?s.mapping=Qi:a===Da&&(s.mapping=er),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===La||a===Da)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new hf(l.height/2);return c.fromEquirectangularTexture(o,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Qp extends wc{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,dl=[.125,.215,.35,.446,.526,.582],ui=20,pa=new Qp,pl=new Be;let ma=null;const ai=(1+Math.sqrt(5))/2,Vi=1/ai,ml=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,ai,Vi),new U(0,ai,-Vi),new U(Vi,0,ai),new U(-Vi,0,ai),new U(ai,Vi,0),new U(-ai,Vi,0)];class gl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ma=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ma),e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ma=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Ir,format:Ut,encoding:Mi,depthBuffer:!1},i=_l(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(r)),this._blurMaterial=tm(r,e,t)}return i}_compileMaterial(e){const t=new Cn(this._lodPlanes[0],e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,n,i){const a=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(pl),u.toneMapping=Ln,u.autoClear=!1;const m=new to({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Cn(new Hr,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(pl),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):M===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const y=this._cubeSize;ls(i,M*y,_>2?y:0,y,y),u.setRenderTarget(i),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qi||e.mapping===er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xl());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Cn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=ml[(i-1)%ml.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Cn(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ui-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):ui;p>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ui}`);const _=[];let M=0;for(let L=0;L<ui;++L){const x=L/d,b=Math.exp(-x*x/2);_.push(b),L===0?M+=b:L<p&&(M+=2*b)}for(let L=0;L<_.length;L++)_[L]=_[L]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const S=this._sizeLods[i],v=3*S*(i>y-Xi?i-y+Xi:0),C=4*(this._cubeSize-S);ls(t,v,C,3*S,2*S),l.setRenderTarget(t),l.render(f,pa)}}function em(o){const e=[],t=[],n=[];let i=o;const r=o-Xi+1+dl.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);let l=1/a;s>o-Xi?l=dl[s-o+Xi-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,d=3,p=2,_=1,M=new Float32Array(d*g*m),y=new Float32Array(p*g*m),S=new Float32Array(_*g*m);for(let C=0;C<m;C++){const L=C%3*2/3-1,x=C>2?0:-1,b=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];M.set(b,d*g*C),y.set(h,p*g*C);const E=[C,C,C,C,C,C];S.set(E,_*g*C)}const v=new mn;v.setAttribute("position",new Tt(M,d)),v.setAttribute("uv",new Tt(y,p)),v.setAttribute("faceIndex",new Tt(S,_)),e.push(v),i>Xi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _l(o,e,t){const n=new bi(o,e,t);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function tm(o,e,t){const n=new Float32Array(ui),i=new U(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function xl(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function vl(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function io(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nm(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===La||l===Da,u=l===Qi||l===er;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new gl(o)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new gl(o));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function im(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rm(o,e,t,n){const i={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let d=0;if(m!==null){const M=m.array;d=m.version;for(let y=0,S=M.length;y<S;y+=3){const v=M[y+0],C=M[y+1],L=M[y+2];h.push(v,C,C,L,L,v)}}else{const M=g.array;d=g.version;for(let y=0,S=M.length/3-1;y<S;y+=3){const v=y+0,C=y+1,L=y+2;h.push(v,C,C,L,L,v)}}const p=new(pc(h)?bc:Mc)(h,1);p.version=d;const _=r.get(f);_&&e.remove(_),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function sm(o,e,t,n){const i=n.isWebGL2;let r;function s(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){o.drawElements(r,m,a,h*l),t.update(m,r,1)}function f(h,m,g){if(g===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,a,h*l,g),t.update(m,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=f}function am(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function om(o,e){return o[0]-e[0]}function lm(o,e){return Math.abs(e[1])-Math.abs(o[1])}function cm(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new ft,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let j=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",j)};var g=j;_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let E=0;S===!0&&(E=1),v===!0&&(E=2),C===!0&&(E=3);let N=u.attributes.position.count*E,H=1;N>e.maxTextureSize&&(H=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const I=new Float32Array(N*H*4*p),D=new xc(I,N,H,p);D.type=An,D.needsUpdate=!0;const V=E*4;for(let Z=0;Z<p;Z++){const z=L[Z],K=x[Z],J=b[Z],le=N*H*4*Z;for(let k=0;k<z.count;k++){const $=k*V;S===!0&&(s.fromBufferAttribute(z,k),I[le+$+0]=s.x,I[le+$+1]=s.y,I[le+$+2]=s.z,I[le+$+3]=0),v===!0&&(s.fromBufferAttribute(K,k),I[le+$+4]=s.x,I[le+$+5]=s.y,I[le+$+6]=s.z,I[le+$+7]=0),C===!0&&(s.fromBufferAttribute(J,k),I[le+$+8]=s.x,I[le+$+9]=s.y,I[le+$+10]=s.z,I[le+$+11]=J.itemSize===4?s.w:1)}}_={count:p,texture:D,size:new Ee(N,H)},r.set(u,_),u.addEventListener("dispose",j)}let M=0;for(let S=0;S<m.length;S++)M+=m[S];const y=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",y),h.getUniforms().setValue(o,"morphTargetInfluences",m),h.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<d;v++){const C=p[v];C[0]=v,C[1]=m[v]}p.sort(lm);for(let v=0;v<8;v++)v<d&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(om);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const C=a[v],L=C[0],x=C[1];L!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+v)!==_[L]&&u.setAttribute("morphTarget"+v,_[L]),M&&u.getAttribute("morphNormal"+v)!==M[L]&&u.setAttribute("morphNormal"+v,M[L]),i[v]=x,y+=x):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),M&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const S=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(o,"morphTargetBaseInfluence",S),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function um(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const Cc=new Pt,Pc=new xc,Lc=new jh,Dc=new Tc,yl=[],Ml=[],bl=new Float32Array(16),Sl=new Float32Array(9),wl=new Float32Array(4);function hr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=yl[i];if(r===void 0&&(r=new Float32Array(i),yl[i]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,o[s].toArray(r,a)}return r}function nt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function it(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Is(o,e){let t=Ml[e];t===void 0&&(t=new Int32Array(e),Ml[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function hm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function fm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;o.uniform2fv(this.addr,e),it(t,e)}}function dm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;o.uniform3fv(this.addr,e),it(t,e)}}function pm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;o.uniform4fv(this.addr,e),it(t,e)}}function mm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;wl.set(n),o.uniformMatrix2fv(this.addr,!1,wl),it(t,n)}}function gm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Sl.set(n),o.uniformMatrix3fv(this.addr,!1,Sl),it(t,n)}}function _m(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;bl.set(n),o.uniformMatrix4fv(this.addr,!1,bl),it(t,n)}}function xm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function vm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;o.uniform2iv(this.addr,e),it(t,e)}}function ym(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;o.uniform3iv(this.addr,e),it(t,e)}}function Mm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;o.uniform4iv(this.addr,e),it(t,e)}}function bm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Sm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;o.uniform2uiv(this.addr,e),it(t,e)}}function wm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;o.uniform3uiv(this.addr,e),it(t,e)}}function Tm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;o.uniform4uiv(this.addr,e),it(t,e)}}function Em(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Cc,i)}function Am(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Lc,i)}function Cm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Dc,i)}function Pm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pc,i)}function Lm(o){switch(o){case 5126:return hm;case 35664:return fm;case 35665:return dm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return _m;case 5124:case 35670:return xm;case 35667:case 35671:return vm;case 35668:case 35672:return ym;case 35669:case 35673:return Mm;case 5125:return bm;case 36294:return Sm;case 36295:return wm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Dm(o,e){o.uniform1fv(this.addr,e)}function Rm(o,e){const t=hr(e,this.size,2);o.uniform2fv(this.addr,t)}function Im(o,e){const t=hr(e,this.size,3);o.uniform3fv(this.addr,t)}function Fm(o,e){const t=hr(e,this.size,4);o.uniform4fv(this.addr,t)}function Om(o,e){const t=hr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function zm(o,e){const t=hr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Nm(o,e){const t=hr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Um(o,e){o.uniform1iv(this.addr,e)}function km(o,e){o.uniform2iv(this.addr,e)}function Bm(o,e){o.uniform3iv(this.addr,e)}function Gm(o,e){o.uniform4iv(this.addr,e)}function Vm(o,e){o.uniform1uiv(this.addr,e)}function Hm(o,e){o.uniform2uiv(this.addr,e)}function Wm(o,e){o.uniform3uiv(this.addr,e)}function Xm(o,e){o.uniform4uiv(this.addr,e)}function qm(o,e,t){const n=this.cache,i=e.length,r=Is(t,i);nt(n,r)||(o.uniform1iv(this.addr,r),it(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Cc,r[s])}function Ym(o,e,t){const n=this.cache,i=e.length,r=Is(t,i);nt(n,r)||(o.uniform1iv(this.addr,r),it(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Lc,r[s])}function jm(o,e,t){const n=this.cache,i=e.length,r=Is(t,i);nt(n,r)||(o.uniform1iv(this.addr,r),it(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Dc,r[s])}function Zm(o,e,t){const n=this.cache,i=e.length,r=Is(t,i);nt(n,r)||(o.uniform1iv(this.addr,r),it(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Pc,r[s])}function $m(o){switch(o){case 5126:return Dm;case 35664:return Rm;case 35665:return Im;case 35666:return Fm;case 35674:return Om;case 35675:return zm;case 35676:return Nm;case 5124:case 35670:return Um;case 35667:case 35671:return km;case 35668:case 35672:return Bm;case 35669:case 35673:return Gm;case 5125:return Vm;case 36294:return Hm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Zm}}class Km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Lm(t.type)}}class Jm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=$m(t.type)}}class Qm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function Tl(o,e){o.seq.push(e),o.map[e.id]=e}function eg(o,e,t){const n=o.name,i=n.length;for(ga.lastIndex=0;;){const r=ga.exec(n),s=ga.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){Tl(t,c===void 0?new Km(a,o,e):new Jm(a,o,e));break}else{let f=t.map[a];f===void 0&&(f=new Qm(a),Tl(t,f)),t=f}}}class ps{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);eg(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function El(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let tg=0;function ng(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}function ig(o){switch(o){case Mi:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Al(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+ng(o.getShaderSource(e),s)}else return i}function rg(o,e){const t=ig(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function sg(o,e){let t;switch(e){case oh:t="Linear";break;case lh:t="Reinhard";break;case ch:t="OptimizedCineon";break;case uh:t="ACESFilmic";break;case hh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ag(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wr).join(`
`)}function og(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lg(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[s]={type:r.type,location:o.getAttribLocation(e,s),locationSize:a}}return t}function wr(o){return o!==""}function Cl(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pl(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(o){return o.replace(cg,ug)}function ug(o,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return za(t)}const hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(o){return o.replace(hg,fg)}function fg(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dl(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dg(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===lc?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function pg(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Qi:case er:e="ENVMAP_TYPE_CUBE";break;case Ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mg(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case er:e="ENVMAP_MODE_REFRACTION";break}return e}function gg(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case hc:e="ENVMAP_BLENDING_MULTIPLY";break;case sh:e="ENVMAP_BLENDING_MIX";break;case ah:e="ENVMAP_BLENDING_ADD";break}return e}function _g(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xg(o,e,t,n){const i=o.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=dg(t),c=pg(t),u=mg(t),f=gg(t),h=_g(t),m=t.isWebGL2?"":ag(t),g=og(r),d=i.createProgram();let p,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(wr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(wr).join(`
`),_.length>0&&(_+=`
`)):(p=[Dl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),_=[m,Dl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Se.tonemapping_pars_fragment:"",t.toneMapping!==Ln?sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,rg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),s=za(s),s=Cl(s,t),s=Pl(s,t),a=za(a),a=Cl(a,t),a=Pl(a,t),s=Ll(s),a=Ll(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=M+p+s,S=M+_+a,v=El(i,35633,y),C=El(i,35632,S);if(i.attachShader(d,v),i.attachShader(d,C),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const b=i.getProgramInfoLog(d).trim(),E=i.getShaderInfoLog(v).trim(),N=i.getShaderInfoLog(C).trim();let H=!0,I=!0;if(i.getProgramParameter(d,35714)===!1){H=!1;const D=Al(i,v,"vertex"),V=Al(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+b+`
`+D+`
`+V)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(E===""||N==="")&&(I=!1);I&&(this.diagnostics={runnable:H,programLog:b,vertexShader:{log:E,prefix:p},fragmentShader:{log:N,prefix:_}})}i.deleteShader(v),i.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new ps(i,d)),L};let x;return this.getAttributes=function(){return x===void 0&&(x=lg(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=tg++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=v,this.fragmentShader=C,this}let vg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mg(e),t.set(e,n)),n}}class Mg{constructor(e){this.id=vg++,this.code=e,this.usedTimes=0}}function bg(o,e,t,n,i,r,s){const a=new yc,l=new yg,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,b,E,N,H){const I=N.fog,D=H.geometry,V=x.isMeshStandardMaterial?N.environment:null,j=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),Z=j&&j.mapping===Ls?j.image.height:null,z=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const K=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,J=K!==void 0?K.length:0;let le=0;D.morphAttributes.position!==void 0&&(le=1),D.morphAttributes.normal!==void 0&&(le=2),D.morphAttributes.color!==void 0&&(le=3);let k,$,ee,Q;if(z){const ze=un[z];k=ze.vertexShader,$=ze.fragmentShader}else k=x.vertexShader,$=x.fragmentShader,l.update(x),ee=l.getVertexShaderID(x),Q=l.getFragmentShaderID(x);const G=o.getRenderTarget(),_e=x.alphaTest>0,me=x.clearcoat>0,de=x.iridescence>0;return{isWebGL2:u,shaderID:z,shaderName:x.type,vertexShader:k,fragmentShader:$,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:h,outputEncoding:G===null?o.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Mi,map:!!x.map,matcap:!!x.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Z,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Dh,tangentSpaceNormalMap:x.normalMapType===Lh,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ge,clearcoat:me,clearcoatMap:me&&!!x.clearcoatMap,clearcoatRoughnessMap:me&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!x.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!x.iridescenceMap,iridescenceThicknessMap:de&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===ji,alphaMap:!!x.alphaMap,alphaTest:_e,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:le,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&E.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Ln,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kn,flipSided:x.side===Gt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const E in x.defines)b.push(E),b.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(_(b,x),M(b,x),b.push(o.outputEncoding)),b.push(x.customProgramCacheKey),b.join()}function _(x,b){x.push(b.precision),x.push(b.outputEncoding),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.combine),x.push(b.vertexUvs),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.physicallyCorrectLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.specularIntensityMap&&a.enable(15),b.specularColorMap&&a.enable(16),b.transmission&&a.enable(17),b.transmissionMap&&a.enable(18),b.thicknessMap&&a.enable(19),b.sheen&&a.enable(20),b.sheenColorMap&&a.enable(21),b.sheenRoughnessMap&&a.enable(22),b.decodeVideoTexture&&a.enable(23),b.opaque&&a.enable(24),x.push(a.mask)}function y(x){const b=g[x.type];let E;if(b){const N=un[b];E=of.clone(N.uniforms)}else E=x.uniforms;return E}function S(x,b){let E;for(let N=0,H=c.length;N<H;N++){const I=c[N];if(I.cacheKey===b){E=I,++E.usedTimes;break}}return E===void 0&&(E=new xg(o,b,x,r),c.push(E)),E}function v(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function C(x){l.remove(x)}function L(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:v,releaseShaderCache:C,programs:c,dispose:L}}function Sg(){let o=new WeakMap;function e(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function t(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function wg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Rl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Il(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(f,h,m,g,d,p){let _=o[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:d,group:p},o[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=p),e++,_}function a(f,h,m,g,d,p){const _=s(f,h,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(f,h,m,g,d,p){const _=s(f,h,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||wg),n.length>1&&n.sort(h||Rl),i.length>1&&i.sort(h||Rl)}function u(){for(let f=e,h=o.length;f<h;f++){const m=o[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Tg(){let o=new WeakMap;function e(n,i){const r=o.get(n);let s;return r===void 0?(s=new Il,o.set(n,[s])):i>=r.length?(s=new Il,r.push(s)):s=r[i],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function Eg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return o[e.id]=t,t}}}function Ag(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Cg=0;function Pg(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Lg(o,e){const t=new Eg,n=Ag(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new lt,a=new lt;function l(u,f){let h=0,m=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let d=0,p=0,_=0,M=0,y=0,S=0,v=0,C=0,L=0,x=0;u.sort(Pg);const b=f!==!0?Math.PI:1;for(let N=0,H=u.length;N<H;N++){const I=u[N],D=I.color,V=I.intensity,j=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=D.r*V*b,m+=D.g*V*b,g+=D.b*V*b;else if(I.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],V);else if(I.isDirectionalLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const K=I.shadow,J=n.get(I);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.directionalShadow[d]=J,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=I.shadow.matrix,S++}i.directional[d]=z,d++}else if(I.isSpotLight){const z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(D).multiplyScalar(V*b),z.distance=j,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[_]=z;const K=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,K.updateMatrices(I),I.castShadow&&x++),i.spotLightMatrix[_]=K.matrix,I.castShadow){const J=n.get(I);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=Z,C++}_++}else if(I.isRectAreaLight){const z=t.get(I);z.color.copy(D).multiplyScalar(V),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=z,M++}else if(I.isPointLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*b),z.distance=I.distance,z.decay=I.decay,I.castShadow){const K=I.shadow,J=n.get(I);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=I.shadow.matrix,v++}i.point[p]=z,p++}else if(I.isHemisphereLight){const z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(V*b),z.groundColor.copy(I.groundColor).multiplyScalar(V*b),i.hemi[y]=z,y++}}M>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const E=i.hash;(E.directionalLength!==d||E.pointLength!==p||E.spotLength!==_||E.rectAreaLength!==M||E.hemiLength!==y||E.numDirectionalShadows!==S||E.numPointShadows!==v||E.numSpotShadows!==C||E.numSpotMaps!==L)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=C+L-x,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=x,E.directionalLength=d,E.pointLength=p,E.spotLength=_,E.rectAreaLength=M,E.hemiLength=y,E.numDirectionalShadows=S,E.numPointShadows=v,E.numSpotShadows=C,E.numSpotMaps=L,i.version=Cg++)}function c(u,f){let h=0,m=0,g=0,d=0,p=0;const _=f.matrixWorldInverse;for(let M=0,y=u.length;M<y;M++){const S=u[M];if(S.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),h++}else if(S.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),g++}else if(S.isRectAreaLight){const v=i.rectArea[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),a.identity(),s.copy(S.matrixWorld),s.premultiply(_),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(S.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(_),m++}else if(S.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Fl(o,e){const t=new Lg(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function Dg(o,e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let l;return a===void 0?(l=new Fl(o,e),t.set(r,[l])):s>=a.length?(l=new Fl(o,e),a.push(l)):l=a[s],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Rg extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ig extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zg(o,e,t){let n=new Ec;const i=new Ee,r=new Ee,s=new ft,a=new Rg({depthPacking:Ph}),l=new Ig,c={},u=t.maxTextureSize,f={[qn]:Gt,[Gt]:qn,[kn]:kn},h=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Fg,fragmentShader:Og}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Cn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc,this.render=function(S,v,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const L=o.getRenderTarget(),x=o.getActiveCubeFace(),b=o.getActiveMipmapLevel(),E=o.state;E.setBlending(Hn),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);for(let N=0,H=S.length;N<H;N++){const I=S[N],D=I.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const V=D.getFrameExtents();if(i.multiply(V),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/V.x),i.x=r.x*V.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/V.y),i.y=r.y*V.y,D.mapSize.y=r.y)),D.map===null){const Z=this.type!==br?{minFilter:tt,magFilter:tt}:{};D.map=new bi(i.x,i.y,Z),D.map.texture.name=I.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const j=D.getViewportCount();for(let Z=0;Z<j;Z++){const z=D.getViewport(Z);s.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),E.viewport(s),D.updateMatrices(I,Z),n=D.getFrustum(),y(v,C,D.camera,I,this.type)}D.isPointLightShadow!==!0&&this.type===br&&_(D,C),D.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(L,x,b)};function _(S,v){const C=e.update(d);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new bi(i.x,i.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,o.setRenderTarget(S.mapPass),o.clear(),o.renderBufferDirect(v,null,C,h,d,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,o.setRenderTarget(S.map),o.clear(),o.renderBufferDirect(v,null,C,m,d,null)}function M(S,v,C,L,x,b){let E=null;const N=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)E=N;else if(E=C.isPointLight===!0?l:a,o.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const H=E.uuid,I=v.uuid;let D=c[H];D===void 0&&(D={},c[H]=D);let V=D[I];V===void 0&&(V=E.clone(),D[I]=V),E=V}return E.visible=v.visible,E.wireframe=v.wireframe,b===br?E.side=v.shadowSide!==null?v.shadowSide:v.side:E.side=v.shadowSide!==null?v.shadowSide:f[v.side],E.alphaMap=v.alphaMap,E.alphaTest=v.alphaTest,E.map=v.map,E.clipShadows=v.clipShadows,E.clippingPlanes=v.clippingPlanes,E.clipIntersection=v.clipIntersection,E.displacementMap=v.displacementMap,E.displacementScale=v.displacementScale,E.displacementBias=v.displacementBias,E.wireframeLinewidth=v.wireframeLinewidth,E.linewidth=v.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0&&(E.referencePosition.setFromMatrixPosition(C.matrixWorld),E.nearDistance=L,E.farDistance=x),E}function y(S,v,C,L,x){if(S.visible===!1)return;if(S.layers.test(v.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===br)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const N=e.update(S),H=S.material;if(Array.isArray(H)){const I=N.groups;for(let D=0,V=I.length;D<V;D++){const j=I[D],Z=H[j.materialIndex];if(Z&&Z.visible){const z=M(S,Z,L,C.near,C.far,x);o.renderBufferDirect(C,null,N,z,S,j)}}}else if(H.visible){const I=M(S,H,L,C.near,C.far,x);o.renderBufferDirect(C,null,N,I,S,null)}}const E=S.children;for(let N=0,H=E.length;N<H;N++)y(E[N],v,C,L,x)}}function Ng(o,e,t){const n=t.isWebGL2;function i(){let R=!1;const X=new ft;let te=null;const ue=new ft(0,0,0,0);return{setMask:function(ge){te!==ge&&!R&&(o.colorMask(ge,ge,ge,ge),te=ge)},setLocked:function(ge){R=ge},setClear:function(ge,Oe,st,pt,$n){$n===!0&&(ge*=pt,Oe*=pt,st*=pt),X.set(ge,Oe,st,pt),ue.equals(X)===!1&&(o.clearColor(ge,Oe,st,pt),ue.copy(X))},reset:function(){R=!1,te=null,ue.set(-1,0,0,0)}}}function r(){let R=!1,X=null,te=null,ue=null;return{setTest:function(ge){ge?_e(2929):me(2929)},setMask:function(ge){X!==ge&&!R&&(o.depthMask(ge),X=ge)},setFunc:function(ge){if(te!==ge){switch(ge){case Ju:o.depthFunc(512);break;case Qu:o.depthFunc(519);break;case eh:o.depthFunc(513);break;case Pa:o.depthFunc(515);break;case th:o.depthFunc(514);break;case nh:o.depthFunc(518);break;case ih:o.depthFunc(516);break;case rh:o.depthFunc(517);break;default:o.depthFunc(515)}te=ge}},setLocked:function(ge){R=ge},setClear:function(ge){ue!==ge&&(o.clearDepth(ge),ue=ge)},reset:function(){R=!1,X=null,te=null,ue=null}}}function s(){let R=!1,X=null,te=null,ue=null,ge=null,Oe=null,st=null,pt=null,$n=null;return{setTest:function(Ve){R||(Ve?_e(2960):me(2960))},setMask:function(Ve){X!==Ve&&!R&&(o.stencilMask(Ve),X=Ve)},setFunc:function(Ve,gn,qt){(te!==Ve||ue!==gn||ge!==qt)&&(o.stencilFunc(Ve,gn,qt),te=Ve,ue=gn,ge=qt)},setOp:function(Ve,gn,qt){(Oe!==Ve||st!==gn||pt!==qt)&&(o.stencilOp(Ve,gn,qt),Oe=Ve,st=gn,pt=qt)},setLocked:function(Ve){R=Ve},setClear:function(Ve){$n!==Ve&&(o.clearStencil(Ve),$n=Ve)},reset:function(){R=!1,X=null,te=null,ue=null,ge=null,Oe=null,st=null,pt=null,$n=null}}}const a=new i,l=new r,c=new s,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,d=[],p=null,_=!1,M=null,y=null,S=null,v=null,C=null,L=null,x=null,b=!1,E=null,N=null,H=null,I=null,D=null;const V=o.getParameter(35661);let j=!1,Z=0;const z=o.getParameter(7938);z.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(z)[1]),j=Z>=1):z.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),j=Z>=2);let K=null,J={};const le=o.getParameter(3088),k=o.getParameter(2978),$=new ft().fromArray(le),ee=new ft().fromArray(k);function Q(R,X,te){const ue=new Uint8Array(4),ge=o.createTexture();o.bindTexture(R,ge),o.texParameteri(R,10241,9728),o.texParameteri(R,10240,9728);for(let Oe=0;Oe<te;Oe++)o.texImage2D(X+Oe,0,6408,1,1,0,6408,5121,ue);return ge}const G={};G[3553]=Q(3553,3553,1),G[34067]=Q(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_e(2929),l.setFunc(Pa),je(!1),vt(wo),_e(2884),rt(Hn);function _e(R){h[R]!==!0&&(o.enable(R),h[R]=!0)}function me(R){h[R]!==!1&&(o.disable(R),h[R]=!1)}function de(R,X){return m[R]!==X?(o.bindFramebuffer(R,X),m[R]=X,n&&(R===36009&&(m[36160]=X),R===36160&&(m[36009]=X)),!0):!1}function ce(R,X){let te=d,ue=!1;if(R)if(te=g.get(X),te===void 0&&(te=[],g.set(X,te)),R.isWebGLMultipleRenderTargets){const ge=R.texture;if(te.length!==ge.length||te[0]!==36064){for(let Oe=0,st=ge.length;Oe<st;Oe++)te[Oe]=36064+Oe;te.length=ge.length,ue=!0}}else te[0]!==36064&&(te[0]=36064,ue=!0);else te[0]!==1029&&(te[0]=1029,ue=!0);ue&&(t.isWebGL2?o.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function ze(R){return p!==R?(o.useProgram(R),p=R,!0):!1}const be={[Wi]:32774,[Gu]:32778,[Vu]:32779};if(n)be[Ao]=32775,be[Co]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(be[Ao]=R.MIN_EXT,be[Co]=R.MAX_EXT)}const ve={[Hu]:0,[Wu]:1,[Xu]:768,[cc]:770,[Ku]:776,[Zu]:774,[Yu]:772,[qu]:769,[uc]:771,[$u]:775,[ju]:773};function rt(R,X,te,ue,ge,Oe,st,pt){if(R===Hn){_===!0&&(me(3042),_=!1);return}if(_===!1&&(_e(3042),_=!0),R!==Bu){if(R!==M||pt!==b){if((y!==Wi||C!==Wi)&&(o.blendEquation(32774),y=Wi,C=Wi),pt)switch(R){case ji:o.blendFuncSeparate(1,771,1,771);break;case xs:o.blendFunc(1,1);break;case To:o.blendFuncSeparate(0,769,0,1);break;case Eo:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ji:o.blendFuncSeparate(770,771,1,771);break;case xs:o.blendFunc(770,1);break;case To:o.blendFuncSeparate(0,769,0,1);break;case Eo:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}S=null,v=null,L=null,x=null,M=R,b=pt}return}ge=ge||X,Oe=Oe||te,st=st||ue,(X!==y||ge!==C)&&(o.blendEquationSeparate(be[X],be[ge]),y=X,C=ge),(te!==S||ue!==v||Oe!==L||st!==x)&&(o.blendFuncSeparate(ve[te],ve[ue],ve[Oe],ve[st]),S=te,v=ue,L=Oe,x=st),M=R,b=!1}function dt(R,X){R.side===kn?me(2884):_e(2884);let te=R.side===Gt;X&&(te=!te),je(te),R.blending===ji&&R.transparent===!1?rt(Hn):rt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const ue=R.stencilWrite;c.setTest(ue),ue&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Fe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?_e(32926):me(32926)}function je(R){E!==R&&(R?o.frontFace(2304):o.frontFace(2305),E=R)}function vt(R){R!==Nu?(_e(2884),R!==N&&(R===wo?o.cullFace(1029):R===Uu?o.cullFace(1028):o.cullFace(1032))):me(2884),N=R}function qe(R){R!==H&&(j&&o.lineWidth(R),H=R)}function Fe(R,X,te){R?(_e(32823),(I!==X||D!==te)&&(o.polygonOffset(X,te),I=X,D=te)):me(32823)}function Xt(R){R?_e(3089):me(3089)}function Et(R){R===void 0&&(R=33984+V-1),K!==R&&(o.activeTexture(R),K=R)}function A(R,X,te){te===void 0&&(K===null?te=33984+V-1:te=K);let ue=J[te];ue===void 0&&(ue={type:void 0,texture:void 0},J[te]=ue),(ue.type!==R||ue.texture!==X)&&(K!==te&&(o.activeTexture(te),K=te),o.bindTexture(R,X||G[R]),ue.type=R,ue.texture=X)}function w(){const R=J[K];R!==void 0&&R.type!==void 0&&(o.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function W(){try{o.compressedTexImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{o.compressedTexImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{o.texSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{o.texSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function P(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function F(){try{o.texStorage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{o.texStorage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{o.texImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{o.texImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(R){$.equals(R)===!1&&(o.scissor(R.x,R.y,R.z,R.w),$.copy(R))}function fe(R){ee.equals(R)===!1&&(o.viewport(R.x,R.y,R.z,R.w),ee.copy(R))}function Ae(R,X){let te=f.get(X);te===void 0&&(te=new WeakMap,f.set(X,te));let ue=te.get(R);ue===void 0&&(ue=o.getUniformBlockIndex(X,R.name),te.set(R,ue))}function Pe(R,X){const ue=f.get(X).get(R);u.get(X)!==ue&&(o.uniformBlockBinding(X,ue,R.__bindingPointIndex),u.set(X,ue))}function Ne(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},K=null,J={},m={},g=new WeakMap,d=[],p=null,_=!1,M=null,y=null,S=null,v=null,C=null,L=null,x=null,b=!1,E=null,N=null,H=null,I=null,D=null,$.set(0,0,o.canvas.width,o.canvas.height),ee.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:_e,disable:me,bindFramebuffer:de,drawBuffers:ce,useProgram:ze,setBlending:rt,setMaterial:dt,setFlipSided:je,setCullFace:vt,setLineWidth:qe,setPolygonOffset:Fe,setScissorTest:Xt,activeTexture:Et,bindTexture:A,unbindTexture:w,compressedTexImage2D:W,compressedTexImage3D:ne,texImage2D:he,texImage3D:ae,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:F,texStorage3D:oe,texSubImage2D:ie,texSubImage3D:se,compressedTexSubImage2D:ye,compressedTexSubImage3D:P,scissor:pe,viewport:fe,reset:Ne}}function Ug(o,e,t,n,i,r,s){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,w){return _?new OffscreenCanvas(A,w):Ms("canvas")}function y(A,w,W,ne){let ie=1;if((A.width>ne||A.height>ne)&&(ie=ne/Math.max(A.width,A.height)),ie<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const se=w?ys:Math.floor,ye=se(ie*A.width),P=se(ie*A.height);d===void 0&&(d=M(ye,P));const F=W?M(ye,P):d;return F.width=ye,F.height=P,F.getContext("2d").drawImage(A,0,0,ye,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ye+"x"+P+")."),F}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return Oa(A.width)&&Oa(A.height)}function v(A){return a?!1:A.wrapS!==on||A.wrapT!==on||A.minFilter!==tt&&A.minFilter!==$t}function C(A,w){return A.generateMipmaps&&w&&A.minFilter!==tt&&A.minFilter!==$t}function L(A){o.generateMipmap(A)}function x(A,w,W,ne,ie=!1){if(a===!1)return w;if(A!==null){if(o[A]!==void 0)return o[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=w;return w===6403&&(W===5126&&(se=33326),W===5131&&(se=33325),W===5121&&(se=33321)),w===33319&&(W===5126&&(se=33328),W===5131&&(se=33327),W===5121&&(se=33323)),w===6408&&(W===5126&&(se=34836),W===5131&&(se=34842),W===5121&&(se=ne===Ge&&ie===!1?35907:32856),W===32819&&(se=32854),W===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function b(A,w,W){return C(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==tt&&A.minFilter!==$t?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function E(A){return A===tt||A===Po||A===Gs?9728:9729}function N(A){const w=A.target;w.removeEventListener("dispose",N),I(w),w.isVideoTexture&&g.delete(w)}function H(A){const w=A.target;w.removeEventListener("dispose",H),V(w)}function I(A){const w=n.get(A);if(w.__webglInit===void 0)return;const W=A.source,ne=p.get(W);if(ne){const ie=ne[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&D(A),Object.keys(ne).length===0&&p.delete(W)}n.remove(A)}function D(A){const w=n.get(A);o.deleteTexture(w.__webglTexture);const W=A.source,ne=p.get(W);delete ne[w.__cacheKey],s.memory.textures--}function V(A){const w=A.texture,W=n.get(A),ne=n.get(w);if(ne.__webglTexture!==void 0&&(o.deleteTexture(ne.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)o.deleteFramebuffer(W.__webglFramebuffer[ie]),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer[ie]);else{if(o.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&o.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ie=0;ie<W.__webglColorRenderbuffer.length;ie++)W.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(W.__webglColorRenderbuffer[ie]);W.__webglDepthRenderbuffer&&o.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,se=w.length;ie<se;ie++){const ye=n.get(w[ie]);ye.__webglTexture&&(o.deleteTexture(ye.__webglTexture),s.memory.textures--),n.remove(w[ie])}n.remove(w),n.remove(A)}let j=0;function Z(){j=0}function z(){const A=j;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),j+=1,A}function K(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function J(A,w){const W=n.get(A);if(A.isVideoTexture&&Xt(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(W,A,w);return}}t.bindTexture(3553,W.__webglTexture,33984+w)}function le(A,w){const W=n.get(A);if(A.version>0&&W.__version!==A.version){me(W,A,w);return}t.bindTexture(35866,W.__webglTexture,33984+w)}function k(A,w){const W=n.get(A);if(A.version>0&&W.__version!==A.version){me(W,A,w);return}t.bindTexture(32879,W.__webglTexture,33984+w)}function $(A,w){const W=n.get(A);if(A.version>0&&W.__version!==A.version){de(W,A,w);return}t.bindTexture(34067,W.__webglTexture,33984+w)}const ee={[Ra]:10497,[on]:33071,[Ia]:33648},Q={[tt]:9728,[Po]:9984,[Gs]:9986,[$t]:9729,[fh]:9985,[Rr]:9987};function G(A,w,W){if(W?(o.texParameteri(A,10242,ee[w.wrapS]),o.texParameteri(A,10243,ee[w.wrapT]),(A===32879||A===35866)&&o.texParameteri(A,32882,ee[w.wrapR]),o.texParameteri(A,10240,Q[w.magFilter]),o.texParameteri(A,10241,Q[w.minFilter])):(o.texParameteri(A,10242,33071),o.texParameteri(A,10243,33071),(A===32879||A===35866)&&o.texParameteri(A,32882,33071),(w.wrapS!==on||w.wrapT!==on)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(A,10240,E(w.magFilter)),o.texParameteri(A,10241,E(w.minFilter)),w.minFilter!==tt&&w.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===tt||w.minFilter!==Gs&&w.minFilter!==Rr||w.type===An&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Ir&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(o.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function _e(A,w){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",N));const ne=w.source;let ie=p.get(ne);ie===void 0&&(ie={},p.set(ne,ie));const se=K(w);if(se!==A.__cacheKey){ie[se]===void 0&&(ie[se]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,W=!0),ie[se].usedTimes++;const ye=ie[A.__cacheKey];ye!==void 0&&(ie[A.__cacheKey].usedTimes--,ye.usedTimes===0&&D(w)),A.__cacheKey=se,A.__webglTexture=ie[se].texture}return W}function me(A,w,W){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const ie=_e(A,w),se=w.source;t.bindTexture(ne,A.__webglTexture,33984+W);const ye=n.get(se);if(se.version!==ye.__version||ie===!0){t.activeTexture(33984+W),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const P=v(w)&&S(w.image)===!1;let F=y(w.image,P,!1,u);F=Et(w,F);const oe=S(F)||a,he=r.convert(w.format,w.encoding);let ae=r.convert(w.type),pe=x(w.internalFormat,he,ae,w.encoding,w.isVideoTexture);G(ne,w,oe);let fe;const Ae=w.mipmaps,Pe=a&&w.isVideoTexture!==!0,Ne=ye.__version===void 0||ie===!0,R=b(w,F,oe);if(w.isDepthTexture)pe=6402,a?w.type===An?pe=36012:w.type===hi?pe=33190:w.type===Zi?pe=35056:pe=33189:w.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===pi&&pe===6402&&w.type!==dc&&w.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=hi,ae=r.convert(w.type)),w.format===tr&&pe===6402&&(pe=34041,w.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Zi,ae=r.convert(w.type))),Ne&&(Pe?t.texStorage2D(3553,1,pe,F.width,F.height):t.texImage2D(3553,0,pe,F.width,F.height,0,he,ae,null));else if(w.isDataTexture)if(Ae.length>0&&oe){Pe&&Ne&&t.texStorage2D(3553,R,pe,Ae[0].width,Ae[0].height);for(let X=0,te=Ae.length;X<te;X++)fe=Ae[X],Pe?t.texSubImage2D(3553,X,0,0,fe.width,fe.height,he,ae,fe.data):t.texImage2D(3553,X,pe,fe.width,fe.height,0,he,ae,fe.data);w.generateMipmaps=!1}else Pe?(Ne&&t.texStorage2D(3553,R,pe,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,he,ae,F.data)):t.texImage2D(3553,0,pe,F.width,F.height,0,he,ae,F.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Pe&&Ne&&t.texStorage3D(35866,R,pe,Ae[0].width,Ae[0].height,F.depth);for(let X=0,te=Ae.length;X<te;X++)fe=Ae[X],w.format!==Ut?he!==null?Pe?t.compressedTexSubImage3D(35866,X,0,0,0,fe.width,fe.height,F.depth,he,fe.data,0,0):t.compressedTexImage3D(35866,X,pe,fe.width,fe.height,F.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,X,0,0,0,fe.width,fe.height,F.depth,he,ae,fe.data):t.texImage3D(35866,X,pe,fe.width,fe.height,F.depth,0,he,ae,fe.data)}else{Pe&&Ne&&t.texStorage2D(3553,R,pe,Ae[0].width,Ae[0].height);for(let X=0,te=Ae.length;X<te;X++)fe=Ae[X],w.format!==Ut?he!==null?Pe?t.compressedTexSubImage2D(3553,X,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(3553,X,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,X,0,0,fe.width,fe.height,he,ae,fe.data):t.texImage2D(3553,X,pe,fe.width,fe.height,0,he,ae,fe.data)}else if(w.isDataArrayTexture)Pe?(Ne&&t.texStorage3D(35866,R,pe,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,he,ae,F.data)):t.texImage3D(35866,0,pe,F.width,F.height,F.depth,0,he,ae,F.data);else if(w.isData3DTexture)Pe?(Ne&&t.texStorage3D(32879,R,pe,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,he,ae,F.data)):t.texImage3D(32879,0,pe,F.width,F.height,F.depth,0,he,ae,F.data);else if(w.isFramebufferTexture){if(Ne)if(Pe)t.texStorage2D(3553,R,pe,F.width,F.height);else{let X=F.width,te=F.height;for(let ue=0;ue<R;ue++)t.texImage2D(3553,ue,pe,X,te,0,he,ae,null),X>>=1,te>>=1}}else if(Ae.length>0&&oe){Pe&&Ne&&t.texStorage2D(3553,R,pe,Ae[0].width,Ae[0].height);for(let X=0,te=Ae.length;X<te;X++)fe=Ae[X],Pe?t.texSubImage2D(3553,X,0,0,he,ae,fe):t.texImage2D(3553,X,pe,he,ae,fe);w.generateMipmaps=!1}else Pe?(Ne&&t.texStorage2D(3553,R,pe,F.width,F.height),t.texSubImage2D(3553,0,0,0,he,ae,F)):t.texImage2D(3553,0,pe,he,ae,F);C(w,oe)&&L(ne),ye.__version=se.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function de(A,w,W){if(w.image.length!==6)return;const ne=_e(A,w),ie=w.source;t.bindTexture(34067,A.__webglTexture,33984+W);const se=n.get(ie);if(ie.version!==se.__version||ne===!0){t.activeTexture(33984+W),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const ye=w.isCompressedTexture||w.image[0].isCompressedTexture,P=w.image[0]&&w.image[0].isDataTexture,F=[];for(let X=0;X<6;X++)!ye&&!P?F[X]=y(w.image[X],!1,!0,c):F[X]=P?w.image[X].image:w.image[X],F[X]=Et(w,F[X]);const oe=F[0],he=S(oe)||a,ae=r.convert(w.format,w.encoding),pe=r.convert(w.type),fe=x(w.internalFormat,ae,pe,w.encoding),Ae=a&&w.isVideoTexture!==!0,Pe=se.__version===void 0||ne===!0;let Ne=b(w,oe,he);G(34067,w,he);let R;if(ye){Ae&&Pe&&t.texStorage2D(34067,Ne,fe,oe.width,oe.height);for(let X=0;X<6;X++){R=F[X].mipmaps;for(let te=0;te<R.length;te++){const ue=R[te];w.format!==Ut?ae!==null?Ae?t.compressedTexSubImage2D(34069+X,te,0,0,ue.width,ue.height,ae,ue.data):t.compressedTexImage2D(34069+X,te,fe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+X,te,0,0,ue.width,ue.height,ae,pe,ue.data):t.texImage2D(34069+X,te,fe,ue.width,ue.height,0,ae,pe,ue.data)}}}else{R=w.mipmaps,Ae&&Pe&&(R.length>0&&Ne++,t.texStorage2D(34067,Ne,fe,F[0].width,F[0].height));for(let X=0;X<6;X++)if(P){Ae?t.texSubImage2D(34069+X,0,0,0,F[X].width,F[X].height,ae,pe,F[X].data):t.texImage2D(34069+X,0,fe,F[X].width,F[X].height,0,ae,pe,F[X].data);for(let te=0;te<R.length;te++){const ge=R[te].image[X].image;Ae?t.texSubImage2D(34069+X,te+1,0,0,ge.width,ge.height,ae,pe,ge.data):t.texImage2D(34069+X,te+1,fe,ge.width,ge.height,0,ae,pe,ge.data)}}else{Ae?t.texSubImage2D(34069+X,0,0,0,ae,pe,F[X]):t.texImage2D(34069+X,0,fe,ae,pe,F[X]);for(let te=0;te<R.length;te++){const ue=R[te];Ae?t.texSubImage2D(34069+X,te+1,0,0,ae,pe,ue.image[X]):t.texImage2D(34069+X,te+1,fe,ae,pe,ue.image[X])}}}C(w,he)&&L(34067),se.__version=ie.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ce(A,w,W,ne,ie){const se=r.convert(W.format,W.encoding),ye=r.convert(W.type),P=x(W.internalFormat,se,ye,W.encoding);n.get(w).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,P,w.width,w.height,w.depth,0,se,ye,null):t.texImage2D(ie,0,P,w.width,w.height,0,se,ye,null)),t.bindFramebuffer(36160,A),Fe(w)?h.framebufferTexture2DMultisampleEXT(36160,ne,ie,n.get(W).__webglTexture,0,qe(w)):(ie===3553||ie>=34069&&ie<=34074)&&o.framebufferTexture2D(36160,ne,ie,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(A,w,W){if(o.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(W||Fe(w)){const ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===An?ne=36012:ie.type===hi&&(ne=33190));const se=qe(w);Fe(w)?h.renderbufferStorageMultisampleEXT(36161,se,ne,w.width,w.height):o.renderbufferStorageMultisample(36161,se,ne,w.width,w.height)}else o.renderbufferStorage(36161,ne,w.width,w.height);o.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const ne=qe(w);W&&Fe(w)===!1?o.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Fe(w)?h.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):o.renderbufferStorage(36161,34041,w.width,w.height),o.framebufferRenderbuffer(36160,33306,36161,A)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0;ie<ne.length;ie++){const se=ne[ie],ye=r.convert(se.format,se.encoding),P=r.convert(se.type),F=x(se.internalFormat,ye,P,se.encoding),oe=qe(w);W&&Fe(w)===!1?o.renderbufferStorageMultisample(36161,oe,F,w.width,w.height):Fe(w)?h.renderbufferStorageMultisampleEXT(36161,oe,F,w.width,w.height):o.renderbufferStorage(36161,F,w.width,w.height)}}o.bindRenderbuffer(36161,null)}function be(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const ne=n.get(w.depthTexture).__webglTexture,ie=qe(w);if(w.depthTexture.format===pi)Fe(w)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,ie):o.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===tr)Fe(w)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,ie):o.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function ve(A){const w=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");be(w.__webglFramebuffer,A)}else if(W){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=o.createRenderbuffer(),ze(w.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),ze(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function rt(A,w,W){const ne=n.get(A);w!==void 0&&ce(ne.__webglFramebuffer,A,A.texture,36064,3553),W!==void 0&&ve(A)}function dt(A){const w=A.texture,W=n.get(A),ne=n.get(w);A.addEventListener("dispose",H),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture()),ne.__version=w.version,s.memory.textures++);const ie=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,ye=S(A)||a;if(ie){W.__webglFramebuffer=[];for(let P=0;P<6;P++)W.__webglFramebuffer[P]=o.createFramebuffer()}else{if(W.__webglFramebuffer=o.createFramebuffer(),se)if(i.drawBuffers){const P=A.texture;for(let F=0,oe=P.length;F<oe;F++){const he=n.get(P[F]);he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Fe(A)===!1){const P=se?w:[w];W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let F=0;F<P.length;F++){const oe=P[F];W.__webglColorRenderbuffer[F]=o.createRenderbuffer(),o.bindRenderbuffer(36161,W.__webglColorRenderbuffer[F]);const he=r.convert(oe.format,oe.encoding),ae=r.convert(oe.type),pe=x(oe.internalFormat,he,ae,oe.encoding,A.isXRRenderTarget===!0),fe=qe(A);o.renderbufferStorageMultisample(36161,fe,pe,A.width,A.height),o.framebufferRenderbuffer(36160,36064+F,36161,W.__webglColorRenderbuffer[F])}o.bindRenderbuffer(36161,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),ze(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ne.__webglTexture),G(34067,w,ye);for(let P=0;P<6;P++)ce(W.__webglFramebuffer[P],A,w,36064,34069+P);C(w,ye)&&L(34067),t.unbindTexture()}else if(se){const P=A.texture;for(let F=0,oe=P.length;F<oe;F++){const he=P[F],ae=n.get(he);t.bindTexture(3553,ae.__webglTexture),G(3553,he,ye),ce(W.__webglFramebuffer,A,he,36064+F,3553),C(he,ye)&&L(3553)}t.unbindTexture()}else{let P=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?P=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(P,ne.__webglTexture),G(P,w,ye),ce(W.__webglFramebuffer,A,w,36064,P),C(w,ye)&&L(P),t.unbindTexture()}A.depthBuffer&&ve(A)}function je(A){const w=S(A)||a,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,ie=W.length;ne<ie;ne++){const se=W[ne];if(C(se,w)){const ye=A.isWebGLCubeRenderTarget?34067:3553,P=n.get(se).__webglTexture;t.bindTexture(ye,P),L(ye),t.unbindTexture()}}}function vt(A){if(a&&A.samples>0&&Fe(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,ne=A.height;let ie=16384;const se=[],ye=A.stencilBuffer?33306:36096,P=n.get(A),F=A.isWebGLMultipleRenderTargets===!0;if(F)for(let oe=0;oe<w.length;oe++)t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,P.__webglFramebuffer),o.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer);for(let oe=0;oe<w.length;oe++){se.push(36064+oe),A.depthBuffer&&se.push(ye);const he=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(he===!1&&(A.depthBuffer&&(ie|=256),A.stencilBuffer&&(ie|=1024)),F&&o.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[oe]),he===!0&&(o.invalidateFramebuffer(36008,[ye]),o.invalidateFramebuffer(36009,[ye])),F){const ae=n.get(w[oe]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ae,0)}o.blitFramebuffer(0,0,W,ne,0,0,W,ne,ie,9728),m&&o.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let oe=0;oe<w.length;oe++){t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+oe,36161,P.__webglColorRenderbuffer[oe]);const he=n.get(w[oe]).__webglTexture;t.bindFramebuffer(36160,P.__webglFramebuffer),o.framebufferTexture2D(36009,36064+oe,3553,he,0)}t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function qe(A){return Math.min(f,A.samples)}function Fe(A){const w=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xt(A){const w=s.render.frame;g.get(A)!==w&&(g.set(A,w),A.update())}function Et(A,w){const W=A.encoding,ne=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Fa||W!==Mi&&(W===Ge?a===!1?e.has("EXT_sRGB")===!0&&ne===Ut?(A.format=Fa,A.minFilter=$t,A.generateMipmaps=!1):w=gc.sRGBToLinear(w):(ne!==Ut||ie!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),w}this.allocateTextureUnit=z,this.resetTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=le,this.setTexture3D=k,this.setTextureCube=$,this.rebindTextures=rt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Fe}function kg(o,e,t){const n=t.isWebGL2;function i(r,s=null){let a;if(r===yi)return 5121;if(r===gh)return 32819;if(r===_h)return 32820;if(r===dh)return 5120;if(r===ph)return 5122;if(r===dc)return 5123;if(r===mh)return 5124;if(r===hi)return 5125;if(r===An)return 5126;if(r===Ir)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xh)return 6406;if(r===Ut)return 6408;if(r===vh)return 6409;if(r===yh)return 6410;if(r===pi)return 6402;if(r===tr)return 34041;if(r===Fa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Mh)return 6403;if(r===bh)return 36244;if(r===Sh)return 33319;if(r===wh)return 33320;if(r===Th)return 36249;if(r===Vs||r===Hs||r===Ws||r===Xs)if(s===Ge)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Vs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Vs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ws)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lo||r===Do||r===Ro||r===Io)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Lo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Do)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ro)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Io)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fo||r===Oo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Fo)return s===Ge?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Oo)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zo||r===No||r===Uo||r===ko||r===Bo||r===Go||r===Vo||r===Ho||r===Wo||r===Xo||r===qo||r===Yo||r===jo||r===Zo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===zo)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===No)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Uo)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ko)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bo)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Go)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vo)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ho)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wo)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xo)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qo)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yo)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jo)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zo)return s===Ge?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===qs)return s===Ge?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ah||r===$o||r===Ko||r===Jo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===qs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===$o)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ko)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class Bg extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fi extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gg={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),_=this._getHandJoint(c,d);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Vg extends Pt{constructor(e,t,n,i,r,s,a,l,c,u){if(u=u!==void 0?u:pi,u!==pi&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pi&&(n=hi),n===void 0&&u===tr&&(n=Zi),super(null,i,r,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tt,this.minFilter=l!==void 0?l:tt,this.flipY=!1,this.generateMipmaps=!1}}class Hg extends Ti{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,g=null;const d=t.getContextAttributes();let p=null,_=null;const M=[],y=[],S=new Set,v=new Map,C=new Kt;C.layers.enable(1),C.viewport=new ft;const L=new Kt;L.layers.enable(2),L.viewport=new ft;const x=[C,L],b=new Bg;b.layers.enable(1),b.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=M[k];return $===void 0&&($=new _a,M[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=M[k];return $===void 0&&($=new _a,M[k]=$),$.getGripSpace()},this.getHand=function(k){let $=M[k];return $===void 0&&($=new _a,M[k]=$),$.getHandSpace()};function H(k){const $=y.indexOf(k.inputSource);if($===-1)return;const ee=M[$];ee!==void 0&&ee.dispatchEvent({type:k.type,data:k.inputSource})}function I(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",D);for(let k=0;k<M.length;k++){const $=y[k];$!==null&&(y[k]=null,M[k].disconnect($))}E=null,N=null,e.setRenderTarget(p),m=null,h=null,f=null,i=null,_=null,le.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",I),i.addEventListener("inputsourceschange",D),d.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:m}),_=new bi(m.framebufferWidth,m.framebufferHeight,{format:Ut,type:yi,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let $=null,ee=null,Q=null;d.depth&&(Q=d.stencil?35056:33190,$=d.stencil?tr:pi,ee=d.stencil?Zi:hi);const G={colorFormat:32856,depthFormat:Q,scaleFactor:r};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(G),i.updateRenderState({layers:[h]}),_=new bi(h.textureWidth,h.textureHeight,{format:Ut,type:yi,depthTexture:new Vg(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const _e=e.properties.get(_);_e.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(a),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(k){for(let $=0;$<k.removed.length;$++){const ee=k.removed[$],Q=y.indexOf(ee);Q>=0&&(y[Q]=null,M[Q].disconnect(ee))}for(let $=0;$<k.added.length;$++){const ee=k.added[$];let Q=y.indexOf(ee);if(Q===-1){for(let _e=0;_e<M.length;_e++)if(_e>=y.length){y.push(ee),Q=_e;break}else if(y[_e]===null){y[_e]=ee,Q=_e;break}if(Q===-1)break}const G=M[Q];G&&G.connect(ee)}}const V=new U,j=new U;function Z(k,$,ee){V.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(ee.matrixWorld);const Q=V.distanceTo(j),G=$.projectionMatrix.elements,_e=ee.projectionMatrix.elements,me=G[14]/(G[10]-1),de=G[14]/(G[10]+1),ce=(G[9]+1)/G[5],ze=(G[9]-1)/G[5],be=(G[8]-1)/G[0],ve=(_e[8]+1)/_e[0],rt=me*be,dt=me*ve,je=Q/(-be+ve),vt=je*-be;$.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(vt),k.translateZ(je),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const qe=me+je,Fe=de+je,Xt=rt-vt,Et=dt+(Q-vt),A=ce*de/Fe*qe,w=ze*de/Fe*qe;k.projectionMatrix.makePerspective(Xt,Et,A,w,qe,Fe)}function z(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;b.near=L.near=C.near=k.near,b.far=L.far=C.far=k.far,(E!==b.near||N!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,N=b.far);const $=k.parent,ee=b.cameras;z(b,$);for(let G=0;G<ee.length;G++)z(ee[G],$);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),k.matrix.copy(b.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const Q=k.children;for(let G=0,_e=Q.length;G<_e;G++)Q[G].updateMatrixWorld(!0);ee.length===2?Z(b,C,L):b.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.getPlanes=function(){return S};let K=null;function J(k,$){if(u=$.getViewerPose(c||s),g=$,u!==null){const ee=u.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Q=!1;ee.length!==b.cameras.length&&(b.cameras.length=0,Q=!0);for(let G=0;G<ee.length;G++){const _e=ee[G];let me=null;if(m!==null)me=m.getViewport(_e);else{const ce=f.getViewSubImage(h,_e);me=ce.viewport,G===0&&(e.setRenderTargetTextures(_,ce.colorTexture,h.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(_))}let de=x[G];de===void 0&&(de=new Kt,de.layers.enable(G),de.viewport=new ft,x[G]=de),de.matrix.fromArray(_e.transform.matrix),de.projectionMatrix.fromArray(_e.projectionMatrix),de.viewport.set(me.x,me.y,me.width,me.height),G===0&&b.matrix.copy(de.matrix),Q===!0&&b.cameras.push(de)}}for(let ee=0;ee<M.length;ee++){const Q=y[ee],G=M[ee];Q!==null&&G!==void 0&&G.update(Q,$,c||s)}if(K&&K(k,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ee=null;for(const Q of S)$.detectedPlanes.has(Q)||(ee===null&&(ee=[]),ee.push(Q));if(ee!==null)for(const Q of ee)S.delete(Q),v.delete(Q),n.dispatchEvent({type:"planeremoved",data:Q});for(const Q of $.detectedPlanes)if(!S.has(Q))S.add(Q),v.set(Q,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Q});else{const G=v.get(Q);Q.lastChangedTime>G&&(v.set(Q,Q.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Q}))}}g=null}const le=new Ac;le.setAnimationLoop(J),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function Wg(o,e){function t(d,p){p.color.getRGB(d.fogColor.value,Sc(o)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,y)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&s(d,p)):p.isPointsMaterial?a(d,p,_,M):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Gt&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Gt&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const S=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uv2Transform.value.copy(y.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function s(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,_,M){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=M*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uvTransform.value.copy(y.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Gt&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Xg(o,e,t,n){let i={},r={},s=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(M,y){const S=y.program;n.uniformBlockBinding(M,S)}function c(M,y){let S=i[M.id];S===void 0&&(g(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const v=y.program;n.updateUBOMapping(M,v);const C=e.render.frame;r[M.id]!==C&&(h(M),r[M.id]=C)}function u(M){const y=f();M.__bindingPointIndex=y;const S=o.createBuffer(),v=M.__size,C=M.usage;return o.bindBuffer(35345,S),o.bufferData(35345,v,C),o.bindBuffer(35345,null),o.bindBufferBase(35345,y,S),S}function f(){for(let M=0;M<a;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=i[M.id],S=M.uniforms,v=M.__cache;o.bindBuffer(35345,y);for(let C=0,L=S.length;C<L;C++){const x=S[C];if(m(x,C,v)===!0){const b=x.__offset,E=Array.isArray(x.value)?x.value:[x.value];let N=0;for(let H=0;H<E.length;H++){const I=E[H],D=d(I);typeof I=="number"?(x.__data[0]=I,o.bufferSubData(35345,b+N,x.__data)):I.isMatrix3?(x.__data[0]=I.elements[0],x.__data[1]=I.elements[1],x.__data[2]=I.elements[2],x.__data[3]=I.elements[0],x.__data[4]=I.elements[3],x.__data[5]=I.elements[4],x.__data[6]=I.elements[5],x.__data[7]=I.elements[0],x.__data[8]=I.elements[6],x.__data[9]=I.elements[7],x.__data[10]=I.elements[8],x.__data[11]=I.elements[0]):(I.toArray(x.__data,N),N+=D.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,b,x.__data)}}o.bindBuffer(35345,null)}function m(M,y,S){const v=M.value;if(S[y]===void 0){if(typeof v=="number")S[y]=v;else{const C=Array.isArray(v)?v:[v],L=[];for(let x=0;x<C.length;x++)L.push(C[x].clone());S[y]=L}return!0}else if(typeof v=="number"){if(S[y]!==v)return S[y]=v,!0}else{const C=Array.isArray(S[y])?S[y]:[S[y]],L=Array.isArray(v)?v:[v];for(let x=0;x<C.length;x++){const b=C[x];if(b.equals(L[x])===!1)return b.copy(L[x]),!0}}return!1}function g(M){const y=M.uniforms;let S=0;const v=16;let C=0;for(let L=0,x=y.length;L<x;L++){const b=y[L],E={boundary:0,storage:0},N=Array.isArray(b.value)?b.value:[b.value];for(let H=0,I=N.length;H<I;H++){const D=N[H],V=d(D);E.boundary+=V.boundary,E.storage+=V.storage}if(b.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=S,L>0){C=S%v;const H=v-C;C!==0&&H-E.boundary<0&&(S+=v-C,b.__offset=S)}S+=E.storage}return C=S%v,C>0&&(S+=v-C),M.__size=S,M.__cache={},this}function d(M){const y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const S=s.indexOf(y.__bindingPointIndex);s.splice(S,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function _(){for(const M in i)o.deleteBuffer(i[M]);s=[],i={},r={}}return{bind:l,update:c,dispose:_}}function qg(){const o=Ms("canvas");return o.style.display="block",o}function Yg(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:qg(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,s=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mi,this.physicallyCorrectLights=!1,this.toneMapping=Ln,this.toneMappingExposure=1;const d=this;let p=!1,_=0,M=0,y=null,S=-1,v=null;const C=new ft,L=new ft;let x=null,b=e.width,E=e.height,N=1,H=null,I=null;const D=new ft(0,0,b,E),V=new ft(0,0,b,E);let j=!1;const Z=new Ec;let z=!1,K=!1,J=null;const le=new lt,k=new Ee,$=new U,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Q(){return y===null?N:1}let G=t;function _e(T,B){for(let q=0;q<T.length;q++){const O=T[q],Y=e.getContext(O,B);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qa}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Ae,!1),G===null){const B=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&B.shift(),G=_e(B,T),G===null)throw _e(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let me,de,ce,ze,be,ve,rt,dt,je,vt,qe,Fe,Xt,Et,A,w,W,ne,ie,se,ye,P,F,oe;function he(){me=new im(G),de=new $p(G,me,o),me.init(de),P=new kg(G,me,de),ce=new Ng(G,me,de),ze=new am,be=new Sg,ve=new Ug(G,me,ce,be,de,P,ze),rt=new Jp(d),dt=new nm(d),je=new pf(G,de),F=new jp(G,me,je,de),vt=new rm(G,je,ze,F),qe=new um(G,vt,je,ze),ie=new cm(G,de,ve),w=new Kp(be),Fe=new bg(d,rt,dt,me,de,F,w),Xt=new Wg(d,be),Et=new Tg,A=new Dg(me,de),ne=new Yp(d,rt,dt,ce,qe,u,s),W=new zg(d,qe,de),oe=new Xg(G,ze,de,ce),se=new Zp(G,me,ze,de),ye=new sm(G,me,ze,de),ze.programs=Fe.programs,d.capabilities=de,d.extensions=me,d.properties=be,d.renderLists=Et,d.shadowMap=W,d.state=ce,d.info=ze}he();const ae=new Hg(d,G);this.xr=ae,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(b,E,!1))},this.getSize=function(T){return T.set(b,E)},this.setSize=function(T,B,q){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=T,E=B,e.width=Math.floor(T*N),e.height=Math.floor(B*N),q!==!1&&(e.style.width=T+"px",e.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(b*N,E*N).floor()},this.setDrawingBufferSize=function(T,B,q){b=T,E=B,N=q,e.width=Math.floor(T*q),e.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,B,q,O){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,B,q,O),ce.viewport(C.copy(D).multiplyScalar(N).floor())},this.getScissor=function(T){return T.copy(V)},this.setScissor=function(T,B,q,O){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,B,q,O),ce.scissor(L.copy(V).multiplyScalar(N).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(T){ce.setScissorTest(j=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(T=!0,B=!0,q=!0){let O=0;T&&(O|=16384),B&&(O|=256),q&&(O|=1024),G.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ae,!1),Et.dispose(),A.dispose(),be.dispose(),rt.dispose(),dt.dispose(),qe.dispose(),F.dispose(),oe.dispose(),Fe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ue),ae.removeEventListener("sessionend",ge),J&&(J.dispose(),J=null),Oe.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=ze.autoReset,B=W.enabled,q=W.autoUpdate,O=W.needsUpdate,Y=W.type;he(),ze.autoReset=T,W.enabled=B,W.autoUpdate=q,W.needsUpdate=O,W.type=Y}function Ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pe(T){const B=T.target;B.removeEventListener("dispose",Pe),Ne(B)}function Ne(T){R(T),be.remove(T)}function R(T){const B=be.get(T).programs;B!==void 0&&(B.forEach(function(q){Fe.releaseProgram(q)}),T.isShaderMaterial&&Fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,O,Y,xe){B===null&&(B=ee);const Me=Y.isMesh&&Y.matrixWorld.determinant()<0,we=Iu(T,B,q,O,Y);ce.setMaterial(O,Me);let Te=q.index,Ie=1;O.wireframe===!0&&(Te=vt.getWireframeAttribute(q),Ie=2);const Le=q.drawRange,De=q.attributes.position;let Ze=Le.start*Ie,It=(Le.start+Le.count)*Ie;xe!==null&&(Ze=Math.max(Ze,xe.start*Ie),It=Math.min(It,(xe.start+xe.count)*Ie)),Te!==null?(Ze=Math.max(Ze,0),It=Math.min(It,Te.count)):De!=null&&(Ze=Math.max(Ze,0),It=Math.min(It,De.count));const _n=It-Ze;if(_n<0||_n===1/0)return;F.setup(Y,O,we,q,Te);let Kn,$e=se;if(Te!==null&&(Kn=je.get(Te),$e=ye,$e.setIndex(Kn)),Y.isMesh)O.wireframe===!0?(ce.setLineWidth(O.wireframeLinewidth*Q()),$e.setMode(1)):$e.setMode(4);else if(Y.isLine){let Re=O.linewidth;Re===void 0&&(Re=1),ce.setLineWidth(Re*Q()),Y.isLineSegments?$e.setMode(1):Y.isLineLoop?$e.setMode(2):$e.setMode(3)}else Y.isPoints?$e.setMode(0):Y.isSprite&&$e.setMode(4);if(Y.isInstancedMesh)$e.renderInstances(Ze,_n,Y.count);else if(q.isInstancedBufferGeometry){const Re=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ns=Math.min(q.instanceCount,Re);$e.renderInstances(Ze,_n,Ns)}else $e.render(Ze,_n)},this.compile=function(T,B){function q(O,Y,xe){O.transparent===!0&&O.side===kn&&O.forceSinglePass===!1?(O.side=Gt,O.needsUpdate=!0,qt(O,Y,xe),O.side=qn,O.needsUpdate=!0,qt(O,Y,xe),O.side=kn):qt(O,Y,xe)}h=A.get(T),h.init(),g.push(h),T.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights(d.physicallyCorrectLights),T.traverse(function(O){const Y=O.material;if(Y)if(Array.isArray(Y))for(let xe=0;xe<Y.length;xe++){const Me=Y[xe];q(Me,T,O)}else q(Y,T,O)}),g.pop(),h=null};let X=null;function te(T){X&&X(T)}function ue(){Oe.stop()}function ge(){Oe.start()}const Oe=new Ac;Oe.setAnimationLoop(te),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(T){X=T,ae.setAnimationLoop(T),T===null?Oe.stop():Oe.start()},ae.addEventListener("sessionstart",ue),ae.addEventListener("sessionend",ge),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,B,y),h=A.get(T,g.length),h.init(),g.push(h),le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Z.setFromProjectionMatrix(le),K=this.localClippingEnabled,z=w.init(this.clippingPlanes,K),f=Et.get(T,m.length),f.init(),m.push(f),st(T,B,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(H,I),z===!0&&w.beginShadows();const q=h.state.shadowsArray;if(W.render(q,T,B),z===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(f,T),h.setupLights(d.physicallyCorrectLights),B.isArrayCamera){const O=B.cameras;for(let Y=0,xe=O.length;Y<xe;Y++){const Me=O[Y];pt(f,T,Me,Me.viewport)}}else pt(f,T,B);y!==null&&(ve.updateMultisampleRenderTarget(y),ve.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(d,T,B),F.resetDefaultState(),S=-1,v=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function st(T,B,q,O){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){O&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);const Me=qe.update(T),we=T.material;we.visible&&f.push(T,Me,we,q,$.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==ze.render.frame&&(T.skeleton.update(),T.skeleton.frame=ze.render.frame),!T.frustumCulled||Z.intersectsObject(T))){O&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);const Me=qe.update(T),we=T.material;if(Array.isArray(we)){const Te=Me.groups;for(let Ie=0,Le=Te.length;Ie<Le;Ie++){const De=Te[Ie],Ze=we[De.materialIndex];Ze&&Ze.visible&&f.push(T,Me,Ze,q,$.z,De)}}else we.visible&&f.push(T,Me,we,q,$.z,null)}}const xe=T.children;for(let Me=0,we=xe.length;Me<we;Me++)st(xe[Me],B,q,O)}function pt(T,B,q,O){const Y=T.opaque,xe=T.transmissive,Me=T.transparent;h.setupLightsView(q),z===!0&&w.setGlobalState(d.clippingPlanes,q),xe.length>0&&$n(Y,B,q),O&&ce.viewport(C.copy(O)),Y.length>0&&Ve(Y,B,q),xe.length>0&&Ve(xe,B,q),Me.length>0&&Ve(Me,B,q),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function $n(T,B,q){const O=de.isWebGL2;J===null&&(J=new bi(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Ir:yi,minFilter:Rr,samples:O&&r===!0?4:0})),d.getDrawingBufferSize(k),O?J.setSize(k.x,k.y):J.setSize(ys(k.x),ys(k.y));const Y=d.getRenderTarget();d.setRenderTarget(J),d.clear();const xe=d.toneMapping;d.toneMapping=Ln,Ve(T,B,q),d.toneMapping=xe,ve.updateMultisampleRenderTarget(J),ve.updateRenderTargetMipmap(J),d.setRenderTarget(Y)}function Ve(T,B,q){const O=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,xe=T.length;Y<xe;Y++){const Me=T[Y],we=Me.object,Te=Me.geometry,Ie=O===null?Me.material:O,Le=Me.group;we.layers.test(q.layers)&&gn(we,B,q,Te,Ie,Le)}}function gn(T,B,q,O,Y,xe){T.onBeforeRender(d,B,q,O,Y,xe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(d,B,q,O,T,xe),Y.transparent===!0&&Y.side===kn&&Y.forceSinglePass===!1?(Y.side=Gt,Y.needsUpdate=!0,d.renderBufferDirect(q,B,O,Y,T,xe),Y.side=qn,Y.needsUpdate=!0,d.renderBufferDirect(q,B,O,Y,T,xe),Y.side=kn):d.renderBufferDirect(q,B,O,Y,T,xe),T.onAfterRender(d,B,q,O,Y,xe)}function qt(T,B,q){B.isScene!==!0&&(B=ee);const O=be.get(T),Y=h.state.lights,xe=h.state.shadowsArray,Me=Y.state.version,we=Fe.getParameters(T,Y.state,xe,B,q),Te=Fe.getProgramCacheKey(we);let Ie=O.programs;O.environment=T.isMeshStandardMaterial?B.environment:null,O.fog=B.fog,O.envMap=(T.isMeshStandardMaterial?dt:rt).get(T.envMap||O.environment),Ie===void 0&&(T.addEventListener("dispose",Pe),Ie=new Map,O.programs=Ie);let Le=Ie.get(Te);if(Le!==void 0){if(O.currentProgram===Le&&O.lightsStateVersion===Me)return Mo(T,we),Le}else we.uniforms=Fe.getUniforms(T),T.onBuild(q,we,d),T.onBeforeCompile(we,d),Le=Fe.acquireProgram(we,Te),Ie.set(Te,Le),O.uniforms=we.uniforms;const De=O.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=w.uniform),Mo(T,we),O.needsLights=Ou(T),O.lightsStateVersion=Me,O.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.directionalShadowMap.value=Y.state.directionalShadowMap,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotShadowMap.value=Y.state.spotShadowMap,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMap.value=Y.state.pointShadowMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix);const Ze=Le.getUniforms(),It=ps.seqWithValue(Ze.seq,De);return O.currentProgram=Le,O.uniformsList=It,Le}function Mo(T,B){const q=be.get(T);q.outputEncoding=B.outputEncoding,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Iu(T,B,q,O,Y){B.isScene!==!0&&(B=ee),ve.resetTextureUnits();const xe=B.fog,Me=O.isMeshStandardMaterial?B.environment:null,we=y===null?d.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Mi,Te=(O.isMeshStandardMaterial?dt:rt).get(O.envMap||Me),Ie=O.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Le=!!O.normalMap&&!!q.attributes.tangent,De=!!q.morphAttributes.position,Ze=!!q.morphAttributes.normal,It=!!q.morphAttributes.color,_n=O.toneMapped?d.toneMapping:Ln,Kn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,$e=Kn!==void 0?Kn.length:0,Re=be.get(O),Ns=h.state.lights;if(z===!0&&(K===!0||T!==v)){const Ft=T===v&&O.id===S;w.setState(O,T,Ft)}let at=!1;O.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Ns.state.version||Re.outputEncoding!==we||Y.isInstancedMesh&&Re.instancing===!1||!Y.isInstancedMesh&&Re.instancing===!0||Y.isSkinnedMesh&&Re.skinning===!1||!Y.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Te||O.fog===!0&&Re.fog!==xe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==w.numPlanes||Re.numIntersection!==w.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==Le||Re.morphTargets!==De||Re.morphNormals!==Ze||Re.morphColors!==It||Re.toneMapping!==_n||de.isWebGL2===!0&&Re.morphTargetsCount!==$e)&&(at=!0):(at=!0,Re.__version=O.version);let Jn=Re.currentProgram;at===!0&&(Jn=qt(O,B,Y));let bo=!1,fr=!1,Us=!1;const yt=Jn.getUniforms(),Qn=Re.uniforms;if(ce.useProgram(Jn.program)&&(bo=!0,fr=!0,Us=!0),O.id!==S&&(S=O.id,fr=!0),bo||v!==T){if(yt.setValue(G,"projectionMatrix",T.projectionMatrix),de.logarithmicDepthBuffer&&yt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),v!==T&&(v=T,fr=!0,Us=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Ft=yt.map.cameraPosition;Ft!==void 0&&Ft.setValue(G,$.setFromMatrixPosition(T.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&yt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||Y.isSkinnedMesh)&&yt.setValue(G,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){yt.setOptional(G,Y,"bindMatrix"),yt.setOptional(G,Y,"bindMatrixInverse");const Ft=Y.skeleton;Ft&&(de.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),yt.setValue(G,"boneTexture",Ft.boneTexture,ve),yt.setValue(G,"boneTextureSize",Ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ks=q.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0&&de.isWebGL2===!0)&&ie.update(Y,q,O,Jn),(fr||Re.receiveShadow!==Y.receiveShadow)&&(Re.receiveShadow=Y.receiveShadow,yt.setValue(G,"receiveShadow",Y.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Qn.envMap.value=Te,Qn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),fr&&(yt.setValue(G,"toneMappingExposure",d.toneMappingExposure),Re.needsLights&&Fu(Qn,Us),xe&&O.fog===!0&&Xt.refreshFogUniforms(Qn,xe),Xt.refreshMaterialUniforms(Qn,O,N,E,J),ps.upload(G,Re.uniformsList,Qn,ve)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ps.upload(G,Re.uniformsList,Qn,ve),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&yt.setValue(G,"center",Y.center),yt.setValue(G,"modelViewMatrix",Y.modelViewMatrix),yt.setValue(G,"normalMatrix",Y.normalMatrix),yt.setValue(G,"modelMatrix",Y.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ft=O.uniformsGroups;for(let Bs=0,zu=Ft.length;Bs<zu;Bs++)if(de.isWebGL2){const So=Ft[Bs];oe.update(So,Jn),oe.bind(So,Jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jn}function Fu(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Ou(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,B,q){be.get(T.texture).__webglTexture=B,be.get(T.depthTexture).__webglTexture=q;const O=be.get(T);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=q===void 0,O.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const q=be.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,q=0){y=T,_=B,M=q;let O=!0,Y=null,xe=!1,Me=!1;if(T){const Te=be.get(T);Te.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),O=!1):Te.__webglFramebuffer===void 0?ve.setupRenderTarget(T):Te.__hasExternalTextures&&ve.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);const Le=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=Le[B],xe=!0):de.isWebGL2&&T.samples>0&&ve.useMultisampledRTT(T)===!1?Y=be.get(T).__webglMultisampledFramebuffer:Y=Le,C.copy(T.viewport),L.copy(T.scissor),x=T.scissorTest}else C.copy(D).multiplyScalar(N).floor(),L.copy(V).multiplyScalar(N).floor(),x=j;if(ce.bindFramebuffer(36160,Y)&&de.drawBuffers&&O&&ce.drawBuffers(T,Y),ce.viewport(C),ce.scissor(L),ce.setScissorTest(x),xe){const Te=be.get(T.texture);G.framebufferTexture2D(36160,36064,34069+B,Te.__webglTexture,q)}else if(Me){const Te=be.get(T.texture),Ie=B||0;G.framebufferTextureLayer(36160,36064,Te.__webglTexture,q||0,Ie)}S=-1},this.readRenderTargetPixels=function(T,B,q,O,Y,xe,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){ce.bindFramebuffer(36160,we);try{const Te=T.texture,Ie=Te.format,Le=Te.type;if(Ie!==Ut&&P.convert(Ie)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===Ir&&(me.has("EXT_color_buffer_half_float")||de.isWebGL2&&me.has("EXT_color_buffer_float"));if(Le!==yi&&P.convert(Le)!==G.getParameter(35738)&&!(Le===An&&(de.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-O&&q>=0&&q<=T.height-Y&&G.readPixels(B,q,O,Y,P.convert(Ie),P.convert(Le),xe)}finally{const Te=y!==null?be.get(y).__webglFramebuffer:null;ce.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(T,B,q=0){const O=Math.pow(2,-q),Y=Math.floor(B.image.width*O),xe=Math.floor(B.image.height*O);ve.setTexture2D(B,0),G.copyTexSubImage2D(3553,q,0,0,T.x,T.y,Y,xe),ce.unbindTexture()},this.copyTextureToTexture=function(T,B,q,O=0){const Y=B.image.width,xe=B.image.height,Me=P.convert(q.format),we=P.convert(q.type);ve.setTexture2D(q,0),G.pixelStorei(37440,q.flipY),G.pixelStorei(37441,q.premultiplyAlpha),G.pixelStorei(3317,q.unpackAlignment),B.isDataTexture?G.texSubImage2D(3553,O,T.x,T.y,Y,xe,Me,we,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(3553,O,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Me,B.mipmaps[0].data):G.texSubImage2D(3553,O,T.x,T.y,Me,we,B.image),O===0&&q.generateMipmaps&&G.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(T,B,q,O,Y=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,we=T.max.z-T.min.z+1,Te=P.convert(O.format),Ie=P.convert(O.type);let Le;if(O.isData3DTexture)ve.setTexture3D(O,0),Le=32879;else if(O.isDataArrayTexture)ve.setTexture2DArray(O,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,O.flipY),G.pixelStorei(37441,O.premultiplyAlpha),G.pixelStorei(3317,O.unpackAlignment);const De=G.getParameter(3314),Ze=G.getParameter(32878),It=G.getParameter(3316),_n=G.getParameter(3315),Kn=G.getParameter(32877),$e=q.isCompressedTexture?q.mipmaps[0]:q.image;G.pixelStorei(3314,$e.width),G.pixelStorei(32878,$e.height),G.pixelStorei(3316,T.min.x),G.pixelStorei(3315,T.min.y),G.pixelStorei(32877,T.min.z),q.isDataTexture||q.isData3DTexture?G.texSubImage3D(Le,Y,B.x,B.y,B.z,xe,Me,we,Te,Ie,$e.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Le,Y,B.x,B.y,B.z,xe,Me,we,Te,$e.data)):G.texSubImage3D(Le,Y,B.x,B.y,B.z,xe,Me,we,Te,Ie,$e),G.pixelStorei(3314,De),G.pixelStorei(32878,Ze),G.pixelStorei(3316,It),G.pixelStorei(3315,_n),G.pixelStorei(32877,Kn),Y===0&&O.generateMipmaps&&G.generateMipmap(Le),ce.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ve.setTextureCube(T,0):T.isData3DTexture?ve.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ve.setTexture2DArray(T,0):ve.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){_=0,M=0,y=null,ce.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Rc extends Yg{}Rc.prototype.isWebGL1Renderer=!0;class jg extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ol extends Pt{constructor(e=null,t=1,n=1,i,r,s,a,l,c=tt,u=tt,f,h){super(null,s,a,l,c,u,i,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zg extends Vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zl=new lt,Na=new vc,cs=new Ds,us=new U;class Nl extends wt{constructor(e=new mn,t=new Zg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(i),cs.radius+=r,e.ray.intersectsSphere(cs)===!1)return;zl.copy(i).invert(),Na.copy(e.ray).applyMatrix4(zl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=h,d=m;g<d;g++){const p=c.getX(g);us.fromBufferAttribute(f,p),Ul(us,p,l,i,e,t,this)}}else{const h=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let g=h,d=m;g<d;g++)us.fromBufferAttribute(f,g),Ul(us,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ul(o,e,t,n,i,r,s){const a=Na.distanceSqToPoint(o);if(a<t){const l=new U;Na.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}const kl={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class $g{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Ic=new $g;class Fc{constructor(e){this.manager=e!==void 0?e:Ic,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Sn={};class Kg extends Error{constructor(e,t){super(e),this.response=t}}class Bl extends Fc{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=kl.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Sn[e]!==void 0){Sn[e].push({onLoad:t,onProgress:n,onError:i});return}Sn[e]=[],Sn[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Sn[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=h?parseInt(h):0,g=m!==0;let d=0;const p=new ReadableStream({start(_){M();function M(){f.read().then(({done:y,value:S})=>{if(y)_.close();else{d+=S.byteLength;const v=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:m});for(let C=0,L=u.length;C<L;C++){const x=u[C];x.onProgress&&x.onProgress(v)}_.enqueue(S),M()}})}}});return new Response(p)}else throw new Kg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{kl.add(e,c);const u=Sn[e];delete Sn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Sn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Sn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Jg extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Qg extends Jg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);const Vl={type:"change"},xa={type:"start"},Hl={type:"end"};class e_ extends Ti{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ai.ROTATE,MIDDLE:Ai.DOLLY,RIGHT:Ai.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Et),this._domElementKeyEvents=P},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Vl),n.update(),r=i.NONE},this.update=function(){const P=new U,F=new Si().setFromUnitVectors(e.up,new U(0,1,0)),oe=F.clone().invert(),he=new U,ae=new Si,pe=2*Math.PI;return function(){const Ae=n.object.position;P.copy(Ae).sub(n.target),P.applyQuaternion(F),a.setFromVector3(P),n.autoRotate&&r===i.NONE&&b(L()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Pe=n.minAzimuthAngle,Ne=n.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Ne)&&(Pe<-Math.PI?Pe+=pe:Pe>Math.PI&&(Pe-=pe),Ne<-Math.PI?Ne+=pe:Ne>Math.PI&&(Ne-=pe),Pe<=Ne?a.theta=Math.max(Pe,Math.min(Ne,a.theta)):a.theta=a.theta>(Pe+Ne)/2?Math.max(Pe,a.theta):Math.min(Ne,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(a),P.applyQuaternion(oe),Ae.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||he.distanceToSquared(n.object.position)>s||8*(1-ae.dot(n.object.quaternion))>s?(n.dispatchEvent(Vl),he.copy(n.object.position),ae.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",rt),n.domElement.removeEventListener("pointercancel",vt),n.domElement.removeEventListener("wheel",Xt),n.domElement.removeEventListener("pointermove",dt),n.domElement.removeEventListener("pointerup",je),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Et)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new Gl,l=new Gl;let c=1;const u=new U;let f=!1;const h=new Ee,m=new Ee,g=new Ee,d=new Ee,p=new Ee,_=new Ee,M=new Ee,y=new Ee,S=new Ee,v=[],C={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function b(P){l.theta-=P}function E(P){l.phi-=P}const N=function(){const P=new U;return function(oe,he){P.setFromMatrixColumn(he,0),P.multiplyScalar(-oe),u.add(P)}}(),H=function(){const P=new U;return function(oe,he){n.screenSpacePanning===!0?P.setFromMatrixColumn(he,1):(P.setFromMatrixColumn(he,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(oe),u.add(P)}}(),I=function(){const P=new U;return function(oe,he){const ae=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;P.copy(pe).sub(n.target);let fe=P.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),N(2*oe*fe/ae.clientHeight,n.object.matrix),H(2*he*fe/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(oe*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),H(he*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(P){h.set(P.clientX,P.clientY)}function Z(P){M.set(P.clientX,P.clientY)}function z(P){d.set(P.clientX,P.clientY)}function K(P){m.set(P.clientX,P.clientY),g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;b(2*Math.PI*g.x/F.clientHeight),E(2*Math.PI*g.y/F.clientHeight),h.copy(m),n.update()}function J(P){y.set(P.clientX,P.clientY),S.subVectors(y,M),S.y>0?D(x()):S.y<0&&V(x()),M.copy(y),n.update()}function le(P){p.set(P.clientX,P.clientY),_.subVectors(p,d).multiplyScalar(n.panSpeed),I(_.x,_.y),d.copy(p),n.update()}function k(P){P.deltaY<0?V(x()):P.deltaY>0&&D(x()),n.update()}function $(P){let F=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),F=!0;break}F&&(P.preventDefault(),n.update())}function ee(){if(v.length===1)h.set(v[0].pageX,v[0].pageY);else{const P=.5*(v[0].pageX+v[1].pageX),F=.5*(v[0].pageY+v[1].pageY);h.set(P,F)}}function Q(){if(v.length===1)d.set(v[0].pageX,v[0].pageY);else{const P=.5*(v[0].pageX+v[1].pageX),F=.5*(v[0].pageY+v[1].pageY);d.set(P,F)}}function G(){const P=v[0].pageX-v[1].pageX,F=v[0].pageY-v[1].pageY,oe=Math.sqrt(P*P+F*F);M.set(0,oe)}function _e(){n.enableZoom&&G(),n.enablePan&&Q()}function me(){n.enableZoom&&G(),n.enableRotate&&ee()}function de(P){if(v.length==1)m.set(P.pageX,P.pageY);else{const oe=ye(P),he=.5*(P.pageX+oe.x),ae=.5*(P.pageY+oe.y);m.set(he,ae)}g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;b(2*Math.PI*g.x/F.clientHeight),E(2*Math.PI*g.y/F.clientHeight),h.copy(m)}function ce(P){if(v.length===1)p.set(P.pageX,P.pageY);else{const F=ye(P),oe=.5*(P.pageX+F.x),he=.5*(P.pageY+F.y);p.set(oe,he)}_.subVectors(p,d).multiplyScalar(n.panSpeed),I(_.x,_.y),d.copy(p)}function ze(P){const F=ye(P),oe=P.pageX-F.x,he=P.pageY-F.y,ae=Math.sqrt(oe*oe+he*he);y.set(0,ae),S.set(0,Math.pow(y.y/M.y,n.zoomSpeed)),D(S.y),M.copy(y)}function be(P){n.enableZoom&&ze(P),n.enablePan&&ce(P)}function ve(P){n.enableZoom&&ze(P),n.enableRotate&&de(P)}function rt(P){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",dt),n.domElement.addEventListener("pointerup",je)),ne(P),P.pointerType==="touch"?A(P):qe(P))}function dt(P){n.enabled!==!1&&(P.pointerType==="touch"?w(P):Fe(P))}function je(P){ie(P),v.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",dt),n.domElement.removeEventListener("pointerup",je)),n.dispatchEvent(Hl),r=i.NONE}function vt(P){ie(P)}function qe(P){let F;switch(P.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Ai.DOLLY:if(n.enableZoom===!1)return;Z(P),r=i.DOLLY;break;case Ai.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;z(P),r=i.PAN}else{if(n.enableRotate===!1)return;j(P),r=i.ROTATE}break;case Ai.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;j(P),r=i.ROTATE}else{if(n.enablePan===!1)return;z(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(xa)}function Fe(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;K(P);break;case i.DOLLY:if(n.enableZoom===!1)return;J(P);break;case i.PAN:if(n.enablePan===!1)return;le(P);break}}function Xt(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(xa),k(P),n.dispatchEvent(Hl))}function Et(P){n.enabled===!1||n.enablePan===!1||$(P)}function A(P){switch(se(P),v.length){case 1:switch(n.touches.ONE){case Ci.ROTATE:if(n.enableRotate===!1)return;ee(),r=i.TOUCH_ROTATE;break;case Ci.PAN:if(n.enablePan===!1)return;Q(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_e(),r=i.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(xa)}function w(P){switch(se(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;de(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ce(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(P),n.update();break;default:r=i.NONE}}function W(P){n.enabled!==!1&&P.preventDefault()}function ne(P){v.push(P)}function ie(P){delete C[P.pointerId];for(let F=0;F<v.length;F++)if(v[F].pointerId==P.pointerId){v.splice(F,1);return}}function se(P){let F=C[P.pointerId];F===void 0&&(F=new Ee,C[P.pointerId]=F),F.set(P.pageX,P.pageY)}function ye(P){const F=P.pointerId===v[0].pointerId?v[1]:v[0];return C[F.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",rt),n.domElement.addEventListener("pointercancel",vt),n.domElement.addEventListener("wheel",Xt,{passive:!1}),this.update()}}const va=new WeakMap;class t_ extends Fc{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Bl(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,s=>{this.decodeDracoFile(s,t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};return this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(va.has(e)){const l=va.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,s=e.byteLength,a=this._getWorker(r,s).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),va.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new mn;e.index&&t.setIndex(new Tt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,s=i.array,a=i.itemSize;t.setAttribute(r,new Tt(s,a))}return t}_loadLibrary(e,t){const n=new Bl(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=n_.toString(),s=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const s=r.data;switch(s.type){case"decode":i._callbacks[s.id].resolve(s);break;case"error":i._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function n_(){let o,e;onmessage=function(s){const a=s.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(u){o.onModuleLoaded=function(f){u({draco:f})},DracoDecoderModule(o)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const f=u.draco,h=new f.Decoder,m=new f.DecoderBuffer;m.Init(new Int8Array(l),l.byteLength);try{const g=t(f,h,m,c),d=g.attributes.map(p=>p.array.buffer);g.index&&d.push(g.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:g},d)}catch(g){console.error(g),self.postMessage({type:"error",id:a.id,error:g.message})}finally{f.destroy(m),f.destroy(h)}});break}};function t(s,a,l,c){const u=c.attributeIDs,f=c.attributeTypes;let h,m;const g=a.GetEncodedGeometryType(l);if(g===s.TRIANGULAR_MESH)h=new s.Mesh,m=a.DecodeBufferToMesh(l,h);else if(g===s.POINT_CLOUD)h=new s.PointCloud,m=a.DecodeBufferToPointCloud(l,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!m.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+m.error_msg());const d={index:null,attributes:[]};for(const p in u){const _=self[f[p]];let M,y;if(c.useUniqueIDs)y=u[p],M=a.GetAttributeByUniqueId(h,y);else{if(y=a.GetAttributeId(h,s[u[p]]),y===-1)continue;M=a.GetAttribute(h,y)}d.attributes.push(i(s,a,h,p,_,M))}return g===s.TRIANGULAR_MESH&&(d.index=n(s,a,h)),s.destroy(h),d}function n(s,a,l){const u=l.num_faces()*3,f=u*4,h=s._malloc(f);a.GetTrianglesUInt32Array(l,f,h);const m=new Uint32Array(s.HEAPF32.buffer,h,u).slice();return s._free(h),{array:m,itemSize:1}}function i(s,a,l,c,u,f){const h=f.num_components(),g=l.num_points()*h,d=g*u.BYTES_PER_ELEMENT,p=r(s,u),_=s._malloc(d);a.GetAttributeDataArrayForAllPoints(l,f,p,d,_);const M=new u(s.HEAPF32.buffer,_,g).slice();return s._free(_),{name:c,array:M,itemSize:h}}function r(s,a){switch(a){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}function Tn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Oc(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ir={duration:.5,overwrite:!1,delay:0},ro,_t,Je,Jt=1e8,ke=1/Jt,Ua=Math.PI*2,i_=Ua/4,r_=0,zc=Math.sqrt,s_=Math.cos,a_=Math.sin,ct=function(e){return typeof e=="string"},Xe=function(e){return typeof e=="function"},Rn=function(e){return typeof e=="number"},so=function(e){return typeof e>"u"},pn=function(e){return typeof e=="object"},Lt=function(e){return e!==!1},Nc=function(){return typeof window<"u"},hs=function(e){return Xe(e)||ct(e)},Uc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xt=Array.isArray,ka=/(?:-?\.?\d|\.)+/gi,kc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ya=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bc=/[+-]=-?[.\d]+/,Gc=/[^,'"\[\]\s]+/gi,o_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,He,Zt,Ba,ao,Ht={},bs={},Vc,Hc=function(e){return(bs=wi(e,Ht))&&Wt},oo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ss=function(e,t){return!t&&console.warn(e)},Wc=function(e,t){return e&&(Ht[e]=t)&&bs&&(bs[e]=t)||Ht},Or=function(){return 0},l_={suppressEvents:!0,isStart:!0,kill:!1},ms={suppressEvents:!0,kill:!1},c_={suppressEvents:!0},lo={},Wn=[],Ga={},Xc,Nt={},Ma={},Wl=30,gs=[],co="",uo=function(e){var t=e[0],n,i;if(pn(t)||Xe(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=gs.length;i--&&!gs[i].targetTest(t););n=gs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new du(e[i],n)))||e.splice(i,1);return e},_i=function(e){return e._gsap||uo(Qt(e))[0]._gsap},qc=function(e,t,n){return(n=e[t])&&Xe(n)?e[t]():so(n)&&e.getAttribute&&e.getAttribute(t)||n},Dt=function(e,t){return(e=e.split(",")).forEach(t)||e},Ye=function(e){return Math.round(e*1e5)/1e5||0},ht=function(e){return Math.round(e*1e7)/1e7||0},$i=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},u_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ws=function(){var e=Wn.length,t=Wn.slice(0),n,i;for(Ga={},Wn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Yc=function(e,t,n,i){Wn.length&&!_t&&ws(),e.render(t,n,i||_t&&t<0&&(e._initted||e._startAt)),Wn.length&&!_t&&ws()},jc=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Gc).length<2?t:ct(e)?e.trim():e},Zc=function(e){return e},tn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},h_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},wi=function(e,t){for(var n in t)e[n]=t[n];return e},Xl=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=pn(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},Ts=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Pr=function(e){var t=e.parent||He,n=e.keyframes?h_(xt(e.keyframes)):tn;if(Lt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},f_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},$c=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],a;if(r)for(a=t[r];s&&s[r]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},Fs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Yn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},xi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},d_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Va=function(e,t,n,i){return e._startAt&&(_t?e._startAt.revert(ms):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},p_=function o(e){return!e||e._ts&&o(e.parent)},ql=function(e){return e._repeat?rr(e._tTime,e=e.duration()+e._rDelay)*e:0},rr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Es=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Os=function(e){return e._end=ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||ke)||0))},zs=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Os(e),n._dirty||xi(n,e)),e},Kc=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Es(e.rawTime(),t),(!t._dur||Wr(0,t.totalDuration(),n)-t._tTime>ke)&&t.render(n,!0)),xi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ke}},fn=function(e,t,n,i){return t.parent&&Yn(t),t._start=ht((Rn(n)?n:n||e!==He?jt(e,n,t):e._time)+t._delay),t._end=ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$c(e,t,"_first","_last",e._sort?"_start":0),Ha(t)||(e._recent=t),i||Kc(e,t),e._ts<0&&zs(e,e._tTime),e},Jc=function(e,t){return(Ht.ScrollTrigger||oo("scrollTrigger",t))&&Ht.ScrollTrigger.create(t,e)},Qc=function(e,t,n,i,r){if(fo(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!_t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xc!==kt.frame)return Wn.push(e),e._lazy=[r,i],1},m_=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Ha=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},g_=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&m_(e)&&!(!e._initted&&Ha(e))||(e._ts<0||e._dp._ts<0)&&!Ha(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Wr(0,e._tDur,t),u=rr(l,a),e._yoyo&&u&1&&(s=1-s),u!==rr(e._tTime,a)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||_t||i||e._zTime===ke||!t&&e._zTime){if(!e._initted&&Qc(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?ke:0),n||(n=t&&!f),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&Va(e,t,n,!0),e._onUpdate&&!n&&en(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&en(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Yn(e,1),!n&&!_t&&(en(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},__=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},sr=function(e,t,n,i){var r=e._repeat,s=ht(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:ht(s*(r+1)+e._rDelay*r):s,a>0&&!i&&zs(e,e._tTime=e._tDur*a),e.parent&&Os(e),n||xi(e.parent,e),e},Yl=function(e){return e instanceof Ct?xi(e):sr(e,e._dur)},x_={_start:0,endTime:Or,totalDuration:Or},jt=function o(e,t,n){var i=e.labels,r=e._recent||x_,s=e.duration()>=Jt?r.endTime(!1):e._dur,a,l,c;return ct(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(xt(n)?n[0]:n).totalDuration()),a>1?o(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},Lr=function(e,t,n){var i=Rn(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],a,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Lt(l.vars.inherit)&&l.parent;s.immediateRender=Lt(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new et(t[0],s,t[r+1])},Zn=function(e,t){return e||e===0?t(e):t},Wr=function(e,t,n){return n<e?e:n>t?t:n},gt=function(e,t){return!ct(e)||!(t=o_.exec(e))?"":t[1]},v_=function(e,t,n){return Zn(n,function(i){return Wr(e,t,i)})},Wa=[].slice,eu=function(e,t){return e&&pn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&pn(e[0]))&&!e.nodeType&&e!==Zt},y_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ct(i)&&!t||eu(i,1)?(r=n).push.apply(r,Qt(i)):n.push(i)})||n},Qt=function(e,t,n){return Je&&!t&&Je.selector?Je.selector(e):ct(e)&&!n&&(Ba||!ar())?Wa.call((t||ao).querySelectorAll(e),0):xt(e)?y_(e,n):eu(e)?Wa.call(e,0):e?[e]:[]},Xa=function(e){return e=Qt(e)[0]||Ss("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Qt(t,n.querySelectorAll?n:n===e?Ss("Invalid scope")||ao.createElement("div"):e)}},tu=function(e){return e.sort(function(){return .5-Math.random()})},nu=function(e){if(Xe(e))return e;var t=pn(e)?e:{each:e},n=vi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return ct(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,m,g){var d=(g||t).length,p=s[d],_,M,y,S,v,C,L,x,b;if(!p){if(b=t.grid==="auto"?0:(t.grid||[1,Jt])[1],!b){for(L=-Jt;L<(L=g[b++].getBoundingClientRect().left)&&b<d;);b--}for(p=s[d]=[],_=l?Math.min(b,d)*u-.5:i%b,M=b===Jt?0:l?d*f/b-.5:i/b|0,L=0,x=Jt,C=0;C<d;C++)y=C%b-_,S=M-(C/b|0),p[C]=v=c?Math.abs(c==="y"?S:y):zc(y*y+S*S),v>L&&(L=v),v<x&&(x=v);i==="random"&&tu(p),p.max=L-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(b>d?d-1:c?c==="y"?d/b:b:Math.max(b,d/b))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=gt(t.amount||t.each)||0,n=n&&d<0?uu(n):n}return d=(p[h]-p.min)/p.max||0,ht(p.b+(n?n(d):d)*p.v)+p.u}},qa=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ht(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Rn(n)?0:gt(n))}},iu=function(e,t){var n=xt(e),i,r;return!n&&pn(e)&&(i=n=e.radius||Jt,e.values?(e=Qt(e.values),(r=!Rn(e[0]))&&(i*=i)):e=qa(e.increment)),Zn(t,n?Xe(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var a=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Jt,u=0,f=e.length,h,m;f--;)r?(h=e[f].x-a,m=e[f].y-l,h=h*h+m*m):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:s,r||u===s||Rn(s)?u:u+gt(s)}:qa(e))},ru=function(e,t,n,i){return Zn(xt(e)?!t:n===!0?!!(n=0):!i,function(){return xt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},M_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},b_=function(e,t){return function(n){return e(parseFloat(n))+(t||gt(n))}},S_=function(e,t,n){return au(e,t,0,1,n)},su=function(e,t,n){return Zn(n,function(i){return e[~~t(i)]})},w_=function o(e,t,n){var i=t-e;return xt(e)?su(e,o(0,e.length),t):Zn(n,function(r){return(i+(r-e)%i)%i+e})},T_=function o(e,t,n){var i=t-e,r=i*2;return xt(e)?su(e,o(0,e.length-1),t):Zn(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},zr=function(e){for(var t=0,n="",i,r,s,a;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(a?Gc:ka),n+=e.substr(t,i-t)+ru(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},au=function(e,t,n,i,r){var s=t-e,a=i-n;return Zn(r,function(l){return n+((l-e)/s*a||0)})},E_=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var s=ct(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(xt(e)&&!xt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(o(e[c-1],e[c]));f--,r=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=t}else i||(e=wi(xt(e)?[]:{},e));if(!u){for(l in t)ho.call(a,e,l,"get",t[l]);r=function(g){return go(g,a)||(s?e.p:e)}}}return Zn(n,r)},jl=function(e,t,n){var i=e.labels,r=Jt,s,a,l;for(s in i)a=i[s]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=s,r=a);return l},en=function(e,t,n){var i=e.vars,r=i[t],s=Je,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Wn.length&&ws(),a&&(Je=a),u=l?r.apply(c,l):r.call(c),Je=s,u},Tr=function(e){return Yn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_t),e.progress()<1&&en(e,"onInterrupt"),e},Yi,A_=function(e){e=!e.name&&e.default||e;var t=e.name,n=Xe(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Or,render:go,add:ho,kill:H_,modifier:V_,rawVars:0},s={targetTest:0,get:0,getSetter:mo,aliases:{},register:0};if(ar(),e!==i){if(Nt[t])return;tn(i,tn(Ts(e,r),s)),wi(i.prototype,wi(r,Ts(e,s))),Nt[i.prop=t]=i,e.targetTest&&(gs.push(i),lo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wc(t,i),e.register&&e.register(Wt,i,Rt)},Ue=255,Er={aqua:[0,Ue,Ue],lime:[0,Ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ue],navy:[0,0,128],white:[Ue,Ue,Ue],olive:[128,128,0],yellow:[Ue,Ue,0],orange:[Ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ue,0,0],pink:[Ue,192,203],cyan:[0,Ue,Ue],transparent:[Ue,Ue,Ue,0]},ba=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ue+.5|0},ou=function(e,t,n){var i=e?Rn(e)?[e>>16,e>>8&Ue,e&Ue]:0:Er.black,r,s,a,l,c,u,f,h,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Er[e])i=Er[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+r+r+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ue,i&Ue,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ue,e&Ue]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(ka),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=ba(l+1/3,r,s),i[1]=ba(l,r,s),i[2]=ba(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(kc),n&&i.length<4&&(i[3]=1),i}else i=e.match(ka)||Er.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Ue,s=i[1]/Ue,a=i[2]/Ue,f=Math.max(r,s,a),h=Math.min(r,s,a),u=(f+h)/2,f===h?l=c=0:(m=f-h,c=u>.5?m/(2-f-h):m/(f+h),l=f===r?(s-a)/m+(s<a?6:0):f===s?(a-r)/m+2:(r-s)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},lu=function(e){var t=[],n=[],i=-1;return e.split(Xn).forEach(function(r){var s=r.match(qi)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},Zl=function(e,t,n){var i="",r=(e+i).match(Xn),s=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!r)return e;if(r=r.map(function(h){return(h=ou(h,t,1))&&s+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=lu(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Xn,"1").split(qi),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Xn),f=c.length-1;a<f;a++)i+=c[a]+r[a];return i+c[f]},Xn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Er)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),C_=/hsl[a]?\(/,cu=function(e){var t=e.join(" "),n;if(Xn.lastIndex=0,Xn.test(t))return n=C_.test(t),e[1]=Zl(e[1],n),e[0]=Zl(e[0],n,lu(e[1])),!0},Nr,kt=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,s=r,a=[],l,c,u,f,h,m,g=function d(p){var _=o()-i,M=p===!0,y,S,v,C;if(_>e&&(n+=_-t),i+=_,v=i-n,y=v-s,(y>0||M)&&(C=++f.frame,h=v-f.time*1e3,f.time=v=v/1e3,s+=y+(y>=r?4:r-y),S=1),M||(l=c(d)),S)for(m=0;m<a.length;m++)a[m](v,h,C,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Vc&&(!Ba&&Nc()&&(Zt=Ba=window,ao=Zt.document||{},Ht.gsap=Wt,(Zt.gsapVersions||(Zt.gsapVersions=[])).push(Wt.version),Hc(bs||Zt.GreenSockGlobals||!Zt.gsap&&Zt||{}),u=Zt.requestAnimationFrame),l&&f.sleep(),c=u||function(p){return setTimeout(p,s-f.time*1e3+1|0)},Nr=1,g(2))},sleep:function(){(u?Zt.cancelAnimationFrame:clearTimeout)(l),Nr=0,c=Or},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),s=f.time*1e3+r},add:function(p,_,M){var y=_?function(S,v,C,L){p(S,v,C,L),f.remove(y)}:p;return f.remove(p),a[M?"unshift":"push"](y),ar(),y},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},f}(),ar=function(){return!Nr&&kt.wake()},Ce={},P_=/^[\d.\-M][\d.\-,\s]/,L_=/["']/g,D_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,a,l,c;r<s;r++)l=n[r],a=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(L_,"").trim():+c,i=l.substr(a+1).trim();return t},R_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},I_=function(e){var t=(e+"").split("("),n=Ce[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[D_(t[1])]:R_(e).split(",").map(jc)):Ce._CE&&P_.test(e)?Ce._CE("",e):n},uu=function(e){return function(t){return 1-e(1-t)}},hu=function o(e,t){for(var n=e._first,i;n;)n instanceof Ct?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},vi=function(e,t){return e&&(Xe(e)?e:Ce[e]||I_(e))||t},Ei=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return Dt(e,function(a){Ce[a]=Ht[a]=r,Ce[s=a.toLowerCase()]=n;for(var l in r)Ce[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ce[a+"."+l]=r[l]}),r},fu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Sa=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/Ua*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*a_((u-s)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:fu(a);return r=Ua/r,l.config=function(c,u){return o(e,c,u)},l},wa=function o(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:fu(n);return i.config=function(r){return o(e,r)},i};Dt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Ei(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;Ei("Elastic",Sa("in"),Sa("out"),Sa());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?o*a*a:a<n?o*Math.pow(a-1.5/e,2)+.75:a<i?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};Ei("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Ei("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Ei("Circ",function(o){return-(zc(1-o*o)-1)});Ei("Sine",function(o){return o===1?1:-s_(o*i_)+1});Ei("Back",wa("in"),wa("out"),wa());Ce.SteppedEase=Ce.steps=Ht.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-ke;return function(a){return((i*Wr(0,s,a)|0)+r)*n}}};ir.ease=Ce["quad.out"];Dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return co+=o+","+o+"Params,"});var du=function(e,t){this.id=r_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qc,this.set=t?t.getSetter:mo},or=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,sr(this,+t.duration,1,1),this.data=t.data,Je&&(this._ctx=Je,Je.data.push(this)),Nr||kt.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,sr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ar(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(zs(this,n),!r._dp||r.parent||Kc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ke||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Yc(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ql(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ql(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?rr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ke?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Es(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ke?0:this._rts,this.totalTime(Wr(-this._delay,this._tDur,i),!0),Os(this),d_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ar(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ke&&(this._tTime-=ke)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Lt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Es(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=c_);var i=_t;return _t=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_t=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yl(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Yl(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(jt(this,n),Lt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Lt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ke:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ke,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ke)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=Xe(n)?n:Zc,a=function(){var c=i.then;i.then=null,Xe(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Tr(this)},o}();tn(or.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ke,_prom:0,_ps:!1,_rts:1});var Ct=function(o){Oc(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Lt(n.sortChildren),He&&fn(n.parent||He,Tn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Jc(Tn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return Lr(0,arguments,this),this},t.from=function(i,r,s){return Lr(1,arguments,this),this},t.fromTo=function(i,r,s,a){return Lr(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,Pr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new et(i,r,jt(this,s),1),this},t.call=function(i,r,s){return fn(this,et.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,a,l,c,u){return s.duration=r,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new et(i,s,jt(this,l)),this},t.staggerFrom=function(i,r,s,a,l,c,u){return s.runBackwards=1,Pr(s).immediateRender=Lt(s.immediateRender),this.staggerTo(i,r,s,a,l,c,u)},t.staggerFromTo=function(i,r,s,a,l,c,u,f){return a.startAt=s,Pr(a).immediateRender=Lt(a.immediateRender),this.staggerTo(i,r,a,l,c,u,f)},t.render=function(i,r,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ht(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,m,g,d,p,_,M,y,S,v,C,L;if(this!==He&&u>l&&i>=0&&(u=l),u!==this._tTime||s||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,S=this._start,y=this._ts,_=!y,f&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,s);if(h=ht(u%p),u===l?(d=this._repeat,h=c):(d=~~(u/p),d&&d===u/p&&(h=c,d--),h>c&&(h=c)),v=rr(this._tTime,p),!a&&this._tTime&&v!==d&&(v=d),C&&d&1&&(h=c-h,L=1),d!==v&&!this._lock){var x=C&&v&1,b=x===(C&&d&1);if(d<v&&(x=!x),a=x?0:c,this._lock=1,this.render(a||(L?0:ht(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&en(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;hu(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=__(this,ht(a),ht(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&(en(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,s);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,r,s),h!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-ke);break}}m=g}else{m=this._last;for(var E=i<0?i:h;m;){if(g=m._prev,(m._act||E<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,s);if(m.render(m._ts>0?(E-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(E-m._start)*m._ts,r,s||_t&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=E?-ke:ke);break}}m=g}}if(M&&!r&&(this.pause(),M.render(h>=a?0:-ke)._zTime=h>=a?1:-1,this._ts))return this._start=S,Os(this),this.render(i,r,s);this._onUpdate&&!r&&en(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Yn(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(en(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(Rn(r)||(r=jt(this,r,i)),!(i instanceof or)){if(xt(i))return i.forEach(function(a){return s.add(a,r)}),this;if(ct(i))return this.addLabel(i,r);if(Xe(i))i=et.delayedCall(0,i);else return this}return this!==i?fn(this,i,r):this},t.getChildren=function(i,r,s,a){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=-Jt);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof et?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return ct(i)?this.removeLabel(i):Xe(i)?this.killTweensOf(i):(Fs(this,i),i===this._recent&&(this._recent=this._last),xi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(kt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=jt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var a=et.delayedCall(0,r||Or,s);return a.data="isPause",this._hasPause=1,fn(this,a,jt(this,i))},t.removePause=function(i){var r=this._first;for(i=jt(this,i);r;)r._start===i&&r.data==="isPause"&&Yn(r),r=r._next},t.killTweensOf=function(i,r,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)Bn!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],a=Qt(i),l=this._first,c=Rn(r),u;l;)l instanceof et?u_(l._targets,a)&&(c?(!Bn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(a,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,a=jt(s,i),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,m,g=et.to(s,tn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||ke,onStart:function(){if(s.pause(),!m){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==p&&sr(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,f||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,tn({startAt:{time:jt(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),jl(this,jt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),jl(this,jt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ke)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return xi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xi(this)},t.totalDuration=function(i){var r=0,s=this,a=s._last,l=Jt,c,u,f;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(f=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,fn(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!f&&!s._dp||f&&f.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;sr(s,s===He&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(He._ts&&(Yc(He,Es(i,He)),Xc=kt.frame),kt.frame>=Wl){Wl+=Vt.autoSleep||120;var r=He._first;if((!r||!r._ts)&&Vt.autoSleep&&kt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||kt.sleep()}}},e}(or);tn(Ct.prototype,{_lock:0,_hasPause:0,_forcing:0});var F_=function(e,t,n,i,r,s,a){var l=new Rt(this._pt,e,t,0,1,vu,null,r),c=0,u=0,f,h,m,g,d,p,_,M;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=zr(i)),s&&(M=[n,i],s(M,e,t),n=M[0],i=M[1]),h=n.match(ya)||[];f=ya.exec(i);)g=f[0],d=i.substring(c,f.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?$i(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=ya.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Bc.test(i)||_)&&(l.e=0),this._pt=l,l},ho=function(e,t,n,i,r,s,a,l,c,u){Xe(i)&&(i=i(r||0,e,s));var f=e[t],h=n!=="get"?n:Xe(f)?c?e[t.indexOf("set")||!Xe(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=Xe(f)?c?k_:_u:po,g;if(ct(i)&&(~i.indexOf("random(")&&(i=zr(i)),i.charAt(1)==="="&&(g=$i(h,i)+(gt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Ya)return!isNaN(h*i)&&i!==""?(g=new Rt(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?G_:xu,0,m),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&oo(t,i),F_.call(this,e,t,h,i,m,l||Vt.stringFilter,c))},O_=function(e,t,n,i,r){if(Xe(e)&&(e=Dr(e,r,t,n,i)),!pn(e)||e.style&&e.nodeType||xt(e)||Uc(e))return ct(e)?Dr(e,r,t,n,i):e;var s={},a;for(a in e)s[a]=Dr(e[a],r,t,n,i);return s},pu=function(e,t,n,i,r,s){var a,l,c,u;if(Nt[e]&&(a=new Nt[e]).init(r,a.rawVars?t[e]:O_(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new Rt(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Yi))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Bn,Ya,fo=function o(e,t,n){var i=e.vars,r=i.ease,s=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,M=e._targets,y=e.parent,S=y&&y.data==="nested"?y.vars.targets:M,v=e._overwrite==="auto"&&!ro,C=e.timeline,L,x,b,E,N,H,I,D,V,j,Z,z,K;if(C&&(!g||!r)&&(r="none"),e._ease=vi(r,ir.ease),e._yEase=m?uu(vi(m===!0?r:m,ir.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!C&&!!i.runBackwards,!C||g&&!i.stagger){if(D=M[0]?_i(M[0]).harness:0,z=D&&i[D.prop],L=Ts(i,lo),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&p?ms:l_),_._lazy=0),s){if(Yn(e._startAt=et.set(M,tn({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!_&&Lt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_t||!a&&!d)&&e._startAt.revert(ms),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&p&&!_){if(t&&(a=!1),b=tn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Lt(l),immediateRender:a,stagger:0,parent:y},L),z&&(b[D.prop]=z),Yn(e._startAt=et.set(M,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_t?e._startAt.revert(ms):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,ke,ke);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Lt(l)||l&&!p,x=0;x<M.length;x++){if(N=M[x],I=N._gsap||uo(M)[x]._gsap,e._ptLookup[x]=j={},Ga[I.id]&&Wn.length&&ws(),Z=S===M?x:S.indexOf(N),D&&(V=new D).init(N,z||L,e,Z,S)!==!1&&(e._pt=E=new Rt(e._pt,N,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(J){j[J]=E}),V.priority&&(H=1)),!D||z)for(b in L)Nt[b]&&(V=pu(b,L,e,Z,N,S))?V.priority&&(H=1):j[b]=E=ho.call(e,N,b,"get",L[b],Z,S,0,i.stringFilter);e._op&&e._op[x]&&e.kill(N,e._op[x]),v&&e._pt&&(Bn=e,He.killTweensOf(N,j,e.globalTime(t)),K=!e.parent,Bn=0),e._pt&&l&&(Ga[I.id]=1)}H&&yu(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,g&&t<=0&&C.render(Jt,!0,!0)},z_=function(e,t,n,i,r,s,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ya=1,e.vars[t]="+=0",fo(e,a),Ya=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,u.e&&(u.e=Ye(n)+gt(u.e)),u.b&&(u.b=c.s+gt(u.b))},N_=function(e,t){var n=e[0]?_i(e[0]).harness:0,i=n&&n.aliases,r,s,a,l;if(!i)return t;r=wi({},t);for(s in i)if(s in r)for(l=i[s].split(","),a=l.length;a--;)r[l[a]]=r[s];return r},U_=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,a;if(xt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:r})},Dr=function(e,t,n,i,r){return Xe(e)?e.call(t,n,i,r):ct(e)&&~e.indexOf("random(")?zr(e):e},mu=co+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gu={};Dt(mu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return gu[o]=1});var et=function(o){Oc(e,o);function e(n,i,r,s){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=o.call(this,s?i:Pr(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,M=i.parent||He,y=(xt(n)||Uc(n)?Rn(n[0]):"length"in i)?[n]:Qt(n),S,v,C,L,x,b,E,N;if(a._targets=y.length?uo(y):Ss("GSAP target "+n+" not found. https://greensock.com",!Vt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||h||hs(c)||hs(u)){if(i=a.vars,S=a.timeline=new Ct({data:"nested",defaults:d||{},targets:M&&M.data==="nested"?M.vars.targets:y}),S.kill(),S.parent=S._dp=Tn(a),S._start=0,h||hs(c)||hs(u)){if(L=y.length,E=h&&nu(h),pn(h))for(x in h)~mu.indexOf(x)&&(N||(N={}),N[x]=h[x]);for(v=0;v<L;v++)C=Ts(i,gu),C.stagger=0,_&&(C.yoyoEase=_),N&&wi(C,N),b=y[v],C.duration=+Dr(c,Tn(a),v,b,y),C.delay=(+Dr(u,Tn(a),v,b,y)||0)-a._delay,!h&&L===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),S.to(b,C,E?E(v,b,y):0),S._ease=Ce.none;S.duration()?c=u=0:a.timeline=0}else if(g){Pr(tn(S.vars.defaults,{ease:"none"})),S._ease=vi(g.ease||i.ease||"none");var H=0,I,D,V;if(xt(g))g.forEach(function(j){return S.to(y,j,">")}),S.duration();else{C={};for(x in g)x==="ease"||x==="easeEach"||U_(x,g[x],C,g.easeEach);for(x in C)for(I=C[x].sort(function(j,Z){return j.t-Z.t}),H=0,v=0;v<I.length;v++)D=I[v],V={ease:D.e,duration:(D.t-(v?I[v-1].t:0))/100*c},V[x]=D.v,S.to(y,V,H),H+=V.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return m===!0&&!ro&&(Bn=Tn(a),He.killTweensOf(y),Bn=0),fn(M,Tn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===ht(M._time)&&Lt(f)&&p_(Tn(a))&&M.data!=="nested")&&(a._tTime=-ke,a.render(Math.max(0,-u)||0)),p&&Jc(Tn(a),p),a}var t=e.prototype;return t.render=function(i,r,s){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-ke&&!u?l:i<ke?0:i,h,m,g,d,p,_,M,y,S;if(!c)g_(this,i,r,s);else if(f!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,y=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,s);if(h=ht(f%d),f===l?(g=this._repeat,h=c):(g=~~(f/d),g&&g===f/d&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(S=this._yEase,h=c-h),p=rr(this._tTime,d),h===a&&!s&&this._initted)return this._tTime=f,this;g!==p&&(y&&this._yEase&&hu(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=s=1,this.render(ht(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Qc(this,u?i:h,s,r,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(h/c),this._from&&(this.ratio=M=1-M),h&&!a&&!r&&(en(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;y&&y.render(i<0?i:!h&&_?-ke:y._dur*y._ease(h/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Va(this,i,r,s),en(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&en(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Va(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Yn(this,1),!r&&!(u&&!a)&&(f||a||_)&&(en(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,s,a){Nr||kt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||fo(this,l),c=this._ease(l/this._dur),z_(this,i,r,s,a,c,l)?this.resetTo(i,r,s,a):(zs(this,0),this.parent||$c(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Tr(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Bn&&Bn.vars.overwrite!==!0)._first||Tr(this),this.parent&&s!==this.timeline.totalDuration()&&sr(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?Qt(i):a,c=this._ptLookup,u=this._pt,f,h,m,g,d,p,_;if((!r||r==="all")&&f_(a,l))return r==="all"&&(this._pt=0),Tr(this);for(f=this._op=this._op||[],r!=="all"&&(ct(r)&&(d={},Dt(r,function(M){return d[M]=1}),r=d),r=N_(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){h=c[_],r==="all"?(f[_]=r,g=h,m={}):(m=f[_]=f[_]||{},g=r);for(d in g)p=h&&h[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&Fs(this,p,"_pt"),delete h[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&Tr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Lr(1,arguments)},e.delayedCall=function(i,r,s,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(i,r,s){return Lr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return He.killTweensOf(i,r,s)},e}(or);tn(et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Dt("staggerTo,staggerFrom,staggerFromTo",function(o){et[o]=function(){var e=new Ct,t=Wa.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var po=function(e,t,n){return e[t]=n},_u=function(e,t,n){return e[t](n)},k_=function(e,t,n,i){return e[t](i.fp,n)},B_=function(e,t,n){return e.setAttribute(t,n)},mo=function(e,t){return Xe(e[t])?_u:so(e[t])&&e.setAttribute?B_:po},xu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},G_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},go=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},V_=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},H_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Fs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},W_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},yu=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},Rt=function(){function o(t,n,i,r,s,a,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=a||xu,this.d=l||this,this.set=c||po,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=W_,this.m=n,this.mt=r,this.tween=i},o}();Dt(co+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return lo[o]=1});Ht.TweenMax=Ht.TweenLite=et;Ht.TimelineLite=Ht.TimelineMax=Ct;He=new Ct({sortChildren:!1,defaults:ir,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vt.stringFilter=cu;var lr=[],_s={},X_=[],$l=0,Ta=function(e){return(_s[e]||X_).map(function(t){return t()})},ja=function(){var e=Date.now(),t=[];e-$l>2&&(Ta("matchMediaInit"),lr.forEach(function(n){var i=n.queries,r=n.conditions,s,a,l,c;for(a in i)s=Zt.matchMedia(i[a]).matches,s&&(l=1),s!==r[a]&&(r[a]=s,c=1);c&&(n.revert(),l&&t.push(n))}),Ta("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),$l=e,Ta("matchMedia"))},Mu=function(){function o(t,n){this.selector=n&&Xa(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){Xe(n)&&(r=i,i=n,n=Xe);var s=this,a=function(){var c=Je,u=s.selector,f;return c&&c!==s&&c.data.push(s),r&&(s.selector=Xa(r)),Je=s,f=i.apply(s,arguments),Xe(f)&&s._r.push(f),Je=c,s.selector=u,s.isReverted=!1,f};return s.last=a,n===Xe?a(s):n?s[n]=a:a},e.ignore=function(n){var i=Je;Je=null,n(this),Je=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof or)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=lr.indexOf(this);~a&&lr.splice(a,1)}},e.revert=function(n){this.kill(n||{})},o}(),q_=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){pn(n)||(n={matches:n});var s=new Mu(0,r||this.scope),a=s.conditions={},l,c,u;this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=Zt.matchMedia(n[c]),l&&(lr.indexOf(s)<0&&lr.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ja):l.addEventListener("change",ja)));return u&&i(s),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),As={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return A_(i)})},timeline:function(e){return new Ct(e)},getTweensOf:function(e,t){return He.getTweensOf(e,t)},getProperty:function(e,t,n,i){ct(e)&&(e=Qt(e)[0]);var r=_i(e||{}).get,s=n?Zc:jc;return n==="native"&&(n=""),e&&(t?s((Nt[t]&&Nt[t].get||r)(e,t,n,i)):function(a,l,c){return s((Nt[a]&&Nt[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Qt(e),e.length>1){var i=e.map(function(u){return Wt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}e=e[0]||{};var s=Nt[t],a=_i(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(u){var f=new s;Yi._pt=0,f.init(e,n?u+n:u,Yi,0,[e]),f.render(1,f),Yi._pt&&go(1,Yi)}:a.set(e,l);return s?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Wt.to(e,wi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return He.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vi(e.ease,ir.ease)),Xl(ir,e||{})},config:function(e){return Xl(Vt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Nt[a]&&!Ht[a]&&Ss(t+" effect requires "+a+" plugin.")}),Ma[t]=function(a,l,c){return n(Qt(a),tn(l||{},r),c)},s&&(Ct.prototype[t]=function(a,l,c){return this.add(Ma[t](a,pn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ce[e]=vi(t)},parseEase:function(e,t){return arguments.length?vi(e,t):Ce},getById:function(e){return He.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ct(e),i,r;for(n.smoothChildTiming=Lt(e.smoothChildTiming),He.remove(n),n._dp=0,n._time=n._tTime=He._time,i=He._first;i;)r=i._next,(t||!(!i._dur&&i instanceof et&&i.vars.onComplete===i._targets[0]))&&fn(n,i,i._start-i._delay),i=r;return fn(He,n,0),n},context:function(e,t){return e?new Mu(e,t):Je},matchMedia:function(e){return new q_(e)},matchMediaRefresh:function(){return lr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ja()},addEventListener:function(e,t){var n=_s[e]||(_s[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_s[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:w_,wrapYoyo:T_,distribute:nu,random:ru,snap:iu,normalize:S_,getUnit:gt,clamp:v_,splitColor:ou,toArray:Qt,selector:Xa,mapRange:au,pipe:M_,unitize:b_,interpolate:E_,shuffle:tu},install:Hc,effects:Ma,ticker:kt,updateRoot:Ct.updateRoot,plugins:Nt,globalTimeline:He,core:{PropTween:Rt,globals:Wc,Tween:et,Timeline:Ct,Animation:or,getCache:_i,_removeLinkedListItem:Fs,reverting:function(){return _t},context:function(e){return e&&Je&&(Je.data.push(e),e._ctx=Je),Je},suppressOverwrites:function(e){return ro=e}}};Dt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return As[o]=et[o]});kt.add(Ct.updateRoot);Yi=As.to({},{duration:0});var Y_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},j_=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=Y_(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},Ea=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(a){var l,c;if(ct(r)&&(l={},Dt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}j_(a,r)}}}},Wt=As.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,a,l;this.tween=n;for(s in t)l=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(l||0)+"",t[s],i,r,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)_t?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ea("roundProps",qa),Ea("modifiers"),Ea("snap",iu))||As;et.version=Ct.version=Wt.version="3.11.4";Vc=1;Nc()&&ar();Ce.Power0;Ce.Power1;Ce.Power2;Ce.Power3;Ce.Power4;Ce.Linear;Ce.Quad;Ce.Cubic;Ce.Quart;Ce.Quint;Ce.Strong;Ce.Elastic;Ce.Back;Ce.SteppedEase;Ce.Bounce;Ce.Sine;Ce.Expo;Ce.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Kl,Gn,Ki,_o,di,Jl,xo,Z_=function(){return typeof window<"u"},In={},oi=180/Math.PI,Ji=Math.PI/180,Hi=Math.atan2,Ql=1e8,vo=/([A-Z])/g,$_=/(left|right|width|margin|padding|x)/i,K_=/[\s,\(]\S/,Pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Za=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},J_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Q_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},e0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},bu=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Su=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},t0=function(e,t,n){return e.style[t]=n},n0=function(e,t,n){return e.style.setProperty(t,n)},i0=function(e,t,n){return e._gsap[t]=n},r0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},s0=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},a0=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},We="transform",ln=We+"Origin",o0=function(e,t){var n=this,i=this.target,r=i.style;if(e in In){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Pn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=En(i,s)}):this.tfm[e]=i._gsap.x?i._gsap[e]:En(i,e)),this.props.indexOf(We)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ln,t,"")),e=We}(r||t)&&this.props.push(e,t,r[e])},wu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},l0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].replace(vo,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=xo(),r&&!r.isStart&&!n[We]&&(wu(n),i.uncache=1)}},Tu=function(e,t){var n={target:e,props:[],revert:l0,save:o0};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Eu,$a=function(e,t){var n=Gn.createElementNS?Gn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Gn.createElement(e);return n.style?n:Gn.createElement(e)},dn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(vo,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,cr(t)||t,1)||""},ec="O,Moz,ms,Ms,Webkit".split(","),cr=function(e,t,n){var i=t||di,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(ec[s]+e in r););return s<0?null:(s===3?"ms":s>=0?ec[s]:"")+e},Ka=function(){Z_()&&window.document&&(Kl=window,Gn=Kl.document,Ki=Gn.documentElement,di=$a("div")||{style:{}},$a("div"),We=cr(We),ln=We+"Origin",di.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Eu=!!cr("perspective"),xo=Wt.core.reverting,_o=1)},Aa=function o(e){var t=$a("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(Ki.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ki.removeChild(t),this.style.cssText=r,s},tc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Au=function(e){var t;try{t=e.getBBox()}catch{t=Aa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Aa||(t=Aa.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+tc(e,["x","cx","x1"])||0,y:+tc(e,["y","cy","y1"])||0,width:0,height:0}:t},Cu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Au(e))},Ur=function(e,t){if(t){var n=e.style;t in In&&t!==ln&&(t=We),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(vo,"-$1").toLowerCase())):n.removeAttribute(t)}},Vn=function(e,t,n,i,r,s){var a=new Rt(e._pt,t,n,0,1,s?Su:bu);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},nc={deg:1,rad:1,turn:1},c0={grid:1,flex:1},jn=function o(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",a=di.style,l=$_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",m=i==="%",g,d,p,_;return i===s||!r||nc[i]||nc[s]?r:(s!=="px"&&!h&&(r=o(e,t,n,"px")),_=e.getCTM&&Cu(e),(m||s==="%")&&(In[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],Ye(m?r/g*f:r/100*g)):(a[l?"width":"height"]=f+(h?s:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Gn||!d.appendChild)&&(d=Gn.body),p=d._gsap,p&&m&&p.width&&l&&p.time===kt.time&&!p.uncache?Ye(r/p.width*f):((m||s==="%")&&!c0[dn(d,"display")]&&(a.position=dn(e,"position")),d===e&&(a.position="static"),d.appendChild(di),g=di[u],d.removeChild(di),a.position="absolute",l&&m&&(p=_i(d),p.time=kt.time,p.width=d[u]),Ye(h?g*r/f:g&&r?f/g*r:0))))},En=function(e,t,n,i){var r;return _o||Ka(),t in Pn&&t!=="transform"&&(t=Pn[t],~t.indexOf(",")&&(t=t.split(",")[0])),In[t]&&t!=="transform"?(r=Br(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ps(dn(e,ln))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Cs[t]&&Cs[t](e,t,n)||dn(e,t)||qc(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?jn(e,t,r,n)+n:r},u0=function(e,t,n,i){if(!n||n==="none"){var r=cr(t,e,1),s=r&&dn(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=dn(e,"borderTopColor"))}var a=new Rt(this._pt,e.style,t,0,1,vu),l=0,c=0,u,f,h,m,g,d,p,_,M,y,S,v;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=dn(e,t)||i,e.style[t]=n),u=[n,i],cu(u),n=u[0],i=u[1],h=n.match(qi)||[],v=i.match(qi)||[],v.length){for(;f=qi.exec(i);)p=f[0],M=i.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(d=h[c++]||"")&&(m=parseFloat(d)||0,S=d.substr((m+"").length),p.charAt(1)==="="&&(p=$i(m,p)+S),_=parseFloat(p),y=p.substr((_+"").length),l=qi.lastIndex-y.length,y||(y=y||Vt.units[t]||S,l===i.length&&(i+=y,a.e+=y)),S!==y&&(m=jn(e,t,d,y)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Su:bu;return Bc.test(i)&&(a.e=0),this._pt=a,a},ic={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},h0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ic[n]||n,t[1]=ic[i]||i,t.join(" ")},f0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],In[a]&&(l=1,a=a==="transformOrigin"?ln:We),Ur(n,a);l&&(Ur(n,We),s&&(s.svg&&n.removeAttribute("transform"),Br(n,1),s.uncache=1,wu(i)))}},Cs={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new Rt(e._pt,t,n,0,0,f0);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},kr=[1,0,0,1,0,0],Pu={},Lu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},rc=function(e){var t=dn(e,We);return Lu(t)?kr:t.substr(7).match(kc).map(Ye)},yo=function(e,t){var n=e._gsap||_i(e),i=e.style,r=rc(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?kr:r):(r===kr&&!e.offsetParent&&e!==Ki&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Ki.appendChild(e)),r=rc(e),l?i.display=l:Ur(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):Ki.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ja=function(e,t,n,i,r,s){var a=e._gsap,l=r||yo(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],M=l[5],y=t.split(" "),S=parseFloat(y[0])||0,v=parseFloat(y[1])||0,C,L,x,b;n?l!==kr&&(L=m*p-g*d)&&(x=S*(p/L)+v*(-d/L)+(d*M-p*_)/L,b=S*(-g/L)+v*(m/L)-(m*M-g*_)/L,S=x,v=b):(C=Au(e),S=C.x+(~y[0].indexOf("%")?S/100*C.width:S),v=C.y+(~(y[1]||y[0]).indexOf("%")?v/100*C.height:v)),i||i!==!1&&a.smooth?(_=S-c,M=v-u,a.xOffset=f+(_*m+M*d)-_,a.yOffset=h+(_*g+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=v,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[ln]="0px 0px",s&&(Vn(s,a,"xOrigin",c,S),Vn(s,a,"yOrigin",u,v),Vn(s,a,"xOffset",f,a.xOffset),Vn(s,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+v)},Br=function(e,t){var n=e._gsap||new du(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",a="deg",l=getComputedStyle(e),c=dn(e,ln)||"0",u,f,h,m,g,d,p,_,M,y,S,v,C,L,x,b,E,N,H,I,D,V,j,Z,z,K,J,le,k,$,ee,Q;return u=f=h=d=p=_=M=y=S=0,m=g=1,n.svg=!!(e.getCTM&&Cu(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[We]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[We]!=="none"?l[We]:"")),i.scale=i.rotate=i.translate="none"),L=yo(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),Ja(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,L)),v=n.xOrigin||0,C=n.yOrigin||0,L!==kr&&(N=L[0],H=L[1],I=L[2],D=L[3],u=V=L[4],f=j=L[5],L.length===6?(m=Math.sqrt(N*N+H*H),g=Math.sqrt(D*D+I*I),d=N||H?Hi(H,N)*oi:0,M=I||D?Hi(I,D)*oi+d:0,M&&(g*=Math.abs(Math.cos(M*Ji))),n.svg&&(u-=v-(v*N+C*I),f-=C-(v*H+C*D))):(Q=L[6],$=L[7],J=L[8],le=L[9],k=L[10],ee=L[11],u=L[12],f=L[13],h=L[14],x=Hi(Q,k),p=x*oi,x&&(b=Math.cos(-x),E=Math.sin(-x),Z=V*b+J*E,z=j*b+le*E,K=Q*b+k*E,J=V*-E+J*b,le=j*-E+le*b,k=Q*-E+k*b,ee=$*-E+ee*b,V=Z,j=z,Q=K),x=Hi(-I,k),_=x*oi,x&&(b=Math.cos(-x),E=Math.sin(-x),Z=N*b-J*E,z=H*b-le*E,K=I*b-k*E,ee=D*E+ee*b,N=Z,H=z,I=K),x=Hi(H,N),d=x*oi,x&&(b=Math.cos(x),E=Math.sin(x),Z=N*b+H*E,z=V*b+j*E,H=H*b-N*E,j=j*b-V*E,N=Z,V=z),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=Ye(Math.sqrt(N*N+H*H+I*I)),g=Ye(Math.sqrt(j*j+Q*Q)),x=Hi(V,j),M=Math.abs(x)>2e-4?x*oi:0,S=ee?1/(ee<0?-ee:ee):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Lu(dn(e,We)),Z&&e.setAttribute("transform",Z))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=h+s,n.scaleX=Ye(m),n.scaleY=Ye(g),n.rotation=Ye(d)+a,n.rotationX=Ye(p)+a,n.rotationY=Ye(_)+a,n.skewX=M+a,n.skewY=y+a,n.transformPerspective=S+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ln]=Ps(c)),n.xOffset=n.yOffset=0,n.force3D=Vt.force3D,n.renderTransform=n.svg?p0:Eu?Du:d0,n.uncache=0,n},Ps=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ca=function(e,t,n){var i=gt(t);return Ye(parseFloat(t)+parseFloat(jn(e,"x",n+"px",i)))+i},d0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Du(e,t)},ii="0deg",yr="0px",ri=") ",Du=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,M=n.target,y=n.zOrigin,S="",v=_==="auto"&&e&&e!==1||_===!0;if(y&&(f!==ii||u!==ii)){var C=parseFloat(u)*Ji,L=Math.sin(C),x=Math.cos(C),b;C=parseFloat(f)*Ji,b=Math.cos(C),s=Ca(M,s,L*b*-y),a=Ca(M,a,-Math.sin(C)*-y),l=Ca(M,l,x*b*-y+y)}p!==yr&&(S+="perspective("+p+ri),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(v||s!==yr||a!==yr||l!==yr)&&(S+=l!==yr||v?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+ri),c!==ii&&(S+="rotate("+c+ri),u!==ii&&(S+="rotateY("+u+ri),f!==ii&&(S+="rotateX("+f+ri),(h!==ii||m!==ii)&&(S+="skew("+h+", "+m+ri),(g!==1||d!==1)&&(S+="scale("+g+", "+d+ri),M.style[We]=S||"translate(0, 0)"},p0=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,M=n.forceCSS,y=parseFloat(s),S=parseFloat(a),v,C,L,x,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ji,c*=Ji,v=Math.cos(l)*f,C=Math.sin(l)*f,L=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Ji,b=Math.tan(c-u),b=Math.sqrt(1+b*b),L*=b,x*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),v*=b,C*=b)),v=Ye(v),C=Ye(C),L=Ye(L),x=Ye(x)):(v=f,x=h,C=L=0),(y&&!~(s+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(y=jn(m,"x",s,"px"),S=jn(m,"y",a,"px")),(g||d||p||_)&&(y=Ye(y+g-(g*v+d*L)+p),S=Ye(S+d-(g*C+d*x)+_)),(i||r)&&(b=m.getBBox(),y=Ye(y+i/100*b.width),S=Ye(S+r/100*b.height)),b="matrix("+v+","+C+","+L+","+x+","+y+","+S+")",m.setAttribute("transform",b),M&&(m.style[We]=b)},m0=function(e,t,n,i,r){var s=360,a=ct(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?oi:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=r.split("_")[1],f==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),f==="cw"&&c<0?c=(c+s*Ql)%s-~~(c/s)*s:f==="ccw"&&c>0&&(c=(c-s*Ql)%s-~~(c/s)*s)),e._pt=h=new Rt(e._pt,t,n,i,c,J_),h.e=u,h.u="deg",e._props.push(n),h},sc=function(e,t){for(var n in t)e[n]=t[n];return e},g0=function(e,t,n){var i=sc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,f,h,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[We]=t,a=Br(n,1),Ur(n,We),n.setAttribute("transform",c)):(c=getComputedStyle(n)[We],s[We]=t,a=Br(n,1),s[We]=c);for(l in In)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(m=gt(c),g=gt(u),f=m!==g?jn(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Rt(e._pt,a,l,f,h-f,Za),e._pt.u=g||0,e._props.push(l));sc(a,i)};Dt("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?o+a:"border"+a+o});Cs[e>1?"border"+o:o]=function(a,l,c,u,f){var h,m;if(arguments.length<4)return h=s.map(function(g){return En(a,g,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},s.forEach(function(g,d){return m[g]=h[d]=h[d]||h[(d-1)/2|0]}),a.init(l,m,f)}});var Ru={name:"css",register:Ka,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,m,g,d,p,_,M,y,S,v,C,L,x;_o||Ka(),this.styles=this.styles||Tu(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Nt[d]&&pu(d,t,n,i,e,r)))){if(m=typeof u,g=Cs[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=zr(u)),g)g(this,e,d,u,n)&&(L=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Xn.lastIndex=0,Xn.test(c)||(p=gt(c),_=gt(u)),_?p!==_&&(c=jn(e,d,c,_)+_):p&&(u+=p),this.add(a,"setProperty",c,u,i,r,0,0,d),s.push(d),x.push(d,0,a[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],ct(c)&&~c.indexOf("random(")&&(c=zr(c)),gt(c+"")||(c+=Vt.units[d]||gt(En(e,d))||""),(c+"").charAt(1)==="="&&(c=En(e,d))):c=En(e,d),h=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),d in Pn&&(d==="autoAlpha"&&(h===1&&En(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,a.visibility),Vn(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=Pn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),y=d in In,y){if(this.styles.save(d),S||(v=e._gsap,v.renderTransform&&!t.parseTransform||Br(e,t.parseTransform),C=t.smoothOrigin!==!1&&v.smooth,S=this._pt=new Rt(this._pt,a,We,0,1,v.renderTransform,v,0,-1),S.dep=1),d==="scale")this._pt=new Rt(this._pt,v,"scaleY",v.scaleY,(M?$i(v.scaleY,M+f):f)-v.scaleY||0,Za),this._pt.u=0,s.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(ln,0,a[ln]),u=h0(u),v.svg?Ja(e,u,0,C,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==v.zOrigin&&Vn(this,v,"zOrigin",v.zOrigin,_),Vn(this,a,d,Ps(c),Ps(u)));continue}else if(d==="svgOrigin"){Ja(e,u,1,C,0,this);continue}else if(d in Pu){m0(this,v,d,h,M?$i(h,M+u):u);continue}else if(d==="smoothOrigin"){Vn(this,v,"smooth",v.smooth,u);continue}else if(d==="force3D"){v[d]=u;continue}else if(d==="transform"){g0(this,u,e);continue}}else d in a||(d=cr(d)||d);if(y||(f||f===0)&&(h||h===0)&&!K_.test(u)&&d in a)p=(c+"").substr((h+"").length),f||(f=0),_=gt(u)||(d in Vt.units?Vt.units[d]:p),p!==_&&(h=jn(e,d,c,_)),this._pt=new Rt(this._pt,y?v:a,d,h,(M?$i(h,M+f):f)-h,!y&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?e0:Za),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Q_);else if(d in a)u0.call(this,e,d,c,M?M+u:u);else if(d in e)this.add(e,d,c||e[d],M?M+u:u,i,r);else if(d!=="parseTransform"){oo(d,u);continue}y||(d in a?x.push(d,0,a[d]):x.push(d,1,c||e[d])),s.push(d)}}L&&yu(this)},render:function(e,t){if(t.tween._time||!xo())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:En,aliases:Pn,getSetter:function(e,t,n){var i=Pn[t];return i&&i.indexOf(",")<0&&(t=i),t in In&&t!==ln&&(e._gsap.x||En(e,"x"))?n&&Jl===n?t==="scale"?r0:i0:(Jl=n||{})&&(t==="scale"?s0:a0):e.style&&!so(e.style[t])?t0:~t.indexOf("-")?n0:mo(e,t)},core:{_removeProperty:Ur,_getMatrix:yo}};Wt.utils.checkPrefix=cr;Wt.core.getStyleSaver=Tu;(function(o,e,t,n){var i=Dt(o+","+e+","+t,function(r){In[r]=1});Dt(e,function(r){Vt.units[r]="deg",Pu[r]=1}),Pn[i[13]]=o+","+e,Dt(n,function(r){var s=r.split(":");Pn[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Dt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Vt.units[o]="px"});Wt.registerPlugin(Ru);var li=Wt.registerPlugin(Ru)||Wt;li.core.Tween;var _0=`#define PI 3.141592653589793
#define PI2 6.283185307179586

attribute float index;
attribute float size;

uniform sampler2D u_positions1;
uniform sampler2D u_positions2;
uniform sampler2D u_colors1;
uniform sampler2D u_colors2;

uniform float u_transition;
uniform float u_time;

uniform vec3 u_pointer;
uniform float u_pointerRadius;
uniform float u_pointerArea;
uniform float u_pointerFrequency;
uniform float u_pointerScale;

varying vec4 v_color;

vec4 permute(vec4 x) {
	return mod(((x*34.0)+1.0)*x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
	return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v){ 
	const vec2 C = vec2(1.0/6.0, 1.0/3.0);
	const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

	
	vec3 i = floor(v + dot(v, C.yyy) );
	vec3 x0 = v - i + dot(i, C.xxx) ;

	
	vec3 g = step(x0.yzx, x0.xyz);
	vec3 l = 1.0 - g;
	vec3 i1 = min( g.xyz, l.zxy );
	vec3 i2 = max( g.xyz, l.zxy );

	
	vec3 x1 = x0 - i1 + 1.0 * C.xxx;
	vec3 x2 = x0 - i2 + 2.0 * C.xxx;
	vec3 x3 = x0 - 1. + 3.0 * C.xxx;

	
	i = mod(i, 289.0 ); 
	vec4 p = permute( permute( permute( 
    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

	
	
	float n_ = 1.0/7.0; 
	vec3  ns = n_ * D.wyz - D.xzx;

	vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  

	vec4 x_ = floor(j * ns.z);
	vec4 y_ = floor(j - 7.0 * x_ );    

	vec4 x = x_ *ns.x + ns.yyyy;
	vec4 y = y_ *ns.x + ns.yyyy;
	vec4 h = 1.0 - abs(x) - abs(y);

	vec4 b0 = vec4( x.xy, y.xy );
	vec4 b1 = vec4( x.zw, y.zw );

	vec4 s0 = floor(b0)*2.0 + 1.0;
	vec4 s1 = floor(b1)*2.0 + 1.0;
	vec4 sh = -step(h, vec4(0.0));

	vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
	vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

	vec3 p0 = vec3(a0.xy,h.x);
	vec3 p1 = vec3(a0.zw,h.y);
	vec3 p2 = vec3(a1.xy,h.z);
	vec3 p3 = vec3(a1.zw,h.w);

	
	vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
	p0 *= norm.x;
	p1 *= norm.y;
	p2 *= norm.z;
	p3 *= norm.w;

	
	vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
	m = m * m;
	return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

vec3 snoiseVec3(vec3 x) {
    return vec3(snoise(vec3(x) * 2. - 1.), snoise(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2)) * 2. - 1., snoise(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4) * 2. - 1.));
}
vec3 curlNoise(vec3 p) {
    const float e = .1;
    vec3 dx = vec3(e, 0.0, 0.0);
    vec3 dy = vec3(0.0, e, 0.0);
    vec3 dz = vec3(0.0, 0.0, e);

    vec3 p_x0 = snoiseVec3(p - dx);
    vec3 p_x1 = snoiseVec3(p + dx);
    vec3 p_y0 = snoiseVec3(p - dy);
    vec3 p_y1 = snoiseVec3(p + dy);
    vec3 p_z0 = snoiseVec3(p - dz);
    vec3 p_z1 = snoiseVec3(p + dz);

    float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
    float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
    float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

    const float divisor = 1.0 / (2.0 * e);
    return normalize(vec3(x, y, z) * divisor);
}

void main() {
  float progress = fract(u_transition); 

  
  vec4 color = mix(texture2D(u_colors1, position.xy), texture2D(u_colors2, position.xy), progress);
  v_color = color;

  
  vec3 _position1 = texture2D(u_positions1, position.xy).xyz;
  vec3 _position2 = texture2D(u_positions2, position.xy).xyz;
  vec3 _position = mix(_position1, _position2, progress);

  float displace = cos(index + u_time / 10.0) / 10.0;
  _position = (modelMatrix * vec4(_position.x, _position.y + displace, _position.z, 1.0)).xyz;

  
	vec2 difference = _position.xy - u_pointer.xy;
	float distance = length(difference * (u_pointerArea * 8.0));
	_position = mix(_position + curlNoise(_position * u_pointerFrequency) * u_pointerScale, _position, smoothstep(0.0, u_pointerRadius, distance));

	vec4 mvPosition = viewMatrix * vec4(_position, 1.0);
	gl_Position = projectionMatrix * mvPosition;

  
  gl_PointSize = size * ( 300.0 / - mvPosition.z );
}`,x0=`varying vec4 v_color;

void main() {

  
  

  
  vec2 uv = gl_PointCoord - 0.5;
  float circle = step(length(uv), 0.5);
  gl_FragColor = vec4(vec3(circle), 1.0) * v_color;

  
  
  
  
  

  
  
  

  
  
}`,v0=`#define PI 3.141592653589793
#define PI2 6.283185307179586

attribute float index;
attribute float size;

uniform sampler2D u_positions;

uniform float u_transition;
uniform float u_time;

uniform vec3 u_pointer;
uniform float u_pointerRadius;
uniform float u_pointerArea;
uniform float u_pointerFrequency;
uniform float u_pointerScale;

vec4 permute(vec4 x) {
	return mod(((x*34.0)+1.0)*x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
	return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v){ 
	const vec2 C = vec2(1.0/6.0, 1.0/3.0);
	const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

	
	vec3 i = floor(v + dot(v, C.yyy) );
	vec3 x0 = v - i + dot(i, C.xxx) ;

	
	vec3 g = step(x0.yzx, x0.xyz);
	vec3 l = 1.0 - g;
	vec3 i1 = min( g.xyz, l.zxy );
	vec3 i2 = max( g.xyz, l.zxy );

	
	vec3 x1 = x0 - i1 + 1.0 * C.xxx;
	vec3 x2 = x0 - i2 + 2.0 * C.xxx;
	vec3 x3 = x0 - 1. + 3.0 * C.xxx;

	
	i = mod(i, 289.0 ); 
	vec4 p = permute( permute( permute( 
    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

	
	
	float n_ = 1.0/7.0; 
	vec3  ns = n_ * D.wyz - D.xzx;

	vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  

	vec4 x_ = floor(j * ns.z);
	vec4 y_ = floor(j - 7.0 * x_ );    

	vec4 x = x_ *ns.x + ns.yyyy;
	vec4 y = y_ *ns.x + ns.yyyy;
	vec4 h = 1.0 - abs(x) - abs(y);

	vec4 b0 = vec4( x.xy, y.xy );
	vec4 b1 = vec4( x.zw, y.zw );

	vec4 s0 = floor(b0)*2.0 + 1.0;
	vec4 s1 = floor(b1)*2.0 + 1.0;
	vec4 sh = -step(h, vec4(0.0));

	vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
	vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

	vec3 p0 = vec3(a0.xy,h.x);
	vec3 p1 = vec3(a0.zw,h.y);
	vec3 p2 = vec3(a1.xy,h.z);
	vec3 p3 = vec3(a1.zw,h.w);

	
	vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
	p0 *= norm.x;
	p1 *= norm.y;
	p2 *= norm.z;
	p3 *= norm.w;

	
	vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
	m = m * m;
	return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

vec3 snoiseVec3(vec3 x) {
    return vec3(snoise(vec3(x) * 2. - 1.), snoise(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2)) * 2. - 1., snoise(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4) * 2. - 1.));
}
vec3 curlNoise(vec3 p) {
    const float e = .1;
    vec3 dx = vec3(e, 0.0, 0.0);
    vec3 dy = vec3(0.0, e, 0.0);
    vec3 dz = vec3(0.0, 0.0, e);

    vec3 p_x0 = snoiseVec3(p - dx);
    vec3 p_x1 = snoiseVec3(p + dx);
    vec3 p_y0 = snoiseVec3(p - dy);
    vec3 p_y1 = snoiseVec3(p + dy);
    vec3 p_z0 = snoiseVec3(p - dz);
    vec3 p_z1 = snoiseVec3(p + dz);

    float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
    float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
    float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

    const float divisor = 1.0 / (2.0 * e);
    return normalize(vec3(x, y, z) * divisor);
}

void main() {
  float progress = fract(u_transition); 

  
  vec3 _position = texture2D(u_positions, position.xy).xyz;

  float displace = cos(index + u_time / 10.0) / 10.0;
  _position = (modelMatrix * vec4(_position.x, _position.y + displace, _position.z, 1.0)).xyz;

  
	vec2 difference = _position.xy - u_pointer.xy;
	float distance = length(difference * (u_pointerArea * 8.0));
	_position = mix(_position + curlNoise(_position * u_pointerFrequency) * u_pointerScale, _position, smoothstep(0.0, u_pointerRadius, distance));

	vec4 mvPosition = viewMatrix * vec4(_position, 1.0);
	gl_Position = projectionMatrix * mvPosition;

  
  gl_PointSize = size * ( 300.0 / - mvPosition.z );
}`,y0=`varying vec4 v_color;

void main() {
  gl_FragColor = vec4(1.0, 0.808, 0.09, 1.0);
}`;const ut=new hn,fs=new U;class M0{constructor(e){let t=e.geometry;if(!t.isBufferGeometry||t.attributes.position.itemSize!==3)throw new Error("THREE.MeshSurfaceSampler: Requires BufferGeometry triangle mesh.");t.index&&(console.warn("THREE.MeshSurfaceSampler: Converting geometry to non-indexed BufferGeometry."),t=t.toNonIndexed()),this.geometry=t,this.randomFunction=Math.random,this.positionAttribute=this.geometry.getAttribute("position"),this.colorAttribute=this.geometry.getAttribute("color"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.positionAttribute,t=this.weightAttribute,n=new Float32Array(e.count/3);for(let r=0;r<e.count;r+=3){let s=1;t&&(s=t.getX(r)+t.getX(r+1)+t.getX(r+2)),ut.a.fromBufferAttribute(e,r),ut.b.fromBufferAttribute(e,r+1),ut.c.fromBufferAttribute(e,r+2),s*=ut.getArea(),n[r/3]=s}this.distribution=new Float32Array(e.count/3);let i=0;for(let r=0;r<n.length;r++)i+=n[r],this.distribution[r]=i;return this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,n){const i=this.distribution[this.distribution.length-1],r=this.binarySearch(this.randomFunction()*i);return this.sampleFace(r,e,t,n)}binarySearch(e){const t=this.distribution;let n=0,i=t.length-1,r=-1;for(;n<=i;){const s=Math.ceil((n+i)/2);if(s===0||t[s-1]<=e&&t[s]>e){r=s;break}else e<t[s]?i=s-1:n=s+1}return r}sampleFace(e,t,n,i){let r=this.randomFunction(),s=this.randomFunction();return r+s>1&&(r=1-r,s=1-s),ut.a.fromBufferAttribute(this.positionAttribute,e*3),ut.b.fromBufferAttribute(this.positionAttribute,e*3+1),ut.c.fromBufferAttribute(this.positionAttribute,e*3+2),t.set(0,0,0).addScaledVector(ut.a,r).addScaledVector(ut.b,s).addScaledVector(ut.c,1-(r+s)),n!==void 0&&ut.getNormal(n),i!==void 0&&this.colorAttribute!==void 0&&(ut.a.fromBufferAttribute(this.colorAttribute,e*3),ut.b.fromBufferAttribute(this.colorAttribute,e*3+1),ut.c.fromBufferAttribute(this.colorAttribute,e*3+2),fs.set(0,0,0).addScaledVector(ut.a,r).addScaledVector(ut.b,s).addScaledVector(ut.c,1-(r+s)),i.r=fs.x,i.g=fs.y,i.b=fs.z),this}}const b0=Math.PI,S0=function(){const o=new U,e=new U;return(t,n)=>(o.set(t/ci*2-1,-(n/Un)*2+1,.5),o.unproject(an),o.sub(an.position).normalize(),e.copy(an.position).add(o.multiplyScalar(-an.position.z/o.z)),new U().copy(e))}();function w0(o){for(var e=2;o>>=1;)e<<=1;return e}function T0(o){let e=Math.random(),t=Math.random(),n=e*2*b0,i=Math.acos(2*t-1),r=Math.cbrt(Math.random()),s=Math.sin(i);return[r*s*Math.cos(n)*o,r*s*Math.sin(n)*o,r*Math.cos(i)*o]}const E0=location.search.indexOf("debug")>-1;let ci,Un,wn,Mr,an,ac,oc;const A0=function(){let o,e=0,t=0,n=0,i,r,s;const l=Math.PI*2,c=document.querySelector(".container");let u;const f=new fi,h=new fi,m=new fi;h.add(m),f.add(h);const g=function(){ci=window.innerWidth,Un=window.innerHeight,Mr=new jg,wn=new Rc({antialias:!0,alpha:!0}),wn.setPixelRatio(Math.min(window.devicePixelRatio,2)),wn.setClearColor("#000",1),wn.setSize(ci,Un),u=wn.domElement,c.appendChild(u),an=new Kt(24,ci/Un,1,999),an.position.set(0,0,50),Mr.add(an),ac=new Qg("#fff",1),Mr.add(ac),E0&&(oc=new e_(an,u),oc.addEventListener("change",x)),p(),x(),Ic.onProgress=function(b,E,N){E===N&&x()}},d=function(){ci=window.innerWidth,Un=window.innerHeight,an.aspect=ci/Un,an.updateProjectionMatrix(),wn.setSize(ci,Un),wn.setPixelRatio(Math.min(2,window.devicePixelRatio)),renderRequest()},p=function(){o=[{name:"chibiprince",setting:E=>{E.scale(.2,.2,.2),E.rotateX(-.6)}},{name:"airplanprince",setting:E=>{E.scale(.4,.4,.4),E.translate(-4,3,0)}},{name:"rose",setting:E=>{E.scale(.2,.2,.2),E.translate(0,-1,0)}},{name:"boasnake",setting:E=>{E.rotateY(-.9),E.scale(.45,.45,.45),E.translate(0,-5,0)}},{name:"escenaRey",counts:5,setting:E=>{E.translate(2,-6,0)}},{name:"withfox",setting:E=>{E.scale(.4,.4,.4),E.translate(0,1,0)}},{name:"stars",setting:E=>{E.scale(1,1,1),E.translate(0,-4,-2)}}],e=o.length,t=0;const b=new t_;b.setDecoderPath("resources/draco/"),o.forEach((E,N)=>{b.load(`resources/models/${E.name}.drc`,H=>{E.setting&&E.setting(H);const I=o[N].counts?o[N].counts:(1+Math.random()*3).toFixed(2),D=S(H,I*5e4);E.positionsArray=D,n=Math.max(D.length,n),t++,e===t&&(_(),M(),y(),C()),H.dispose()})})},_=function(){i=new Dn({uniforms:{u_positions1:{value:null},u_positions2:{value:null},u_colors1:{value:null},u_colors2:{value:null},u_transition:{value:0},u_time:{value:0},u_pointer:{value:new U(-999,-999,-999)},u_pointerRadius:{value:1.5},u_pointerArea:{value:.08},u_pointerFrequency:{value:0},u_pointerScale:{value:1}},vertexShader:_0,fragmentShader:x0,blending:xs,depthTest:!1,transparent:!0,vertexColors:!0}),r=new Dn({uniforms:{u_positions:{value:null},u_transition:{value:0},u_time:{value:0}},vertexShader:v0,fragmentShader:y0,blending:xs,depthTest:!1,transparent:!0,vertexColors:!0});const b=new mn,E=w0(Math.sqrt(n)),N=E*E*4,H=new Be("#84c8ff"),I=new Be("#ffbc26"),D=new Float32Array(E*E*3);for(let z=E*E,K=0;K<z;K++)D[K*3]=K%E/E,D[K*3+1]=K/E/E;b.setAttribute("position",new Tt(D,3)),o.forEach((z,K)=>{const J=new Float32Array(N),le=z.name==="stars"?z.positionsArray.length+2e5:N;for(let ee=z.positionsArray,Q=0,G=0,_e;Q<le;Q+=4,G+=3)(!z.positionsArray[G]||!z.positionsArray[G+1]||!z.positionsArray[G+2])&&(_e=T0(100)),J[Q]=z.positionsArray[G]||_e[0],J[Q+1]=z.positionsArray[G+1]||_e[1],J[Q+2]=z.positionsArray[G+2]||_e[2];const k=new Float32Array(N);for(let ee=z.colorsArray,Q=0;Q<z.positionsArray.length;Q+=4){const G=Math.random()*5,_e=H.clone();_e.lerp(I,G/5),k[Q]=_e.r||0,k[Q+1]=_e.g||0,k[Q+2]=_e.b||0,k[Q+3]=1}const $=[J,k];if(z.texturePositions=new Ol($[0],E,E,Ut,An),z.texturePositions.magFilter=tt,z.texturePositions.needsUpdate=!0,delete z.positionsArray,z.textureColors=new Ol($[1],E,E,Ut,An),z.textureColors.magFilter=tt,z.textureColors.needsUpdate=!0,delete z.colorsArray,z.name==="stars"){r.uniforms.u_positions.value=z.texturePositions;const ee=new Nl(b,r);h.add(ee)}}),i.uniforms.u_positions1.value=o[0].texturePositions,i.uniforms.u_colors1.value=o[0].textureColors;const V=new Float32Array(E*E);V.forEach((z,K)=>{V[K]=K}),b.setAttribute("index",new Tt(V,1));const j=new Float32Array(E*E);j.forEach((z,K)=>{j[K]=Math.random()*wn.getPixelRatio()*.3}),b.setAttribute("size",new Tt(j,1));const Z=new Nl(b,i);m.add(Z),li.ticker.add(v),Mr.add(f)},M=function(){const b=function(){const E=Math.floor(i.uniforms.u_transition.value),N=o[E+1]?E+1:E;i.uniforms.u_positions1.value=o[E].texturePositions,i.uniforms.u_colors1.value=o[E].textureColors,i.uniforms.u_positions2.value=o[N].texturePositions,i.uniforms.u_colors2.value=o[N].textureColors,x()};s=li.timeline({paused:!0,repeat:-1,yoyo:!0,onUpdate:b}),s.to(i.uniforms.u_transition,5,{value:1,ease:"cubic.inOut"}),s.to(m.rotation,5.5,{y:l,ease:"cubic.inOut"},"<"),s.to(i.uniforms.u_transition,5,{value:2,ease:"cubic.inOut"}),s.to(m.rotation,5.5,{y:l*2,ease:"cubic.inOut"},"<"),s.to(i.uniforms.u_transition,5,{value:3,ease:"cubic.inOut"}),s.to(m.rotation,5.5,{y:l*3,ease:"cubic.inOut"},"<"),s.to(i.uniforms.u_transition,5,{value:4,ease:"cubic.inOut"}),s.to(m.rotation,5.5,{y:l*4,ease:"cubic.inOut"},"<"),s.to(i.uniforms.u_transition,5,{value:5,ease:"cubic.inOut"}),s.to(m.rotation,5.5,{y:l*5,ease:"cubic.inOut"},"<")},y=function(){window.addEventListener("scroll",C);let b,E,N,H;document.addEventListener("mousemove",function(I){const D=S0(I.clientX,I.clientY);E&&E.kill(),E=li.to(i.uniforms.u_pointer.value,.7,{x:D.x,y:D.y,z:D.z,ease:"quart.out"}),N&&N.kill(),N=li.to(i.uniforms.u_pointerRadius,.3,{value:2,ease:"quart.out",onUpdate:b,onComplete:()=>{N=li.to(i.uniforms.u_pointerRadius,1.5,{value:1,ease:"quad.out"})}}),H&&H.kill(),H=li.to(h.rotation,2,{x:nl.degToRad(D.y*-1.5),y:nl.degToRad(D.x*-1),ease:"quart.out"})})},S=function(b,E){const N=new Cn(b,new to);let H=E||parameters.count,I=new M0(N).build();const D=new U,V=[];for(let Z=0;Z<H;Z++)I.sample(D),V.push(D.x,D.y,D.z);return new Float32Array(V,3)},v=function(b,E,N){i.uniforms.u_time.value+=E*.05,f.rotation.y+=E*1e-4,x()},C=function(){requestAnimationFrame(L)},L=function(){const b=window.scrollY,E=c.offsetHeight-Un,N=b/E;s&&s.progress(N)},x=function(){wn.render(Mr,an)};g(),window.addEventListener("resize",d)};window.addEventListener("load",A0);
