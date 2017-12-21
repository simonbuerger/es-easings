import { rt } from './_math'

export default function (t) {
  return rt(1 - --t * t)
}
