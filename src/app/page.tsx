import UploaderFour from "@/components/UploaderFour";
import UploaderOne from "@/components/UploaderOne";
import UploaderThree from "@/components/UploaderThree";
import UploaderTwo from "@/components/UploaderTwo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <UploaderOne />
      <UploaderTwo />
      <UploaderThree />
      <UploaderFour />
    </main>
  );
}
