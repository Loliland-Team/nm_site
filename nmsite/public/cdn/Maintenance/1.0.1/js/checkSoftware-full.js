(function(window) {

   "use strict";
   /*
    Список проверок: ПО->Платформа->Версия. Если не найден один из компонентов(ПО/платформа),
    будем считать, что обновление не требуется.
    */
   window.availableSoftware = {
      'platform': {
         'XP': true,
         'Vista/7/8': true,
         'Mac': true,
         'Linux': true,
         'Android': true,
         'iOS': true
      },
      'Internet Explorer': {
         'XP': 10,
         'Vista/7/8': 10,
         'links': {
            'about': 'http://windows.microsoft.com/internet-explorer',
            'update': 'http://windows.microsoft.com/ru-ru/internet-explorer/download-ie'
         }
      },
      'Microsoft Edge': {
         'XP': 12,
         'Vista/7/8': 12,
         'links': {
            'about': 'http://windows.microsoft.com/internet-explorer',
            'update': 'http://windows.microsoft.com/ru-ru/internet-explorer/download-ie'
         }
      },
      'IECompat': {
         'XP': false,
         'Vista/7/8': false
      },
      'Opera': {
         'XP': 18.0,
         'Vista/7/8': 18.0,
         'Mac': 18.0,
         'Linux': 18.0,
         'Android': false,
         'iOS': false,
         'links': {
            'about': 'http://www.opera.com/computer/',
            'update': 'http://www.opera.com/download/get/?partner=www'
         }
      },
      'Firefox': {
         'XP': 26.0,
         'Vista/7/8': 26.0,
         'Mac': 26.0,
         'Linux': 26.0,
         'Android': false,
         'iOS': false,
         'links': {
            'about': 'https://www.mozilla.org/firefox/desktop/',
            'update': 'https://www.mozilla.org/firefox/new/'
         }
      },
      'Chrome': {
         'XP': 32.0,
         'Vista/7/8': 32.0,
         'Mac': 32.0,
         'Linux': 32.0,
         'iOS': 32.0,
         'Android': 32.0,
         'links': {
            'about': 'https://www.google.com/chrome/browser/features.html',
            'update': 'https://www.google.com/chrome/browser/index.html'
         }
      },
      'Яндекс.Браузер': {
         'XP': 14.1,
         'Vista/7/8': 14.1,
         'Mac': 14.1,
         'Linux': 14.1,
         'Android': 14.1,
         'iOS': false,
         'links': {
            'about': 'http://browser.yandex.ru/',
            'update': 'http://browser.yandex.ru/download/'
         }
      },
      'Amigo': {
         'XP': 28.0,
         'Vista/7/8': 28.0,
         'Mac': 28.0,
         'Linux': 28.0,
         'Android': false,
         'iOS': false,
         'links': {
            'about': 'http://internet.mail.ru/',
            'update': 'http://internet.mail.ru/'
         }
      },
      'Safari': {
         'Mac': 534.57,
         'XP': false,
         'Vista/7/8': false,
         'Android': false,
         'iOS': 6.0
      },
      'Standart': {
         'Mac': false,
         'XP': false,
         'Vista/7/8': false,
         'Android': false
      },
      'flash': {
         'Internet Explorer': 11.0,
         'Other': 11.0
      },
      'Acrobat': {
         'Internet Explorer': 11.0,
         'Other': 11.0
      }
   };

   function getCookie(name) {
      var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
      return matches ? decodeURIComponent(matches[1]) : null
   }

   function setCookie(name, value, expires) {
      if (!expires) {
         expires = new Date();
      }
      document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString() + "; path=/";
   }

   function isPrivate() {
      var isPrivate = false;
      //Проверяем ТОЛЬКО на iOS
      if (/(iPad|iPhone|iPod|iOS)/.test(navigator.userAgent)) {
         try {
            localStorage.setItem("isPrivate", "false");
            if (localStorage.getItem("isPrivate") !== "false") {
               isPrivate = true;
            }
         } catch (e) {
            isPrivate = true;
         }
      }
      return isPrivate;
   }

   function getBrowser() {
      var Browser = {name: 'undefined', platform: 'undefined', 'version': 0},
         agentInfo = [
            {
               reg: /Windows NT (\d+\.\d+)/,
               success: function() {
                  if (parseFloat(RegExp.$1) < 6.0) {
                     Browser.platform = 'XP';
                  } else {
                     Browser.platform = 'Vista/7/8';
                  }
               }
            },
            {
               reg: /WOW64/,
               success: function() {
                  Browser.processor = 'x64';
               },
               fail: function() {
                  Browser.processor = 'x86';
               }
            },
            {
               reg: /Macintosh/,
               success: function() {
                  Browser.platform = 'Mac';
                  Browser.device = 'Mac';
               }
            },
            {
               reg: /Linux/,
               success: function() {
                  Browser.platform = 'Linux';
               }
            },
            {
               reg: /Android/,
               success: function() {
                  Browser.platform = 'Android';
               }
            },
            {
               reg: /(iPad|iPhone|iPod|iOS)/,
               success: function() {
                  Browser.platform = 'iOS';
                  if (/(iPad)/.test(navigator.userAgent)) {
                     Browser.device = 'iPad';
                  }
                  if (/(iPhone|iPod)/.test(navigator.userAgent)) {
                     Browser.device = 'iPhone';
                  }
               }
            },
            {
               reg: /KFTHWI/,
               success: function() {
                  Browser.platform = 'KindleFire';
               }
            },
            {
               reg: /Windows Phone/,
               success: function() {
                  Browser.platform = 'WindowsPhone';
               }
            },
            {
               reg: /MSIE[\/\s](\d+\.\d+)/,
               success: function() {
                  Browser.name = 'Internet Explorer';
                  Browser.version = RegExp.$1;
                  if (document.documentMode) { // IE 8+
                     if (document.documentMode != Browser.version) {
                        Browser.name = 'IECompat'
                     }
                  }
               }
            },
            {
               reg: /trident(.*)rv:(\d+\.\d+)(.*)like gecko/i,
               success: function() {
                  Browser.name = 'Internet Explorer';
                  Browser.version = RegExp.$2;
               }
            },
            {
               reg: /Safari[\/\s](\d+\.\d+)/,
               success: function() {
                  Browser.name = 'Safari';
                  if (Browser.platform == 'Android') {
                     Browser.name = 'Standart';
                  } else if (Browser.platform == 'iOS') {
                     /Version[\/\s](\d+\.\d+)/.test(navigator.userAgent);
                  }
                  Browser.version = RegExp.$1;
               }
            },
            {
               reg: /Chrome[\/\s](\d+\.\d+)/,
               success: function() {
                  Browser.name = 'Chrome';
                  Browser.version = RegExp.$1;
                  //Проверка на Google Chrome "полная версия" под андроид
                  if (/Mozilla[\/\s]5\.0 \(X11; Linux x86_64\) AppleWebKit[\/\s](\d+\.\d+) \(KHTML, like Gecko\) Chrome/.test(navigator.userAgent)) {
                     Browser.platform = Browser.platform || 'Android'
                  }
               }
            },
            {
               reg: /CriOS[\/\s](\d+\.\d+)/,
               success: function() {
                  Browser.name = 'Chrome';
                  Browser.version = RegExp.$1;
               }
            },
            {
               reg: /Edge[\/\s](\d+\.\d+)/,
               success: function() {
                  Browser.name = 'Microsoft Edge';
                  Browser.version = RegExp.$1;
               }
            },
            {
               reg: /(Opera|OPR)[\/\s](\d+\.\d+)/,
               success: function() {
                  //Opera и Opera Chromium
                  Browser.name = 'Opera';
                  Browser.version = RegExp.$2;
               }
            },
            {
               reg: /Firefox[\/\s](\d+\.\d+)/,
               success: function() {
                  //FireFox
                  Browser.name = 'Firefox';
                  Browser.version = RegExp.$1;
               }
            },
            {
               reg: /YaBrowser[\/\s](\d+\.\d+)/,
               success: function() {
                  //Яндекс.Браузер
                  Browser.name = 'Яндекс.Браузер';
                  Browser.version = RegExp.$1;
               }
            },
            {
               reg: /MRCHROME/,
               success: function() {
                  //Mail.ru Amigo Браузер
                  if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
                     Browser.name = 'Amigo';
                     Browser.version = RegExp.$1;
                  }
               }
            }
         ];
      for(var i = 0, len = agentInfo.length, item = ''; i < len; i++) {
         item = agentInfo[i];
         if (item.reg.test(navigator.userAgent)) {
            item.success();
         } else if (item.fail) {
            item.fail();
         }
      }
      return Browser;
   }

   function getFlash() {
      var flashVersion = 0;
      if (/MSIE/.test(navigator.userAgent) || /trident(.*)rv:(\d+\.\d+)(.*)like gecko/i.test(navigator.userAgent)) {
         var flashObj = null;
         try {
            flashObj = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
         } catch (ex) {
         }
         if (flashObj != null) {
            var fV;
            try {
               fV = flashObj.GetVariable("$version");
            } catch (err) {
            }
            flashVersion = parseFloat(fV.replace(/^.*?([0-9]+,[0-9]+).*$/, '$1').replace(',', '.'));
         }
      }
      if (navigator.plugins) {
         for (var i = 0, n = navigator.plugins.length; i < n; i++) {
            if (/Flash[\s](\d+\.\d+)/.test(navigator.plugins[i].description)) {
               var curVer = parseFloat(RegExp.$1);
               if (flashVersion < curVer) {
                  flashVersion = curVer;
               }

            }
         }
      }

      if (String(flashVersion).indexOf(".") < 0) {
         flashVersion += ".0";
      }
      flashObj = null;
      return flashVersion;
   }

   function getAcrobat() {
      var acrobatVersion = 0;
      if (/MSIE/.test(navigator.userAgent) || /trident(.*)rv:(\d+\.\d+)(.*)like gecko/i.test(navigator.userAgent)) {
         var control = null;
         try {
            control = new ActiveXObject('AcroPDF.PDF');
         } catch (e) {
         }
         if (!control) {
            try {
               control = new ActiveXObject('PDF.PdfCtrl');
            } catch (e) {
            }
         }
         if (!control) {
            try {
               control = new ActiveXObject('AcroIEHelperShim');
            } catch (e) {
            }
         }
         if (control) {
            acrobatVersion = control.GetVersions().split(',');
            acrobatVersion = acrobatVersion[0].split('=');
            acrobatVersion = parseFloat(acrobatVersion[1]);
         }
      }
      if (navigator.plugins) {
         for (var i = 0, n = navigator.plugins.length; i < n; i++) {
            if (navigator.plugins[i].name == 'Adobe Acrobat') {
               if (/(\d+\.\d+)/.test(navigator.plugins[i].description)) {
                  var curVer = Number(RegExp.$1);
                  if (acrobatVersion < curVer) {
                     acrobatVersion = curVer;
                  }
               }
            }
         }
      }

      if (String(acrobatVersion).indexOf(".") < 0) {
         acrobatVersion += ".0";
      }
      control = null;
      return acrobatVersion;
   }

   function compareVersion(a, b, debug) {
      a = a + "";
      b = b + "";
      function makeEqualZeroLeadCount(ai, bi) {
         var zeroCountDiff = Math.abs(ai.length - bi.length);
         for (var i = 0; i < zeroCountDiff; i++) {
            if (ai.length < bi.length) {
               ai = "0" + ai;
            } else if (bi.length < ai.length) {
               bi = "0" + bi;
            }
         }
         return {a: ai, b: bi};
      }

      if (a == b) {
         if (debug === true) {
            console.log("Prepare:", "curver:", a, "minver:", b);
         }
         return 0;
      } else {
         var av = a.split('.'),
            bv = b.split('.'),
            ai = [],
            bi = [],
            res, result;
         if (av.length < bv.length) {
            result = bv;
         } else {
            result = av;
         }
         for (var index = 0; index < result.length; index++) {
            var curAiValue = av[index] || 0,
               curBiValue = bv[index] || 0,
               aiValue = parseInt(curAiValue, 10),
               biValue = parseInt(curBiValue, 10);
            if (String(aiValue).length < String(curAiValue).length || String(biValue).length < String(curBiValue).length) {
               ai[index] = String(curAiValue);
               bi[index] = String(curBiValue);
               if (index == 0 && String(ai[index]).length != String(bi[index]).length) {
                  var parametres = makeEqualZeroLeadCount(ai[index], bi[index]);
                  ai[index] = parametres.a;
                  bi[index] = parametres.b;
               }
            } else {
               ai[index] = aiValue;
               bi[index] = biValue;
            }
         }

         for (var i = 0; i < ai.length; i++) {
            res = ai[i] > bi[i] ? 1 : ai[i] < bi[i] ? -1 : 0;
            if (res) break;
         }
         if (debug === true) {
            console.log("Prepare:", "curver:", ai, "minver:", bi);
         }
         return res;
      }
   }

   if (typeof module !== "undefined") {
      module.exports.compareVersion = compareVersion;
   }

   (function checkVersion(force, justGetInfo) {
      var urlGETparams = document.location.search.substr(1).split('&');
      for (var i = 0; i < urlGETparams.length; i++) {
         var getParam = urlGETparams[i].split('=');
         if (getParam.shift() == 'nocheck' && getParam.pop() == 1) { return; }
      }
      
      var urlParams = {}, params;
      if (document.location.hash) {
         params = (document.location.hash.substr(1)).split('&');
         for (var i = 0; i < params.length; i++) {
            var param = params[i].split('=');
            urlParams[param[0]] = param[1];
         }
      }
      window.software = {
         browser: getBrowser(),
         flash: getFlash,
         acrobat: getAcrobat,
         needUpdate: {
            browser: false,
            flash: false,
            acrobat: false
         },
         isPrivate: isPrivate()
      };

      if ((getCookie("timeToCheck") != null || getCookie("s3ttc") != null)  && !force && !justGetInfo) return;
      if (!justGetInfo) {
         var expires = new Date(); // получаем текущую дату
         var curTime = expires.toGMTString();
         expires.setDate(expires.getDate() + 1);
         expires.setHours(0);
         expires.setMinutes(0);
         expires.setSeconds(0);
         setCookie("s3ttc", curTime, expires);
      }
      var browser = window.software.browser,
         avlBwsrName = window.availableSoftware[browser.name],
         avlBwsrPlatform = avlBwsrName[browser.platform];

      /*
       Проверяем соответствие версий браузера.
       */
      if (browser && avlBwsrName) {
         if (avlBwsrName && avlBwsrName instanceof Object) {
            if (avlBwsrPlatform && compareVersion(browser.version, avlBwsrPlatform) < 0) {
               window.software.needUpdate.browser = browser.version;
            }
            if (browser.name == "IECompat") {
               window.software.needUpdate.browser = browser.version;
            } else if (!avlBwsrPlatform) {
               window.software.needUpdate.browser = "unsupported";
            }
         } else {
            if (avlBwsrName && compareVersion(browser.version, avlBwsrName) < 0) {
               window.software.needUpdate.browser = browser.version;
            }
         }
      } else {
         window.software.needUpdate.browser = "unsupported";
      }

      if (!justGetInfo && (window.software.needUpdate.browser !== false || window.software.isPrivate)) {
         document.location.href = "/cdn/detect/3.17.210/update.html#backLink=" + encodeURIComponent(document.location.href);
      }

      if (window.isCDNPage === true && urlParams.backLink && (window.software.needUpdate.browser === false && !window.software.isPrivate)) {
         document.location.href = decodeURIComponent(urlParams.backLink);
      }

      /**
       * Если браузер Edge, мы на reg'е, то выводим предупреждение.
       */
      if (!window.isCDNPage && force && browser.name === "Microsoft Edge" && (window.location.host.indexOf("reg") > -1)) {
         var div = document.createElement("DIV"),
            closeBtn = document.createElement("DIV");

         div.style.cssText = 'cursor: default; text-align: center; font-size: 14px; color: #3b3b3c; padding-top: 10px; ' +
            'padding-bottom: 10px; position: relative; background-color: #FBE799;';
         div.id = "kek";
         div.innerHTML = "Вы используете браузер <b>Microsoft Edge</b>, в котором работа с сайтом может быть затруднена.<br/> Пожалуйста, <a href=\"//help.sbis.ru/help/start/teh_terms/startie_win10\">откройте сайт в браузере <b>Microsoft Internet Explorer 11</b></a> или <b>Google Chrome</b> (рекомендуется).";
         closeBtn.innerHTML = "˟";
         closeBtn.style.cssText = 'cursor: pointer; width: 32px; height: 27px; line-height: 32px; color: #3c3c3v; position: absolute;' +
            'right: 0; top: 0; font-size: 30px; padding-top: 5px';
         closeBtn.onclick = function() {
            this.parentNode.parentNode.removeChild(this.parentNode);
         };
         div.appendChild(closeBtn);
         document.addEventListener("DOMContentLoaded", function() {
            document.body.insertBefore(div, document.body.firstChild);
         });
      }
   })(!!window.needForceCheck, !!window.justGetInfo)

})(window);