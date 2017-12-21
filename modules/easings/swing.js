import { c, PI } from './_math'

export default function (t) {
  return 0.5 - c(t * PI) / 2
}
