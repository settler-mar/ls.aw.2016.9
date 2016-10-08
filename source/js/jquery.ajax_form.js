/**
 * Created by max on 08.10.16.
 */
;(function($){
  var form;

  var defaults={
    error_class:'error',
    error_message_param:'error_text',
    url:location.href,
    method:'post',
    dataType:'json',
    err_message:{
      login:'Заполните поле логин',
      password:'Заполните поле пароль',
      name:'Введите свое имя',
      mail:'Введите адрес своей электронной почты',
      comment:'Введите ваше сообщение'
    }
  };
  function ajax_form(element,options){
    this.form=$(element);
    this.config=$.extend({},defaults,options);
    form=this;
    this.init();
  }
  ajax_form.prototype.ajax_done=function(data) {
    if(data.href) {
      setTimeout('location.replace("'+data.href+'")',2000);
    }
    if(data.error){
      form.result_message(data.error,'error_windows')
    }else if(data.message){
      form.result_message(data.message)
      form.form[0].reset()
    }
    form.form.removeClass('disabled');
  };
  ajax_form.prototype.ajax_fail=function(data) {
    form.result_message('Ошибка отправки формы','error_windows')
    form.form.removeClass('disabled');
  };
  ajax_form.prototype.result_message=function(text,className) {
    var message_windows=$('<div/>',{
      class:'message_windows '+className
    });
    var close_btn=$('<input/>',{
      value:'Закрыть',
      type:'button',
      class:'message_windows__button'
    }).on('click',function(){
      $(this).parent().parent().remove()
    });
    var content=$('<div/>',{
      class:'message_windows__content',
      text:text
    });
    content.append(close_btn);
    message_windows.append(content);
    $('body').append(message_windows);
    message_windows.addClass('open');
    setTimeout('$(".message_windows .message_windows__button").click()',3000)
  };
  ajax_form.prototype.vlidate=function(element){
    if(form.form.hasClass('disabled'))return;
    element=$(element);
    if(element.val().length<3){
      element.parent().addClass(form.config.error_class);
      element.parent().attr(form.config.error_message_param,form.config.err_message[element.attr('name')]);
      element
        .off( "input")
        .off( "paste")
        .on('input',  function() {
          form.vlidate(this)
        })
        .on('paste',  function() {
          form.vlidate(this)
        });
      return false;
    }else {
      element.parent().removeClass(form.config.error_class);
      return true;
    };
  };
  ajax_form.prototype.init=function(){
    var elements=this.form.find('[required]');
    $.each(elements,function(){
      $(this)
        .attr('required',false)
        .addClass('required');
    });
    this.form.on('submit',function(e){
      e.preventDefault();
      var is_validate=true;
      $this=$(this);
      elements=$this.find('.required');
      $.each(elements,function(){
        var $this=$(this);
        is_validate=form.vlidate($this) && is_validate;
      });

      if(!is_validate)return;
      form.form.addClass('disabled');
      $.ajax({
        url: $this.attr('action')||form.config.url,
        method:$this.attr('method')||form.config.method,
        data:$this.serialize(),
        dataType:$this.attr('dataType')||form.config.dataType
      })
        .done(form.ajax_done)
        .fail(form.ajax_fail);
    });
  };
  $.fn.ajax_form=function(options){
    $(this).each(function(){
      new ajax_form(this,options);
    });
    return this;
  }
})(jQuery);
$('form').ajax_form();