import { p, s, as, PI } from './_math'

export default function (t) {
  var e,
    n = 0.1,
    o = 0.4
  return t === 0
    ? 0
    : t === 1
      ? 1
      : (!n || n < 1
          ? ((n = 1), (e = o / 4))
          : (e = o * as(1 / n) / (2 * PI)),
        (t *= 2) < 1
          ? -0.5 *
            n *
            p(2, 10 * (t -= 1)) *
            s(2 * (t - e) * PI / o)
          : n *
              p(2, -10 * (t -= 1)) *
              s(2 * (t - e) * PI / o) *
              0.5 +
            1)
}
