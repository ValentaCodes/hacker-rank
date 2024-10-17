function timeConversion(s) {
  if (s.endsWith('PM') && !s.startsWith('12')) {
    let newS = s.slice(0, 8);
    let h = newS.at(0) + newS.at(1);
    let convertedH = Number(h) + 12;
    let milTime = newS.replace(h, String(convertedH));
    return milTime;
  } else if (s.startsWith('12') && s.endsWith('AM')) {
    let newS = s.slice(0, 8);
    let h = newS.at(0) + newS.at(1);
    let milTime = newS.replace(h, '00');
    return milTime;
  } else {
    let milTime = s.slice(0, 8);
    return milTime;
  }
}

timeConversion('12:45:00PM');
