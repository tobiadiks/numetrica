export default function Footer() {
  return (
    <footer className="bg-black">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Created by{" "}
          <a
            href="https://cstory.com/tobiadiks/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Kage
          </a>
        </li>

        <li>
          <a
            href="https://github.com/tobiadiks"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
