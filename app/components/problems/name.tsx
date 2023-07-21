interface propType {
  children: React.ReactNode;
}

export default function Name(props: propType) {
  const { children } = props;
  return (
    <h2 className="text-xl border-b-2 border-solid py-3 border-gray-200">
      {children}
    </h2>
  );
}
