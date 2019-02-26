import { PI, p, s } from './_math'

export default function (t) {
  var e,
    o = 0.4
  return t === 0
    ? 0
    : t === 1
      ? 1
      : ((e = o / 4),
        p(2, -10 * t) * s(2 * (t - e) * PI / o) + 1)
}
