import { PropsWithChildren } from "react";
import { Loader2 } from "lucide-react";
import {
  Button as ShadButton,
  ButtonProps as ShadButtonProps,
} from "@/components/ui/button";

type ButtonProps = PropsWithChildren<
  {
    loading?: boolean;
  } & ShadButtonProps
>;

export const Button: React.FC<ButtonProps> = (props) => {
  const { loading = false, children } = props;

  return (
    <ShadButton {...props} disabled={loading}>
      {loading ? <Loader2 size={20} className="animate-spin" /> : children}
    </ShadButton>
  );
};
