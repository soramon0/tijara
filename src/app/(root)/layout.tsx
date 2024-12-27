import type { PropsWithChildren } from "react";

function BaseLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="wrapper flex-1">{children}</main>
    </div>
  );
}

export default BaseLayout;
