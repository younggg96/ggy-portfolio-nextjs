import type { ReactNode } from "react";

export default function ChineseLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="zh-CN" style={{ display: "contents" }}>
      {children}
    </div>
  );
}
