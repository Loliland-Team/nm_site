/* eslint-disable no-unused-vars */
/*global $, OS, Browser, rk */
var DiagnosticInit = (function () {
   var DELAY = 1000;
   var BROWSER_DOWNLOAD_LINKS = {
      // скачиваемые дистры
      'Chrome': 'https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B8BA36547-2493-FDAF-65E8-98DEE3C415AA%7D%26lang%3Dru%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26brand%3DCHBD%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe',
      'Яндекс Браузер': 'https://browser.yandex.ru/download',
      //  внешние страницы загрузки
      'Firefox': 'https://www.mozilla.org/ru/firefox/download/thanks/',
      'Opera': 'https://www.opera.com/ru/computer/thanks',
      'OperaChrome': 'https://www.opera.com/ru/computer/thanks',
      'Safari': 'https://www.apple.com/ru/safari/',
      'Safari Mobile': 'https://www.apple.com/ru/safari/',
      'Internet Explorer': 'https://www.microsoft.com/ru-ru/download/internet-explorer.aspx',
      'Edge': 'https://www.microsoft.com/ru-ru/windows/microsoft-edge',
      'Microsoft Edge': 'https://www.microsoft.com/ru-ru/windows/microsoft-edge'
   };
   var NOT_SUPPORTED_WINDOWS_BROWSERS = ['Спутник'];

   return function (os, browser) {

      langSelectorInit(displayWarning);

      function displayWarning() {
         setLogo();
         setHeader('Диагностика рабочего места');
         setSubHeader('Браузер не удовлетворяет требованиям');

         if (!os.isAvailable) {
            if (os.family === OS.family.IOS || os.family === OS.family.Android) {
               oldMobileOS(os);
               return;
            }
            if (os.version >= OS.list.WindowsXP.version && os.version <= OS.list.WindowsVista.version) {
               VistaXP();
               return;
            }
            oldOS(os);
            return;
         }
         if (browser.isCompatibleMode) {
            compatibleMode();
            return;
         }
         if (os.family === OS.family.Windows) {
            if (NOT_SUPPORTED_WINDOWS_BROWSERS.indexOf(browser.name) !== -1) {
               notSupportedWinBrowser(browser.name);
               return;
            }
            oldWindowsBrowser(browser);
            return;
         }
         oldLinuxMacBrowser(browser);
      }
   };

   function oldOS(os) {
      setMessage([
         p(['Ваша операционная система ', os.name, ' версии ', '' + os.version, ' больше не поддерживается.']),
         p(['Пожалуйста, обновите операционную систему.'])
      ]);
      setAction([
         $.createLink({
            caption: 'Технические требования к рабочему месту',
            href: 'https://sbis.ru/help/start/teh_terms'
         })
      ]);
   }
   function oldMobileOS(os) {
      setMessage([
         p([os.name, ' версии ', '' + os.version, ' не поддерживается!']),
         p(['Пожалуйста, обновите его в настройках устройства или перейдите на другую операционную систему.'])
      ]);
      setAction([
         $.createLink({
            caption: 'Технические требования к рабочему месту',
            href: 'https://sbis.ru/help/start/teh_terms'
         })
      ]);
      showTopTooltip(['Обновите браузер с помощью функции "Справка" - "О браузере"']);
   }
   function VistaXP() {
      setMessage([
         p(['XP и Vista не поддерживаются компанией Microsoft.']),
         p(['Пожалуйста, обновите вашу операционную систему или установите Яндекс Браузер.'])
      ]);
      setAction([
         $.createButton({
            caption: 'Установить',
            href: BROWSER_DOWNLOAD_LINKS['Яндекс Браузер'],
            onclick: function () { showBottomTooltip(['Запустите мастер установки Yandex Browser и следуйте подсказкам']); }
         })
      ]);
   }
   function compatibleMode() {
      setMessage([
         p(['У вас работает режим совместимости!']),
         p(['Пожалуйста, откройте среду разработчика с помощью клавиши F12 и на вкладке "Эмуляция" выберите режим документов "По умолчанию".'])
      ]);
      setAction([
         $.createLink({
            caption: 'Подробнее',
            href: 'https://sbis.ru/help/start/teh_terms'
         })
      ]);
   }
   function oldWindowsBrowser(browser) {
      setMessage([
         p(['У вас обнаружен устаревший браузер ', browser.name, ' версии ', '' + browser.version, '!']),
         p(['Пожалуйста, обновите его до последней версии.'])
      ]);
      var downloadableDistr = (browser.family === Browser.family.Chrome || browser.family === Browser.family.YaBrowser);
      setAction([
         $.createButton({
            caption: 'Скачать',
            href: BROWSER_DOWNLOAD_LINKS[browser.name],
            onclick: function () {
               if (downloadableDistr) {
                  showBottomTooltip(['Запустите и установите ', browser.name]);
               }
            }
         })
      ]);
   }
   function oldLinuxMacBrowser(browser) {
      setMessage([
         p(['У вас обнаружен устаревший браузер ', browser.name, ' версии ', '' + browser.version, '!']),
         p([
            'Пожалуйста, обновитесь до последней версии, выбрав "Справка" - "О браузере" или ',
            $.createLink({ caption: 'скачав дистрибутив', href: BROWSER_DOWNLOAD_LINKS[browser.name] }),
            ' с сайта разработчика'
         ])
      ]);
      showTopTooltip(['Обновите браузер с помощью функции "Справка" - "О браузере"']);
   }
   function notSupportedWinBrowser(name) {
      setMessage([
         p(['Ваш браузер ', name, ' больше не поддерживается.']),
         p(['Пожалуйста, используйте браузер Google Chrome.'])
      ]);
      setAction([
         $.createButton({
            caption: 'Скачать',
            href: BROWSER_DOWNLOAD_LINKS.Chrome,
            onclick: function () { showBottomTooltip(['Запустите и установите Google Chrome']); }
         })
      ]);
   }
   function setLogo() {
      var logoEl = document.getElementById('SbisEnv-ParkingPage__Header-logo');
      logoEl.setAttribute('src', '/cdn/SabyLogo/1.0.8/logo/' + ($.lang === 'en-US' ? 'saby' : 'sbis') + '/default/logo.svg');
   }
   /**
    * @param {String} header
    * @void
    */
   function setHeader(header) {
      var headerEl = document.getElementById('Diagnostics__content-header');
      headerEl.lastChild && headerEl.removeChild(headerEl.lastChild);
      headerEl.appendChild($.createEl('span', {}, [header]));
   }
   /**
    * @param {String} subheader
    * @void
    */
   function setSubHeader(subheader) {
      var subheaderEl = document.getElementById('Diagnostics__content-subheadern__wrapper');
      subheaderEl.lastChild && subheaderEl.removeChild(subheaderEl.lastChild);
      subheaderEl.appendChild($.createEl('span', {
         className: 'controls-BaseButton__text controls-text-link_theme-default controls-Button__text_gap_theme-default controls-Button__text_viewMode-link_theme-default'
      }, [subheader]));
   }
   /**
    * @param {HTMLElement[]} message
    * @void
    */
   function setMessage(message) {
      var messageEl = document.getElementById('Diagnostics__content-message');
      while (messageEl.lastChild) {
         messageEl.removeChild(messageEl.lastChild);
      }
      for (var el in message) {
         messageEl.appendChild(message[el]);
      }
   }
   /**
    * @param {HTMLElement[]} actions
    * @void
    */
   function setAction(actions) {
      var actionEl = document.getElementById('Diagnostics__content-action');
      while (actionEl.lastChild) {
         actionEl.removeChild(actionEl.lastChild);
      }
      for (var el in actions) {
         actionEl.appendChild(actions[el]);
      }
   }
   function langSelectorInit(callback) {
      var langSelectorEl = document.getElementById('langSelector');
      var langItem = document.getElementById('langSelector-langItem');
      var flagItem = document.getElementById('langSelector-flagItem');

      selectLang($.lang);

      $.addEvent(langSelectorEl, 'click', function () {
         var targetLang = ($.lang === 'en-US') ? 'ru-RU' : 'en-US';
         $.removeClass(flagItem, 'langSelector-flagItem-' + $.lang);
         $.lang = targetLang;
         document.cookie = 'lang=' + targetLang;
         selectLang(targetLang);
      });

      function selectLang(lang) {
         langItem.innerHTML = lang.split('-').pop();
         $.addClass(flagItem, 'langSelector-flagItem-' + lang);
         callback();
      }
   }

   /**
    * @param {String} content
    * @returns {HTMLElement}
    */
   function p(content) {
      return $.createEl('p', {}, content);
   }

   function showTopTooltip(captions) {
      _showTooltip('top', captions);
   }
   function showBottomTooltip(captions) {
      _showTooltip('bottom', captions);
   }
   function _showTooltip(prefix, captions) {
      var captionEl = document.getElementById(prefix + 'TooltipMessage');
      var html = '';
      for (var caption in captions) {
         html += rk($.lang, captions[caption]);
      }
      captionEl.innerHTML = html;

      var tooltipEl = document.getElementById(prefix + 'Tooltip');
      var closeEl = document.getElementById('close' + prefix + 'Tooltip');

      $.addEvent(closeEl, 'click', function () { $.addClass(tooltipEl, 'ws-hidden'); });
      setTimeout(function () { $.removeClass(tooltipEl, 'ws-hidden'); }, DELAY);
   }
}());
