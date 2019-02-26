import { p, s, PI } from './_math'

export default function (t) {
  var e,
    o = 0.4
  return t === 0
    ? 0
    : t === 1
      ? 1
      : ((e = o / 4),
        (t *= 2) < 1
          ? -0.5 *
            p(2, 10 * (t -= 1)) *
            s(2 * (t - e) * PI / o)
          : p(2, -10 * (t -= 1)) *
              s(2 * (t - e) * PI / o) *
              0.5 +
            1)
}
