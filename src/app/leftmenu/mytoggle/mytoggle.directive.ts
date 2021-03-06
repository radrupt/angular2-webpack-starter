//高亮当前页面对应的目录
import {
  Component,
  Directive,
  ElementRef,
  Renderer,
  Input,
  HostListener,
  OnInit,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';

/*
 * Directive
 */
@Directive({
  selector: '[myToggle]' // using [ ] means selecting attributes
})
export class MyToggleDirective implements OnInit,OnDestroy,AfterViewInit{
  @Input() status: boolean = false;//目录默认展开状态，false:不展开，true:不展开，true
  @Input() disableclick: boolean = false;//一级目录是否可点击，false:可点击，true:不可点击
  
  private  height: string;
  private  dom: any;
  private  headerDom:  any;
  private  contentDom: any;
  private  activeClass:string = 'active';

  private listenFuncs:Array<any> = [];

  constructor(
    public element: ElementRef,//使用ElementRef可以直接访问dom
    public renderer: Renderer//使用Renderer操作虚拟dom里的某一个元素
  ) {
    
  }
  
  public ngOnInit(){
  }
  public ngAfterViewInit(){//组件及子组件渲染结束执行
    this.dom = this.element.nativeElement;
    this.headerDom = this.element.nativeElement.querySelector('[mytoggleheader]');
    this.contentDom = this.element.nativeElement.querySelector('[mytogglecontent]');

    this.height = window.getComputedStyle(this.contentDom).getPropertyValue('height');
    let style = this.renderer.createElement(this.element.nativeElement,'style');

    let self = this;
    //不响应点击事件
    if(this.disableclick) return;
    else{
      this.listenFuncs.push(this.renderer.listen(this.headerDom,'click',(e) =>{self.toggle()}))

      //初始化
      if(this.status) this.open();
      else this.close();
    }
  }
  toggle(){
    if(this.status){//已经打开的，关闭
      this.close();
    }else{//已经关闭的，打开
      this.open();
    }
    this.status = !this.status;
  }
  open(){
    this.renderer.setElementClass(this.dom,this.activeClass,true);
    this.renderer.setElementStyle(this.contentDom,'height',this.height);
  }
  close(){
    this.renderer.setElementClass(this.dom,this.activeClass,false);
    this.renderer.setElementStyle(this.contentDom,'height','0px');
  }
  ngOnDestroy(){
    this.listenFuncs.forEach((func)=>{func()});
  }
}