import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Props = {
  error: string;
};

export const ErrorMessage = ({ error }: Props) => {
  return (
    <Alert>
      <AlertTitle>Erro!</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};
