(function($) {
    var cultures = $.cultures,
        en = cultures.en,
        standard = en.calendars.standard,
        culture = cultures["ne"] = $.extend(true, {}, en, {
        name: "ne",
        englishName: "Nepali",
        nativeName: "नेपाली",
        language: "ne",
        numberFormat: {
            groupSizes: [3,2],
            percent: {
                pattern: ["-n%","n%"],
                groupSizes: [3,2]
            },
            currency: {
                pattern: ["-$n","$n"],
                symbol: "रु"
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                days: {
                    names: ["आइतवार","सोमवार","मङ्गलवार","बुधवार","बिहीवार","शुक्रवार","शनिवार"],
                    namesAbbr: ["आइत","सोम","मङ्गल","बुध","बिही","शुक्र","शनि"],
                    namesShort: ["आ","सो","म","बु","बि","शु","श"]
                },
                months: {
                    names: ["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जून","जुलाई","अगस्त","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर",""],
                    namesAbbr: ["जन","फेब","मार्च","अप्रिल","मे","जून","जुलाई","अग","सेप्ट","अक्ट","नोभ","डिस",""]
                },
                AM: ["विहानी","विहानी","विहानी"],
                PM: ["बेलुकी","बेलुकी","बेलुकी"],
                eras: [{"name":"a.d.","start":null,"offset":0}],
                patterns: {
                    Y: "MMMM,yyyy"
                }
            })
        }
    }, cultures["ne"]);
    culture.calendar = culture.calendars.standard;
})(Globalization);