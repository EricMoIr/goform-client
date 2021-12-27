import React from "react";

function FormViewer({
  children,
  isImportant,
}: {
  children: React.ReactNode;
  isImportant?: boolean;
}) {
  return (
    <div className={`form-viewer`}>
      {isImportant && <div className="form-viewer-important"></div>}
      {children}
    </div>
  );
}

export default FormViewer;
