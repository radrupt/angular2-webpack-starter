//高亮当前页面对应的目录
import {
  Component,
  Directive,
  ElementRef,
  Renderer,
  Input,
  OnInit,
  AfterViewChecked
} from '@angular/core';

/*
 * Directive
 */
@Directive({
  selector: '[myHighLight]' // using [ ] means selecting attributes
})
export class MyHighLightDirective implements OnInit,AfterViewChecked{

  @Input() highLightClass: string = '';//dom高亮使用到的class
  @Input() highLightHref: string = '';//匹配到该href则应用highLightClass

  constructor(
    public element: ElementRef,
    public renderer: Renderer//使用Renderer操作虚拟dom里的某一个元素
  ) {
    
  }
  
  public ngOnInit(){
  }
 
  public ngAfterViewChecked(){//组件及子组件渲染结束执行
    if(location.href == this.element.nativeElement.href){
      this.renderer.setElementClass(this.element.nativeElement,this.highLightClass,true);
    }else{
      this.renderer.setElementClass(this.element.nativeElement,this.highLightClass,false);
    }
  }
}