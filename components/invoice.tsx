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
import { Separator } from '~/components/ui/separator';
import { Textarea } from '~/components/ui/textarea';

export default function Component() {
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <div className="flex flex-row gap-4 justify-between">
          <div className="space-y-2 ">
            <Label htmlFor="invoice-date">Invoice Date</Label>
            <Input id="invoice-date" type="date" />
          </div>

          <div className="space-y-2 ">
            <Label htmlFor="due-date">Due Date</Label>
            <Input id="due-date" type="date" />
          </div>

          <div className="space-y-2 ">
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

        <div className="grid grid-cols-3 gap-4">
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
        </div>
        <div className="flex items-center space-x-4 my-4">
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          <span className="text-gray-500 dark:text-gray-400">Invoice Items</span>
          <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="items">Items</Label>
          <div className="flex flex-col space-y-4">
            <div className="grid grid-cols-6 gap-4">
              <Input className="col-span-2" placeholder="Description" />
              <Input placeholder="Qty" type="number" />
              <Input placeholder="Unit Price (Currency Symbol)" type="number" />
              <Input placeholder="Total" type="number" />
              <Button className="p-0" variant="ghost">
                <svg
                  className=" h-6 w-6 text-gray-700"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
              </Button>
            </div>
            <Button className="text-gray-500 self-start" variant="outline">
              Add more
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="notes">Extra Notes</Label>
          <div />
        </div>
      </CardContent>
      <div className="flex items-center space-x-4 my-4">
        <hr className="flex-grow border-gray-300 dark:border-gray-600" />
        <span className="text-gray-500 dark:text-gray-400">Invoice Summary</span>
        <hr className="flex-grow border-gray-300 dark:border-gray-600" />
      </div>
      <CardFooter className="flex justify-between items-center">
        <div className="text-lg font-semibold">Total: $0.00</div>
        <Button className="ml-auto">
          <svg
            className=" h-5 w-5 mr-2"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          Download Invoice PDF
        </Button>
      </CardFooter>
    </Card>
  );
}
