export default function (t) {
  return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)
}
