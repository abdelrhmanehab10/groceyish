import { FC } from "react";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="mx-3">
      <div className="py-10">
        <div className="flex gap-1 items-center">
          <Image width={40} height={40} src="/navbar/logo.png" alt="logo" />
          <div>
            <h3 className="font-bold text-emerald-500">مكانك</h3>
            <p className="text-xs">للخضراوات</p>
          </div>
        </div>
        <ul className="my-2 text-xs flex flex-col gap-3">
          <li>العنوان: شارع نورالدين / الرجبي / المحله</li>
          <li>كلمنا: 01090883652</li>
          <li>البريد الالكتروني: mkank@gmail.com</li>
          <li>ساعات العمل: من 8 صباحا الي 10 مساءا</li>
        </ul>
      </div>
      <div className="text-xs flex items-center justify-between">
        <p>كل الحقوق محفوظه</p>
        <div className="text-emerald-500 flex gap-3">
          <AiFillFacebook className="w-5 h-5 cursor-pointer transition-all hover:text-emerald-500/90" />
          <AiFillLinkedin className="w-5 h-5 cursor-pointer transition-all hover:text-emerald-500/90" />
          <AiFillInstagram className="w-5 h-5 cursor-pointer transition-all hover:text-emerald-500/90" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
