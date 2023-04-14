/** Класс для определения ОС пользователя */
var OS = (function () {
   function OS() {
      this.os = null;
   }
   OS.detect = function (userAgent_) {
      var userAgent = userAgent_.replace('_', '.'); // в некоторых значениях user agent версия записывается 10_10_6 вместо 10.10.6
      /** Попытка однозначно определить название ОС */
      var os_name;
      for (var name in OS.list) {
         if (!OS.list.hasOwnProperty(name)) { continue; }
         if (OS.list[name].reg.test(userAgent)) {
            os_name = name;
         }
      };
      if (os_name) {
         return OS.list[os_name];
      }
      /** Если определить название ОС не удалось, определяем семейство ОС и версию */
      var family_name;
      for (var name in OS.families) {
         if (!OS.families.hasOwnProperty(name)) { continue; }
         if (OS.families[name].reg.test(userAgent)) {
            family_name = name;
         }
      };
      if (!family_name) {
         throw new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u041E\u0421 \u0434\u043B\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F UserAgent " + userAgent + " :: " + typeof userAgent);
      }
      var family = OS.families[family_name];
      var version = parseFloat((family.version.exec(userAgent) || [null]).pop()) || family.available;
      var isAvailable = (version >= family.available);
      return { name: family.name, reg: null, version: version, family: family, isAvailable: isAvailable };
   };
   /** Семейства ОС */
   OS.families = {
      Windows: {
         name: 'Windows',
         reg: /Windows/,
         version: /Windows NT ([0-9]{1,}[\.0-9]{0,})/,
         available: 5.1 // Windows XP
      },
      Android: {
         name: 'Android',
         reg: /Android/i,
         version: /Android ([0-9]{1,}[\.0-9]{0,})/,
         available: 8
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
         reg: /(iPhone|iPad|iPod)/,
         version: /\bOS\s(\d+)/i,
         available: 12
      },
      MacOS: {
         name: 'MacOS',
         reg: /(Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/i,
         version: /Mac OS X ([0-9]{1,}[\.0-9]{0,})/i,
         available: 10.13
      }
   };
   OS.list = {
      //region Windows
      Windows10: {
         name: 'Windows 10',
         reg: /(Windows 10.0|Windows NT 10.0)/,
         family: OS.families.Windows,
         version: 10.0,
         isAvailable: true
      },
      Windows8_1: {
         name: 'Windows 8.1',
         reg: /(Windows 8.1|Windows NT 6.3)/,
         family: OS.families.Windows,
         version: 6.3,
         isAvailable: true
      },
      Windows8: {
         name: 'Windows 8',
         reg: /(Windows 8|Windows NT 6.2)/,
         family: OS.families.Windows,
         version: 6.2,
         isAvailable: true
      },
      Windows7: {
         name: 'Windows 7',
         reg: /(Windows 7|Windows NT 6.1)/,
         version: 6.1,
         family: OS.families.Windows,
         isAvailable: true
      },
      WindowsVista: {
         name: 'Windows Vista',
         reg: /Windows NT 6.0/,
         family: OS.families.Windows,
         version: 6.0,
         isAvailable: true
      },
      WindowsServer2003: {
         name: 'Windows Server 2003',
         reg: /Windows NT 5.2/,
         family: OS.families.Windows,
         version: 5.2,
         isAvailable: true
      },
      WindowsXP: {
         name: 'Windows XP',
         reg: /(Windows NT 5.1|Windows XP)/,
         version: 5.1,
         family: OS.families.Windows,
         isAvailable: true
      },
      Windows2000: {
         name: 'Windows 2000',
         reg: /(Windows NT 5.0|Windows 2000)/,
         version: 5.0,
         family: OS.families.Windows,
         isAvailable: false
      },
      WindowsME: {
         name: 'Windows ME',
         reg: /(Win 9x 4.90|Windows ME)/,
         version: 4.9,
         family: OS.families.Windows,
         isAvailable: false
      },
      Windows98: {
         name: 'Windows 98',
         reg: /(Windows 98|Win98)/,
         version: 4.5,
         family: OS.families.Windows,
         isAvailable: false
      },
      Windows95: {
         name: 'Windows 95',
         reg: /(Windows 95|Win95|Windows_95)/,
         version: 4.2,
         family: OS.families.Windows,
         isAvailable: false
      },
      WindowsNT4_0: {
         name: 'Windows NT 4.0',
         reg: /(Windows NT 4.0|WinNT4.0)/,
         version: 4.0,
         family: OS.families.Windows,
         isAvailable: false
      },
      WindowsCE: {
         name: 'Windows CE',
         reg: /Windows CE/,
         version: 3.5,
         family: OS.families.Windows,
         isAvailable: false
      },
      Windows3_11: {
         name: 'Windows 3.11',
         reg: /Win16/,
         version: 3.11,
         family: OS.families.Windows,
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
      var userAgent = userAgent_.replace('_', '.'); // в некоторых значениях user agent версия записывается 10_10_6 вместо 10.10.6
      var browser_name;
      for (var name in Browser.list) {
         if (!Browser.list.hasOwnProperty(name)) { continue; }
         if (Browser.list[name].reg.test(userAgent)) {
            browser_name = name;
         }
      };
      if (browser_name) {
         return Browser.list[browser_name];
      }

      var family_name;
      for (var name in Browser.families) {
         if (!Browser.families.hasOwnProperty(name)) { continue; }
         if (Browser.families[name].reg.test(userAgent)) {
            family_name = name;
         }
      };
      if (!family_name) {
         throw new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0434\u043B\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F UserAgent " + userAgent + " :: " + typeof userAgent);
      }
      var family = Browser.families[family_name];
      var _a = family.version, reg = _a.reg;
      var version = parseFloat((reg.exec(userAgent) || [""]).pop()) || null; // при неопредленной версии считаем браузер актуальным
      return {
         isAvailable: version >= family.version.available,
         name: family.name,
         version: version,
         family: family
      };
   };
   Browser.families = {
      YaBrowser: {
         name: 'Яндекс Браузер',
         reg: /\bYaBrowser\/(\d+)/i,
         version: {
            reg: /YaBrowser\/([0-9]{1,}[\.0-9]{0,})/i,
            available: 14.1
         }
      },
      Firefox: {
         name: 'Firefox',
         reg: /Firefox/i,
         version: {
            reg: /Firefox\/([0-9]{1,}[\.0-9]{0,})/i,
            available: 26.0
         }
      },
      OperaChrome: {
         name: 'Opera',
         reg: /(OPR)/i,
         version: {
            reg: /OPR\/([0-9]{1,}[\.0-9]{0,})/i,
            available: 18.0
         }
      },
      Chrome: {
         name: 'Chrome',
         reg: /Chrome/i,
         version: {
            reg: /Chrome\/([0-9]{1,}[\.0-9]{0,})/i,
            available: 32.0
         }
      },
      Opera: {
         name: 'Opera',
         reg: /(Opera)/i,
         version: {
            reg: /Opera\/([0-9]{1,}[\.0-9]{0,})/i,
            available: 18.0
         }
      },
      Edge: {
         name: 'Microsoft Edge',
         reg: /Edge/i,
         version: {
            reg: /Edge([0-9]{1,}[\.0-9]{0,})/,
            available: 12
         }
      },
      IE: {
         name: 'Internet Explorer',
         reg: /(MSIE|Trident)/i,
         version: {
            reg: /MSIE ([0-9]{1,}[\.0-9]{0,})/,
            available: 10
         }
      },
      Safari: {
         name: 'Safari',
         reg: /^((?!chrome|android).)*safari/i,
         version: {
            reg: /(Safari\/)+([\w.]+)/,
            available: 534.57
         }
      }
   };

   Browser.list = {
      IE11: {
         name: 'IE 11',
         reg: /Trident\/7.0/,
         family: Browser.families.IE,
         version: 11,
         isAvailable: true
      }
   }
   return Browser;
}());