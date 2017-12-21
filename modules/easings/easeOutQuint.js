import { p } from './_math'

export default function (t) {
  return --t * p(t, 4) + 1
}
