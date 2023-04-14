
var RETURN_LINK_PREFIX = 'ret=';
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

window.onload = function main() {
   var userAgent = window.navigator.userAgent;
   
   var os = OS.detect(userAgent);
   if (!os.isAvailable) {
      if (os.family === OS.families.IOS || os.family === OS.families.Android) {
         oldMobileOS(os);
         return;
      }
      oldOS(os);
      return;
   }

   var browser = Browser.detect(userAgent);
   if (browser.isAvailable) {
      redirect();
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


function oldOS(os) {
   setMessage([
      p(['Ваша операционная система ' + os.name + ' версии ' + os.version + ' больше не поддерживается.']),
      p(['Пожалуйста, обновите операционную систему.'])
   ])
}
function oldMobileOS(os) {
   setMessage([
      p([os.name + ' версии ' + os.version + ' не поддерживается!']),
      p(['Пожалуйста, обновите его в настройках устройства или перейдите на другую операционную систему.'])
   ]);
   setAction([
      createLink({
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
      createButton({
         caption: 'Установить',
         href: BROWSER_DOWNLOAD_LINKS.YaBrowser,
         onclick: showBottomTooltip.bind(null, 'Запустите мастер установки Yandex Browser и следуйте подсказкам')
      })
   ])
};
function oldWindowsBrowser(browser) {
   setMessage([
      p(['У вас обнаружен устаревший браузер ' + browser.name + ' версии ' + browser.version + '!']),
      p(['Пожалуйста, обновите его до последней версии.'])
   ]);
   setAction([
      createButton({
         caption: 'Скачать',
         href: BROWSER_DOWNLOAD_LINKS[browser.name],
         onclick: showBottomTooltip.bind(null, 'Запустите и установите ' + browser.name)
      })
   ]);
}
function oldLinuxMacBrowser(browser) {
   setMessage([
      p(['У вас обнаружен устаревший браузер ' + browser.name + ' версии ' + browser.version + '!']),
      p([
         'Пожалуйста, обновитесь до последней версии, выбрав "Справка" - "О браузере" или ',
         createLink({ caption: 'скачав дистрибутив', href: BROWSER_DOWNLOAD_LINKS[browser.name] }),
         ' с сайта разработчика'
      ])
   ])
   showTopTooltip('Обновите браузер с помощью функции "Справка" - "О браузере"');
};


/**
 * @param {HTMLElement[]} message
 * @void
 */
function setMessage(message) {
   var messageEl = document.getElementById('Diagnostics__content-message');
   message.forEach(function (el) { messageEl.appendChild(el); });
}
/**
 * @param {HTMLElement[]} actions
 * @void
 */
function setAction(actions) {
   var actionEl = document.getElementById('Diagnostics__content-action');
   actions.forEach(function (el) { actionEl.appendChild(el); });
}


/**
 * @param {String} content
 * @returns {HTMLElement}
 */
function p(content) {
   return _createEl('p', {}, content);
}
/**
 * @param {ActionConfig} options
 * @returns {HTMLElement}
 */
function createButton(options) {
   var sclass = 'controls-BaseButton__text controls-text-default_theme-default controls-Button__text_viewMode-button_theme-default';
   var wclass = 'controls-BaseButton__wrapper controls-fontsize-3xl_theme-default controls-Button__wrapper_viewMode-button controls-Button__wrapper_button_2xl_theme-default';
   var aclass = 'controls-BaseButton controls-Button_button controls-Button_button_theme-default controls-Button_clickable controls-Button_button_style-primary_theme-default controls-Button_bg-same_theme-default controls-inlineheight-2xl_theme-default controls-Button_button_2xl_theme-default';

   return _createAction(aclass, wclass, sclass, options);
}
/**
 * @param {ActionConfig} options
 * @returns {HTMLElement}
 */
function createLink(options) {
   var sclass = 'controls-BaseButton__text controls-text-link_theme-default controls-Button__text_viewMode-link_theme-default';
   var wclass = 'controls-BaseButton__wrapper controls-fontsize-m_theme-default controls-Button__wrapper_viewMode-link';
   var aclass = 'controls-BaseButton controls-Button_link controls-Button_link_theme-default controls-Button_clickable controls-Button_link_style-secondary_theme-default controls-Button_bg-same_theme-default';

   return _createAction(aclass, wclass, sclass, options);
}
/**
 * @param {String} aclass
 * @param {String} wclass
 * @param {String} sclass
 * @param {ActionConfig} options
 * @returns {HTMLElement}
 */
function _createAction(aclass, wclass, sclass, options) {
   var span = _createEl('span', { class: sclass });
   span.innerHTML = options.caption;

   var wrapper = _createEl('span', { class: wclass });
   wrapper.appendChild(span);


   var a = _createEl('a', { class: aclass });
   a.setAttribute('href', options.href);
   options.onclick && a.addEventListener('click', options.onclick);
   a.appendChild(wrapper);

   return a;
}
/**
 * @typedef {Object} ActionConfig
 * @property {String} caption
 * @property {String} href
 * @property {function} onclick
 */

/**
 * @param {String} tag
 * @param {Object} [attrs={}]
 * @param {(String|HTMLElement)[]} [content='']
 * @returns {HTMLElement}
 */
function _createEl(tag, attrs, content) {
   var el = document.createElement(tag);
   for (var attr_name in attrs) {
      if (!attrs.hasOwnProperty(attr_name)) { continue; }
      el.setAttribute(attr_name, attrs[attr_name]);
   }

   var children = content || [];
   children.forEach(function (child) {
      if (child instanceof HTMLElement) { el.appendChild(child); }
      if (typeof child === 'string') { el.innerHTML += child; }
   })
   return el;
}


function showTopTooltip(caption) {
   _showTooltip('top', caption);
}
function showBottomTooltip(caption) {
   _showTooltip('bottom', caption);
}
function _showTooltip(prefix, caption) {
   var captionEl = document.getElementById(prefix + 'TooltipMessage');
   captionEl.innerHTML = caption;

   var tooltipEl = document.getElementById(prefix + 'Tooltip');
   var closeEl = document.getElementById('close' + prefix + 'Tooltip');

   closeEl.addEventListener('click', function () { tooltipEl.classList.add('ws-hidden'); })
   setTimeout(function () { tooltipEl.classList.remove('ws-hidden'); }, DELAY);
}


function redirect() {
   var returnLink = window.location.href.indexOf(RETURN_LINK_PREFIX) !== -1 && window.location.href.split(RETURN_LINK_PREFIX).pop() || '';
   window.location.href = "" + window.location.origin + returnLink;
}
