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
		$('#right').empty()
		$('</br></br></br></br></br><h2>Web Crawling</h2></br></br></br></br></br></br></br>'+
				'<form id="crawl_form" class="form-inline my-2 my-lg-0">'+
				'  <select name="site" size="1">'+
				'  </select>'+
		          '<input class="form-control mr-sm-2" name="text" placeholder="insert URL for crawling" aria-label="Search">'+
		         
				'</form>')
		.appendTo('#right')
		$('#crawl_form input[class="form-control mr-sm-2"]')
		.css({width:'80%'})
		let arr = [{sub:'naver.com'},{sub:'daum.net'},{sub:'google.co.kr'},{sub:'youtube.com'}]
		$.each(arr,(i,j)=>{
			$('<option value='+j.sub+'>'+j.sub+'</option>').appendTo('#crawl_form select')
			})
			$( '<button class="btn btn-secondary my-2 my-sm-0" type="submit">go crawl</button>')
			.appendTo('#crawl_form')
			.click(e=>{
				e.preventDefault()
				if(
				!$.fn.nullChecker([$('#crawl_form select[name="site"]').val(),
						$('form#crawl_form input[name="text"]').val()])){
						
				alert('/txs/crawling/'+$('form#crawl_form select[name="site"]').val())		
				let url = _+'/txs/crawling'+$('form#crawl_form select[name="site"]').val()+
				'/'+$('form#crawl_form input[name="text"]').val()
				e.preventDefault()
				$.getJSON(_
						+'/txs/crawling/'+$('form#crawl_form select[name="site"]').val()+
						'/'+$('form#crawl_form input[name="text"]').val(),
						d=>{
					alert(d.msg)
				})
				}//if 의 끝나는 지점
				
			})
	}
	return {onCreate}
})()