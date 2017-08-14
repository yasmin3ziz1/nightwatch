module.exports = { 
'Search engine example': function (browser) {
 browser
.url('http://bing.com') 

.setValue('input[name=q]', 'cloudsystems.sa') //the search query
 
browser
.click('input[type=submit]') //search
 
.click("strong") //first result
 
.click('a.call-to-action-button'); //contact us button
 
    } 
};