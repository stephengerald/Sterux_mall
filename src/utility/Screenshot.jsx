import html2canvas from "html2canvas";

export async function takeScreenshot(keyword = "screenshot") {
    const element = document.body;
    const canvas = await html2canvas(element);
    const link = document.createElement("a");
    link.download =  `${keyword}.png`;
    link.href = canvas.toDataURL();
    link.click();   
}