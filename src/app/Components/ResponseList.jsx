import ResponseItem from "./ResponseItem";


export default function ResponseList({ loading, error, data, Skeleton }) {
  if (loading) return <Skeleton />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!data || data.length === 0)
    return <p className="text-gray-400 text-center">Ask me anything...</p>;

  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => (
        <ResponseItem key={index} item={item} />
      ))}
    </div>
  );
}
