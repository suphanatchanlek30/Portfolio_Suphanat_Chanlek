// components/hero/HeroButton.tsx
interface HeroButtonProps {
  text: string;
}

export default function HeroButton({ text }: HeroButtonProps) {
  // เปลี่ยน path ด้านล่างเป็น path จริงของไฟล์ PDF ที่ต้องการให้ดาวน์โหลด เช่น "/file_cv/CV_Suphanat_Chanlek.pdf"
  const pdfPath = "/file_cv/CV_Suphanat_Chanlek.pdf";
  return (
    <a
      href={pdfPath}
      download
      className="px-4 py-2 bg-white text-black rounded-[8px] hover:bg-gray-200 transition mt-10 inline-block text-center"
    >
      {text}
    </a>
  );
}
