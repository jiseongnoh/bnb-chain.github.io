"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[6833],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},h),{},{components:n})):a.createElement(f,o({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60430:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return h},default:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],c={},l="Get Started with Beacon Chain",s={unversionedId:"beaconchain/get-started",id:"beaconchain/get-started",isDocsHomePage:!1,title:"Get Started with Beacon Chain",description:"Wallet",source:"@site/docs/beaconchain/get-started.md",sourceDirName:"beaconchain",slug:"/beaconchain/get-started",permalink:"/docs/beaconchain/get-started",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/get-started.md",tags:[],version:"current",frontMatter:{}},h=[{value:"Wallet",id:"wallet",children:[],level:2},{value:"Chain Explorer",id:"chain-explorer",children:[],level:2},{value:"REST API",id:"rest-api",children:[{value:"Node RPC",id:"node-rpc",children:[],level:3}],level:2},{value:"Advanced Ways To Use Blockchain",id:"advanced-ways-to-use-blockchain",children:[{value:"Run your own full node",id:"run-your-own-full-node",children:[],level:3},{value:"Run your own light client",id:"run-your-own-light-client",children:[],level:3},{value:"Access via Node Command Line Interface (CLI)",id:"access-via-node-command-line-interface-cli",children:[],level:3},{value:"Use SDKs",id:"use-sdks",children:[],level:3}],level:2},{value:"Blockchain Details",id:"blockchain-details",children:[],level:2}],u={toc:h};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-started-with-beacon-chain"},"Get Started with Beacon Chain"),(0,i.kt)("h2",{id:"wallet"},"Wallet"),(0,i.kt)("p",null,"The easiest way to use Beacon Chain  is through a wallet with support for Beacon Chain  accounts and transfers."),(0,i.kt)("p",null,"For example, Binance provides a Web Wallet at ",(0,i.kt)("a",{parentName:"p",href:"https://www.binance.org"},"https://www.binance.org"),(0,i.kt)("br",null),"\nBinance also provides Web Wallet for testnet at ",(0,i.kt)("a",{parentName:"p",href:"https://testnet.binance.org"},"https://testnet.binance.org"),(0,i.kt)("br",null),"\nBoth provide the functions below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generating crypto keys and addresses, which serves as the base of a wallet"),(0,i.kt)("li",{parentName:"ul"},"Showing the balances of assets on the addresses"),(0,i.kt)("li",{parentName:"ul"},"Sending and receiving assets")),(0,i.kt)("p",null,"Beacon Chain  Web Wallet also presents a trading UI similar to Binance.com, where you can examine market data and manage your orders to trade among the listed assets.",(0,i.kt)("br",null),"\nLearn about the list of wallet available ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/wallets"},"here"),"."),(0,i.kt)("h2",{id:"chain-explorer"},"Chain Explorer"),(0,i.kt)("p",null,"Chain Explorer provides a portal to explore blocks and transaction details.",(0,i.kt)("br",null),"\nOn Beacon Chain  Explorer, you can also check different asset types, the distribution of their ownerships, and owners' transactions."),(0,i.kt)("h2",{id:"rest-api"},"REST API"),(0,i.kt)("p",null,"There are ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/faq/faq#what-is-the-accelerated-node"},"Accelerated Nodes")," which provide advanced API services for the public.",(0,i.kt)("br",null),"\nHere is a list of all the Rest API information Accelerated Node provides: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/dex-api/paths"},"paths")),(0,i.kt)("h3",{id:"node-rpc"},"Node RPC"),(0,i.kt)("p",null,"There are data seed nodes in the network which allow users to perform low-level operations like executing ABCI queries, viewing network/consensus state or broadcasting a transaction.\nIf you run a full node by yourself, you can also use those RPC functions. Here is a list of all the Node RPC services it provides: ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/node-rpc"},"node-rpc")),(0,i.kt)("h2",{id:"advanced-ways-to-use-blockchain"},"Advanced Ways To Use Blockchain"),(0,i.kt)("h3",{id:"run-your-own-full-node"},"Run your own full node"),(0,i.kt)("p",null,"Please refer to this guide about ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/fullnode"},"how to run your own node"),"."),(0,i.kt)("h3",{id:"run-your-own-light-client"},"Run your own light client"),(0,i.kt)("p",null,"Please refer to this guide about ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/light-client"},"how to run your own light client"),"."),(0,i.kt)("h3",{id:"access-via-node-command-line-interface-cli"},"Access via Node Command Line Interface (CLI)"),(0,i.kt)("p",null,"A Command Line Interface is available for Linux and Mac platforms.",(0,i.kt)("br",null),"\nPlease refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/cli"},"CLI Reference"),"."),(0,i.kt)("h3",{id:"use-sdks"},"Use SDKs"),(0,i.kt)("p",null,"SDKs are also provided as a starting point for your apps.",(0,i.kt)("br",null),"\nThere are two advanced SDK solutions for Beacon Chain : ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/java-sdk"},"Java")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/go-sdk"},"Golang"),".",(0,i.kt)("br",null),"\nBoth solutions provide functions for:",(0,i.kt)("br",null)),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create wallets and manage keys"),(0,i.kt)("li",{parentName:"ul"},"Encode/sign transactions and submit to Beacon Chain /DEX, including Transfer, New Order, Cancel Order, etc."),(0,i.kt)("li",{parentName:"ul"},"Communicate with Beacon Chain /DEX Node RPC calls through public node RPC services or your own private full nodes")),(0,i.kt)("p",null,"Please refer to specific SDK documentation for more information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/go-sdk"},"Go"),"(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/go-sdk/wiki"},"Documentation"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/java-sdk"},"Java"),"(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/java-sdk/wiki"},"Documentation"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/javascript-sdk"},"Javascript")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/javascript-sdk/wiki"},"Documentation"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/cplusplus-sdk"},"C++"),"(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/cplusplus-sdk/wiki"},"Documentation"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/csharp-sdk"},"C#"),"(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/csharp-sdk"},"Documentation"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/python-sdk"},"Python"),"(",(0,i.kt)("a",{parentName:"li",href:"https://python-binance-chain.readthedocs.io/en/latest/binance-chain.html#module-binance_chain"},"Documentation"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/swift-sdk"},"Swift"),"(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/swift-sdk/blob/master/README.md"},"Documentation"),")")),(0,i.kt)("h2",{id:"blockchain-details"},"Blockchain Details"),(0,i.kt)("p",null,"Please check the ",(0,i.kt)("a",{parentName:"p",href:"/docs/beaconchain/index#technology-details"},"technical details")," for more technical information."))}p.isMDXComponent=!0}}]);