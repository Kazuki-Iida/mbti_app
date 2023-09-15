import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-centeritems-center pt-6 sm:pt-0 bg-neutral-100">
            <div className="flex justify-between items-center w-[80%] m-auto"> 
                <div>
                   <p className="text-[250px] leading-10 font-bold">Pots<br/><span className="mt-5block alata text-xs font-bold">ANIMAL CONN(LL)ECTION</span></p>
                    <div className="grid gap-5 grid-cols-8 mt-10">
                        <div><img className="w-[35px]"src="../img/tora.png"/></div>
                        <div><img className="w-[35px]"src="../img/hukuro.png"/></div>
                        <div><img className="w-[35px]"src="../img/lion.png"/></div>
                        <div><img className="w-[35px]"src="../img/oumu.png"/></div>
                        <div><img className="w-[35px]"src="../img/kirin.png"/></div>
                        <div><img className="w-[35px]"src="../img/usagi.png"/></div>
                        <div><img className="w-[35px]"src="../img/dog.png"/></div>
                        <div><img className="w-[35px]"src="../img/zou.png"/></div>
                        <div><img className="w-[35px]"src="../img/kaba.png"/></div>
                        <div><img className="w-[35px]"src="../img/sika.png"/></div>
                        <div><img className="w-[35px]"src="../img/kuma.png"/></div>
                        <div><img className="w-[35px]"src="../img/uma.png"/></div>
                        <div><img className="w-[35px]"src="../img/cat.png"/></div>
                        <div><img className="w-[35px]"src="../img/hituji.png"/></div>
                        <div><img className="w-[35px]"src="../img/simauma.png"/></div>
                        <div><img className="w-[35px]"src="../img/usi.png"/></div>
                    </div>
                </div>
                <div className="w-[40%]">
                    {children}
                </div>
            </div>
        </div>
    );
}
