//判断元素是否有class
export function hasClass(ele, cls) { 
    return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
//元素增加class
export function addClass(ele, cls) { 
    if (!hasClass(ele, cls)) ele.className += " "+cls;
}
//元素移除class
export function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}