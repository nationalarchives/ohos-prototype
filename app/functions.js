const govukPrototypeKit = require('govuk-prototype-kit')
const addFunction = govukPrototypeKit.views.addFunction

addFunction('getContext', function() { 
  return JSON.stringify(this, null, 2);
})
