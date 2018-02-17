
# Rebel

https://github.com/less/less.js/blob/12fe0c6f507485aaec6b519373d9b7f38ac950a4/lib/less-browser/bootstrap.js

less.modifyVars({
  '@buttonFace': '#5B83AD',
  '@buttonText': '#D9EEF2'
});

Changes need to be made to less-browser/index.js line 130 
loadStyleSheets,


less.render("@bgColor: '#FF00FF'; body { background: @bgColor; }", {}, function(err, output) { 
    console.log(output);
})

lessCode = xmlhttp.responseText;
    less.render(lessCode, options, function (error, output) {
    if(!error) {
    document.getElementById('lesscode').innerHTML = output.css;
    }
    else document.getElementById('lesscode').innerHTML = '<span style="color:red">' + error + '</span>';
    });