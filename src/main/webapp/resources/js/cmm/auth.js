"use strict";
var auth = auth || {}
auth = (()=>{
    const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
    let _, js, css, img, auth_vue_js, brd_js, router_js, cookie_js
    let init = ()=>{
        _ = $.ctx()
        js = $.js()
        css = $.css()
        img = $.img()
        auth_vue_js = js+'/vue/auth_vue.js'
        brd_js = js+'/brd/brd.js'
        router_js = js+'/cmm/router.js'
        cookie_js = js+'/cmm/cookie.js'
        
       
    }
    function onCreate(){
        init()
        $.when(
        		 $.getScript(auth_vue_js),
        		 $.getScript(router_js),
        		 $.getScript(brd_js),
        		 $.getScript(cookie_js)
        		 
		 )
        .done(()=>{
            setContentView()
            $('#a_go_join').click(e=>{
                e.preventDefault()
                $('head').html(auth_vue.join_head())
                $('body').html(auth_vue.join_body())
                $('#uid').keyup(()=>{
                    if($('#uid').val().length > 2){
                        $.ajax({
                            url : _+'/users/'+$('#uid').val() +'/exist',
                            contentType : 'application/json',
                            success : d =>{
                                if(d.msg==='SUCCESS'){
                                    $('#dupl_check')
                                    .val('사용가능한 아이디입니다.')
                                    .css('color','blue')
                                }else{
                                    $('#dupl_check')
                                    .val('중복된 아이디입니다.')
                                    .css('color','red')
                                }
                            },
                            error : e =>{
                                alert('existId ajax실패')
                              }
                        })
                    }
                });
                $('<button>',{
                    text : '회원가입',
                    href : '#',
                    click : e=>{
                        e.preventDefault()
                            join()
                    }
                })
                .addClass('btn btn-primary btn-lg btn-block')
                .appendTo('#btn_join')
            })
        }).fail(()=>{alert(WHEN_ERR)})
    }
    function setContentView(){
        $('head').html(auth_vue.login_head({css: $.css(), img: $.img()}))
        $('body').addClass('text-center')
        .html(auth_vue.login_body({css: $.css(), img: $.img()}))
         login()
         access()
    }
    let join =()=>{
        let data = {uid : $('#uid').val(),
                upw : $('#upw').val(),
                uname : $('#uname').val()}
                alert('전송아이디 :'+data.uid)
                $.ajax({
                url : _+'/users/',
                type : 'POST',
                dataType : 'json',
                data : JSON.stringify(data),
                contentType : 'application/json',
                success : d =>{
                    alert('AJAX 성공 아이디: '+d.msg)
                    if(d.msg === 'SUCCESS'){
                        $('head').html(auth_vue.login_head({css: $.css(), img: $.img()}))
                        $('body').addClass('text-center')
                        .html(auth_vue.login_body({css: $.css(), img: $.img()}))
                        login()
                }else{
                            alert('회원가입 실패')
                }
                },
                error : e=>{
                    alert('join AJAX 실패');
                    }
            })
    }
    let login =()=>{
            $('<button>',{
              text : "로그인",
              
              click : e => {
                e.preventDefault()
                $.ajax({
                    url : _+'/users/'+$('#uid').val(),
                    type : 'POST',
                    dataType : 'json',
                    data : JSON.stringify({uid : $('#uid').val(), upw : $('#upw').val()}),
                    contentType : 'application/json',
                    success : d =>{
                    	/*$.extend(new User(d))*/
                    	setCookie("USER_ID",d.uid)
                    	alert('저장된 쿠키:'+getCookie("USER_ID"))
                    	brd.onCreate()
                },
                error : e =>{
                  alert('login ajax실패')
                }
                
                  })
                
              }
            })
        .addClass("btn btn-lg btn-primary btn-block")
        .appendTo('#btn_login')
    }
    let existId =()=> {
      
    }
    let access =()=>{
    	$('#a_go_admin').click(e=>{
    		e.preventDefault()
    		let ok = confirm('사원입니까')
        	if(ok){
        		let eid = prompt('아이디를 입력하세요')
        		let epw = prompt('비밀번호를 입력하세요')
        		alert('입력한 사번:'+eid)
        		$.ajax({
        			url : _+'/admins/'+eid,
                    type : 'POST',
                    dataType : 'json',
                    data : JSON.stringify({eid : eid , epw : epw}),
                    contentType : 'application/json',
                    success : d =>{
                    	if(d.msg === 'SUCCESS'){
        					alert('환영합니다')
        					adm.onCreate()
        				}else{
        					alert('접근권한이 없습니다')
        					app.run(_)
        				}
                },
                error : e =>{
                  alert('admin ajax실패')
                }
        			
        		})
        	}
    	})
    	
    }
    return {onCreate, join, login}
})();