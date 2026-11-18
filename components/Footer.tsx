export default function Footer() {
  return (
    <footer className="border-t border-hairline pt-8 pb-14 flex flex-wrap gap-x-6 gap-y-3 justify-between text-[0.875rem] text-muted">
      <span>Tomisin Akinfemiwa</span>
      <a href="#top" className="relative after:absolute after:-inset-x-2 after:-inset-y-3 after:content-[''] transition-colors duration-200 ease-out hover:text-ink">
        Back to top ↑
      </a>
    </footer>
  );
}
