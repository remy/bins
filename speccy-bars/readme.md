# ZX Spectrum screen

## Visible screen

### Horizontal

352 pixels wide: 256 + 48 * 2 (border) = 352
Line to screen timing: 224T (2 pixels per T state)
176T to put pixels + 96T for beam fly-back

### Vertical

192 + 48 + 16 + 56 = 312

Screen render time = 312 * 244 = 76128T = .021750857s = 21ms

## Bits

0 = 855T * 2 (2 pulses) = 1710T
1 = 1710 * 2 = 3420T

1 byte = 13680T = 3ms

pixel dimensions: 76800p (based on bars.js)

ref: http://www.zxdesign.info/vidparam.shtml
