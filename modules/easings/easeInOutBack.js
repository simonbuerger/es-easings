export default function (t) {
  var e = 2.5949095
  return (t *= 2) < 1
    ? 0.5 * t * t * ((e + 1) * t - e)
    : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
}
