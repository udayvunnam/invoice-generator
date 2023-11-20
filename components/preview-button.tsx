import { Download, Eye, Printer } from 'lucide-react';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Invoice } from './invoice';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import Preview from './preview';
import { useReactToPrint } from 'react-to-print';

const print = (content: HTMLDivElement) => {
  const printWindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150')!;
  printWindow.document.write(window.document);
  // printWindow.document.write('</head><body >');
  // printWindow.document.write(content.innerHTML);
  // printWindow.document.write('</body></html>');

  printWindow.document.close(); // necessary for IE >= 10
  printWindow.focus(); // necessary for IE >= 10*/

  printWindow.print();
};

const download = async (content: HTMLDivElement) => {
  const canvas = await html2canvas(content);

  const img = canvas.toDataURL('image/png', 0.2);
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: [612, 792],
  });
  pdf.internal.scaleFactor = 0.2;
  const imgProps = pdf.getImageProperties(img);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('invoice-001.pdf');
};

export function PreviewButton() {
  const exportRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => exportRef.current,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Eye className="h-5 w-5 mr-2" />
          Preview Invoice
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invoice Preview</DialogTitle>
          <DialogDescription>Actual PDF that will be downloaded</DialogDescription>
        </DialogHeader>
        <div ref={exportRef} className="py-4">
          <Preview />
        </div>
        <DialogFooter className="flex flex-row justify-end items-center gap-8">
          <Button onClick={handlePrint} variant="outline">
            <Printer className="h-5 w-5 mr-2" /> Print
          </Button>

          <Button type="submit" onClick={() => download(exportRef.current!)}>
            <Download className="h-5 w-5 mr-2" /> Download Invoice PDF
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
