
# [Slx.js](https://npmjs.com/slx.js) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/perplexyves/slx.js/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/slx.js.svg?style=flat)](https://www.npmjs.com/slx.js) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/perplexyves/slx.js/pulls)

## 0 - Synopsis 💡

How many times did you find yourself on a website where you were **dragging** with your mouse trying to create a rectangular box/selection (blue rectangle), but realized that this feature (native to the Desktop) doesn't exist on any website?!!

Well, we're glad to announce that these days belong now to the past, thanks to the library _**Slx.js**_

<br>

## 1 - Quickstart 🏃🏻‍♂️🚶🏻‍♂️

### A) Installation
#### Through *npm*:

```bash
npm i -D slx.js
```

(OR the longer one: `npm install --save-dev slx.js`)

#### Through *yarn*:

If you're not an npm user, you could use yarn:

```bash
yarn add -D slx.js
```

Slx.js is a development package; it is meant to help you locally. That's why we recommend you to install it as a dev dependency.

You're free however if you want to ship it with your website (if so remove the `-D` argument).

### B) Link to your website

Once the library installed (in node_modules folder), go to your main html file, then add in the `<head>` the following tag:
```html
<link rel="stylesheet" href="node_modules/slx.js/dist/slx.min.css">
```

And in the end of the `<body>` add this:
```html
<script src="node_modules/slx.js/dist/slx.min.js"></script>
<script>
  Slx.init(); // Initialize Slx.js
</script>    
```

### C) Use it!

Now that you're all set, open your website in the browser and click the <kbd>Ctrl</kbd> key. Your cursor (mouse) should become a cross.
If this doesn't work, click anywhere on your website (the body may not be focused), then press the <kbd>Ctrl</kbd> key.

Now drag anywhere in your website to create a rectangular box (selection) as you would do in Explorer, Desktop or Finder.

https://user-images.githubusercontent.com/98392882/221425377-7d2eebe6-4d52-440a-885c-883ad5dfe3b3.mp4

---

<br>

## 2 - Some use cases ⚙

You can find hundred of applications for Slx.js (Your creativity is the limit!).

We will expose 2 of them:

### A) Showing a very specific thing

Sometimes you mention some web terms in front of your peers/friends. For instance, "in my website we should adjust the position of the sidebar". You can guarantee that those who are hearing you understand exactly what you want by actually "selecting" this area (the sidebar):

![image](https://user-images.githubusercontent.com/98392882/221439855-8299296f-a792-4e2f-ba95-95efef3a41b2.png)

<br>

Another example could be talking about a "breadcrumb" (which is less popular). By delimiting the area around the element that you're talking about, you will eliminate the knowledge gaps:

![image](https://user-images.githubusercontent.com/98392882/221440032-0081f68e-69d8-480e-aec6-141dcf385f1a.png)


### B) Highlighting something quickly

When you're on a page where there's a lot of text and want to show a specific word or Sentence to someone, most probably you will select this portion of text in order for the person to see it quickly.

But what if the words become images or videos; what will you do to "select" any?
This is a less common use case, definitely, but you never know when it suddenly happens.

Imagine this scenario: you're on your website which is something like YouTube; then you tell to someone "Hey throw a look at the video of Steve Harvey" (see below image). By "selecting" the area where the thumbnail appears, you are in fact highlighting this zone thus people will be able to follow you more quickly while speaking.

![image](https://user-images.githubusercontent.com/98392882/221430498-a1b324d1-074a-4553-913e-dff659e5b13f.png)


**In all cases, Slx.js will help you a lot while you collaborate with others by showing them *exactly* what you mean!**
