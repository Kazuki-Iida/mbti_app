import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import UpdateProfileImage from './Partials/UpdateProfileImage';
import { Head,Link } from '@inertiajs/react';
import Menu from '../Common/Menu';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (

    <>
            <div className="w-[18%] bg-neutral-100 text-gray-900 p-10 fixed h-screen overflow-scroll border-r border-gray-300">
                <Link href="/"><h1 className="font-bold text-4xl">Pots<span className="text-xs block">animal conn(ll)ection</span></h1></Link>
                <div className="border-t border-gray-300 mt-5">
                    <Link href={route('logout')} method="post" as="button">logout</Link>
                    <Link href="/profile" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src={auth.user.image_path}/>profile</Link>
                    <Link href="/friend/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/hand.png"/>friends</Link>
                    <Link href="/request/index" className="flex font-bold mt-5 items-center ml-5"><img className="w-[35px] mr-5"src="../img/req.png"/>Requests</Link>
                </div>
                <div className="border-t border-gray-300 mt-5">
                    <Menu/>
                </div>
            </div>
            <div id="container" class="flex justify-between w-[82%] ml-[18%]">
                <div className="w-[52%] mt-14">
                    <div className="font-bold pl-10 text-2xl flex"><img className="w-[30px] h-[30px] mr-[20px]"src="/img/human.png"/><p>プロフィール</p></div>
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                            <div className="px-8">
                                <UpdateProfileInformationForm
                                    mustVerifyEmail={mustVerifyEmail}
                                    status={status}
                                    className="max-w-xl"
                                />
                            </div>
        
                            <div className="p-8">
                                <UpdateProfileImage className="max-w-xl" auth={auth}/>
                            </div>
                            
                            <div className="sm:p-8  sm:rounded-lg">
                                <UpdatePasswordForm className="max-w-xl" />
                            </div>
        
                            <div className="p-4 sm:p-8  sm:rounded-lg">
                                <DeleteUserForm className="max-w-xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[39%] relative">
                     <div className="pot w-full h-[50%] bg-gray-900 absolute bottom-[20px] right-[20px]">
                     </div>
                </div>
            </div>
      </>      
    );
}
