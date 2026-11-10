import { Home } from "../components/home";
import { homeMetadata } from "../lib/metadata";

export const metadata = homeMetadata("es");

export default function Page() {
  return <Home lang="es" />;
}
