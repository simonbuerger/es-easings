import { p } from './_math'

export default function (t) {
  return t === 0 ? 0 : p(1024, t - 1)
}
