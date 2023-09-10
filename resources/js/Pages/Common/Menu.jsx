function Menu( props ) {
    console.log( props );
    const { parent_posts , post } = props;
    console.log(post);
    return (
        <>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/tora.png" className="w-[25px] mr-5"/><p>INTJ</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/hukuro.png"className="w-[25px] mr-5"/><p>INTP</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/lion.png"className="w-[25px] mr-5"/><p>ENTJ</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/oumu.png"className="w-[25px] mr-5"/><p>ENTP</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/kirin.png"className="w-[25px] mr-5"/><p>INFJ</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/usagi.png"className="w-[25px] mr-5"/><p>INFP</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/dog.png"className="w-[25px] mr-5"/><p>ENFJ</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/zou.png"className="w-[25px] mr-5"/><p>ENFP</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/kaba.png"className="w-[25px] mr-5"/><p>ISTJ</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/sika.png"className="w-[25px] mr-5"/><p>ISFJ</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/kuma.png"className="w-[25px] mr-5"/><p>ESTJ</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/uma.png"className="w-[25px] mr-5"/><p>ESFJ</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/cat.png"className="w-[25px] mr-5"/><p>ISTP</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/hituji.png"className="w-[25px] mr-5"/><p>ISFP</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/simauma.png"className="w-[25px] mr-5"/><p>ESTP</p></a></div>
            <div className="mt-5 font-bold text-md w-[100%] p-1"><a href="" className="flex ml-5"><img src="../img/usi.png"className="w-[25px] mr-5"/><p>ESFP</p></a></div>
        </>
    );
}

export default Menu;