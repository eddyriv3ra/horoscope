export const getZodiacSign = (day: number, month: number) => {
  const zodiacs = [
    '',
    'capricornio',
    'acuario',
    'piscis',
    'aries',
    'tauro',
    'geminis',
    'cancer',
    'leo',
    'virgo',
    'libra',
    'escorpio',
    'sagitario',
  ];
  const lastDay = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  return day > lastDay[month] ? zodiacs[month * 1 + 1] : zodiacs[month];
};
