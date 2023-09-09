import { PropsWithChildren } from "react";

type PageProps = PropsWithChildren<{
  header: string;
  headerNote?: string;
}>;

export const Page: React.FC<PageProps> = ({ header, headerNote, children }) => {
  return (
    <div className="w-full flex flex-col overflow-y-scroll m-10 flex-1">
      <div className="flex items-center gap-3 mb-20">
        <h1 className="text-2xl">{header}</h1>
        {headerNote && (
          <>
            <div className="w-0.5 bg-orange-500 h-6" />
            <p className="text-neutral-400">{headerNote}</p>
          </>
        )}
      </div>
      {children}
    </div>
  );
};
