import dynamic from "next/dynamic"
import SideNavigation from "@components/Navigation/sideNavigation";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ 'color': [] }, { 'background': [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      {'align':[]},
    ],
    
    ["link", "image", "video","code-block"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};



export default function Home() {
  return (
    <div className="flex px-4 md:px-0  flex-col-reverse md:flex-row lg:flex-row justify-start space-y-0 md:min-h-screen">
      {/* sidenav */}

      <SideNavigation />

      <div className="w-full md:w-2/4 px-2 md:px-4 lg:w-2/4 flex flex-col ">
          <QuillNoSSRWrapper className="h-screen py-4 overflow-y-auto" modules={modules} theme="snow" />
      </div>

      
    </div>
  );
}
