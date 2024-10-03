import Image from "next/image";

export default function Home() {
  const Instagram = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props} color={"currentColor"} fill={"none"}>
      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const Facebook = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props} color={"currentColor"} fill={"none"}>
      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const WhatsApp = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props} color={"currentColor"} fill={"none"}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
  return (
    <main className="flex flex-col w-full h-screen overflow-hidden relative bg-black/50 backdrop-blur-md">
      <div className="w-full max-w-screen-sm min-h-screen mx-auto bg-white text-black z-[1] relative">
        <Image
          className="w-full h-auto object-cover object-center"
          src="/img/dr-miguel.jpg"
          alt="DR Miguel Marin"
          width={1920}
          height={1080}
          priority
          unoptimized
        />
        <Image
          className="w-full h-auto object-cover object-center rotate-180"
          src="/img/dr-miguel.jpg"
          alt="DR Miguel Marin"
          width={1920}
          height={1080}
          priority
          unoptimized
        />
        <div className="w-full h-[50vh] flex flex-col justify-center items-center gap-2 bg-[#D9D9D9]/10 backdrop-blur-xl absolute bottom-0">
          <Image
            className="w-20 h-auto object-cover object-center rounded-full absolute -top-10"
            src="/img/profile.jpg"
            alt="Foto profile"
            width={200}
            height={200}
            priority
            unoptimized
          />
          <p className="font-[200] text-white"><b className="text-white font-bold">14.1 k</b> Follower</p>
          <h1 className="text-4xl text-white">Dr. Miguel Marín</h1>
          <div className="flex flex-wrap gap-2 items-center w-full justify-center">
            <a href="https://www.instagram.com/drmiguelmarin?igsh=M2xibWJmejRidDc2&utm_source=qr&fbclid=PAZXh0bgNhZW0CMTEAAaamkqA0DbSHjISk-f7q2_a_d3ZgBA-6nHCqxQqsl1PqdXlr4DFfCisbCz0_aem_Mj_evWvXb8zCUFuLeWYuYw" target="_blank" className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-white">
              <Instagram className="text-white w-4 h-auto" />
              @drmiguelmarin
            </a>
            <a href="https://www.facebook.com/miguel.marindelvalle" target="_blank" className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-white">
              <Facebook className="text-white w-4 h-auto" />
              Miguel Marín
            </a>
            <a href="https://api.whatsapp.com/send?phone=2711808338" target="_blank" className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-white">
              <WhatsApp className="text-white w-4 h-auto" />
              2711808338
            </a>
          </div>
        </div>
      </div>
      <Image
        className="w-screen h-auto absolute inset-0 -z-[1] object-fill"
        src="/img/dr-miguel.jpg"
        alt="DR Miguel Marin"
        width={1920}
        height={1080}
        priority
        unoptimized
      />
    </main>
  );
}
