import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

function Menu() {
    
    useEffect(() => {
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
        
    },[])
        
    
    return (
        <>
            <div className="drag-list">
                 <div id="item1" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/tora.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>INTJ</p></Link></div>
                 <div id="item2" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/hukuro.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>INTP</p></Link></div>
                 <div id="item3" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/lion.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>ENTJ</p></Link></div>
                 <div id="item4" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/oumu.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>ENTP</p></Link></div>
                 <div id="item5" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/kirin.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>INFJ</p></Link></div>
                 <div id="item6" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/usagi.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>INFP</p></Link></div>
                 <div id="item7" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/dog.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>ENFJ</p></Link></div>
                 <div id="item8" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/zou.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>ENFP</p></Link></div>
                 <div id="item9" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/kaba.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>ISTJ</p></Link></div>
                 <div id="item10" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/sika.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>ISFJ</p></Link></div>
                 <div id="item11" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/kuma.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>ESTJ</p></Link></div>
                 <div id="item12" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/uma.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>ESFJ</p></Link></div>
                 <div id="item13" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/cat.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>ISTP</p></Link></div>
                 <div id="item14" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/hituji.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>ISFP</p></Link></div>
                 <div id="item15" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/simauma.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>ESTP</p></Link></div>
                 <div id="item16" draggable="true" className="mbti-block font-bold text-md px-1 py-3 my-0.5 rounded-lg"><Link href="" className="flex" draggable="false"><div className="drag-icon"><FontAwesomeIcon icon={faGripVertical} size="lg" color="#ddd" /></div><img src="../img/usi.png" className="w-[25px] mr-5 ml-5" draggable="false" /><p>ESFP</p></Link></div>
             </div>
        </>
    );
}

export default Menu;