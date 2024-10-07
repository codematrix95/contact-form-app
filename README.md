# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![./my-solution.png]

### Links

- Solution URL: [https://github.com/codematrix95/contact-form-app]
- Live Site URL: [https://codematrix95.github.io/contact-form-app/]

## My process

I initially started with the HTML to make sure that the screen reader was working properly, then I implemented my logic with javascript and lastly styled the page using a blend of Bootstrap and SCSS.

### Built with

- Semantic HTML5 markup
- SCSS custom properties and variables
- Javascript
- Bootstrap
- Mobile-first workflow

### What I learned

After getting some guidance from bram I completely scrapped my old js because it was too difficult to read and came up with this solution instead. I think this is the cleanest code
I have written yet and compartmentalizing your code into seperate files really helps make the code easier to digest and find. 

```js
import { validateName } from "../validation/validateName.js";
import { validateEmail } from "../validation/validateEmail.js";
import { validateQtype } from "../../fieldset/validation/validateQtype.js";
import { validateMsg } from "../validation/validateMsg.js";
import { validateConsent } from "../validation/validateConsent.js";
import { validateForm } from "../validation/validateForm.js";
import { inputErrFocus } from "../validation/validateForm.js";
import { messageSent } from "../validation/validateForm.js";

export const submitEvt = (input, inputs, errMsg) => {
    const validate = [
        validateName,
        validateName,
        validateEmail,
        validateQtype,
        validateMsg,
        validateConsent,
    ];

    input.onclick = (e) => {
        e.preventDefault();
        for (let i = 0; i < inputs.length; i++) {
            validateForm(inputs[i], errMsg[i], validate[i]);
        }

        let inputErr = document.querySelectorAll(".inputErr");
        inputErr.length !== 0 ? inputErrFocus(inputErr) : messageSent();
    };
};
```

### Continued development

The next thing I want to do is build a project using React because after seeing how much easier it is to code when it is compartmentalized I want take that even further

### Useful resources

- [https://developer.mozilla.org/en-US/] - Some of the documentation can be a little difficult to understand initially but once understand what is going this is a great resource

## Acknowledgments

I'd like to thank Abraham Cuenca for guiding me when I got stuck during the project. He's a wealth of knowledge and having his input really helped me.