import { PropsWithChildren } from "react";
import Header from "../Header";

interface Props extends PropsWithChildren {}

export default function Layout({ children }: Props) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      {children}
    </main>
  );
}
