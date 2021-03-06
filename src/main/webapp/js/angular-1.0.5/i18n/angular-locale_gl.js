angular.module("ngLocale", [], ["$provide", function ($provide) {
    var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
    $provide.value("$locale", {"DATETIME_FORMATS": {"MONTH": ["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"], "SHORTMONTH": ["Xan", "Feb", "Mar", "Abr", "Mai", "Xuñ", "Xul", "Ago", "Set", "Out", "Nov", "Dec"], "DAY": ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"], "SHORTDAY": ["Dom", "Lun", "Mar", "Mér", "Xov", "Ven", "Sáb"], "AMPMS": ["AM", "PM"], "medium": "d MMM, y HH:mm:ss", "short": "dd/MM/yy HH:mm", "fullDate": "EEEE dd MMMM y", "longDate": "dd MMMM y", "mediumDate": "d MMM, y", "shortDate": "dd/MM/yy", "mediumTime": "HH:mm:ss", "shortTime": "HH:mm"}, "NUMBER_FORMATS": {"DECIMAL_SEP": ",", "GROUP_SEP": ".", "PATTERNS": [
        {"minInt": 1, "minFrac": 0, "macFrac": 0, "posPre": "", "posSuf": "", "negPre": "-", "negSuf": "", "gSize": 3, "lgSize": 3, "maxFrac": 3},
        {"minInt": 1, "minFrac": 2, "macFrac": 0, "posPre": "", "posSuf": " \u00A4", "negPre": "-", "negSuf": " \u00A4", "gSize": 3, "lgSize": 3, "maxFrac": 2}
    ], "CURRENCY_SYM": "€"}, "pluralCat": function (n) {
        if (n == 1) {
            return PLURAL_CATEGORY.ONE;
        }
        return PLURAL_CATEGORY.OTHER;
    }, "id": "gl"});
}]);