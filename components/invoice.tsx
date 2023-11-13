/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nLq26xe1qDD
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { Plus, Trash, Download, Eye } from 'lucide-react';

export default function Invoice() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(900px,_1fr)_320px] gap-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="invoice-date">Invoice Date</Label>
              <Input id="invoice-date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="due-date">Due Date</Label>
              <Input id="due-date" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="invoice-number">Invoice Number</Label>
              <Input id="invoice-number" placeholder="Enter invoice number" type="number" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-10">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>Client Details</div>
              <div className="space-y-2">
                <Label htmlFor="client-name">Client Name</Label>
                <Input id="client-name" placeholder="Enter client's name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-email">Client Email</Label>
                <Input id="client-email" placeholder="Enter client's email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bill-to">Bill To Address</Label>
                <Textarea id="bill-to" placeholder="Enter Client Address" />
              </div>
            </div>
            <div className="space-y-4">
              <div>Biller Details</div>
              <div className="space-y-2">
                <Label htmlFor="bill-from">Bill From Name</Label>
                <Input id="bill-from" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="biller-email">Biller Email</Label>
                <Input id="biller-email" placeholder="Enter your email" type="email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="biller-address">Biller Address</Label>
                <Textarea id="biller-address" placeholder="Enter Client Address" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="items">Items</Label>
            <div className="flex flex-col space-y-4">
              <div className="grid grid-cols-6 gap-2">
                <Input className="col-span-2" placeholder="Description" />
                <Input placeholder="Qty" type="number" />
                <Input placeholder="Unit Price (Currency Symbol)" type="number" />
                <Input placeholder="Total" type="number" />
                <div className="flex justify-end gap-2">
                  <Button className=" text-gray-500" variant="ghost" size="icon">
                    <Plus className="h-5 w-5" />
                  </Button>

                  <Button className=" text-gray-500" variant="ghost" size="icon">
                    <Trash className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" />
          </div>
        </CardContent>

        <CardFooter className="flex justify-end items-center">
          <div className="text-lg font-semibold">Total: $0.00</div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Input id="currency" placeholder="Enter currency" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tax-rate">Tax Rate (%)</Label>
              <Input id="tax-rate" placeholder="Enter tax rate" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="discount">Discount (%)</Label>
              <Input id="discount" placeholder="Enter discount" type="number" />
            </div>

            <Button className="mt-8">
              <Download className="h-5 w-5 mr-2" />
              Download Invoice PDF
            </Button>

            <Button variant="outline">
              <Eye className="h-5 w-5 mr-2" />
              Preview Invoice
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
