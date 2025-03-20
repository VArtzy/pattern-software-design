import Element from "./element";
import HTMLExport from "./htmlExport";
import Image from "./image";
import JSONExport from "./jsonExport";
import LogExport from "./logExport";
import MarkdownExport from "./markdownExport";
import PDFExport from "./pdfExport";
import Table from "./table";
import Text from "./text";
import XMLExport from "./xmlExport";

const text = new Text("Hallo Dunia! <script>alert('XSS&')</script>")
const image = new Image("gambar.jpg")
const table = new Table([
    ["Nama", "Umur"],
    ["Farrel", "17"],
    ["Eko", "25"]
])

const elements: Element[] = [text, image, table]

const htmlExporter = new HTMLExport("output/export.html")
const xmlExporter = new XMLExport("output/export.xml")
const pdfExporter = new PDFExport("output/export.pdf")
const logExporter = new LogExport("output/export.log")
const jsonExporter = new JSONExport("output/export.json")
const markdownExporter = new MarkdownExport("output/export.md")

/** Visitor pattern memungkinkan element memilih fungsinya sendiri berdasarkan visitor yang diberikan */
for (const element of elements) {
    element.accept(htmlExporter)
    element.accept(xmlExporter)
    element.accept(pdfExporter)
    element.accept(logExporter)
    element.accept(jsonExporter)
    element.accept(markdownExporter)
}
