import React from "react";
import { useToast } from "../ui/use-toast";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetError,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

type MediaUploaderProps ={
    onValueChange: (value:string) => void;
    setImage: React.Dispatch<any>;
    publicId:string;
    image:any;
    type:string;
}
const MediaUploader = ({
  onValueChange,
  setImage,
  publicId,
  image,
  type,
}:MediaUploaderProps) => {
  const { toast } = useToast();
  const onUploadSuccessHandler = (results: CloudinaryUploadWidgetResults) => {
    toast({
      title: "Image uploaded successfully",
      description: "1 credit was deducted from your account",
      duration: 5000,
      className: "success-toast",
    });
  };

  const onUploadErrorHandler = (error: CloudinaryUploadWidgetError) => {
    toast({
      title: "Something went wrong while uploading",
      description: "please try again",
      duration: 5000,
      className: "error-toast",
    });
  };

  return (
    <CldUploadWidget
      uploadPreset="fringify"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4">
          <h3 className="h3-bold text-dark-600">Original</h3> 
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
