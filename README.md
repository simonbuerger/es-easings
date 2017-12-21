# es-easings

Lightweight as possible easing functions exported as commonjs and es modules

These are single-value easing functions. They take in a value representing time as a decimal between 0 and 1 and return a value between 0 and 1.

So for example if my animation duration was 300ms, current time was 100ms, value being animated was from 200 to 600:

```js
const currentTime = 100 / 300
const easeValue = easeInOutQuad(currentTime)
const currentPosition = easeValue * (600 - 200) + 200
```

## Installation
`npm install es-easings`
## Available easing functions

linear
swing
easeInBack
easeInBounce
easeInCirc
easeInCubic
easeInElastic
easeInExpo
easeInOutBack
easeInOutBounce
easeInOutCirc
easeInOutCubic
easeInOutElastic
easeInOutExpo
easeInOutQuad
easeInOutQuart
easeInOutQuint
easeInOutSine
easeInQuad
easeInQuart
easeInQuint
easeInSine
easeOutBack
easeOutBounce
easeOutCirc
easeOutCubic
easeOutElastic
easeOutExpo
easeOutQuad
easeOutQuart
easeOutQuint
easeOutSine

## Usage

```js
import {
  linear,
  swing,
  easeInBack,
  easeInBounce,
  easeInCirc,
  easeInCubic,
  easeInElastic,
  easeInExpo,
  easeInOutBack,
  easeInOutBounce,
  easeInOutCirc,
  easeInOutCubic,
  easeInOutElastic,
  easeInOutExpo,
  easeInOutQuad,
  easeInOutQuart,
  easeInOutQuint,
  easeInOutSine,
  easeInQuad,
  easeInQuart,
  easeInQuint,
  easeInSine,
  easeOutBack,
  easeOutBounce,
  easeOutCirc,
  easeOutCubic,
  easeOutElastic,
  easeOutExpo,
  easeOutQuad,
  easeOutQuart,
  easeOutQuint,
  easeOutSine
} from 'es-easings'

// Use
linear(0.95) // => 0.95
```