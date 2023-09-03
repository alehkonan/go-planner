type Props = {
  message: string;
};

export const ErrorMessage = ({ message }: Props) => {
  return <span className="text-red-500 text-xs">{message}</span>;
};
