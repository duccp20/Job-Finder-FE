import { useCallback, useEffect, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Loading from "../../components/Loading";

// import "./Sample.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

const resizeObserverOptions = {};

const maxWidth = 800;

export default function PDF(props) {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState();
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();

  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onFileChange(event) {
    const { files } = event.target;

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  }

  const closeModal = () => {
    if (props.onClose) props.onClose();
  };

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  const loadingMessage = <div className="text-center">Đang tải CV...</div>;
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.5)] p-4">
      <div className="relative max-h-[80vh] w-[60%] overflow-auto bg-white p-4">
        <button
          onClick={closeModal}
          className="absolute right-2 top-2 text-2xl font-bold text-black"
        >
          ×
        </button>
        <div className="mx-auto w-[800px]" ref={setContainerRef}>
          <Document
            file={props.file}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={loadingMessage}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={
                  containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
                }
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
