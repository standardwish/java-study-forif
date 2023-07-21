interface propType {
  children: React.ReactNode;
}

export default function Description(props: propType) {
  const { children } = props;
  return (
    <>
      <h3 className="text-lg text-gray-500 font-bold border-b-2 border-solid pb-3 border-gray-200">
        문제
      </h3>
      <p className="text-base leading-8 border-b-2 border-solid pb-3 border-gray-200 break-keep">
        {children}
      </p>
    </>
  );
}
