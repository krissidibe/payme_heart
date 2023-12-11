"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  BlobProvider,
  ReactPDF
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    height: "100%",
    width: "100%",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    gap: 20,
  },
});

// Create Document Component
const MyDocument = ( ) => (
  <Document onRender={()=>{
    
  }}>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section # 1</Text> 
        <Text>Section # 3</Text>
        <Text>Section # 2</Text>
       
      </View>
    </Page>
  </Document>
);


 
function Pdfrenderer( ) {
  const [isLoad, setIsLoad] = useState(false);
  const [url, seturl] = useState(false);
const blobRef = useRef(null)
  useEffect(() => {
    setIsLoad(true);

    const element = blobRef.current;
   
    if (isLoad == false) {
      return;
    } 
 
    return () => {};
  }, []);
 
 
  return (
     <MyDocument   />
  );
}
 

export default Pdfrenderer;

/* 

<div className="flex w-full h-full">
   <PDFViewer width="100%" height="100%">
       
      </PDFViewer>  

      

    </div>

{isLoad && (
  <div ref={blobRef}>
<PDFDownloadLink
  
  fileName="meepdf.pdf"
  className="max-h-40 w-100"
  document={ <MyDocument datas={datas} />}
>
  {({ blob, url, loading, error }) =>
    loading ? "Loading document..." : `Telecharger ${url} `
  }
</PDFDownloadLink>
  </div>
 
)} */