export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} ParoxClone. All rights reserved.</div>
        <div className="text-sm">
          Designed for learning purpose. <a className="underline" href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
