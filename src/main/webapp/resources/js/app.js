"use strict"
var app = app || {};
app = (()=>{
	const WEHN_ERR = '호출하는 JS 파일을 찾을 수 없습니다.';
	let _,js,authjs;
	let run =x=> $.getScript(x+'/resources/js/cmm/router.js',
			()=>{$.extend(new Session(x));
			onCreate()
	});
	let init =()=>{
		_ = $.ctx();
		js = $.js();
		authjs = js+'/cmm/auth.js';
		
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(authjs)
		 )
		 .done(()=>{
			 auth.onCreate()
		 }
			
		 )
		 .fail(()=>{
			 alert(WEHN_ERR)
		 }
			
		 )
	}
	return {run}
	
})();
//$.getScript(x+'/resources/js/cmm/router.js' 스크립트파일 $.getScript(,)=> << 원래있던함수
//()=>{$.extend(new Session(x))} 콜백함수