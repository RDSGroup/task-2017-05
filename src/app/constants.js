// Self explanatory
"use strict";
// Abbreviations of Polish weekday names, 0 = Monday
exports.SHORTWEEKDAYNAMES = [
    'pon',
    'wto',
    'śro',
    'czw',
    'pią',
    'sob',
    'nie'
];
// Polish weekday names, 0 = Sunday
exports.LONGWEEKDAYNAMES = [
    'Niedziela',
    'Poniedziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota'
];
// Polish month names
exports.LONGMONTHNAMES = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień'
];
// Alternatively, use: 'https://script.google.com/macros/s/AKfycbxCqzx1h3-B9qYJEHRHFQ_q3tm8nPPFXOlIKwwMNxG54mexDsY/exec'
// This service will return a JSON representation of data in Spreadsheet available at
// https://docs.google.com/spreadsheets/d/1mwzBkt6PCtXwxPQq5Pbs01IAV-hlrNI7IR17lQJwniA/edit
// Which you can freely edit
// Be aware that only rows of spreadsheet with valid dates in the first column will be served through the service
exports.DATAURL = 'events.json';
//# sourceMappingURL=constants.js.map