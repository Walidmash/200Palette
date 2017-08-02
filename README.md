# 200 Palette
## When colors are your Game!

> :bowtie: Done by: Walid, Mahmoud , Hana, Ahmed :bowtie:

<hr>
 > 200 Palette: Simple website that allows the user to paint a picture by enter the color name then display ten colors shades, also it's responsive and easy to use.


## RGB? HSL? What is it?!
> The RGB color model is an additive color model in which red, green and blue light are added together in various ways to reproduce a broad array of colors.
> HSL stands for hue, saturation, and lightness.

**So** to get our 8 color gradients, we edit the lightness value between 0-100%, so we get the selected color from the user then we make some calculations on it in order to get the gradients.
```
 The R,G,B values are divided by 255 to change the range from 0..255 to 0..1:
R' = R/255
G' = G/255
B' = B/255
Cmax = max(R', G', B')
Cmin = min(R', G', B')
Δ = Cmax - Cmin
```

and then we edit the lightness by this equation:
```
 L = (Cmax + Cmin) / 2
```
![rgbHsl](http://www.niwa.nu/wp-content/uploads/2013/05/Hue.png)

## So what's about SVG?
**S**calable **V**ector **G**raphics is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation.


## Progress:

1) Search for idea: **All team members**

2) develop the backend functions: **Walid and Hana**

3) develop the DOM Function: **Walid and Mahmoud**

4) design the website: **Ahmed and Walid**



## How to use?


Enter the link [here](https://palettes200.herokuapp.com/)

or
clone this [repo](https://github.com/FACG2/200Palette)

then install the npm by
```
npm install
```
to run the project:
```
node src/server.js

```

we have two test files, one for the backend suggestions and the other for the calculations
```
node src/test.js
```

```
node public/test.js
```

THANKS! :heart:
