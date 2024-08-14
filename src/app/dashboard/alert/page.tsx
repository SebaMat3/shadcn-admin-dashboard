import { BicepsFlexed, PointerOff, Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Page() {
  return (
    <div className="grid gap-3">
      <Alert variant="default">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Single command installation!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <PointerOff className="h-4 w-4" color="#d32727"/>
        <AlertTitle>No more blackbox!</AlertTitle>
        <AlertDescription>
           Leverage TailwindCSS to tweak and adapt your core components as you wish! 
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <BicepsFlexed className=" h-4 w-4" color="#16a322" />
        <AlertTitle>Simple, reusable and open source.</AlertTitle>
        <AlertDescription>
          A few basic styling management, accessibility and functionality dependencies and you are ready to go.
        
        </AlertDescription>
      </Alert>

    </div>
  );
}
