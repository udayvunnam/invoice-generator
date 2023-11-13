import Invoice from '~/components/invoice';
import { Button } from '~/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-50">
      <header className="mx-auto flex items-center justify-between p-6 lg:px-8 w-full">
        <div>
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Invoice Generator</h1>
          <p className="text-sm text-muted-foreground">Just Fill, Click, and Invoice Away!</p>
        </div>

        <Button variant="outline">
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
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Preview Invoice
        </Button>
      </header>

      <Invoice />
    </main>
  );
}
