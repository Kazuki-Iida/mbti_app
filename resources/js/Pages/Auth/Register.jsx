import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register(props) {
    console.log(props.mbtis);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        mbti_id:Number ,
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full p-5"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleOnChange}
                        required
                        placeholder = "ユーザー名"
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-10">
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full p-5"
                        autoComplete="username"
                        onChange={handleOnChange}
                        required
                        placeholder = "メールアドレス"
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>


                
                <select type="number" name="mbti_id" onChange={handleOnChange}>
                    {props.mbtis.map((mbti) => (
                        <>
                            <option type="number" value={ mbti.id }>{ mbti.name }</option>
                        </>
                    ))
                    }
                </select>
                
                
                <div className="mt-10">
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full p-5"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                        placeholder = "パスワード"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-10">
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full p-5"
                        autoComplete="new-password"
                        onChange={handleOnChange}
                        required
                        placeholder = "パスワード確認"
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>
                
                

                <div className="mt-10">
                    <PrimaryButton className="" disabled={processing}>
                        登録
                    </PrimaryButton>
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        登録済みの方はこちら
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
