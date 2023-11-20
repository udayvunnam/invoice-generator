'use client';

import { Download, Eye, Plus, Trash } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Textarea } from '~/components/ui/textarea';
import { currency_symbols } from '~/lib/currency';
import html2canvas from 'html2canvas';
import JSPDF from 'jspdf';

const currencies = Object.keys(currency_symbols);

const generateInvoice = () => {
  html2canvas(document.querySelector('#invoice')).then((canvas) => {
    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new JSPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: [612, 792],
    });
    pdf.internal.scaleFactor = 1;
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('invoice-001.pdf');
  });
};

export default function Invoice() {
  return (
    <div className="w-full max-w-3xl p-6">
      <div className="grid gap-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Invoice Due: December 13, 2023</h2>
          <h2 className="text-xl font-bold">Invoice #INV001</h2>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Date: November 13, 2023</p>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Biller Information:</h3>
          <p>Your Company</p>
          <p>456 Corporate Blvd, City, State, 67890</p>
          <p>info@yourcompany.com</p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Client Information:</h3>
          <p>John Doe</p>
          <p>123 Main St, City, State, 12345</p>
          <p>johndoe@example.com</p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-medium">Items:</h3>
          <div className="grid gap-2">
            <p>Item 1: 2 x $50.00 = $100.00</p>
            <p>Item 2: 1 x $200.00 = $200.00</p>
            <p>Item 3: 3 x $100.00 = $300.00</p>
          </div>
          <div className="grid gap-2">
            <p>Subtotal: $600.00</p>
            <p>Tax (10%): $60.00</p>
          </div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Total:</h2>
            <h2 className="text-xl font-bold">$660.00</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
