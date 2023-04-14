/*
 Highcharts JS v8.0.4 (2020-03-10)

 Support for parallel coordinates in Highcharts

 (c) 2010-2019 Pawel Fus

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define(["/cdn/Highcharts/8.0.4/highcharts.js"],function(f){b(f);b.Highcharts=f;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function f(b,c,f,g){b.hasOwnProperty(c)||(b[c]=g.apply(null,f))}b=b?b._modules:{};f(b,"modules/parallel-coordinates.src.js",[b["parts/Globals.js"],b["parts/Utilities.js"]],function(b,c){function f(a){var d=
this.series&&this.series.chart,b=a.apply(this,Array.prototype.slice.call(arguments,1)),c;if(d&&d.hasParallelCoordinates&&!l(b.formattedValue)){var h=d.yAxis[this.x];var e=h.options;d=(c=p(e.tooltipValueFormat,e.labels.format))?u(c,m(this,{value:this.y}),d):h.isDatetimeAxis?d.time.dateFormat(d.time.resolveDTLFormat(e.dateTimeLabelFormats[h.tickPositions.info.unitName]).main,this.y):e.categories?e.categories[this.y]:this.y;b.formattedValue=b.point.formattedValue=d}return b}var g=c.addEvent,v=c.arrayMax,
w=c.arrayMin,l=c.defined,x=c.erase,m=c.extend,u=c.format,k=c.merge,p=c.pick,q=c.splat,y=c.wrap;c=b.Axis;var n=b.Chart,z=n.prototype,r=b.Axis.prototype,t={lineWidth:0,tickLength:0,opposite:!0,type:"category"};b.setOptions({chart:{parallelCoordinates:!1,parallelAxes:{lineWidth:1,title:{text:"",reserveSpace:!1},labels:{x:0,y:4,align:"center",reserveSpace:!1},offset:0}}});g(n,"init",function(a){a=a.args[0];var d=q(a.yAxis||{}),b=d.length,c=[];if(this.hasParallelCoordinates=a.chart&&a.chart.parallelCoordinates){for(this.setParallelInfo(a);b<=
this.parallelInfo.counter;b++)c.push({});a.legend||(a.legend={});"undefined"===typeof a.legend.enabled&&(a.legend.enabled=!1);k(!0,a,{boost:{seriesThreshold:Number.MAX_VALUE},plotOptions:{series:{boostThreshold:Number.MAX_VALUE}}});a.yAxis=d.concat(c);a.xAxis=k(t,q(a.xAxis||{})[0])}});g(n,"update",function(a){a=a.options;a.chart&&(l(a.chart.parallelCoordinates)&&(this.hasParallelCoordinates=a.chart.parallelCoordinates),this.options.chart.parallelAxes=k(this.options.chart.parallelAxes,a.chart.parallelAxes));
this.hasParallelCoordinates&&(a.series&&this.setParallelInfo(a),this.yAxis.forEach(function(a){a.update({},!1)}))});m(z,{setParallelInfo:function(a){var d=this;a=a.series;d.parallelInfo={counter:0};a.forEach(function(a){a.data&&(d.parallelInfo.counter=Math.max(d.parallelInfo.counter,a.data.length-1))})}});r.keepProps.push("parallelPosition");g(c,"afterSetOptions",function(a){var d=this.chart,b=["left","width","height","top"];d.hasParallelCoordinates&&(d.inverted&&(b=b.reverse()),this.isXAxis?this.options=
k(this.options,t,a.userOptions):(this.options=k(this.options,this.chart.options.chart.parallelAxes,a.userOptions),this.parallelPosition=p(this.parallelPosition,d.yAxis.length),this.setParallelPosition(b,this.options)))});g(c,"getSeriesExtremes",function(a){if(this.chart&&this.chart.hasParallelCoordinates&&!this.isXAxis){var b=this.parallelPosition,c=[];this.series.forEach(function(a){a.visible&&l(a.yData[b])&&c.push(a.yData[b])});this.dataMin=w(c);this.dataMax=v(c);a.preventDefault()}});m(r,{setParallelPosition:function(a,
b){var c=(this.parallelPosition+.5)/(this.chart.parallelInfo.counter+1);this.chart.polar?b.angle=360*c:(b[a[0]]=100*c+"%",this[a[1]]=b[a[1]]=0,this[a[2]]=b[a[2]]=null,this[a[3]]=b[a[3]]=null)}});g(b.Series,"bindAxes",function(a){if(this.chart.hasParallelCoordinates){var b=this;this.chart.axes.forEach(function(a){b.insert(a.series);a.isDirty=!0});b.xAxis=this.chart.xAxis[0];b.yAxis=this.chart.yAxis[0];a.preventDefault()}});g(b.Series,"afterTranslate",function(){var a=this.chart,b=this.points,c=b&&
b.length,f=Number.MAX_VALUE,h;if(this.chart.hasParallelCoordinates){for(h=0;h<c;h++){var e=b[h];if(l(e.y)){e.plotX=a.polar?a.yAxis[h].angleRad||0:a.inverted?a.plotHeight-a.yAxis[h].top+a.plotTop:a.yAxis[h].left-a.plotLeft;e.clientX=e.plotX;e.plotY=a.yAxis[h].translate(e.y,!1,!0,null,!0);"undefined"!==typeof g&&(f=Math.min(f,Math.abs(e.plotX-g)));var g=e.plotX;e.isInside=a.isInsidePlot(e.plotX,e.plotY,a.inverted)}else e.isNull=!0}this.closestPointRangePx=f}},{order:1});g(b.Series,"destroy",function(){this.chart.hasParallelCoordinates&&
(this.chart.axes||[]).forEach(function(a){a&&a.series&&(x(a.series,this),a.isDirty=a.forceRedraw=!0)},this)});["line","spline"].forEach(function(a){y(b.seriesTypes[a].prototype.pointClass.prototype,"getLabelConfig",f)})});f(b,"masters/modules/parallel-coordinates.src.js",[],function(){})});
