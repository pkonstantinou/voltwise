import { PropsWithChildren } from "react";

type PageProps = PropsWithChildren<{
  header: string;
  widget?: React.ReactNode;
}>;

export const Page: React.FC<PageProps> = ({ header, widget, children }) => {
  return (
    <div className="w-full flex flex-col overflow-y-auto m-10 flex-1">
      <div className="flex mb-12 gap-4 items-start">
        <div className="flex gap-4 items-end">
          <h1 className="text-2xl">{header}</h1>
          {!!widget && <div className="w-0.5 bg-neutral-500 h-6" />}
        </div>
        {!!widget && widget}
      </div>
      {children}
    </div>
  );
};
