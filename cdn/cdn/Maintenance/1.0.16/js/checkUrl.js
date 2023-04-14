(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Не работает с CommonJS напрямую,
        // только CommonJS-образными средами, которые поддерживают

        // module.exports, как Node.
        module.exports = factory();
    } else {
        // Глобальные переменные браузера (root это window)
        root.getRedirectUrl = factory(root);
    }
}(this, function () {
    function removeURLParameter(url, parameter) {
        var urlparts = url.split('?');
        if (urlparts.length >= 2) {

            var prefix = encodeURIComponent(parameter) + '=';
            var pars = urlparts[1].split(/[&;]/g);

            for (var i = pars.length; i-- > 0;) {
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                    pars.splice(i, 1);
                }
            }

            return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
        }
        return url;
    }

    function getSecondLevel(domain) {
        return domain.split('.').splice(-2).join('.');
    }
    /**
     * Валидными считаются только абсолютные адреса
     * @param {string} link
     */
    function isValidLink(link) {
        var reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
        return reg.test(link);
    }
    /**
     * Проверяет параметр ret в адресной строке
     * Если параметр валидная ссылка и ведет на наш сайт,
     * то происходит переход при включении пользователем js
     */
    return function getRedirectUrl(currentLocation, retParamName) {
        // tslint:disable-next-line: max-line-length
        var returnLink = currentLocation.href.indexOf(retParamName + '=') !== -1 ? currentLocation.href.split(retParamName + '=').pop() : '';
        var validLink = getSecondLevel(currentLocation.hostname)
        if (returnLink !== '') {
            if (isValidLink(returnLink)) {
                var link = document.createElement('a');
                link.href = returnLink;
                var linkFromParams = getSecondLevel(link.hostname);
            }
        }
        returnLink = validLink === linkFromParams ? returnLink : removeURLParameter(currentLocation.href, retParamName);
        return returnLink;
    }
}));
