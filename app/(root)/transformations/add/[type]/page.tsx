import Header from "@/components/shared/Header";
import { SearchParamProps, TransformationTypeKey } from "@/types";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/TransformationForm";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const user = await getUserById(userId);
  const transformation = transformationTypes[type];
  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <TransformationForm
        action="Add"
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
        userId={user._id}
      />
    </>
  );
};

export default AddTransformationTypePage;
