import Invoice from '~/components/invoice';
import { Button } from '~/components/ui/button';
import { Eye } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-50">
      <header className="mx-auto flex items-center justify-between p-6 lg:px-8 w-full">
        <div>
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Invoice Generator</h1>
          <p className="text-sm text-muted-foreground">Just Fill, Click, and Invoice Away!</p>
        </div>
      </header>

      <Invoice />
    </main>
  );
}
