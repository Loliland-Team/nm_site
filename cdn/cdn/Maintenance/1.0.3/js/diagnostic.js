
var DiagnosticInit = (function () {
   var DELAY = 1000;
   var BROWSER_DOWNLOAD_LINKS = {
      'Chrome': 'https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B8BA36547-2493-FDAF-65E8-98DEE3C415AA%7D%26lang%3Dru%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26brand%3DCHBD%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe',
      'YaBrowser': 'https://browser.yandex.ru/download',
      'Firefox': 'https://www.mozilla.org/ru/firefox/download/thanks/',
      'Opera': 'https://www.opera.com/ru/computer/thanks',
      'OperaChrome': 'https://www.opera.com/ru/computer/thanks',
      'Safari': 'https://www.apple.com/ru/safari/',
      'Internet Explorer': 'https://www.microsoft.com/ru-ru/download/internet-explorer.aspx',
      'Edge': 'https://www.microsoft.com/ru-ru/windows/microsoft-edge'
   };

   return function (os, browser) {

      langSelectorInit(displayWarning);

      function displayWarning() {
         setLogo();
         setHeader('Диагностика рабочего места');
         setSubHeader('Браузер не удовлетворяет требованиям');

         if (!os.isAvailable) {
            if (os.family === OS.families.IOS || os.family === OS.families.Android) {
               oldMobileOS(os);
               return;
            }
            oldOS(os);
            return;
         }
         if (os === OS.list.WindowsXP || os === OS.list.WindowsVista) {
            VistaXP();
            return;
         }
         if (os.family === OS.families.Windows) {
            oldWindowsBrowser(browser);
            return;
         }
         oldLinuxMacBrowser(browser);
      };
   }

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
   }
   function VistaXP() {
      setMessage([
         p(['XP и Vista не поддерживаются компанией Microsoft.']),
         p(['Пожалуйста, обновите вашу операционную систему или установите Яндекс Браузер.'])
      ]);
      setAction([
         $.createButton({
            caption: 'Установить',
            href: BROWSER_DOWNLOAD_LINKS.YaBrowser,
            onclick: function () { showBottomTooltip(['Запустите мастер установки Yandex Browser и следуйте подсказкам']) }
         })
      ])
   };
   function oldWindowsBrowser(browser) {
      setMessage([
         p(['У вас обнаружен устаревший браузер ', browser.name, ' версии ', '' + browser.version, '!']),
         p(['Пожалуйста, обновите его до последней версии.'])
      ]);
      setAction([
         $.createButton({
            caption: 'Скачать',
            href: BROWSER_DOWNLOAD_LINKS[browser.name],
            onclick: function () { showBottomTooltip(['Запустите и установите ', browser.name]) }
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
      ])
      showTopTooltip(['Обновите браузер с помощью функции "Справка" - "О браузере"']);
   };


   function setLogo() {
      var logoEl = document.querySelector('.SbisEnv-ParkingPage__Header-logo');
      logoEl.setAttribute('src', '/cdn/SabyLogo/1.0.0/' + ($.lang === 'en-US' ? 'saby' : 'sbis_main') + '.png')
   }
   /**
    * @param {String} header
    * @void
    */
   function setHeader(header) {
      var headerEl = document.querySelector('.Diagnostics__content-header');
      headerEl.removeChild(headerEl.lastChild);
      headerEl.appendChild($.createEl('span', {}, [header]));
   }
   /**
    * @param {String} subheader
    * @void
    */
   function setSubHeader(subheader) {
      var subheaderEl = document.querySelector('.Diagnostics__content-subheader').querySelector('.controls-BaseButton__wrapper');
      subheaderEl.removeChild(subheaderEl.lastChild);
      subheaderEl.appendChild($.createEl('span', {
         class: "controls-BaseButton__text controls-text-link_theme-default controls-Button__text_gap_theme-default controls-Button__text_viewMode-link_theme-default"
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
      message.forEach(function (el) { messageEl.appendChild(el); });
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
      actions.forEach(function (el) { actionEl.appendChild(el); });
   }
   function langSelectorInit(callback) {
      var langSelectorEl = document.querySelector('.langSelector');
      var langItem = langSelectorEl.querySelector('.langSelector-langItem');
      var flagItem = langSelectorEl.querySelector('.langSelector-flagItem');

      selectLang($.lang);

      langSelectorEl.addEventListener('click', function () {
         var targetLang = ($.lang === 'en-US') ? 'ru-RU' : 'en-US';
         $.removeClass(flagItem, 'langSelector-flagItem-' + $.lang)
         $.lang = targetLang;
         document.cookie = 'lang=' + targetLang;
         selectLang(targetLang)
      }, false);

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
      captions.forEach(function (caption) {
         html += rk($.lang, caption);
      });
      captionEl.innerHTML = html;

      var tooltipEl = document.getElementById(prefix + 'Tooltip');
      var closeEl = document.getElementById('close' + prefix + 'Tooltip');

      closeEl.addEventListener('click', function () { $.addClass(tooltipEl, 'ws-hidden'); })
      setTimeout(function () { $.removeClass(tooltipEl, 'ws-hidden'); }, DELAY);
   }
}());