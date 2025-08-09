
const NewsletterBox = () => {
  const onSubmitHandler = (event)=> {
    event.preventDefault();
  }
  return (
    <div className="text-center">
            <p className="text-gray-800 font-medium text-2xl">Subscribe now & get 20% offer</p>
            <p className="mt-3 text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, corrupti.</p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex mx-auto items-center  border my-6 pl-3 gap-3">
            <input type="email" placeholder="Enter Your Email" className="w-full sm:flex-1 outline-none"/>
            <button className="bg-black text-white px-10 py-4 text-xs rounded" type="submit">Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox