
export default function CHatBlock({ imgSrc, name, surname, className }: { imgSrc: string, name: string, surname: string, className?: string }) {
    return (
        <div className={className}>
            <img src={imgSrc} className="w-[43px] 600px:w-[23px] 600px:h-[23px] 1440px:w-[33px] 1440px:h-[33px] h-[43px]" />
            <div className="flex flex-col gap-[4px] 1440px:gap-[1px] ml-[12px] mr-[27px] 1440px:ml-[8px] 1440px:mr-[17px]">
                <p className="text-[#3C5864] font-monrope font-[700] text-[16px] 600px:text-[10px] 600px:leading-[10px] 1440px:text-[14px] 1440px:leading-[18px] leading-[21px]">{name}</p>
                <p className="text-[#B9C3C7] font-monrope font-[700] text-[12px] 600px:text-[8px] 600px:leading-[10px] 1440px:text-[10px] leading-[16px]">{surname}</p>
            </div>
            <svg width="65" height="15" className="600px:w-[40px]" viewBox="0 0 65 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.898438 6.28418C0.898438 5.18986 1.78556 4.30273 2.87988 4.30273C3.9742 4.30273 4.86133 5.18986 4.86133 6.28418V8.26465C4.86133 9.35897 3.9742 10.2461 2.87988 10.2461C1.78556 10.2461 0.898438 9.35897 0.898438 8.26465V6.28418Z" fill="black" />
                <path d="M12.8594 2.39063C12.8594 1.2963 13.7465 0.40918 14.8408 0.40918C15.9351 0.40918 16.8223 1.2963 16.8223 2.39062V12.1582C16.8223 13.2525 15.9351 14.1396 14.8408 14.1396C13.7465 14.1396 12.8594 13.2525 12.8594 12.1582V2.39063Z" fill="black" />
                <path d="M24.8242 6.28418C24.8242 5.18986 25.7113 4.30273 26.8057 4.30273C27.9 4.30273 28.7871 5.18986 28.7871 6.28418V8.26465C28.7871 9.35897 27.9 10.2461 26.8057 10.2461C25.7113 10.2461 24.8242 9.35897 24.8242 8.26465V6.28418Z" fill="black" />
                <path d="M36.7891 6.28418C36.7891 5.18986 37.6762 4.30273 38.7705 4.30273C39.8648 4.30273 40.752 5.18986 40.752 6.28418V8.26465C40.752 9.35897 39.8648 10.2461 38.7705 10.2461C37.6762 10.2461 36.7891 9.35897 36.7891 8.26465V6.28418Z" fill="black" />
                <path d="M48.75 4.98828C48.75 3.89396 49.6371 3.00684 50.7314 3.00684C51.8258 3.00684 52.7129 3.89396 52.7129 4.98828V9.56055C52.7129 10.6549 51.8258 11.542 50.7314 11.542C49.6371 11.542 48.75 10.6549 48.75 9.56055V4.98828Z" fill="black" />
                <path d="M60.7109 6.96777C60.7109 5.87345 61.5981 4.98633 62.6924 4.98633C63.7867 4.98633 64.6738 5.87345 64.6738 6.96777V7.58105C64.6738 8.67538 63.7867 9.5625 62.6924 9.5625C61.5981 9.5625 60.7109 8.67538 60.7109 7.58105V6.96777Z" fill="black" />
            </svg>
            <button className="w-[32px] 600px:w-[22px] 600px:h-[22px] h-[32px] bg-[#FF4800] rounded-[50%] flex items-center justify-center ml-[25px] 1440px:ml-[18px]">
                <svg width="12" height="13" className="600px:w-[35%]" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.875 2.37904C0.875 1.20401 1.82755 0.251465 3.00258 0.251465C4.17761 0.251465 5.13016 1.20401 5.13016 2.37904V10.5339C5.13016 11.709 4.17761 12.6615 3.00258 12.6615C1.82755 12.6615 0.875 11.709 0.875 10.5339V2.37904Z" fill="white" />
                    <path d="M7.59766 2.37906C7.59766 1.20402 8.55021 0.251465 9.72525 0.251465C10.9003 0.251465 11.8528 1.20402 11.8528 2.37906V10.5339C11.8528 11.7089 10.9003 12.6615 9.72525 12.6615C8.55021 12.6615 7.59766 11.7089 7.59766 10.5339V2.37906Z" fill="white" />
                </svg>
            </button>
        </div >
    )
}