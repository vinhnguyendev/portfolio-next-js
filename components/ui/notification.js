export default function Notification(props) {
  const { title, message, status, icon } = props;

  let statusStyling = "hidden";

  if (status === "success") {
    statusStyling = "bg-gradient-to-r from-black text-green-400";
  }

  if (status === "pending") {
    statusStyling = "bg-gradient-to-r from-black";
  }

  if (status === "error") {
    statusStyling = "bg-gradient-to-r from-black text-red-400";
  }

  return (
    <div className={`${statusStyling} flex flex-col fixed bottom-0 left-0 right-0 h-2 justify-center py-8 items-center`}>
        <div className="flex">
        <span className="flex">{icon}</span>
        <span className="text-lg px-2">{title}</span>
        </div>
        <p>{message}</p>
    </div>
  );
}
