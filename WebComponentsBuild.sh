
ng build angular-elements-poc --prod --output-hashing=none && cat dist/angular-elements-poc/runtime-es2015.js dist/angular-elements-poc/polyfills-es2015.js dist/angular-elements-poc/scripts.js dist/angular-elements-poc/main-es2015.js > consumer/angular-elements-poc.js
mv dist/angular-elements-poc/styles.css consumer/angular-elements-styles.css
mv dist/angular-elements-poc/assets consumer