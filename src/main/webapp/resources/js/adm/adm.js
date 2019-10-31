"use strict"
var adm = adm || {}
adm = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
	let _, js, css, img, navi_js, navi_vue_js
	
	let init=()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		navi_js = js+'/cmm/navi.js'
		navi_vue_js = js+'/vue/navi_vue.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(navi_vue_js),
			$.getScript(navi_js)
			
		).done(()=>{
			setContentView()
			
		}).fail(()=>{
			alert(WHEN_ERR)
		})
				
		
	}
	let setContentView=()=>{
		$('body').empty()
		$(navi_vue.navi())
		.appendTo('body')
		$('<table id="tab"><tr></tr></table>')
		.css({border : '1px solid #6f42c1', width: '80%', height : '80%', 'margin' :'0 auto'})
		.appendTo('body')
		let arr1 = [{id : 'left', width : '20%'},
					{id : 'right', width : '80%'}]
		$.each(arr1,
				(i,j)=>{
			$('<td id="'+j.id+'"></td>')
			.css({border : '1px solid #6f42c1', width : j.width, 'vertical-align' : 'top'})
			.appendTo('#tab tr')
		})
		
		let arr = [{txt :'웹크롤링', name : 'web_crawl'},
				   {txt :'회원조회', name : 'customors'},
				   {txt :'상품등록', name : 'item_reg'},
				   {txt :'상품조회', name : 'item_srch'},
				   {txt :'상품관리', name : 'item_mod'},
				   {txt :'상품삭제', name : 'item_del'}]
		$.each(arr,(i,j)=>{
			$('<div name="'+j.name+'">'+j.txt+'</div>')
			.css({border : '1px solid #6f42c1', margin :'0 auto', 'line-height' : '50px'})
			.appendTo('#left')
			.click(function(){
				$(this).addClass('active')
				$(this).siblings().removeClass('active')
				let that = $(this).attr('name')
				alert(that+'메뉴클릭')
				switch($(this).attr('name')){
				case 'web_crawl':
					web_crawl()
					break;
				case 'customers':
					custManager()
					break;
				case 'item_reg':
					
					break;
				case 'item_srch':
					
					break;
				case 'item_mod':
					
					break;
				case 'item_del':
					
					break;
				
				}
			})
		})
		
		navi.onCreate()
		
	}
	let web_crawl=()=>{
		
		
		$(		
				'  <form action="https://www.google.com/">'+
				'  <select name="google" size="1">'+
				'  </select>'+
				'<input type="text"/>'+
				'  <input type="submit"/>'+
				'  </form>')
				.appendTo('#right')
		let arr = ['News','Sports','Game','Shopping']
		$.each(arr,(i,j)=>{
			$('<option value='+j+'>'+j+'</option>')
			.appendTo('select[name="google"]')
			.click(function(){
				let that = $(this).attr('name')
				switch($(this).attr('name')){
				case 'News': 
					break;
				case 'Sports': 
					break;
				case 'Game': 
					break;
				case 'Shopping': 
					break;
					
					
				}
			})
		})
		
		
		
	}
	return{onCreate}
})()