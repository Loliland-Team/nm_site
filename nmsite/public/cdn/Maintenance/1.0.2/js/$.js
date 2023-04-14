var $ = (function () {
   return {
      lang: (document.cookie.indexOf('en-US') !== -1 || window.location.href.indexOf('en-US') !== -1) ? 'en-US' : 'ru-RU',
      addClass: addClass,
      removeClass: removeClass,
      createButton: createButton,
      createLink: createLink,
      createEl: createEl
   };
   /**
    * @param {HTMLElement} el
    * @param {String} className
    * @returns {HTMLElement} el
    */
   function addClass(el, className) {
      var classStr = el.getAttribute('class');
      if (classStr.indexOf(className) !== -1) { return el; }
      var classStr_ = classStr + ' ' + className;
      el.setAttribute('class', classStr_);
      el.setAttribute('className', classStr_);
      return el;
   }

   /**
    * @param {HTMLElement} el
    * @param {String} className
    * @returns {HTMLElement} el
    */
   function removeClass(el, className) {
      var classStr = el.getAttribute('class');
      var start = classStr.indexOf(className);
      if (start === -1) { return el; }
      var classStr_ = (classStr.slice(0, start) + classStr.slice(start + className.length)).trim();
      el.setAttribute('class', classStr_);
      el.setAttribute('className', classStr_);
      return el;
   }

   /**
    * @param {ActionConfig} options
    * @returns {HTMLElement}
    */
   function createButton(options) {
      var sclass = 'controls-BaseButton__text controls-Button__text_clickable_theme-default controls-Button__text_viewMode-button_theme-default';
      var wclass = 'controls-BaseButton__wrapper controls-fontsize-xl_theme-default controls-Button__wrapper_viewMode-button controls-Button__wrapper_button_2xl_theme-default';
      var aclass = 'controls-BaseButton controls-Button_button controls-Button_button_theme-default controls-Button_clickable controls-Button_button_style-primary_theme-default controls-Button_bg-same_theme-default controls-inlineheight-2xl_theme-default controls-Button_button_2xl_theme-default';

      return _createAction(aclass, wclass, sclass, options);
   }
   /**
    * @param {ActionConfig} options
    * @returns {HTMLElement}
    */
   function createLink(options) {
      var sclass = 'controls-BaseButton__text controls-text-link_theme-default controls-Button__text_viewMode-link_theme-default';
      var wclass = 'controls-BaseButton__wrapper controls-fontsize-xl_theme-default controls-Button__wrapper_viewMode-link';
      var aclass = 'controls-BaseButton controls-Button_link controls-Button_link_theme-default controls-Button_clickable controls-Button_link_style-secondary_theme-default controls-Button_bg-same_theme-default';

      return _createAction(aclass, wclass, sclass, options);
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
   function createEl(tag, attrs, content) {
      var el = document.createElement(tag);
      for (var attr_name in attrs) {
         if (!attrs.hasOwnProperty(attr_name)) { continue; }
         el.setAttribute(attr_name, attrs[attr_name]);
      }

      var children = content || [];
      children.forEach(function (child) {
         if (child instanceof HTMLElement) { el.appendChild(child); }
         if (typeof child === 'string') { el.appendChild(document.createTextNode(rk($.lang, child))); }
      })
      return el;
   }
   /**
    * @param {String} aclass
    * @param {String} wclass
    * @param {String} sclass
    * @param {ActionConfig} options
    * @returns {HTMLElement}
    */
   function _createAction(aclass, wclass, sclass, options) {
      var span = createEl('span', { class: sclass }, [options.caption]);
      var wrapper = createEl('span', { class: wclass }, [span]);
      var a = createEl('a', { class: aclass, href: options.href, target:'blank' }, [wrapper]);
      options.onclick && a.addEventListener('click', options.onclick, false);
      return a;
   }
}());