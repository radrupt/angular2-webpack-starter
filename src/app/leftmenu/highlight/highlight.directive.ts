//高亮当前页面对应的目录
import {
  Component,
  Directive,
  ElementRef,
  Renderer,
  Input,
  OnInit,
  AfterViewInit
} from '@angular/core';

/*
 * Directive
 */
@Directive({
  selector: '[highLight]' // using [ ] means selecting attributes
})
export class HighLightDirective implements OnInit,AfterViewInit{

  @Input() highLightClass: string = '';//dom高亮使用到的class
  @Input() highLightHref: string = '';//匹配到该href则应用highLightClass

  constructor(
    public element: ElementRef,
    public renderer: Renderer//使用Renderer操作虚拟dom里的某一个元素
  ) {
    
  }
  
  public ngOnInit(){
  }
 
  public ngAfterViewInit(){//组件及子组件渲染结束执行
    if(location.href.search(this.element.nativeElement.href)){
      console.log(location.href,this.element.nativeElement.href)
      this.renderer.setElementClass(this.element.nativeElement,this.highLightClass,true);
    }
  }
}