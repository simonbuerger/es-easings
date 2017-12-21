var a = 2.75
var b = 7.5625

export default function (t) {
  return 1 / a > t
    ? b * t * t
    : 2 / a > t
      ? b * (t -= 1.5 / a) * t + 0.75
      : 2.5 / a > t
        ? b * (t -= 2.25 / a) * t + 0.9375
        : b * (t -= 2.625 / a) * t + 0.984375
}
