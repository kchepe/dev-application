interface DataPlaceHolderProps {
  message?: string;
}

const DataPlaceHolder = ({
  message = "No results found.",
}: DataPlaceHolderProps) => {
  return <div className="flex items-center justify-center h-96">{message}</div>;
};

export default DataPlaceHolder;
