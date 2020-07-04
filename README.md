# Why

Hypothes.is is a great service:

* It works well,
* It is free,
* It has been around forever.

but there are drawbacks:

* It is not intended for mobile use,
* I always need my last pages annotated handy.

# What

Share via hypothesis a progressive web app to improve the experience of the hypothes.is annotation service on mobile.

On mobile it allows to "share" an URL to annotate it.
It keep an local history of the last 10 article annotated so you have them handy.

# Where

A public instance run on [Zeit](https://hypothesis-pwa.vercel.app)

If you want to customize it you can easly host your own with Vercel or Surge

# How

1. Go to [hypothesis-pwa.vercel.app](https://hypothesis-pwa.vercel.app/)
2. Add to home screen
3. Open a web page, click share & select "Via Hypothesis"

TODO add a screenshot

The app leverage a few others technologies & services:

* [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps): leverage [A2HS](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen) & [Web Share Target](https://web.dev/web-share-target/) API
* [via.hypothes.is](https://via.hypothes.is)
* [Preact](https://preactjs.com/): only JS dependency
* MinDS

# Who

By an hypothes.is user for hypothes.is users 