import { p } from './_math'

export default function (t) {
  return t === 1 ? 1 : 1 - p(2, -10 * t)
}
