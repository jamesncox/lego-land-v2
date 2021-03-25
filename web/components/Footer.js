export default function Footer() {
  return (
    <div className="text-center border-t border-blue-800 mx-5 py-5">
      <p>Made with ❤️‍ by James Cox</p>
      <p>
        {"Copyright © "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
}
