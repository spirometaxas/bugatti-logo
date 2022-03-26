# bugatti-logo
Print the iconic [Bugatti](https://www.bugatti.com/) logo to the console using unicode box characters!

Minimum terminal width: 55 characters

## How it Looks
![What bugatti-logo prints to the console](https://raw.githubusercontent.com/spirometaxas/bugatti-logo/main/img/bugatti-logo-demo.png)

Logo outline:
![What bugatti-logo prints to the console](https://raw.githubusercontent.com/spirometaxas/bugatti-logo/main/img/bugatti-outline-logo-demo.png)

#### The Actual Bugatti Logo
![The actual Bugatti logo](https://raw.githubusercontent.com/spirometaxas/bugatti-logo/main/img/bugatti-logo-original.jpg)

## Usage
### Via `npx`:
Print filled logo:
```
$ npx bugatti-logo
```
Print logo outline:
```
$ npx bugatti-logo --outline
```

### Via Global Install
```
$ npm install --global bugatti-logo
$ bugatti-logo
```

### Via Import
```
$ npm install bugatti-logo
```
then:
```
const bugatti = require('bugatti-logo');
console.log(bugatti.logo);  // Filled logo
console.log(bugatti.logo_outline);  // Logo outline
```