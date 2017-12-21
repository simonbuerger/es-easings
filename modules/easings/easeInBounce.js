import e from './easeOutBounce'

export default function (t) {
  return 1 - e(1 - t)
}
