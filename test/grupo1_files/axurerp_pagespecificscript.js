for(var i = 0; i < 18; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelVisibility('u13','hidden','none',500);

}

});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u8'] = 'top';u17.tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	SetPanelVisibility('u13','hidden','fade',500);

}
});
gv_vAlignTable['u17'] = 'top';
u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

SetWidgetRichText('u16', '<p style="text-align:left;"><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;">' + (GetSelectedOption('u2')) + '</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;"> (</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#6666FF;">' + (GetSelectedOption('u3')) + '</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;">,</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;">&nbsp;</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;">' + (GetSelectedOption('u4')) + '</span><span style="font-family:Arial;font-size:13px;font-weight:bold;font-style:normal;text-decoration:none;color:#0000CC;">)</span></p>');

	SetPanelVisibility('u13','','fade',500);

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u9'] = 'top';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u7'] = 'top';