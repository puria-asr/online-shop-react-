import { compareAsc, format, newDate } from "date-fns-jalali";
export const getAppTitle = () => {
  return process.env.REACT_APP_APLICATION_NAME;
};

export const getAppDescription = () => {
  return process.env.REACT_APP_WEBSITE_DESC;
};

export const convertNumberToPersian = (number) => {
  const persianNumber = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number.toString().replace(/[0-9]/g, function (w) {
    return persianNumber[+w];
  });
};

export const getCopyrightMassege = () => {
  return process.env.REACT_APP_WEBSITE_COPYRIGHT;
};

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const parseLinkHeader = (linkHeader) => {
  const linkHeadersArray = linkHeader
    .split(", ")
    .map((header) => header.split("; "));
  const linkHeadersMap = linkHeadersArray.map((header) => {
    const thisHeaderRel = header[1].replace(/"/g, "").replace("rel=", "");
    const thisHeaderUrl = header[0].slice(1, -1);
    return [thisHeaderRel, thisHeaderUrl];
  });
  return Object.fromEntries(linkHeadersMap);
};

export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export function findWord(word, str) {
  return str.split(" ").some(function (w) {
    return w === word;
  });
}

export function getDateToJalaliFormat(timestamp) {
  let today = new Date(timestamp);
  let dd = String(today.getDate());
  let mm = String(today.getMonth());
  let yyyy = today.getFullYear();
  today = today.toLocaleDateString("fa-IR");
  return today;
}

export function countSameElement(array) {
  array.sort();
  var current = null;
  let newArray = [];
  var cnt = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] != current) {
      if (cnt > 0) {
        newArray.push({ date: current, تعدادسفارش: cnt });
      }
      current = array[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  if (cnt > 0) {
    newArray.push({ date: current, تعدادسفارش: cnt });
  }
  return newArray;
}
