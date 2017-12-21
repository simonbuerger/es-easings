import { p } from './_math'

export default function (t) {
  return (t *= 2) < 1
    ? 0.5 * p(t, 4)
    : -0.5 * ((t -= 2) * t * t * t - 2)
}
