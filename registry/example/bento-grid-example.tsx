import BentoGrid from "../ui/BentoGrid";

export default function BentoGridExample() {
  return (
    <div>
      <BentoGrid
        className="md:col-span-1"
        items={[
          {
            title: "Item 1",
            description:
              "Item 1 is a beautiful and unique item. It has pink grainy gradient.",
            gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
            image:
              "https://images.unsplash.com/photo-1555988776-c3f17e5cb789?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "Item 2",
            description:
              "Item 2 is a beautiful and unique item. It has blue grainy gradient.",
            gradient: "bg-gradient-to-br from-blue-500 to-teal-500",
            image:
              "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            title: "Item 3",
            description:
              "Item 3 is a beautiful and unique item. It has green grainy gradient.",
            gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
            image:
              "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:row-span-2",
          },
          {
            title: "Item 4",
            description:
              "Item 4 is a beautiful and unique item. It has red grainy gradient.",
            gradient: "bg-gradient-to-br from-rose-500 to-red-500",
            image:
              "https://images.unsplash.com/photo-1723599033885-8180ab35791f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            className: "md:col-span-2",
          },
        ]}
      />
    </div>
  );
}
