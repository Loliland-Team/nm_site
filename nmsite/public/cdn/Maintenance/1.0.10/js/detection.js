/* eslint-disable no-unused-vars */
/** Класс для определения ОС пользователя */
var OS = /** @class */ (function () {
   function OS() {
      this.os = null;
   }
   OS.detect = function (userAgent_) {
      var userAgent = userAgent_.replace('_', '.'); // в некоторых значениях user agent версия записывается 10_10_6 вместо 10.10.6

      for (var osName in OS.list) {
         if (!OS.list.hasOwnProperty(osName)) {
            continue;
         }
         if (OS.list[osName].reg.test(userAgent)) {
            return OS.list[osName];
         }
      }

      /** Если определить название ОС не удалось, определяем семейство ОС и версию */
      var familyName = null;
      for (var name_2 in OS.family) {
         if (!OS.family.hasOwnProperty(name_2)) {
            continue;
         }
         if (OS.family[name_2].reg.test(userAgent)) {
            familyName = name_2;
            break;
         }
      }

      if (!familyName) {
         throw new Error('\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u041E\u0421 \u0434\u043B\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F UserAgent ' + userAgent + ' :: ' + typeof userAgent);
      }
      var family = OS.family[familyName];
      var version = parseFloat((family.version.exec(userAgent) || [null]).pop()) || family.available;
      return {
         isAvailable: version >= family.available,
         name: family.name,
         version: version,
         family: family
      };
   };
   /** Семейства ОС */
   OS.family = {
      Windows: {
         name: 'Windows',
         reg: /Windows/i,
         version: /Windows NT ([0-9]{1,}[\.0-9]{0,})/i,
         available: 5.1 // Windows XP
      },
      Android: {
         name: 'Android',
         reg: /Android/i,
         version: /Android ([0-9]{1,}[\.0-9]{0,})/i,
         available: 0
      },
      Unix: {
         name: 'Unix',
         reg: /unix/i,
         version: new RegExp(''),
         available: 0
      },
      Linux: {
         name: 'Linux',
         reg: /linux/i,
         version: new RegExp(''),
         available: 0
      },
      IOS: {
         name: 'IOS',
         reg: /(iPhone|iPad|iPod)/i,
         version: /\bOS\s(\d+)/i,
         available: 6
      },
      MacOS: {
         name: 'MacOS',
         reg: /(Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/i,
         version: /Mac OS X ([0-9]{1,}[\.0-9]{0,})/i,
         available: 0
      }
   };
   OS.list = {
      //region Windows
      Windows10: {
         name: 'Windows 10',
         reg: /(Windows 10.0|Windows NT 10.0)/i,
         family: OS.family.Windows,
         version: 10.0,
         isAvailable: true
      },
      Windows8_1: {
         name: 'Windows 8.1',
         reg: /(Windows 8.1|Windows NT 6.3)/i,
         family: OS.family.Windows,
         version: 6.3,
         isAvailable: true
      },
      Windows8: {
         name: 'Windows 8',
         reg: /(Windows 8|Windows NT 6.2)/i,
         family: OS.family.Windows,
         version: 6.2,
         isAvailable: true
      },
      Windows7: {
         name: 'Windows 7',
         reg: /(Windows 7|Windows NT 6.1)/i,
         version: 6.1,
         family: OS.family.Windows,
         isAvailable: true
      },
      WindowsVista: {
         name: 'Windows Vista',
         reg: /Windows NT 6.0/i,
         family: OS.family.Windows,
         version: 6.0,
         isAvailable: false
      },
      WindowsServer2003: {
         name: 'Windows Server 2003',
         reg: /Windows NT 5.2/i,
         family: OS.family.Windows,
         version: 5.2,
         isAvailable: false
      },
      WindowsXP: {
         name: 'Windows XP',
         reg: /(Windows NT 5.1|Windows XP)/i,
         version: 5.1,
         family: OS.family.Windows,
         isAvailable: false
      },
      Windows2000: {
         name: 'Windows 2000',
         reg: /(Windows NT 5.0|Windows 2000)/i,
         version: 5.0,
         family: OS.family.Windows,
         isAvailable: false
      },
      WindowsME: {
         name: 'Windows ME',
         reg: /(Win 9x 4.90|Windows ME)/i,
         version: 4.9,
         family: OS.family.Windows,
         isAvailable: false
      },
      Windows98: {
         name: 'Windows 98',
         reg: /(Windows 98|Win98)/i,
         version: 4.5,
         family: OS.family.Windows,
         isAvailable: false
      },
      Windows95: {
         name: 'Windows 95',
         reg: /(Windows 95|Win95|Windows_95)/i,
         version: 4.2,
         family: OS.family.Windows,
         isAvailable: false
      },
      WindowsNT4_0: {
         name: 'Windows NT 4.0',
         reg: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/i,
         version: 4.0,
         family: OS.family.Windows,
         isAvailable: false
      },
      WindowsCE: {
         name: 'Windows CE',
         reg: /Windows CE/i,
         version: 3.5,
         family: OS.family.Windows,
         isAvailable: false
      },
      Windows3_11: {
         name: 'Windows 3.11',
         reg: /Win16/i,
         version: 3.11,
         family: OS.family.Windows,
         isAvailable: false
      }
   };
   return OS;
}());

/** Класс для определения браузера пользователя */
var Browser = (function () {
   function Browser() {
   }
   Browser.detect = function (userAgent_) {
      var userAgent = userAgent_.replace('_', '.').toLowerCase(); // в некоторых значениях user agent версия записывается 10_10_6 вместо 10.10.6

      /** Если однозначно определить браузер не удалось, определяем семейство и версию */
      var familyName = null;
      for (var name_2 in Browser.family) {
         if (!Browser.family.hasOwnProperty(name_2)) {
            continue;
         }
         if (Browser.family[name_2].reg.test(userAgent)) {
            familyName = name_2;
            break;
         }
      }
      if (!familyName) {
         throw new Error('\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0434\u043B\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F UserAgent ' + userAgent + ' :: ' + typeof userAgent);
      }
      var family = Browser.family[familyName];
      var _a = family.version, reg = _a.reg, available = _a.available;
      var version = parseFloat((reg.exec(userAgent) || [null]).pop()) || available; // при неопредленной версии считаем браузер актуальным
      return {
         isAvailable: version >= available,
         isCompatibleMode: (isCompatibleMode(userAgent) || document.documentMode && version !== document.documentMode),
         name: family.name,
         version: version,
         family: family
      };
   };
   Browser.family = {
      YaBrowser: {
         name: 'Яндекс Браузер',
         reg: /\bYaBrowser\/(\d+)/i,
         version: {
            reg: /YaBrowser\/([0-9]{1,}[\.0-9]{0,})/i,
            available: 17.4
         }
      },
      Firefox: {
         name: 'Firefox',
         reg: /Firefox/i,
         version: {
            reg: /Firefox\/([0-9]{1,}[\.0-9]{0,})/i,
            available: 36.0
         }
      },
      OperaChrome: {
         name: 'Opera',
         reg: /(OPR)/i,
         version: {
            reg: /OPR\/([0-9]{1,}[\.0-9]{0,})/i,
            available: 36.0
         }
      },
      Chrome: {
         name: 'Chrome',
         reg: /Chrome(?!.*Edge)/i,
         version: {
            reg: /Chrome\/([0-9]{1,}[\.0-9]{0,})/i,
            available: 49
         }
      },
      Opera: {
         name: 'Opera',
         reg: /(Opera)/i,
         version: {
            reg: /(Opera|Version)\/([0-9]{1,}[\.0-9]{0,})/i,
            available: 36.0
         }
      },
      Edge: {
         name: 'Microsoft Edge',
         reg: /Edge/i,
         version: {
            reg: /Edge\/([0-9]{1,}[\.0-9]{0,})/i,
            available: 17
         }
      },
      IE: {
         name: 'Internet Explorer',
         reg: /MSIE|rv\:/i,
         version: {
            reg: /(MSIE |rv:[ ]?)([0-9]{1,}[\.0-9]{0,})/i,
            available: 10
         }
      },
      Safari: {
         name: 'Safari',
         reg: /^((?!chrome|android|mobile).)*safari/i,
         version: {
            reg: /(Version)\/([0-9]{1,}[\.0-9]{0,})/i,
            available: 12
         }
      },
      SafariMobile: {
         name: 'Safari Mobile',
         reg: /.*Mobile.*Safari/i,
         version: {
            reg: /Version\/+([\w.]+).*Mobile.*Safari/i,
            available: 12
         }
      }
   };
   return Browser;
   /**
    * Проверка соответствия версии движка IE и браузера. 
    * При расхождении полагаем активным режим эмуляции
    * ! IE < 10 не работает
    * @param {UserAgent} ua
    * @returns {Boolean}
    */
   function isCompatibleMode(ua) {
      if (!ua || !/Trident/i.test(ua)) { return false; }
      var trident = parseFloat((/Trident\/([0-9]{1,}[.0-9]{0,})/i.exec(ua) || [0]).pop());
      var ie = parseFloat((/(MSIE |rv:)([0-9]{1,}[.0-9]{0,})/i.exec(ua) || [0]).pop());
      /**
       * Разница между движком и версией браузера == 4
       * https://ru.wikipedia.org/wiki/Microsoft_Trident
       */
      return (ie !== 4 + trident);
   }
}());

/** 
 * Возвращает true, если ПО удовлетворительное
 * @param {String} userAgent
 * @returns {Boolean}
 */
function isSoftwareAvailable(userAgent) {
   /** Редирект, если ОС и браузер пользователя ок */
   var browser = Browser.detect(userAgent);
   var os = OS.detect(userAgent);

   return browser.isAvailable
      && (os.isAvailable ||
         /** XP, Server 2003 и Vista не поддерживаются, но с Я.Браузером ок */
         browser.family === Browser.family.YaBrowser
         && os.version >= OS.list.WindowsXP.version
         && os.version <= OS.list.WindowsVista.version);
}