import { p } from './_math'

export default function (t) {
  return t === 0
    ? 0
    : t === 1
      ? 1
      : (t *= 2) < 1
        ? 0.5 * p(1024, t - 1)
        : 0.5 * (-p(2, -10 * (t - 1)) + 2)
}
