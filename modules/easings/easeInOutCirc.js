import { rt } from './_math'

export default function (t) {
  return (t *= 2) < 1
    ? -0.5 * (rt(1 - t * t) - 1)
    : 0.5 * (rt(1 - (t -= 2) * t) + 1)
}
