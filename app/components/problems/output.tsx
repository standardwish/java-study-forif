interface propType {
  children: React.ReactNode;
}

export default function Output(props: propType) {
  const { children } = props;
  return (
    <>
      <h3 className="text-lg text-gray-500 font-bold border-b-2 border-solid pb-3 border-gray-200">
        출력 결과
      </h3>
      <pre className="text-base overflow-x-scroll border-b-2 border-solid pb-3 border-gray-200 break-normal whitespace-pre">
        {children}
      </pre>
    </>
  );
}
