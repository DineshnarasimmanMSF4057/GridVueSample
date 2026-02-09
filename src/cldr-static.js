// src/utils/cldr-static.js

// ---- EN ----
import enGregorian from 'cldr-data/main/en/ca-gregorian.json';
import enNumbers from 'cldr-data/main/en/numbers.json';
import enCurrencies from 'cldr-data/main/en/currencies.json';
import enTimeZones from 'cldr-data/main/en/timeZoneNames.json';

// ---- DE ----
import deGregorian from 'cldr-data/main/de/ca-gregorian.json';
import deNumbers from 'cldr-data/main/de/numbers.json';
import deCurrencies from 'cldr-data/main/de/currencies.json';
import deTimeZones from 'cldr-data/main/de/timeZoneNames.json';

// ---- FR ----
import frGregorian from 'cldr-data/main/fr/ca-gregorian.json';
import frNumbers from 'cldr-data/main/fr/numbers.json';
import frCurrencies from 'cldr-data/main/fr/currencies.json';
import frTimeZones from 'cldr-data/main/fr/timeZoneNames.json';

// ---- TR ----
import trGregorian from 'cldr-data/main/tr/ca-gregorian.json';
import trNumbers from 'cldr-data/main/tr/numbers.json';
import trCurrencies from 'cldr-data/main/tr/currencies.json';
import trTimeZones from 'cldr-data/main/tr/timeZoneNames.json';

// ---- Supplemental (single, not per-locale) ----
import numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import likelySubtags from 'cldr-data/supplemental/likelySubtags.json';
import weekData from 'cldr-data/supplemental/weekData.json';

// Map of short locale -> main CLDR chunks
export const CLDR = {
  en: { gregorian: enGregorian, numbers: enNumbers, currencies: enCurrencies, timeZones: enTimeZones },
  de: { gregorian: deGregorian, numbers: deNumbers, currencies: deCurrencies, timeZones: deTimeZones },
  fr: { gregorian: frGregorian, numbers: frNumbers, currencies: frCurrencies, timeZones: frTimeZones },
  tr: { gregorian: trGregorian, numbers: trNumbers, currencies: trCurrencies, timeZones: trTimeZones },
};

export const CLDR_SUPP = { numberingSystems, likelySubtags, weekData };