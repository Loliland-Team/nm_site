function getTranslateDict() {
   var
      cookies = (document.cookie||'').split('; '),
      translations = {
         'en-us': {
            'Поддержка': 'Support',
            'СБИС временно недоступен': 'We are on maintenance',
            'О новом': 'Update news',
            '/cdn/SabyLogo/1.0.0/sbis_main.svg': '/cdn/SabyLogo/1.0.0/saby.svg',
            'Идет обновление до версии': 'Service is updating to the version',
            'СБИС обновляется до версии': 'SABY is updating to the version',
            ' от ': ' of '
         }
      }, match, i;

   for (i = 0; i < cookies.length; ++i) {
      match = cookies[i].match(/^lang=([^=]*)$/i);
      if (match) {
         return translations[(match[1]||'').toLowerCase()];
      }
   }

   return null;
}

function localizeMessages() {
   var currentDict = getTranslateDict();
   if (!currentDict) {
      return;
   }

   var localized = document.getElementsByClassName('UpdateNews__localizable'), attr;
   for(var i = 0; i < localized.length; ++i ) {
      for (var key in currentDict) {
         if (currentDict.hasOwnProperty(key)) {
            localized[i].innerHTML = localized[i].innerHTML.replace(key, currentDict[key]);
         }
         attr = localized[i].getAttribute('src');
         if (attr) {
            localized[i].setAttribute('src', attr.replace(key, currentDict[key]));
         }
      }
   }
}

localizeMessages();
