for(var i = 0; i < 26; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelVisibility('u21','hidden','none',500);

}

});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u16'] = 'top';
$axure.eventManager.change('u12', function(e) {

if ((GetSelectedOption('u12')) == ('MINIMUM')) {

SetSelectedOption('u4', 'MAXIMUM');

}
else
if ((GetSelectedOption('u12')) == ('MAXIMUM')) {

SetSelectedOption('u4', 'MINIMUM');

}
});
gv_vAlignTable['u15'] = 'top';
$axure.eventManager.change('u4', function(e) {

if ((GetSelectedOption('u4')) == ('MINIMUM')) {

SetSelectedOption('u12', 'MAXIMUM');

}
else
if ((GetSelectedOption('u4')) == ('MAXIMUM')) {

SetSelectedOption('u12', 'MINIMUM');

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u17'] = 'top';u25.tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	SetPanelVisibility('u21','hidden','fade',500);

}
});
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u20'] = 'top';
u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

SetWidgetRichText('u24', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;">Group A </span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#6666FF;">(</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#6666FF;">' + (GetSelectedOption('u4')) + '</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;">,</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;"> ' + (GetSelectedOption('u5')) + '</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;">)</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;"> and Group B (</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#6666FF;">' + (GetSelectedOption('u12')) + '</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;">, </span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;"> ' + (GetSelectedOption('u13')) + '</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;">)</span></p>');

	SetPanelVisibility('u21','','none',500);

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u7'] = 'top';