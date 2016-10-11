/*
* @name jQuery.bootpop
* @projectDescription Lightweight AJAX modal for Bootstrap 3
* @author Rick Somers | http://getwebhelp.com/bootpop
* @version 2.0
* @updated 2016-10-10
* @license MIT License
* 
*/
function Bootpop(url, options){
    return $.fn.bootpop(url, options)    
}
$.extend(Bootpop, {
    ask : function(question, options){
        var bp = $.fn.bootpop(null,options)
        return bp.ask(question);    
    },
    alert : function(message, options){
        var bp = $.fn.bootpop(null,options)
        return bp.alert(message);
    },
    image : function(src, options){
        var bp = $.fn.bootpop(null,options)
        return bp.image(src);    
    },
    html : function(content, options){
        var bp = $.fn.bootpop(null,options)
        return bp.html(content);    
    },   
});
    
(function ( $ ) {
    $.fn.bootpop = function(url, options) {

        var defaults = {            
            title : null,
            size: null,
            method: 'post',
            params : {},
            buttons : [],
            modalClass: 'modal fade',
            dialogClass: 'modal-dialog',
            contentClass: 'modal-content',
            modalHeader: true,
            headerClass: 'modal-header',
            titleClass:  'modal-title',
            bodyClass: 'modal-body',
            footerClass: 'modal-footer',
            imageClass : 'img-responsive',
            responseHandler : function(data){
                return data;    
            }
        }
        var session = $.now();
        var settings = $.extend( {}, defaults, options );
        
        var templates = {
            modal: '<div class="'+settings.modalClass+'" id="bootpop_'+session+'" role="dialog">'
            +'<div class="'+settings.dialogClass+'" role="document">'
                +'<div class="'+settings.contentClass+'">'
                    +'<div class="'+settings.headerClass+'">'
                        +'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
                        +'<h4 class="'+settings.titleClass+'">'+settings.title+'</h4>'
                    +'</div>'
                    +'<div class="'+settings.bodyClass+'"></div>'
                    +'<div class="'+settings.footerClass+'"></div>'
                +'</div>'
              +'</div>'
            +'</div>'
        }
        
        var bootpop = $(templates.modal);
        // AJAX by default
        if(url) return show(request())
        return {
            ask: function(question) {
                var btns = [
                    {
                        btnClass : 'btn btn-success',
                        btnLabel : 'Okay',
                        btnValue : 'OK',
                        btnAction : function(answer){
                            console.log(answer)
                            console.log(this)
                            $('#bootpop_'+session).modal('hide')    
                        }
                    },
                    {
                        btnClass : 'btn btn-default',
                        btnLabel : 'Cancel',
                        btnValue : 'NO',
                        btnAction : function(answer){
                            console.log(answer)
                            console.log(this)
                            $('#bootpop_'+session).modal('hide')   
                        }
                    }
                ]
                
                settings.buttons = $.extend( {}, btns, settings.buttons);
                return show(question)
            },
            alert: function(message) {
                var btns = [
                    {
                        btnClass : 'btn btn-success',
                        btnLabel : 'Okay',
                        btnValue : 'OK',
                        btnAction : function(response){
                            console.log(response)
                            console.log(this)
                            $('#bootpop_'+session).modal('hide')   
                        }
                    }
                ]
                
                settings.buttons = $.extend( {}, btns, settings.buttons);
                return show(message)
            },
            image: function(src) {
                return show($('<img src="'+src+'" class="'+settings.imageClass+'" />'))
            },
            html: function(content) {
                return show($(content))
            }
        }
        
        function request(){
            preloader('start');
            return settings.responseHandler($.ajax({
                "type": settings.method,
                "data": settings.params,
                "url": url,
                "async": false}).responseText)     
        }
        
        function show(content){
            render(content)
            $(bootpop).appendTo(document.body);
            $element = $('#bootpop_'+session)    
            $element.modal('show')
            $element.on('shown.bs.modal', function(){
                $element.trigger($.Event('opened.bp.modal'));
                preloader('stop');
            });
            $element.on('hidden.bs.modal', function(){
                $element.trigger($.Event('closed.bp.modal'));
                $element.remove();
            });
            return $(this);
        }
        function render(content){
            if(settings.modalHeader == true){
                if(settings.title){
                    $('.'+settings.titleClass.replace(' ','.'), bootpop).html(settings.title);
                } else{
                    $('.'+settings.titleClass.replace(' ','.'), bootpop).html('&nbsp;');
                }
            } else{
                $('.'+settings.headerClass.replace(' ','.'), bootpop).remove();    
            }
            if(settings.size){
                if(settings.size == "large"){
                    $('.'+settings.dialogClass.replace(' ','.'), bootpop).addClass('modal-xl');
                } else if(settings.size == "small"){
                    $('.'+settings.dialogClass.replace(' ','.'), bootpop).addClass('modal-sm');
                } else{
                    $('.'+settings.dialogClass.replace(' ','.'), bootpop).addClass('modal-lg');
                }
            }
            if($(settings.buttons).length){
                $.each(settings.buttons, function(i,ob){
                    var btn = $('<button class="'+ob.btnClass+'" data-value="'+ob.btnValue+'">'+ob.btnLabel+'</button>')
                    btn.on('click', function() {
                        var value = $(this).data('value')
                        var after = function(){ob.btnAction(value)}
                        after.call();
                    });
                    $('.'+settings.footerClass.replace(' ','.'), bootpop).append(btn);    
                })
            } else{
                $('.'+settings.footerClass.replace(' ','.'), bootpop).remove();
            } 
            
            $('.'+settings.bodyClass.replace(' ','.'), bootpop).html(content);   
        }
        function preloader(action){
            switch(action){
                case 'start' :
                    var preloader = $('<div class="modal-loading-wrapper"><div class="modal-loading"><div class="modal-loading-icon"></div></div></div>')
                    $(preloader).appendTo(document.body);
                    break;
                case 'stop' : 
                    $('.modal-loading-wrapper').remove()
                    break; 
            }
        }
    }
}( jQuery ))
