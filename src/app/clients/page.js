import ClientLayout from "src/layouts/client";
import Clients from "src/sections/clients/client-view";

// ----------------------------------------------------------------------

export const metadata = {
  title: "Харилцагчид",
};

export default function ClientsPage() {
  return (
    <ClientLayout>
      <Clients />
    </ClientLayout>
  );
}
