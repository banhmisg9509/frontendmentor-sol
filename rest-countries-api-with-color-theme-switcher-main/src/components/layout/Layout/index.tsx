import { PropsWithChildren } from "react";
import Header from "../Header";

interface Props extends PropsWithChildren {}

export default function Layout({ children }: Props) {
  return (
    <main className="min-h-screen bg-gray2 text-blue1 dark:bg-blue2 dark:text-white">
      <Header />
      {children}
    </main>
  );
}
