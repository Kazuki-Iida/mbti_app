export default function ChatMessages({ messages, userName ,auth}) {
  console.log('messages', messages.user);
  console.log('userName', userName);
  console.log('auth',auth)
  return (
    <>
      <ul className="chat">
        {messages.map((message) => {
          const mes = message.message;

          return (
            <>
            {console.log('message.user',message.user)}
              {message.user.id == auth.id ? (
                <li className="mt-5 mr-0 flex justify-end">
                  <div>
                    <div className="flex items-center">
                      <img src={message.user.image_path} className="mr-5 w-[40px] h-[40px] rounded-md" />
                      <strong className="text-black block">{message.user.name || userName}</strong>
                    </div>
                    <div className="mt-[5px] mb-2 text-black text-md bg-white rounded-md p-5">
                      <p className="p-1 mb-2 rounded">{mes}</p>
                    </div>
                  </div>
                </li>
              ) : (
                <li className="mt-5 mr-0 flex justify-start">
                  <div>
                    <div className="flex items-center">
                      <img src={message.user.image_path} className="mr-5 w-[40px] h-[40px] rounded-md" />
                      <strong className="text-black block">{message.user.name || userName}</strong>
                    </div>
                    <div className="mt-[5px] mb-2 text-black text-md bg-white rounded-md p-5">
                      <p className="p-1 mb-2 rounded">{mes}</p>
                    </div>
                  </div>
                </li>
              )}
            </>
          );
        })}
      </ul>
    </>
  );
}
