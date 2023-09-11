import { Link } from '@inertiajs/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

function Menu() {
    
        document.querySelectorAll('.drag-list .mbti-block').forEach (elm => {
            elm.ondragstart = function () {
                event.dataTransfer.setData('text/plain', event.target.id);
            };
            elm.ondragover = function () {
                event.preventDefault();
                let rect = this.getBoundingClientRect();
                if ((event.clientY - rect.top) < (this.clientHeight / 2)) {
                    //マウスカーソルの位置が要素の半分より上
                    this.style.borderTop = '2px solid blue';
                    this.style.borderBottom = '';
                    this.style.borderRadius = '0px';
                } else {
                    //マウスカーソルの位置が要素の半分より下
                    this.style.borderTop = '';
                    this.style.borderBottom = '2px solid blue';
                    this.style.borderRadius = '0px';
                }
            };
            elm.ondragleave = function () {
                this.style.borderTop = '';
                this.style.borderBottom = '';
                this.style.borderRadius = '8px';
            };
            elm.ondrop = function () {
                event.preventDefault();
                let id = event.dataTransfer.getData('text/plain');
                let elm_drag = document.getElementById(id);
        
                let rect = this.getBoundingClientRect();
                if ((event.clientY - rect.top) < (this.clientHeight / 2)) {
                    //マウスカーソルの位置が要素の半分より上
                    this.parentNode.insertBefore(elm_drag, this);
                } else {
                    //マウスカーソルの位置が要素の半分より下
                    this.parentNode.insertBefore(elm_drag, this.nextSibling);
                }
                this.style.borderTop = '';
                this.style.borderBottom = '';
                this.style.borderRadius = '8px';
            };
        });
    
    return (
        <>
            // 
        </>
    );
}

export default Menu;