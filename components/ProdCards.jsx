const ProdCards = ({ pic, title, price }) => {
    return (
        <div className='polymorph p-3 h-[100%] opacity-80 hover:opacity-100 transition-all ease-in-out duration-150 delay-0 cursor-pointer w-[100%] rounded-2xl flex flex-col justify-around items-center'>
            <img
                src={pic}
                className='p-2 mb-2 border-2 border-dashed rounded-2xl h-[70%] w-[100%] object-cover'
            />
            <h2 className='subheader_text w-auto text-center mb-2'>
                {title}
            </h2>
            <span>${price}</span>
        </div>
    );
};

export default ProdCards;
