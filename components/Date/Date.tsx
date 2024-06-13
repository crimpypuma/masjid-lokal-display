"use client";

import moment from "moment-hijri";
import 'moment/locale/sv';

// Set locale to Swedish
moment.locale('sv');

// Function to capitalize the first letter of each word
const capitalizeFirstLetter = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export default function Date() {
  // Format dates
  const rawEnglishDate = moment().format("dddd D MMMM YYYY");
  const englishDate = capitalizeFirstLetter(rawEnglishDate);
  const hijriDate = moment().locale("en").format("iD iMMMM iYYYY");

  return (
    <div className="text-white text-center md:text-left">
      <p className="font-bold text-2xl md:text-5xl">{englishDate}</p>
      <p className="mt-3 md:mt-5 text-2xl md:text-4xl">{hijriDate}</p>
    </div>
  );
}
