export default function Notification(props) {
  const { title, message, status } = props;

  let statusStyling = "hidden";

  if (status === "success") {
    statusStyling = "bg-gradient-to-r from-green-600 text-green-400";
  }

  if (status === "pending") {
    statusStyling = "bg-gradient-to-r from-black";
  }

  if (status === "error") {
    statusStyling = "bg-gradient-to-r from-[#f1807e] text-red-400";
  }

  return (
    <div className={`${statusStyling} flex flex-col fixed bottom-0 left-0 right-0 h-2 justify-center py-8 items-center`}>
        <h3>{title}</h3>
        <p>{message}</p>
    </div>
  );
}
