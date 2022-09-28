import { PropsWithChildren } from "react";
import Header from "../Header";

interface Props extends PropsWithChildren {}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-blue1">
      <main className="max-w-[412px] mx-auto bg-white">
        <Header />
        {children}
      </main>
    </div>
  );
}
