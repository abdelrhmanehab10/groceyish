import { UploadDropzone } from "@/lib/utils";
import Image from "next/image";
import { FC, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface UploadImageProps {
  onChange: (imageUrl: string) => void;
}

const UploadImage: FC<UploadImageProps> = ({ onChange }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  return (
    <>
      {imageUrl ? (
        <div className="relative w-fit mx-auto">
          <Image
            width={100}
            height={100}
            className=" rounded"
            src={imageUrl}
            alt="product-image"
          />
          <AiOutlineCloseCircle
            onClick={() => setImageUrl("")}
            className="absolute top-0 -right-5 cursor-pointer"
          />
        </div>
      ) : (
        <UploadDropzone
          endpoint="imageUploader"
          content={{
            label: "قم باضافة صوره للمنتج",
            button: "ابدأ في الرفع",
            allowedContent: "صوره (4 ميجا بايت)",
          }}
          onClientUploadComplete={(res) => {
            if (res) {
              setImageUrl(res[0].url);
              onChange(res[0].url);
            }
          }}
        />
      )}
    </>
  );
};

export default UploadImage;
