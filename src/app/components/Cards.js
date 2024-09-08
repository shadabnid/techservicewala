export const ServiceCard = ({ icon:Icon, heading, para }) => {
    return (
        <div className="bg-[#242529]  rounded-lg py-6 px-4 mt-10">
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <Icon size={50}/>
                    <h1 className="text-[1.3rem] text-center leading-6 mt-6">{heading}</h1>
                </div>
                <div className="text-center">{para}</div>
            </div>
        </div>
    )
}