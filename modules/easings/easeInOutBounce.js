import e1 from './easeInBounce'
import e2 from './easeOutBounce'

export default function (t) {
  return t < 0.5
    ? 0.5 * e1(2 * t)
    : 0.5 * e2(2 * t - 1) + 0.5
}
