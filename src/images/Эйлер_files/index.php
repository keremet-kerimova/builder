//[[MediaWiki:Common.js]] бети аркылуу ишке кирет

// Тақырып қосу батырмасын беттің төменгі жағында да көрсету және
//талқылау бетіндегі соңғы талқылау өңдеу сілтемесінің жанына тақырып қосу сілтемесін қосу
importScript( "MediaWiki:EasyNewSection.js" );

//[[Калып:Gallery]] үшін
importScript( "MediaWiki:mageGroup.js" );

//Бұғатталғандарды белгілеу (қатысушы беті сілтемесін ортасынан сызып көрсету)
mw.loader.load('https://ru.wikipedia.org/w/index.php?title=MediaWiki:Gadget-markblocked.js&action=raw&ctype=text/javascript');

//Беттің жоғарғы басына көтерілу қосымшасы. &#91;[[:File:Pg up.png|мысал]]]
importScript( "MediaWiki:Scripts.js/Topscroll.js" );

//Сыртқы сілтемелерді жаңа парақта/терезеде ашу 
importScript( "MediaWiki:Exlinks.js" );

//AdvancedSiteNotices — Сайт жариялары
importScript( "MediaWiki:Gadget-AdvancedSiteNotices.js" );

//[[Калып:Батырма-клип]] үшін ақылды батырмалар ;) 
 if (mw.config.get('wgAction') == 'view') {
	importStylesheet('MediaWiki:Stylesheets-SmartButtons.css');
}

//[[Калып:Tabs|Tabs]] қорапша қойынша Калыпсі үшін
 if (mw.config.get('wgAction') == 'view') {
	importStylesheet('MediaWiki:Stylesheets-Tabs.css');
	importScript('MediaWiki:Tabs.js');
}

//[[MediaWiki:Welcomecreation-msg]] қарсы алу хабарламасы үшін қорапша қойыншалары
 if (mw.config.get('wgAction') == 'view') {
	importStylesheet('MediaWiki:Stylesheets-Tabs2.css');
	importScript('MediaWiki:Tabs2.js');
}

//[[Калып:Wikimenu2]] үшін//
importScript( "MediaWiki:Wikimenu.js" );

//Бағыттау сілтемелерін жасыл түсте көрсету 
 if (mw.config.get('wgAction') == 'view') {
	importStylesheet('MediaWiki:Stylesheets-GreenRedirect.css');
}

//Айрық бет сілтемелерін кКалыпн фонда көрсету 
 if (mw.config.get('wgAction') == 'view') {
	importStylesheet('MediaWiki:Stylesheets-PinkDisambig.css');
}

//[[:en:MediaWiki talk:Wdsearch.js]]
mw.loader.load("//en.wikipedia.org/w/index.php?title=MediaWiki:Wdsearch.js&action=raw&ctype=text/javascript");

//Мақалада көп дереккөз болса ықшамдап көруге мүмкіндік беру
importScript( "MediaWiki:Collapserefs.js" );

//Жаңа хабарламалар келгенде ерекшелеп көрсету
 if (mw.config.get('wgAction') == 'view') {
	importStylesheet('MediaWiki:Stylesheets-Topalert.css');
	importScript('MediaWiki:Topalert.js');
}

//Жаңа басталған мақалаға тексерілмеген мақала Калыпсін өңдеу терезесіне кірістіру
importScript( "MediaWiki:NewArticlePreload.js" );

//[[Калып:Жасырын бөлім басы]] Калып сі үшін
 if (mw.config.get('wgAction') == 'view') {
	importStylesheet('MediaWiki:Stylesheets-newCollapsible.css');
	importScript('MediaWiki:newCollapsible.js');
}

// Жүгіртпе жол
 if (mw.config.get('wgAction') == 'view') {
	importStylesheet('MediaWiki:Stylesheets-ScrollingText.css');
}

// PrettyLog is a small gadget that gives log pages a layout similar to the search results. If the log contains file uploads, the gadget also adds a small thumbnail for each file.
 if (mw.config.get('wgAction') == 'view') {
	importStylesheet('MediaWiki:Stylesheets-PrettyLog.css');
	importScript('MediaWiki:PrettyLog.js');
}

//Арнайы:Іздеу бетіндегі іздеу нәтижелеріне өңдеу сілтемесін қосу
 if (mw.config.get('wgAction') == 'view') {
	importStylesheet('MediaWiki:Stylesheets-SearchEdit.css');
	importScript('MediaWiki:SearchEdit.js');
}

//Viewstats
importScript( "MediaWiki:Viewstats.js" );

//Қолтаңба қоймағанда ескертетін скрипт
importScript( "MediaWiki:noSignAlert.js" );