var cgbBlocks;var cgbBlockId=0;(function(blocks,i18n,element){var el=element.createElement;var __=i18n.__;var SVG=wp.components.SVG;var p1=el('path',{d:"M 32 1 L 32 30 L 32 30 L 32 32 L 33 32 L 33 31 L 62 31 L 62 1 L 32 1 Z",fill:"#eff638"});var p2=el('path',{d:"M 29 31 L 29 31 L 0 31 L 0 61 L 30 61 L 30 32 L 31 32 L 31 31 L 29 31 Z",fill:"#eff638"});var p3=el('path',{d:"M 32 29 L 31 29 L 31 0 L 1 0 L 1 30 L 31 30 L 31 31 L 31 32 L 31 33 L 31 33 L 31 62 L 61 62 L 61 32 L 32 32 L 32 32 L 32 30 L 32 29 Z",fill:"#000000"});var svgIcon=el(SVG,{width:64,height:64,viewBox:'0 0 64 64'},[p1,p2,p3]);blocks.registerBlockType('cab-grid/basic-calculator',{title:__('Cab Grid: Simple Calculator','cab-grid'),icon:svgIcon,category:'widgets',edit:function(props){++cgbBlockId;cgbBlocks=props;return el('div',{className:"cabGridBlock ",id:"cgbBlock"+cgbBlockId},[el('p',{},__('The basic Cab Grid price calculator will be shown on your site','cab-grid')),el(wp.components.ExternalLink,{className:"cabGridUpgradeLink",href:"http://get.cabgrid.com/basic.php?f=cgb-wpa&upgrade=1&d="+window.location.host},__('Upgrade to Cab Grid Pro','cab-grid-pro')),])},save:function(props){return el('div',{className:"cabGridBlockContainer"},'[cabGrid]')},})}(window.wp.blocks,window.wp.i18n,window.wp.element));