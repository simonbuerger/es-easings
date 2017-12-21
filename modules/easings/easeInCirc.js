import { rt } from './_math'

export default function (t) {
  return 1 - rt(1 - t * t)
}
